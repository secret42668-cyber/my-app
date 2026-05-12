const STORAGE_KEY = "teacher-feedback-prototype";
const BACKEND_CONFIG = window.FEEDBACK_APP_CONFIG || {};

function defaultClassContext() {
  return {
    className: "",
    schoolStage: "國中",
    subjectArea: "語文／閱讀／寫作",
    courseTopic: "",
    courseGoals: "",
    courseFileName: "",
    teacherTone: "溫暖直接",
    variationLevel: "自然",
    teacherPhrases: "",
    teacherSamples: "",
    voiceAnalysis: null,
    wordMin: 50,
    wordMax: 150,
    outputMode: "feedback",
    specificityMode: "提醒",
    customPrompt: ""
  };
}

const state = {
  step: 1,
  activeCourseId: crypto.randomUUID(),
  courses: [],
  activeStudentId: null,
  classContext: defaultClassContext(),
  students: []
};

const screens = [...document.querySelectorAll(".screen")];
const steps = [...document.querySelectorAll(".step")];
const screenTitle = document.querySelector("#screenTitle");
const summaryTitle = document.querySelector("#summaryTitle");
const summaryMeta = document.querySelector("#summaryMeta");
const courseList = document.querySelector("#courseList");
const syncStatus = document.querySelector("#syncStatus");
const authPanel = document.querySelector("#authPanel");
const authTitle = document.querySelector("#authTitle");
const authDescription = document.querySelector("#authDescription");
const authForm = document.querySelector("#authForm");
const authEmail = document.querySelector("#authEmail");
const authPassword = document.querySelector("#authPassword");
const signInButton = document.querySelector("#signInButton");
const signUpButton = document.querySelector("#signUpButton");
const signOutButton = document.querySelector("#signOutButton");
const toast = document.querySelector("#toast");

const backend = {
  client: null,
  enabled: false,
  user: null,
  saveTimer: null,
  loadingRemote: false
};

const titles = {
  1: "建立課程脈絡",
  2: "記錄學生觀察",
  3: "檢視第一版回饋",
  4: "精修回饋文字"
};

const directionLabels = ["肯定亮點", "激勵前進", "具體改進", "穩定節奏", "完成任務", "建立自信"];
const positiveTraitLabels = ["主動積極", "穩定踏實", "有創意", "願意試誤", "表達清楚", "小組貢獻", "作品完整", "思考深入"];
const growthTraitLabels = ["需要暖身", "容易分心", "害怕犯錯", "作業待補", "完成度不足", "表達待整理", "基礎待補", "合作待練習"];

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) {
    ensureCourseStore();
    return;
  }
  try {
    const parsed = JSON.parse(saved);
    state.courses = Array.isArray(parsed.courses) ? parsed.courses.map(normalizeCourse) : [];
    state.activeCourseId = parsed.activeCourseId || state.courses[0]?.id || state.activeCourseId;
    Object.assign(state.classContext, parsed.classContext || {});
    state.students = Array.isArray(parsed.students) ? parsed.students.map(normalizeStudent) : [];
    state.step = parsed.step || 1;
    state.activeStudentId = parsed.activeStudentId || state.students[0]?.id || null;
    if (!state.courses.length) {
      state.courses = [currentCourseSnapshot(state.activeCourseId)];
    } else {
      const active = state.courses.find((course) => course.id === state.activeCourseId) || state.courses[0];
      state.activeCourseId = active.id;
      state.classContext = { ...defaultClassContext(), ...(active.classContext || {}) };
      state.students = Array.isArray(active.students) ? active.students.map(normalizeStudent) : [];
      state.activeStudentId = state.students[0]?.id || null;
    }
    ensureCourseStore();
  } catch {
    ensureCourseStore();
    showToast("先前資料讀取失敗，已使用空白狀態。");
  }
}

function saveState(silent = false) {
  syncActiveCourseSnapshot();
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  queueCloudSave();
  if (!silent) showToast("已儲存目前資料");
}

function ensureCourseStore() {
  if (!state.courses.length) state.courses = [currentCourseSnapshot(state.activeCourseId)];
  if (!state.activeCourseId) state.activeCourseId = state.courses[0].id;
}

function currentCourseSnapshot(id = state.activeCourseId) {
  return {
    id,
    title: courseTitle(state.classContext),
    classContext: clone(state.classContext),
    students: clone(state.students.map(normalizeStudent)),
    updatedAt: new Date().toISOString()
  };
}

function syncActiveCourseSnapshot() {
  ensureCourseStore();
  const index = state.courses.findIndex((course) => course.id === state.activeCourseId);
  const snapshot = currentCourseSnapshot();
  if (index >= 0) state.courses[index] = snapshot;
  else state.courses.push(snapshot);
  renderCourseMenu();
}

function normalizeCourse(course) {
  return {
    id: course.id || crypto.randomUUID(),
    title: course.title || courseTitle(course.classContext || {}),
    classContext: { ...defaultClassContext(), ...(course.classContext || {}) },
    students: Array.isArray(course.students) ? course.students.map(normalizeStudent) : [],
    updatedAt: course.updatedAt || new Date().toISOString()
  };
}

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function courseTitle(context = state.classContext) {
  return context.courseTopic || context.className || "未命名課程";
}

function workspacePayload() {
  syncActiveCourseSnapshot();
  return {
    schemaVersion: 1,
    activeCourseId: state.activeCourseId,
    courses: state.courses,
    step: state.step,
    activeStudentId: state.activeStudentId
  };
}

function applyWorkspacePayload(payload) {
  if (!payload) return;
  state.courses = Array.isArray(payload.courses) ? payload.courses.map(normalizeCourse) : [];
  state.activeCourseId = payload.activeCourseId || state.courses[0]?.id || state.activeCourseId;
  state.step = payload.step || 1;
  const active = state.courses.find((course) => course.id === state.activeCourseId) || state.courses[0];
  if (active) {
    state.activeCourseId = active.id;
    state.classContext = { ...defaultClassContext(), ...(active.classContext || {}) };
    state.students = Array.isArray(active.students) ? active.students.map(normalizeStudent) : [];
  } else {
    state.classContext = defaultClassContext();
    state.students = [];
  }
  state.activeStudentId = payload.activeStudentId || state.students[0]?.id || null;
  ensureCourseStore();
}

function backendConfigured() {
  return Boolean(BACKEND_CONFIG.supabaseUrl && BACKEND_CONFIG.supabaseAnonKey && window.supabase?.createClient);
}

async function initBackend() {
  if (!backendConfigured()) {
    renderAuthState("local");
    return;
  }
  backend.enabled = true;
  backend.client = window.supabase.createClient(BACKEND_CONFIG.supabaseUrl, BACKEND_CONFIG.supabaseAnonKey);
  const { data } = await backend.client.auth.getSession();
  backend.user = data.session?.user || null;
  backend.client.auth.onAuthStateChange(async (_event, session) => {
    backend.user = session?.user || null;
    renderAuthState();
    if (backend.user) await loadCloudWorkspace();
  });
  renderAuthState();
  if (backend.user) await loadCloudWorkspace();
}

function renderAuthState(mode) {
  if (!authPanel) return;
  if (mode === "local" || !backend.enabled) {
    authTitle.textContent = "目前使用本機模式";
    authDescription.textContent = "尚未設定 Supabase 後台；資料會保存在這台裝置的瀏覽器，也可以用 JSON 匯出備份。";
    syncStatus.textContent = "本機模式";
    authForm.classList.remove("is-signed-in");
    authEmail.disabled = true;
    authPassword.disabled = true;
    signInButton.disabled = true;
    signUpButton.disabled = true;
    signOutButton.hidden = true;
    return;
  }

  authEmail.disabled = false;
  authPassword.disabled = false;
  signInButton.disabled = false;
  signUpButton.disabled = false;
  signOutButton.hidden = !backend.user;
  authEmail.hidden = Boolean(backend.user);
  authPassword.hidden = Boolean(backend.user);
  signInButton.hidden = Boolean(backend.user);
  signUpButton.hidden = Boolean(backend.user);
  authForm.classList.toggle("is-signed-in", Boolean(backend.user));

  if (backend.user) {
    authTitle.textContent = `已登入：${backend.user.email}`;
    authDescription.textContent = "課程、學生觀察與質性回饋會同步到雲端後台，換裝置登入也能接續。";
    syncStatus.textContent = "雲端已連線";
  } else {
    authTitle.textContent = "登入正式版後台";
    authDescription.textContent = "登入後，這位老師的課程與學生回饋會跟著帳號保存。";
    syncStatus.textContent = "尚未登入";
  }
}

async function signIn() {
  if (!backend.client) return;
  const email = authEmail.value.trim();
  const password = authPassword.value;
  if (!email || !password) {
    showToast("請輸入 Email 與密碼");
    return;
  }
  const { error } = await backend.client.auth.signInWithPassword({ email, password });
  if (error) showToast(error.message);
  else showToast("已登入");
}

async function signUp() {
  if (!backend.client) return;
  const email = authEmail.value.trim();
  const password = authPassword.value;
  if (!email || !password) {
    showToast("請輸入 Email 與密碼");
    return;
  }
  const { error } = await backend.client.auth.signUp({ email, password });
  if (error) showToast(error.message);
  else showToast("已註冊，請依 Supabase 設定確認信箱或直接登入");
}

async function signOut() {
  if (!backend.client) return;
  await backend.client.auth.signOut();
  backend.user = null;
  renderAuthState();
  showToast("已登出");
}

function queueCloudSave() {
  if (!backend.enabled || !backend.user || backend.loadingRemote) return;
  syncStatus.textContent = "雲端同步中";
  window.clearTimeout(backend.saveTimer);
  backend.saveTimer = window.setTimeout(saveCloudWorkspace, 700);
}

async function saveCloudWorkspace() {
  if (!backend.client || !backend.user) return;
  const { error } = await backend.client
    .from("teacher_workspaces")
    .upsert({
      user_id: backend.user.id,
      data: workspacePayload(),
      updated_at: new Date().toISOString()
    });
  if (error) {
    syncStatus.textContent = "雲端同步失敗";
    showToast(`雲端同步失敗：${error.message}`);
    return;
  }
  syncStatus.textContent = "雲端已同步";
}

async function loadCloudWorkspace() {
  if (!backend.client || !backend.user) return;
  backend.loadingRemote = true;
  syncStatus.textContent = "讀取雲端";
  const { data, error } = await backend.client
    .from("teacher_workspaces")
    .select("data")
    .eq("user_id", backend.user.id)
    .maybeSingle();
  if (error) {
    backend.loadingRemote = false;
    syncStatus.textContent = "讀取失敗";
    showToast(`讀取雲端失敗：${error.message}`);
    return;
  }
  if (data?.data?.courses?.length) {
    applyWorkspacePayload(data.data);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    fillContextForm();
    renderCourseMenu();
    goStep(state.step);
    showToast("已載入雲端資料");
  } else {
    await saveCloudWorkspace();
  }
  backend.loadingRemote = false;
  syncStatus.textContent = "雲端已同步";
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function goStep(step) {
  state.step = Number(step);
  screens.forEach((screen) => screen.classList.toggle("is-visible", screen.dataset.screen === String(state.step)));
  steps.forEach((button) => button.classList.toggle("is-active", button.dataset.step === String(state.step)));
  screenTitle.textContent = titles[state.step];
  if (state.step === 2) renderStudents();
  if (state.step === 3) renderDrafts();
  if (state.step === 4) renderRefine();
  saveState(true);
}

function syncContextFromForm() {
  state.classContext.className = document.querySelector("#className").value.trim();
  state.classContext.schoolStage = document.querySelector("#schoolStage").value;
  state.classContext.subjectArea = document.querySelector("#subjectArea").value;
  state.classContext.courseTopic = document.querySelector("#courseTopic").value.trim();
  state.classContext.courseGoals = document.querySelector("#courseGoals").value.trim();
  state.classContext.teacherTone = document.querySelector("#teacherTone").value;
  state.classContext.variationLevel = document.querySelector("#variationLevel").value;
  state.classContext.teacherPhrases = document.querySelector("#teacherPhrases").value.trim();
  state.classContext.teacherSamples = document.querySelector("#teacherSamples").value.trim();
  const wordMin = Number(document.querySelector("#wordMin").value) || 50;
  const wordMax = Number(document.querySelector("#wordMax").value) || 150;
  state.classContext.wordMin = Math.min(wordMin, wordMax);
  state.classContext.wordMax = Math.max(wordMin, wordMax);
  state.classContext.outputMode = document.querySelector("#outputMode").value;
  state.classContext.specificityMode = document.querySelector("#specificityMode").value;
  state.classContext.customPrompt = document.querySelector("#customPrompt").value.trim();
  const file = document.querySelector("#courseFile").files[0];
  if (file) state.classContext.courseFileName = file.name;
  updateSummary();
}

function fillContextForm() {
  document.querySelector("#className").value = state.classContext.className;
  document.querySelector("#schoolStage").value = state.classContext.schoolStage;
  document.querySelector("#subjectArea").value = state.classContext.subjectArea;
  document.querySelector("#courseTopic").value = state.classContext.courseTopic;
  document.querySelector("#courseGoals").value = state.classContext.courseGoals;
  document.querySelector("#teacherTone").value = state.classContext.teacherTone || "溫暖直接";
  document.querySelector("#variationLevel").value = state.classContext.variationLevel || "自然";
  document.querySelector("#teacherPhrases").value = state.classContext.teacherPhrases || "";
  document.querySelector("#teacherSamples").value = state.classContext.teacherSamples || "";
  renderVoiceAnalysis();
  document.querySelector("#wordMin").value = state.classContext.wordMin || 50;
  document.querySelector("#wordMax").value = state.classContext.wordMax || 150;
  document.querySelector("#outputMode").value = state.classContext.outputMode || "feedback";
  document.querySelector("#specificityMode").value = state.classContext.specificityMode || "提醒";
  document.querySelector("#customPrompt").value = state.classContext.customPrompt || "";
  document.querySelector("#rosterInput").value = state.students.map((student) => student.name).join("\n");
  updateSummary();
}

function updateSummary() {
  const { className, schoolStage, subjectArea, courseTopic, courseFileName, teacherTone, outputMode } = state.classContext;
  summaryTitle.textContent = className || "尚未設定";
  const modeLabel = outputMode === "prompt" ? "提示詞模式" : "評語模式";
  const parts = [schoolStage, subjectArea, courseTopic, teacherTone, modeLabel, courseFileName && `已放入：${courseFileName}`].filter(Boolean);
  summaryMeta.textContent = parts.length ? parts.join("｜") : "完成第一步後會顯示課程資訊";
  renderCourseMenu();
}

function renderCourseMenu() {
  if (!courseList) return;
  ensureCourseStore();
  courseList.innerHTML = state.courses.map((course) => {
    const meta = [
      course.classContext?.className || "未設定班級",
      `${course.students?.length || 0} 位學生`
    ].join("｜");
    return `
      <button class="course-item ${course.id === state.activeCourseId ? "is-active" : ""}" data-course-id="${course.id}">
        <strong>${escapeHtml(course.title || "未命名課程")}</strong>
        <small>${escapeHtml(meta)}</small>
      </button>
    `;
  }).join("");
}

function switchCourse(id) {
  syncContextFromForm();
  updateStudentsFromDom();
  syncTableFeedbackFromDom();
  syncActiveCourseSnapshot();
  const course = state.courses.find((item) => item.id === id);
  if (!course) return;
  state.activeCourseId = course.id;
  state.classContext = { ...defaultClassContext(), ...(course.classContext || {}) };
  state.students = Array.isArray(course.students) ? course.students.map(normalizeStudent) : [];
  state.activeStudentId = state.students[0]?.id || null;
  fillContextForm();
  renderCourseMenu();
  goStep(1);
  showToast(`已切換到「${course.title || "未命名課程"}」`);
}

function createNewCourse() {
  syncContextFromForm();
  updateStudentsFromDom();
  syncTableFeedbackFromDom();
  syncActiveCourseSnapshot();
  const id = crypto.randomUUID();
  const course = {
    id,
    title: "未命名課程",
    classContext: defaultClassContext(),
    students: [],
    updatedAt: new Date().toISOString()
  };
  state.courses.push(course);
  state.activeCourseId = id;
  state.classContext = { ...defaultClassContext() };
  state.students = [];
  state.activeStudentId = null;
  fillContextForm();
  renderCourseMenu();
  goStep(1);
  showToast("已新增一門課");
}

function parseRoster(text) {
  return text
    .split(/[\n,，、]+/)
    .map((name) => name.trim())
    .filter(Boolean);
}

function createStudent(name) {
  return {
    id: crypto.randomUUID(),
    name,
    memory: "",
    evidence: "",
    traits: [],
    goalTags: [],
    directions: ["肯定亮點", "具體改進"],
    draft: "",
    regenerateCount: 0
  };
}

function buildRoster() {
  syncContextFromForm();
  const names = parseRoster(document.querySelector("#rosterInput").value);
  if (!state.classContext.className || !state.classContext.courseTopic) {
    showToast("請先填班級名稱與課程主題");
    return;
  }
  if (!names.length) {
    showToast("請至少輸入一位學生");
    return;
  }

  const byName = new Map(state.students.map((student) => [student.name, student]));
  state.students = names.map((name) => byName.get(name) || createStudent(name));
  state.activeStudentId = state.students[0]?.id || null;
  saveState(true);
  goStep(2);
}

function toggleValue(list, value) {
  return list.includes(value) ? list.filter((item) => item !== value) : [...list, value];
}

function renderStudents() {
  const keyword = document.querySelector("#studentSearch").value.trim();
  const host = document.querySelector("#studentList");
  const visibleStudents = state.students.filter((student) => !keyword || student.name.includes(keyword));
  const goalTags = deriveGoalTags();

  host.innerHTML = visibleStudents.map((student) => `
    <article class="student-card" data-id="${student.id}">
      <header>
        <h4>${escapeHtml(student.name)}</h4>
        <button class="mini-button" data-remove-student="${student.id}">移除</button>
      </header>
      <div class="student-fields">
        <label>
          <span>簡單記憶、事件或狀態</span>
          <textarea data-field="memory" rows="5" placeholder="例：前半學期主動提問，線上後發言變少；最後作品有創意但進度慢。">${escapeHtml(student.memory)}</textarea>
        </label>
        <div>
          <label>
            <span>具體依據或作業狀況</span>
            <textarea data-field="evidence" rows="5" placeholder="例：預讀穩定、作業遲交、報告完整、願意修正。">${escapeHtml(student.evidence)}</textarea>
          </label>
        </div>
      </div>
      <div class="student-fields">
        <div>
          <span class="field-label">特質庫</span>
          <div class="trait-bank">
            <section>
              <span class="field-label">正向特質與表現</span>
              <div class="chip-group">
                ${positiveTraitLabels.map((label) => chip(label, student.traits.includes(label), "trait")).join("")}
              </div>
            </section>
            <section>
              <span class="field-label">待加強特質與表現</span>
              <div class="chip-group">
                ${growthTraitLabels.map((label) => chip(label, student.traits.includes(label), "trait")).join("")}
              </div>
            </section>
          </div>
        </div>
        <div>
          <span class="field-label">回饋方向</span>
          <div class="chip-group">
            ${directionLabels.map((label) => chip(label, student.directions.includes(label), "direction")).join("")}
          </div>
          <div class="goal-suggestion-bank">
            <span class="field-label">依課程目標建議</span>
            <div class="chip-group">
              ${goalTags.map((label) => chip(label, student.goalTags.includes(label), "goalTag")).join("")}
            </div>
          </div>
        </div>
      </div>
    </article>
  `).join("");
}

function deriveGoalTags() {
  const contextText = `${state.classContext.courseTopic} ${state.classContext.courseGoals} ${state.classContext.subjectArea}`;
  const banks = [
    { keys: ["發表", "簡報", "報告", "上台"], tags: ["發表清楚", "簡報架構完整", "能回應提問", "台風穩定", "報告內容熟悉"] },
    { keys: ["討論", "小組", "合作", "協作"], tags: ["帶動討論", "聆聽同學", "協調分工", "提出想法", "協助組員"] },
    { keys: ["寫作", "作文", "文章", "文本", "閱讀"], tags: ["文字有脈絡", "能提出證據", "語句精煉", "閱讀理解佳", "段落待整理"] },
    { keys: ["創作", "小說", "繪本", "作品", "藝術"], tags: ["作品有創意", "創作理念清楚", "畫面描寫佳", "完成度待提升", "風格逐漸形成"] },
    { keys: ["圖表", "資料", "懶人包", "資訊", "知識"], tags: ["圖表判讀佳", "資訊整理清楚", "能精準選詞", "資料蒐集完整", "設計與內容連結"] },
    { keys: ["實驗", "自然", "科學", "研究", "專題"], tags: ["實驗操作穩定", "能觀察紀錄", "推論有依據", "研究細節待補", "能修正方法"] },
    { keys: ["數學", "計算", "定義", "解題"], tags: ["能掌握概念", "解題策略清楚", "計算需更穩", "定義應再複習", "能獨立練習"] },
    { keys: ["英文", "口說", "聽力", "字彙"], tags: ["口說勇敢", "聽力理解佳", "字彙需累積", "拼字需練習", "能用英文表達"] },
    { keys: ["體育", "運動", "飛盤", "球"], tags: ["動作學習快", "團隊精神佳", "規則理解進步", "移動反應待練", "情緒調節需練習"] }
  ];
  const matched = banks
    .filter((bank) => bank.keys.some((key) => contextText.includes(key)))
    .flatMap((bank) => bank.tags);
  const fallback = ["課堂參與穩定", "主動提問", "作業準時", "能修正錯誤", "學習節奏待調整", "需要更具體表達"];
  return shuffleBySeed([...new Set(matched.length ? matched : fallback)], hashText(contextText)).slice(0, 10);
}

function shuffleBySeed(items, seed) {
  return [...items].sort((a, b) => (hashText(`${a}-${seed}`) % 997) - (hashText(`${b}-${seed}`) % 997));
}

function chip(label, selected, type) {
  return `<button class="chip ${selected ? "is-selected" : ""}" data-chip-type="${type}" data-chip-value="${escapeHtml(label)}">${escapeHtml(label)}</button>`;
}

function generateAll() {
  updateStudentsFromDom();
  state.students.forEach((student) => {
    student.draft = generateFeedback(student);
  });
  saveState(true);
  goStep(3);
}

function generateFeedback(student) {
  const context = state.classContext;
  if (context.outputMode === "prompt") return generatePrompt(student);

  const seed = hashText(`${context.teacherTone}-${context.teacherPhrases}-${student.name}-${student.memory}-${student.evidence}-${student.traits.join(",")}-${student.goalTags.join(",")}-${student.directions.join(",")}-${student.regenerateCount || 0}`);
  const tone = toneProfile(context.teacherTone);
  const variationOffset = context.variationLevel === "高變化" ? seed % 7 : context.variationLevel === "穩定正式" ? 0 : seed % 3;
  const subjectHint = subjectSentence(context.subjectArea, context.courseTopic);
  const memory = student.memory || "這學期有自己的學習節奏與表現";
  const evidence = student.evidence || "課堂參與與任務完成狀況可作為觀察依據";
  const allTags = [...student.traits, ...student.goalTags];
  const traits = allTags.length ? allTags.join("、") : "學習中的不同面向";
  const needsImprove = student.directions.some((item) => ["具體改進", "穩定節奏", "完成任務"].includes(item));
  const teacherPhrase = extractTeacherPhrase(context.teacherPhrases, seed);
  const opening = pickVariant(tone.openings.map((template) => fillTemplate(template, student, context, memory)), seed + variationOffset);
  const evidenceLine = pickVariant(tone.evidence.map((template) => fillTemplate(template, student, context, evidence, traits, subjectHint)), seed + 1 + variationOffset);
  const turn = needsImprove
    ? pickVariant(tone.improvements, seed + 2 + variationOffset)
    : pickVariant(tone.affirmations, seed + 2 + variationOffset);
  const closing = pickVariant(stageClosings(context.schoolStage, student.directions, context.teacherTone), seed + 3 + variationOffset);
  const signature = teacherPhrase ? `${teacherPhrase}` : "";

  return fitLength(`${opening}${evidenceLine}${turn}${signature}${closing}`, context.wordMin, context.wordMax);
}

function generatePrompt(student) {
  const context = state.classContext;
  const custom = context.customPrompt ? `\n額外要求：${context.customPrompt}` : "";
  return [
    "請根據以下資料，生成一段期末質性回饋。",
    `學生：${student.name}`,
    `學生階段：${context.schoolStage}`,
    `領域／課程：${context.subjectArea}｜${context.courseTopic}`,
    `字數：${context.wordMin}-${context.wordMax} 字`,
    `教師語氣：${context.teacherTone}；文字變化程度：${context.variationLevel}`,
    `課程脈絡：${context.courseGoals || "未提供，請依課程主題推估。"}`,
    `學生觀察：${student.memory || "未提供"}`,
    `具體依據或作業狀況：${student.evidence || "未提供"}`,
    `學生特質：${student.traits.join("、") || "未選擇"}`,
    `課程目標能力標籤：${student.goalTags.join("、") || "未選擇"}`,
    `回饋方向：${student.directions.join("、") || "未選擇"}`,
    `老師常用語或避用語：${context.teacherPhrases || "未提供"}`,
    "請避免罐頭語氣，需包含具體學習行為、可維持的亮點，以及下一步可調整的方向。若資料不足，請自然提醒老師補入具體事件。",
    custom
  ].filter(Boolean).join("\n");
}

function fitLength(text, min, max) {
  const cleanText = text.replace(/\s+/g, "");
  if (cleanText.length <= max) return text;
  const sentences = text.split(/(?<=。|！|？)/).map((item) => item.trim()).filter(Boolean);
  let result = "";
  for (const sentence of sentences) {
    if ((result + sentence).replace(/\s+/g, "").length > max && result.replace(/\s+/g, "").length >= min) break;
    result += sentence;
  }
  return result || `${cleanText.slice(0, max - 1)}。`;
}

function toneProfile(tone) {
  const common = {
    openings: [
      "{name}這學期在「{topic}」中，{memory}。",
      "從「{topic}」的學習歷程來看，{name}{memory}。",
      "{name}在這門課留下最清楚的線索是：{memory}。",
      "這學期觀察{name}的表現，可以看見{memory}。"
    ],
    evidence: [
      "{subjectHint}{evidence}，也讓人看見你{traits}的樣子。",
      "{evidence}；回到課程目標來看，{subjectHint}這些表現都能成為具體依據。",
      "從{evidence}來看，你並不是只有完成任務，也展現出{traits}的學習特質。",
      "{subjectHint}尤其{evidence}，讓這份回饋能更貼近你真實的學習狀態。"
    ],
    improvements: [
      "比較需要提醒的是，若能更有意識地整理進度、補足細節，學習成果會更完整。",
      "接下來可以把重點放在穩定完成任務，並主動確認卡住的地方，避免好想法停在半路。",
      "若能在過程中更早安排時間、留下修正紀錄，你的成果會更能展現原本的能力。",
      "這學期已經有可肯定的地方，下一步是把態度、完成度與作品品質更穩定地連在一起。"
    ],
    affirmations: [
      "這些表現讓人看見你持續投入與累積的成果。",
      "這份穩定與投入，是很值得被肯定的學習基礎。",
      "能把想法落實到任務裡，是這學期很珍貴的亮點。",
      "你已經能讓自己的優勢在作品或課堂任務中被看見。"
    ]
  };

  const profiles = {
    "成熟省思": {
      openings: [
        "回看{name}在「{topic}」中的學習歷程，{memory}。",
        "{name}這學期值得被看見的，不只是結果，而是{memory}。",
        "若把這學期視為一次學習整理，{name}的狀態可以從{memory}看出來。"
      ],
      evidence: [
        "{evidence}，顯示你能在課程脈絡中逐漸整理自己的理解；{subjectHint}",
        "從{evidence}可以看見，你正在累積{traits}，這些都會支撐往後更成熟的表達。",
        "{subjectHint}{evidence}，也讓人看見你如何面對任務與自我要求。"
      ],
      improvements: [
        "下一步可以更有意識地檢視自己的學習節奏，讓想法、行動與成果之間有更穩定的連結。",
        "若能進一步補足基礎、整理證據，你的判斷會更有支撐，也更能說服他人。",
        "可再練習把卡住的地方說清楚，這會幫助你更精準地調整方法。"
      ],
      affirmations: [
        "這樣的累積很珍貴，也讓人期待你在下一階段能有更深的展開。",
        "你已經具備把經驗轉化為思考的能力，這是值得繼續保留的優勢。",
        "這些表現顯示你正在形成自己的學習方法與觀點。"
      ]
    },
    "具體任務": {
      openings: [
        "{name}在「{topic}」的任務表現中，{memory}。",
        "以本學期任務來看，{name}{memory}。",
        "{name}這學期的主要表現，可以從{memory}來觀察。"
      ],
      evidence: [
        "具體來說，{evidence}，這些都能對應到課程要求：{subjectHint}",
        "{evidence}，顯示你在任務完成、課堂參與或成果呈現上有明確線索。",
        "從任務證據來看，{evidence}，也展現出{traits}。"
      ],
      improvements: [
        "接下來建議把待完成事項拆小，並在每個階段確認進度與品質。",
        "若能準時補齊任務、修正細節，整體表現會更穩定。",
        "下一步請優先處理完成度與修正紀錄，讓成果能被完整評估。"
      ],
      affirmations: [
        "這些都是能支持成績與回饋的具體依據。",
        "整體來說，你已能把任務要求轉成可見的成果。",
        "這份完成度與執行力值得肯定。"
      ]
    },
    "文學感": {
      openings: [
        "{name}這學期在「{topic}」裡，慢慢顯出一種屬於自己的學習紋理：{memory}。",
        "觀察{name}這學期的狀態，最有畫面的是{memory}。",
        "在「{topic}」的過程中，{name}讓人記得的是{memory}。"
      ],
      evidence: [
        "{evidence}，讓這份學習不只是完成任務，也有了{traits}的質地。",
        "{subjectHint}而{evidence}，使你的表現有了更清楚的輪廓。",
        "尤其{evidence}，像是把你的學習狀態具體地描出來。"
      ],
      improvements: [
        "比較可惜的是，有些想法若沒有被整理與完成，就容易停在半途；期待你把它再往前推進。",
        "若能替自己的想法多留一些時間與結構，成果會更能承接住原本的亮點。",
        "下一步可以練習讓靈感與紀律同行，讓作品或任務更完整地落地。"
      ],
      affirmations: [
        "這樣的表現讓人看見你正在把課程經驗轉化成自己的東西。",
        "這份亮點很值得保留，也值得在下一次任務中繼續延伸。",
        "你已經讓自己的特質在學習中被看見。"
      ]
    },
    "輕快鼓勵": {
      openings: [
        "{name}這學期在「{topic}」有不少值得肯定的地方，像是{memory}。",
        "很開心看到{name}這學期{memory}。",
        "{name}在這門課的表現有自己的亮點，尤其是{memory}。"
      ],
      evidence: [
        "{evidence}，這些都是很好的學習累積；{subjectHint}",
        "從{evidence}可以看見你有在往前走，也展現出{traits}。",
        "{subjectHint}{evidence}，這些表現都很值得被記下來。"
      ],
      improvements: [
        "小小提醒是，接下來可以更穩定一點，把該完成的任務一步一步補上。",
        "如果能再多一點主動確認與時間安排，你的成果會更亮眼。",
        "下一次可以試著早一點開始，給自己更多修正和完成的空間。"
      ],
      affirmations: [
        "繼續保持這份投入，你會越來越知道自己的能力在哪裡。",
        "這樣的努力很值得肯定，請繼續帶著它往前走。",
        "相信你只要穩定累積，會有更多好表現。"
      ]
    }
  };

  return profiles[tone] || common;
}

function fillTemplate(template, student, context, value, traits = "", subjectHint = "") {
  return template
    .replaceAll("{name}", student.name)
    .replaceAll("{topic}", context.courseTopic)
    .replaceAll("{memory}", value)
    .replaceAll("{evidence}", value)
    .replaceAll("{traits}", traits)
    .replaceAll("{subjectHint}", subjectHint);
}

function extractTeacherPhrase(text, seed) {
  if (!text) return "";
  const phrases = text
    .split(/[，,。；;\n]+/)
    .map((phrase) => phrase.trim())
    .filter((phrase) => phrase && !phrase.includes("避免"));
  if (!phrases.length) return "";
  const phrase = pickVariant(phrases, seed);
  if (phrase.length > 18) return "";
  return phrase.endsWith("！") || phrase.endsWith("。") ? phrase : `${phrase}。`;
}

function analyzeTeacherVoice() {
  syncContextFromForm();
  const text = state.classContext.teacherSamples;
  if (!text) {
    showToast("請先貼上幾段過去的質性回饋");
    return;
  }
  const sentences = splitSentences(text);
  const openingCandidates = sentences.filter((sentence) => /這學期|在課堂|從|回看|觀察|整體|一直|很/.test(sentence)).slice(0, 8);
  const transitionCandidates = sentences.filter((sentence) => /不過|但|比較可惜|提醒|需要|若能|接下來|下一步|唯|只是/.test(sentence)).slice(0, 8);
  const closingCandidates = sentences.filter((sentence) => /期待|相信|加油|繼續|保持|祝福|請/.test(sentence)).slice(-8);
  const repeated = topRepeatedPhrases(text);
  const tone = inferTone(text);
  const avoid = repeated.filter((item) => item.count >= 4).map((item) => `${item.phrase}過度重複`);

  state.classContext.voiceAnalysis = {
    openings: uniqueShort(openingCandidates, 5),
    transitions: uniqueShort(transitionCandidates, 5),
    closings: uniqueShort(closingCandidates, 5),
    repeated,
    avoid,
    tone
  };
  saveState(true);
  renderVoiceAnalysis();
  showToast("已分析老師語氣");
}

function splitSentences(text) {
  return text
    .replace(/\s+/g, "")
    .split(/(?<=。|！|？|!|\?)/)
    .map((sentence) => sentence.trim())
    .filter((sentence) => sentence.length >= 6);
}

function uniqueShort(items, limit) {
  return [...new Set(items)]
    .map((item) => item.length > 38 ? `${item.slice(0, 38)}…` : item)
    .slice(0, limit);
}

function topRepeatedPhrases(text) {
  const candidates = ["比較可惜", "期待", "相信", "請", "繼續保持", "很棒", "加油", "需要", "若能", "主動", "積極", "穩定", "具體", "完整", "調整", "令人", "看見"];
  return candidates
    .map((phrase) => ({ phrase, count: (text.match(new RegExp(phrase, "g")) || []).length }))
    .filter((item) => item.count > 0)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);
}

function inferTone(text) {
  const scores = [
    { tone: "溫暖直接", score: countMatches(text, ["提醒", "需要", "期待", "加油", "保持"]) },
    { tone: "成熟省思", score: countMatches(text, ["省思", "理解", "支撐", "能力", "未來", "累積"]) },
    { tone: "具體任務", score: countMatches(text, ["作業", "任務", "完成", "報告", "進度", "繳交"]) },
    { tone: "文學感", score: countMatches(text, ["美感", "故事", "畫面", "風格", "創作", "文字"]) },
    { tone: "輕快鼓勵", score: countMatches(text, ["很棒", "不錯", "喔", "加油", "亮眼"]) }
  ].sort((a, b) => b.score - a.score);
  return scores[0]?.score ? scores[0].tone : "溫暖直接";
}

function countMatches(text, words) {
  return words.reduce((sum, word) => sum + (text.match(new RegExp(word, "g")) || []).length, 0);
}

function renderVoiceAnalysis() {
  const host = document.querySelector("#voiceResult");
  if (!host) return;
  const analysis = state.classContext.voiceAnalysis;
  if (!analysis) {
    host.innerHTML = `<p>分析後會顯示你的常用開頭、轉折、結尾，以及這些語句透露出的回饋風格。</p>`;
    return;
  }
  host.innerHTML = `
    <dl>
      <dt>推測語氣</dt>
      <dd>${escapeHtml(analysis.tone)}</dd>
      <dt>常用開頭</dt>
      <dd>${escapeHtml(analysis.openings.join(" / ") || "尚未抓到明顯開頭")}</dd>
      <dt>提醒或轉折</dt>
      <dd>${escapeHtml(analysis.transitions.join(" / ") || "尚未抓到明顯轉折")}</dd>
      <dt>鼓勵或結尾</dt>
      <dd>${escapeHtml(analysis.closings.join(" / ") || "尚未抓到明顯結尾")}</dd>
      <dt>重複詞</dt>
      <dd>${escapeHtml(analysis.repeated.map((item) => `${item.phrase}x${item.count}`).join("、") || "沒有明顯重複詞")}</dd>
      <dt>可提醒避用</dt>
      <dd>${escapeHtml(analysis.avoid.join("、") || "暫無")}</dd>
    </dl>
  `;
}

function applyVoiceAnalysis() {
  const analysis = state.classContext.voiceAnalysis;
  if (!analysis) {
    showToast("請先分析老師語氣");
    return;
  }
  const common = [...analysis.transitions.slice(0, 3), ...analysis.closings.slice(0, 3)]
    .map((sentence) => sentence.replace(/[。！？]$/, ""))
    .join("、");
  const avoid = analysis.avoid.length ? `；避免${analysis.avoid.join("、")}` : "";
  state.classContext.teacherTone = analysis.tone;
  state.classContext.teacherPhrases = `${common}${avoid}`;
  document.querySelector("#teacherTone").value = state.classContext.teacherTone;
  document.querySelector("#teacherPhrases").value = state.classContext.teacherPhrases;
  saveState(true);
  updateSummary();
  showToast("已套用到教師語氣設定");
}

function stageClosings(stage, directions, tone = "溫暖直接") {
  if (directions.includes("建立自信")) {
    return [
      "請多相信自己的判斷，讓每一次嘗試都成為累積能力的證據。",
      "期待你繼續練習肯定自己的想法，勇敢把答案與作品放出來。",
      "你可以再多給自己一點信任，很多能力正是在嘗試中慢慢長出來的。"
    ];
  }
  const closings = {
    "國小高年級": [
      "請繼續保持這份願意嘗試的精神，加油！",
      "期待你下次能帶著這些經驗，讓自己做得更穩、更完整。",
      "繼續一步一步練習，你會更知道自己做得到什麼。"
    ],
    "國中": [
      "期待你接下來能把這樣的狀態穩定下來，繼續加油！",
      "請把這些經驗帶到下一次任務裡，讓學習節奏更穩當。",
      "休假月或下一階段可以好好調整步伐，重新整理自己的學習狀態。"
    ],
    "高中": [
      "相信這會成為你往後學習與表達的重要支撐。",
      "期待你把這些能力帶到更長遠的學習與自我探索裡。",
      "願你持續累積知識、膽識與表達力，讓想法更有力量。"
    ],
    "高中選修": [
      "期待你持續把自己的感受與觀點轉化成更完整的作品。",
      "也期待你讓這份創作能量繼續延伸，形成更清楚的個人風格。",
      "若能繼續完成與修整作品，相信你的觀點會被更多人看見。"
    ]
  };
  const toneClosings = {
    "成熟省思": ["願你持續累積知識、膽識與表達力，讓想法更有力量。"],
    "具體任務": ["請把下一步任務完成，讓成果可以被更完整地看見。"],
    "文學感": ["期待你把這份學習的光，繼續帶到下一個作品或任務裡。"],
    "輕快鼓勵": ["繼續加油，下一次一定可以更穩、更亮眼！"]
  };
  return [...(closings[stage] || ["期待你繼續前進。", "請帶著這次經驗，穩定往下一步走。"]), ...(toneClosings[tone] || [])];
}

function hashText(text) {
  let hash = 0;
  for (let index = 0; index < text.length; index += 1) {
    hash = (hash * 31 + text.charCodeAt(index)) >>> 0;
  }
  return hash;
}

function pickVariant(options, seed) {
  return options[seed % options.length];
}

function subjectSentence(area, topic) {
  if (area.includes("語文")) return `從文本理解、表達到作品產出，都能回到「${topic}」的學習目標來觀察。`;
  if (area.includes("英文")) return "在聽說讀寫、字彙累積與表達勇氣上，都可以看見具體的學習線索。";
  if (area.includes("數學")) return "概念理解、定義運用與獨立練習，是這門課最重要的觀察重點。";
  if (area.includes("自然")) return "從觀察、實作、資料整理到概念說明，都能看見學習狀態。";
  if (area.includes("人文")) return "從資料蒐集、觀點形成到議題連結，都能看見學習深度。";
  if (area.includes("藝術")) return "作品完整度、媒材運用與創作理念，是這門課的重要表現。";
  if (area.includes("專案")) return "從規劃、執行、修正到成果呈現，都能看見專案能力的累積。";
  if (area.includes("體育")) return "參與態度、動作穩定度與團隊互動，是這門課的重要表現。";
  return "課堂參與、任務完成與自我調整，都是值得觀察的學習線索。";
}

function renderDrafts() {
  const host = document.querySelector("#draftList");
  const tableBody = document.querySelector("#classTableBody");
  if (!state.students.length) {
    host.innerHTML = `<p>尚未建立學生名單。</p>`;
    if (tableBody) tableBody.innerHTML = "";
    return;
  }

  if (tableBody) {
    tableBody.innerHTML = state.students.map((student) => {
      const text = student.draft || generateFeedback(student);
      return `
        <tr data-id="${student.id}">
          <td>${escapeHtml(student.name)}</td>
          <td><textarea data-table-feedback="${student.id}" rows="4">${escapeHtml(text)}</textarea></td>
          <td><button class="mini-button" data-copy-row="${student.id}">複製</button></td>
        </tr>
      `;
    }).join("");
  }

  host.innerHTML = state.students.map((student) => {
    const text = student.draft || generateFeedback(student);
    const quality = qualityChecks(student, text);
    return `
    <article class="draft-card" data-id="${student.id}">
      <header>
        <h4>${escapeHtml(student.name)}</h4>
        <button class="mini-button" data-copy="${student.id}">複製</button>
      </header>
      <p>${escapeHtml(text)}</p>
      <div class="quality-list">
        ${quality.map((item) => `<span class="quality-pill ${item.good ? "is-good" : "is-warning"}">${escapeHtml(item.label)}</span>`).join("")}
      </div>
      <div class="draft-tools">
        <button class="mini-button" data-regenerate="${student.id}">重新生成</button>
        <button class="mini-button" data-edit="${student.id}">精修這位學生</button>
      </div>
    </article>
  `;
  }).join("");
}

function tableRowsText() {
  return state.students
    .map((student) => `${student.name}\t${student.draft || ""}`)
    .join("\n");
}

function downloadClassCsv() {
  const csv = ["學生,質性回饋", ...state.students.map((student) => `${csvCell(student.name)},${csvCell(student.draft || "")}`)].join("\n");
  const blob = new Blob([`\ufeff${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const title = state.classContext.className || "班級質性回饋總表";
  link.href = url;
  link.download = `${title}.csv`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("已下載 CSV");
}

function csvCell(value) {
  return `"${String(value).replaceAll('"', '""')}"`;
}

function qualityChecks(student, text) {
  const context = state.classContext;
  if (context.specificityMode === "關閉") return [];
  const checks = [
    { good: Boolean(student.memory.trim()), label: student.memory.trim() ? "有學生觀察" : "缺學生觀察" },
    { good: Boolean(student.evidence.trim()), label: student.evidence.trim() ? "有具體依據" : "缺具體依據" },
    { good: student.traits.length > 0, label: student.traits.length > 0 ? "已選特質" : "未選特質" }
  ];
  if (context.outputMode === "prompt") {
    checks.push({ good: true, label: "提示詞模式" });
    return checks;
  }
  const count = text.replace(/\s+/g, "").length;
  checks.push({
    good: count >= context.wordMin && count <= context.wordMax,
    label: `${count} 字`
  });
  if (context.specificityMode === "嚴格") {
    checks.push({
      good: /作業|發言|作品|報告|討論|小組|預讀|筆記|實驗|任務|提問/.test(`${student.memory}${student.evidence}${text}`),
      label: /作業|發言|作品|報告|討論|小組|預讀|筆記|實驗|任務|提問/.test(`${student.memory}${student.evidence}${text}`) ? "有學習行為" : "缺學習行為"
    });
  }
  return checks;
}

function renderRefine() {
  const picker = document.querySelector("#refinePicker");
  if (!state.activeStudentId && state.students[0]) state.activeStudentId = state.students[0].id;

  picker.innerHTML = state.students.map((student) => `
    <button class="picker-button ${student.id === state.activeStudentId ? "is-active" : ""}" data-pick="${student.id}">
      <strong>${escapeHtml(student.name)}</strong>
      <br />
      <small>${student.draft ? `${student.draft.length} 字` : "尚未產出"}</small>
    </button>
  `).join("");

  const student = getActiveStudent();
  document.querySelector("#activeStudentName").textContent = student?.name || "尚未選擇學生";
  document.querySelector("#activeFeedback").value = student?.draft || "";
}

function getActiveStudent() {
  return state.students.find((student) => student.id === state.activeStudentId);
}

function refineActive(mode) {
  const student = getActiveStudent();
  if (!student) return;
  const textarea = document.querySelector("#activeFeedback");
  let text = textarea.value.trim() || student.draft || generateFeedback(student);
  const name = student.name;

  if (mode === "encourage") {
    text = `${text.replace(/加油！?$/, "")}請記得，你已經有值得被看見的能力，接下來只要穩定累積，就能把亮點放得更大。`;
  }
  if (mode === "improve") {
    text = `${text} 下一步可以更聚焦在準時完成任務、整理學習歷程，並主動確認自己卡住的地方。`;
  }
  if (mode === "concrete") {
    text = `${text} 建議老師可再補入一個具體例子，例如某次發言、作業修正、報告表現或小組合作事件，讓這段回饋更像只屬於${name}。`;
  }
  if (mode === "shorten") {
    const parts = text.split(/[。；]/).map((part) => part.trim()).filter(Boolean);
    text = parts.slice(0, 3).join("。") + "。";
  }
  if (mode === "lengthen") {
    text = `${text} 若能延續目前已經展現出的優勢，同時面對需要調整的地方，未來在相關任務中會更能掌握自己的節奏，也更能讓成果完整呈現。`;
  }

  student.draft = text;
  textarea.value = text;
  saveState(true);
  renderRefine();
}

function applyExtraEvent() {
  const student = getActiveStudent();
  const extra = document.querySelector("#extraEvent").value.trim();
  if (!student || !extra) {
    showToast("請先選學生並輸入補充事件");
    return;
  }
  const current = document.querySelector("#activeFeedback").value.trim();
  student.draft = `${current}${current.endsWith("。") ? "" : "。"}另外，${extra}這也可以成為後續回饋中很具體的依據。`;
  document.querySelector("#activeFeedback").value = student.draft;
  document.querySelector("#extraEvent").value = "";
  saveState(true);
  showToast("已加入補充事件");
}

function updateStudentsFromDom() {
  document.querySelectorAll(".student-card").forEach((card) => {
    const student = state.students.find((item) => item.id === card.dataset.id);
    if (!student) return;
    student.memory = card.querySelector('[data-field="memory"]').value.trim();
    student.evidence = card.querySelector('[data-field="evidence"]').value.trim();
  });
}

function syncTableFeedbackFromDom() {
  document.querySelectorAll("[data-table-feedback]").forEach((field) => {
    const student = state.students.find((item) => item.id === field.dataset.tableFeedback);
    if (student) student.draft = field.value;
  });
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function copyText(text) {
  navigator.clipboard.writeText(text).then(
    () => showToast("已複製"),
    () => showToast("無法自動複製，請手動選取文字")
  );
}

function exportState() {
  updateStudentsFromDom();
  syncContextFromForm();
  const payload = {
    exportedAt: new Date().toISOString(),
    ...workspacePayload(),
    classContext: state.classContext,
    students: state.students
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const title = state.classContext.className || "質性回饋資料";
  link.href = url;
  link.download = `${title}.json`;
  link.click();
  URL.revokeObjectURL(url);
  showToast("已匯出資料");
}

function importStateFromFile(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const parsed = JSON.parse(reader.result);
      if (Array.isArray(parsed.courses)) {
        applyWorkspacePayload(parsed);
      } else {
        Object.assign(state.classContext, parsed.classContext || {});
        state.students = Array.isArray(parsed.students) ? parsed.students.map(normalizeStudent) : [];
        state.courses = [currentCourseSnapshot(state.activeCourseId)];
      }
      state.activeStudentId = state.students[0]?.id || null;
      fillContextForm();
      saveState(true);
      goStep(1);
      showToast("已匯入資料");
    } catch {
      showToast("匯入失敗，請確認 JSON 格式");
    }
  };
  reader.readAsText(file);
}

function normalizeStudent(student) {
  return {
    id: student.id || crypto.randomUUID(),
    name: student.name || "未命名學生",
    memory: student.memory || "",
    evidence: student.evidence || "",
    traits: Array.isArray(student.traits) ? student.traits : [],
    goalTags: Array.isArray(student.goalTags) ? student.goalTags : [],
    directions: Array.isArray(student.directions) ? student.directions : ["肯定亮點", "具體改進"],
    draft: student.draft || "",
    regenerateCount: Number(student.regenerateCount) || 0
  };
}

document.addEventListener("input", (event) => {
  if (["className", "schoolStage", "subjectArea", "courseTopic", "courseGoals", "teacherTone", "variationLevel", "teacherPhrases", "teacherSamples", "wordMin", "wordMax", "outputMode", "specificityMode", "customPrompt"].includes(event.target.id)) {
    syncContextFromForm();
    saveState(true);
  }
  if (event.target.matches('[data-field="memory"], [data-field="evidence"]')) {
    const card = event.target.closest(".student-card");
    const student = state.students.find((item) => item.id === card?.dataset.id);
    if (student) {
      student[event.target.dataset.field] = event.target.value.trim();
      saveState(true);
    }
  }
  if (event.target.id === "studentSearch") {
    updateStudentsFromDom();
    renderStudents();
  }
  if (event.target.matches("[data-table-feedback]")) {
    const student = state.students.find((item) => item.id === event.target.dataset.tableFeedback);
    if (student) {
      student.draft = event.target.value;
      saveState(true);
    }
  }
  if (event.target.id === "activeFeedback") {
    const student = getActiveStudent();
    if (student) {
      student.draft = event.target.value;
      saveState(true);
    }
  }
});

document.addEventListener("change", (event) => {
  if (["teacherTone", "variationLevel", "schoolStage", "subjectArea", "outputMode", "specificityMode"].includes(event.target.id)) {
    syncContextFromForm();
    saveState(true);
  }
  if (event.target.id === "importFile") importStateFromFile(event.target.files[0]);
  if (event.target.id === "courseFile") {
    syncContextFromForm();
    saveState(true);
    showToast(`已記錄檔案：${state.classContext.courseFileName}`);
  }
});

document.addEventListener("click", (event) => {
  if (state.step === 2) updateStudentsFromDom();

  const stepButton = event.target.closest("[data-step]");
  if (stepButton) goStep(stepButton.dataset.step);

  const goButton = event.target.closest("[data-go-step]");
  if (goButton) goStep(goButton.dataset.goStep);

  if (event.target.id === "buildRosterButton") buildRoster();
  if (event.target.id === "signInButton") signIn();
  if (event.target.id === "signUpButton") signUp();
  if (event.target.id === "signOutButton") signOut();
  if (event.target.id === "newCourseButton") createNewCourse();
  if (event.target.id === "analyzeVoiceButton") analyzeTeacherVoice();
  if (event.target.id === "applyVoiceButton") applyVoiceAnalysis();
  if (event.target.id === "generateAllButton") generateAll();
  if (event.target.id === "copyTableButton") copyText(tableRowsText());
  if (event.target.id === "downloadCsvButton") downloadClassCsv();
  if (event.target.id === "saveButton") saveState();
  if (event.target.id === "exportButton") exportState();
  if (event.target.id === "importButton") document.querySelector("#importFile").click();
  if (event.target.id === "resetButton" && confirm("確定要清空目前原型資料嗎？")) {
    localStorage.removeItem(STORAGE_KEY);
    window.location.reload();
  }

  const courseButton = event.target.closest("[data-course-id]");
  if (courseButton && courseButton.dataset.courseId !== state.activeCourseId) {
    switchCourse(courseButton.dataset.courseId);
  }

  if (event.target.id === "addStudentButton") {
    const name = prompt("請輸入學生姓名");
    if (name?.trim()) {
      state.students.push(createStudent(name.trim()));
      saveState(true);
      renderStudents();
      updateSummary();
    }
  }

  const removeButton = event.target.closest("[data-remove-student]");
  if (removeButton) {
    state.students = state.students.filter((student) => student.id !== removeButton.dataset.removeStudent);
    saveState(true);
    renderStudents();
  }

  const chipButton = event.target.closest("[data-chip-type]");
  if (chipButton) {
    const card = chipButton.closest(".student-card");
    const student = state.students.find((item) => item.id === card.dataset.id);
    if (!student) return;
    const value = chipButton.dataset.chipValue;
    if (chipButton.dataset.chipType === "trait") student.traits = toggleValue(student.traits, value);
    if (chipButton.dataset.chipType === "goalTag") student.goalTags = toggleValue(student.goalTags, value);
    if (chipButton.dataset.chipType === "direction") student.directions = toggleValue(student.directions, value);
    saveState(true);
    renderStudents();
  }

  const copyButton = event.target.closest("[data-copy]");
  if (copyButton) {
    const student = state.students.find((item) => item.id === copyButton.dataset.copy);
    if (student) copyText(student.draft);
  }

  const copyRowButton = event.target.closest("[data-copy-row]");
  if (copyRowButton) {
    const student = state.students.find((item) => item.id === copyRowButton.dataset.copyRow);
    if (student) copyText(`${student.name}\t${student.draft || ""}`);
  }

  const editButton = event.target.closest("[data-edit]");
  if (editButton) {
    state.activeStudentId = editButton.dataset.edit;
    goStep(4);
  }

  const regenerateButton = event.target.closest("[data-regenerate]");
  if (regenerateButton) {
    const student = state.students.find((item) => item.id === regenerateButton.dataset.regenerate);
    if (student) {
      syncTableFeedbackFromDom();
      student.regenerateCount = (student.regenerateCount || 0) + 1;
      student.draft = generateFeedback(student);
      saveState(true);
      renderDrafts();
    }
  }

  const pickButton = event.target.closest("[data-pick]");
  if (pickButton) {
    syncTableFeedbackFromDom();
    state.activeStudentId = pickButton.dataset.pick;
    saveState(true);
    renderRefine();
  }

  const refineButton = event.target.closest("[data-refine]");
  if (refineButton) refineActive(refineButton.dataset.refine);

  if (event.target.id === "applyEventButton") applyExtraEvent();
  if (event.target.id === "copyActiveButton") {
    const text = document.querySelector("#activeFeedback").value.trim();
    if (text) copyText(text);
  }
});

loadState();
fillContextForm();
goStep(state.step);
initBackend();
