const themes = [
  {
    id: "classroom-routines",
    icon: "W1",
    title: "classroom observation",
    zh: "Week 1 地基包",
    sentences: [
      "I noticed that students were engaged during the activity.",
      "It seems that students understood the instructions.",
      "Students appeared to follow the task without difficulty.",
      "Most students were able to stay on task.",
      "Some students needed additional support.",
      "There was a clear structure in the lesson.",
      "The teacher provided clear instructions.",
      "The teacher used visual supports effectively.",
      "The lesson included a variety of activities.",
      "The teacher checked on students regularly.",
      "The teacher guided students step by step.",
      "The teacher gave timely feedback.",
      "This helped students stay focused.",
      "This supported student understanding.",
      "This allowed students to participate actively.",
      "This made the task easier to follow.",
      "This created a more structured learning environment.",
      "This encouraged student participation.",
      "It might be helpful to give more time for discussion.",
      "You might consider simplifying the instructions.",
      "One possible adjustment could be to provide examples.",
      "It could be useful to check for understanding more frequently.",
      "You might want to provide additional support for some students.",
      "Another option could be to include more student interaction.",
      "Overall, the lesson was well-structured.",
      "In general, students responded positively.",
      "At times, some students seemed less engaged.",
      "One thing I noticed was that...",
      "Another point is that...",
      "This suggests that..."
    ],
    sentenceGroups: [
      {
        title: "A. 開場觀察",
        items: [
          "I noticed that students were engaged during the activity.",
          "It seems that students understood the instructions.",
          "Students appeared to follow the task without difficulty.",
          "Most students were able to stay on task.",
          "Some students needed additional support.",
          "There was a clear structure in the lesson."
        ]
      },
      {
        title: "B. 描述教學行為",
        items: [
          "The teacher provided clear instructions.",
          "The teacher used visual supports effectively.",
          "The lesson included a variety of activities.",
          "The teacher checked on students regularly.",
          "The teacher guided students step by step.",
          "The teacher gave timely feedback."
        ]
      },
      {
        title: "C. 描述影響",
        items: [
          "This helped students stay focused.",
          "This supported student understanding.",
          "This allowed students to participate actively.",
          "This made the task easier to follow.",
          "This created a more structured learning environment.",
          "This encouraged student participation."
        ]
      },
      {
        title: "D. 溫和建議",
        items: [
          "It might be helpful to give more time for discussion.",
          "You might consider simplifying the instructions.",
          "One possible adjustment could be to provide examples.",
          "It could be useful to check for understanding more frequently.",
          "You might want to provide additional support for some students.",
          "Another option could be to include more student interaction."
        ]
      },
      {
        title: "E. 過渡與串接",
        items: [
          "Overall, the lesson was well-structured.",
          "In general, students responded positively.",
          "At times, some students seemed less engaged.",
          "One thing I noticed was that...",
          "Another point is that...",
          "This suggests that..."
        ]
      }
    ],
    steps: ["聽一次", "跟讀一次", "選 10 句最順口的，重組成一段回饋"],
    pattern: "I noticed that... + The teacher... + This helped...",
    situation: "觀課後要能穩定開口，不過度誇張，也不讓對話冷掉。這週先練 observation、action、impact 三段式。",
    professionalWords: ["observation", "teaching moves", "impact", "consulting tone"],
    spokenWords: ["I noticed that...", "This helped...", "One possible adjustment could be..."],
    weeklyTasks: [
      "選 10 句最順口的，用一週。",
      "用 I noticed that... + The teacher... + This helped... 拼出自己的回饋。",
      "輸入一段中文觀課回饋，改寫成自然英文。",
      "打「開始對話」或直接回答老師問題，練一輪低壓對談。"
    ]
  },
  {
    id: "student-engagement",
    icon: "E",
    title: "student engagement",
    zh: "學生投入",
    sentences: [
      "Students were actively involved because the task gave them a clear reason to communicate.",
      "The teacher invited students to respond in different ways, which kept more learners engaged.",
      "The class felt lively because students had time to think, talk, and try."
    ],
    steps: ["觀察學生反應", "說出一個具體例子", "連結到學習效果"],
    pattern: "Students were more engaged when ______ because ______.",
    situation: "觀察學生是否真的有在聽、想、說、做，以及任務是否讓他們有參與的理由。",
    professionalWords: ["engagement", "participation", "purposeful task", "response options"],
    spokenWords: ["students joined in", "had a reason to speak", "stayed with the task"]
  },
  {
    id: "scaffolding",
    icon: "S",
    title: "scaffolding",
    zh: "學習鷹架",
    sentences: [
      "The teacher provided sentence frames that helped students express their ideas with more confidence.",
      "Visual prompts gave students a useful bridge between understanding and speaking.",
      "The support was gradually reduced as students became more ready to speak independently."
    ],
    steps: ["找出老師提供的支持", "描述學生如何使用", "改寫成回饋句"],
    pattern: "The teacher scaffolded the task by ______ so that students could ______.",
    situation: "觀察老師是否先提供句型、圖片、示範或提示，幫助學生從理解走到表達。",
    professionalWords: ["scaffolding", "sentence frames", "prompts", "gradual release"],
    spokenWords: ["gave them support", "helped them try", "made it less difficult"]
  },
  {
    id: "teacher-presence",
    icon: "P",
    title: "teacher presence",
    zh: "教師狀態",
    sentences: [
      "The teacher's energy and rhythm helped create a lively and engaging classroom atmosphere.",
      "Her presence made the lesson feel warm, focused, and easy to follow.",
      "She moved around the room with purpose and checked in on students naturally."
    ],
    steps: ["描述老師狀態", "加入台前或巡視的例子", "說出對學生的影響"],
    pattern: "The teacher brought a strong sense of ______, which helped students ______.",
    situation: "觀察老師的聲音、節奏、移動方式與情緒狀態如何影響教室氣氛。",
    professionalWords: ["teacher presence", "classroom atmosphere", "rhythm", "energy"],
    spokenWords: ["felt warm", "had good energy", "made the class lively"]
  },
  {
    id: "group-discussion",
    icon: "G",
    title: "group discussion",
    zh: "小組討論",
    sentences: [
      "The group discussion gave students space to rehearse their ideas before sharing with the whole class.",
      "Students had a clear role in the discussion, so the task felt more purposeful.",
      "The teacher monitored each group and offered support without interrupting their thinking."
    ],
    steps: ["描述小組任務", "指出老師如何巡視", "補上學習價值"],
    pattern: "Group work helped students ______ before they ______.",
    situation: "觀察小組討論是否有清楚任務、角色和產出，而不只是讓學生坐在一起。",
    professionalWords: ["collaboration", "rehearse ideas", "peer interaction", "monitoring"],
    spokenWords: ["talk with partners", "try ideas first", "share with the class"]
  },
  {
    id: "bilingual-support",
    icon: "B",
    title: "bilingual support",
    zh: "雙語支持",
    sentences: [
      "The teacher used bilingual support strategically without taking away students' chance to process English.",
      "A brief Chinese explanation helped students confirm the meaning and return to the English task.",
      "The balance between English input and Chinese support made the lesson more accessible."
    ],
    steps: ["指出雙語支持時機", "說明沒有過度翻譯", "連結到理解"],
    pattern: "The teacher used Chinese briefly to ______ and then brought students back to ______.",
    situation: "觀察中文是否被策略性使用，幫助理解後能回到英文任務，而不是取代英文練習。",
    professionalWords: ["bilingual support", "strategic use", "accessibility", "English input"],
    spokenWords: ["used Chinese briefly", "checked meaning", "went back to English"]
  },
  {
    id: "feedback-reflection",
    icon: "F",
    title: "feedback and reflection",
    zh: "回饋與反思",
    sentences: [
      "The feedback helped students notice what they had done well and what they could try next.",
      "The teacher's comments were specific enough for students to act on.",
      "Reflection time gave students a chance to connect the activity with their learning process."
    ],
    steps: ["說出回饋內容", "確認是否具體", "改成下次可行建議"],
    pattern: "One next step could be to ______ so that students can ______.",
    situation: "練習把觀察變成具體、可行、不讓老師有壓力的回饋或下一步建議。",
    professionalWords: ["specific feedback", "reflection", "actionable next step", "learning process"],
    spokenWords: ["what worked well", "what to try next", "one small next step"]
  }
];

const sourceThreads = {
  ldExplainer: {
    label: "L&D explainer: needs analysis / instructional design",
    url: "https://glasp.co/youtube/p/5-types-of-analysis-for-instructional-design"
  },
  oecdObservation: {
    label: "OECD Global Teaching InSights: public classroom observation",
    url: "https://www.oecd.org/en/about/projects/global-teaching-insights.html"
  },
  oecdProfessionalLearning: {
    label: "OECD teacher professional learning: peer observation and feedback",
    url: "https://www.oecd.org/en/publications/teacher-professional-learning_0cceeddf-en/full-report/ambition-three-facilitate-quality-meaningful-ongoing-learning-that-enables-the-profession-to-grow-and-face-future-challenges_83897d6a.html"
  },
  talisFeedback: {
    label: "OECD TALIS: feedback and professional collaboration",
    url: "https://www.oecd.org/en/publications/talis-2018-results-volume-ii_19cf08df-en/full-report/component-9.html"
  },
  unescoLifelong: {
    label: "UNESCO lifelong learning: reflective teacher development",
    url: "https://www.uil.unesco.org/en/teachers-lifelong-learners"
  }
};

const vocabularyCards = {
  observation: {
    zh: "觀察",
    use: "用來描述你實際看到的課堂現象，不先下判斷。",
    example: "My observation is that students became more confident after the teacher modeled the task."
  },
  "teaching moves": {
    zh: "教學行為",
    use: "用來說老師具體做了什麼，例如提問、示範、巡視、給提示。",
    example: "One effective teaching move was giving students a short model before pair work."
  },
  impact: {
    zh: "影響",
    use: "用來連結老師的做法和學生學習結果。",
    example: "The impact was that students could start the task with less hesitation."
  },
  "consulting tone": {
    zh: "顧問語氣",
    use: "用來讓建議聽起來溫和、可討論，而不是像評分。",
    example: "A consulting tone would be: One possible adjustment could be to add a short example."
  },
  engagement: {
    zh: "投入度",
    use: "描述學生是否真的在參與、思考、回應或完成任務。",
    example: "Student engagement increased when the task gave learners a clear reason to speak."
  },
  participation: {
    zh: "參與",
    use: "描述學生加入活動的程度，可以搭配 actively 或 meaningfully。",
    example: "The teacher encouraged participation by giving students different ways to respond."
  },
  "purposeful task": {
    zh: "有目的的任務",
    use: "描述活動不是為做而做，而是清楚服務學習目標。",
    example: "The task felt purposeful because students had to use the language to solve a problem."
  },
  "response options": {
    zh: "回應方式選項",
    use: "描述老師讓學生用不同方式回答，降低壓力、提高參與。",
    example: "Providing response options helped more students join the discussion."
  },
  scaffolding: {
    zh: "學習鷹架",
    use: "描述老師提供暫時支持，幫助學生完成還不能獨立完成的任務。",
    example: "The sentence frame worked as scaffolding for students' first response."
  },
  "sentence frames": {
    zh: "句型框架",
    use: "給學生一個可套用的英文開頭或結構。",
    example: "Sentence frames helped students express their ideas more clearly."
  },
  prompts: {
    zh: "提示",
    use: "可以是問題、圖片、手勢或文字，用來推動學生思考。",
    example: "The visual prompts helped students remember the sequence of the task."
  },
  "gradual release": {
    zh: "逐步放手",
    use: "描述老師從示範、帶著做，到讓學生獨立完成。",
    example: "The teacher used gradual release by modeling first and then letting students try."
  },
  "teacher presence": {
    zh: "教師臨場感",
    use: "描述老師的聲音、節奏、移動與情緒如何穩住教室。",
    example: "The teacher's presence made the class feel calm and focused."
  },
  "classroom atmosphere": {
    zh: "教室氛圍",
    use: "描述整體學習氣氛，例如安全、活潑、專注。",
    example: "Her energy helped create a warm classroom atmosphere."
  },
  rhythm: {
    zh: "節奏",
    use: "描述課程推進速度、停頓與活動轉換的流暢度。",
    example: "The rhythm of the lesson helped students know when to listen and when to respond."
  },
  energy: {
    zh: "能量",
    use: "描述老師帶進教室的精神狀態，不一定是很嗨，而是有生命力。",
    example: "The teacher's energy kept students attentive without making the class feel rushed."
  },
  collaboration: {
    zh: "協作",
    use: "描述學生共同完成任務，而不是各做各的。",
    example: "The task encouraged collaboration because each student had a role."
  },
  "rehearse ideas": {
    zh: "先排練想法",
    use: "描述學生在公開分享前先和同伴試說或整理想法。",
    example: "Pair work allowed students to rehearse ideas before speaking to the whole class."
  },
  "peer interaction": {
    zh: "同儕互動",
    use: "描述學生之間的討論、回應、互相幫助。",
    example: "Peer interaction made the speaking task less intimidating."
  },
  monitoring: {
    zh: "巡視與觀察",
    use: "描述老師在學生工作時走動、聽取、提供適時支持。",
    example: "The teacher's monitoring helped her notice which groups needed support."
  },
  "bilingual support": {
    zh: "雙語支持",
    use: "描述策略性使用中文幫助理解，但仍回到英文任務。",
    example: "Bilingual support helped students confirm the meaning and return to English practice."
  },
  "strategic use": {
    zh: "策略性使用",
    use: "強調不是隨意使用，而是有清楚目的和時機。",
    example: "The strategic use of Chinese made the instructions more accessible."
  },
  accessibility: {
    zh: "可近性／容易進入",
    use: "描述任務是否讓不同程度學生都能進入學習。",
    example: "The visual example increased accessibility for students who needed more support."
  },
  "English input": {
    zh: "英文輸入",
    use: "描述學生聽到、看到並處理的英文內容。",
    example: "The teacher maintained English input while using brief Chinese support."
  },
  "specific feedback": {
    zh: "具體回饋",
    use: "描述回饋指向明確行為，而不是籠統稱讚或批評。",
    example: "Specific feedback helped the teacher understand what to repeat next time."
  },
  reflection: {
    zh: "反思",
    use: "描述老師或學生回頭思考學習過程和下一步。",
    example: "Reflection helped the teacher connect the lesson with her professional growth."
  },
  "actionable next step": {
    zh: "可執行的下一步",
    use: "描述建議小而清楚，老師下一堂課就能試。",
    example: "An actionable next step could be to add one model before group work."
  },
  "learning process": {
    zh: "學習歷程",
    use: "描述學生從理解、練習到表達的過程。",
    example: "The feedback focused on the learning process, not only the final answer."
  }
};

const expandedClassroomObservationSentences = [
  {
    text: "Before suggesting training, I would first clarify what teachers actually need in practice.",
    source: "L&D explainer: needs analysis"
  },
  {
    text: "The observation helps us identify whether the issue is about knowledge, practice, confidence, or classroom conditions.",
    source: "L&D explainer: performance gap"
  },
  {
    text: "A useful next step would be to connect the feedback to one observable classroom behavior.",
    source: "L&D explainer: actionable objectives"
  },
  {
    text: "The teacher gave students several opportunities to practice before expecting independent performance.",
    source: "L&D explainer: practice and transfer"
  },
  {
    text: "The activity seemed aligned with the learning goal, which made the task feel purposeful.",
    source: "L&D explainer: alignment"
  },
  {
    text: "I would look at what students were able to do after the activity, not only whether they enjoyed it.",
    source: "L&D explainer: evaluation"
  },
  {
    text: "The lesson showed strong classroom management because students knew the routine and stayed with the task.",
    source: "OECD Global Teaching InSights"
  },
  {
    text: "The teacher created a supportive climate by giving students time to think before responding.",
    source: "OECD Global Teaching InSights"
  },
  {
    text: "The instructional sequence moved from modeling to guided practice and then to student response.",
    source: "OECD Global Teaching InSights"
  },
  {
    text: "Students had opportunities to explain their thinking, which made their learning more visible.",
    source: "OECD Global Teaching InSights"
  },
  {
    text: "The teacher used questions to check how students were making sense of the task.",
    source: "OECD Global Teaching InSights"
  },
  {
    text: "The feedback discussion could focus on one classroom moment that both the teacher and observer noticed.",
    source: "OECD teacher professional learning"
  },
  {
    text: "Peer observation works best when the conversation is specific, respectful, and connected to student learning.",
    source: "OECD teacher professional learning"
  },
  {
    text: "One way to make the feedback more useful is to turn it into a small experiment for the next lesson.",
    source: "OECD teacher professional learning"
  },
  {
    text: "The observation gave us a shared example to discuss, rather than a general impression.",
    source: "OECD teacher professional learning"
  },
  {
    text: "The feedback was useful because it pointed to a concrete teaching move the teacher could try again.",
    source: "OECD TALIS feedback"
  },
  {
    text: "A combination of classroom observation and student work can give a fuller picture of teaching practice.",
    source: "OECD TALIS feedback"
  },
  {
    text: "The conversation felt developmental because it focused on growth rather than judgment.",
    source: "OECD TALIS feedback"
  },
  {
    text: "The teacher reflected on what worked and what might need adjustment in the next lesson.",
    source: "UNESCO lifelong learning"
  },
  {
    text: "A reflective question could help the teacher connect the lesson to a longer professional learning goal.",
    source: "UNESCO lifelong learning"
  },
  {
    text: "The discussion supported continuous professional learning because it connected classroom evidence with next steps.",
    source: "UNESCO lifelong learning"
  },
  {
    text: "The teacher adapted the support when students showed they needed more time to process the task.",
    source: "Global education discussion: differentiated support"
  },
  {
    text: "The task invited students to participate in different ways, which made the lesson more inclusive.",
    source: "Global education discussion: inclusive practice"
  },
  {
    text: "The use of technology supported learning because it made the instructions easier to revisit.",
    source: "Global education discussion: digital pedagogy"
  },
  {
    text: "Students seemed more confident when the teacher gave an example before asking them to speak.",
    source: "Public lesson-study discussion"
  },
  {
    text: "The lesson would be even stronger if students had more time to compare their ideas with a partner.",
    source: "Public lesson-study discussion"
  }
];

const expandedClassroomObservationPrompts = [
  {
    source: "L&D explainer",
    items: [
      "What performance gap did you notice in the lesson?",
      "Was the issue about instructions, practice time, confidence, or resources?",
      "What would be one small learning objective for the next coaching cycle?"
    ]
  },
  {
    source: "OECD public observation",
    items: [
      "What classroom routine helped students stay on task?",
      "What evidence showed that students understood the instructions?",
      "Which teaching move made students' thinking visible?"
    ]
  },
  {
    source: "OECD peer feedback",
    items: [
      "Which specific classroom moment would you bring into the feedback conversation?",
      "How can you make the feedback developmental rather than evaluative?",
      "What small experiment could the teacher try next time?"
    ]
  },
  {
    source: "TALIS feedback",
    items: [
      "What kind of feedback would be useful for improving teaching practice?",
      "What evidence besides observation could support your feedback?",
      "How would you connect the feedback to student learning?"
    ]
  },
  {
    source: "UNESCO lifelong learning",
    items: [
      "What reflective question could help the teacher think about the lesson?",
      "How does this observation connect to the teacher's professional growth?",
      "What is one next step that feels realistic and sustainable?"
    ]
  }
];

const topicSourceExpansions = {
  "student-engagement": {
    sentences: [
      { text: "Students were more engaged when the task gave them a clear reason to communicate.", source: "OECD public observation: instructional practice" },
      { text: "The activity invited students to participate in different ways, which made engagement more visible.", source: "Global education discussion: inclusive participation" },
      { text: "I would look for evidence of engagement in what students said, produced, or tried during the task.", source: "L&D explainer: evidence of performance" },
      { text: "The teacher's prompts helped students move from listening to active participation.", source: "OECD Global Teaching InSights" },
      { text: "One useful question is whether students had enough ownership in the activity.", source: "UNESCO lifelong learning: reflective practice" }
    ],
    prompts: [
      "What evidence showed that students were actively participating?",
      "Did the task give students a reason to communicate?",
      "Which students seemed less engaged, and what support might help them join?"
    ]
  },
  scaffolding: {
    sentences: [
      { text: "The teacher reduced the difficulty of the task by giving students a clear model first.", source: "L&D explainer: modeling and practice" },
      { text: "The scaffold helped students move from understanding the input to producing their own response.", source: "OECD public observation: instructional support" },
      { text: "Sentence frames gave students a practical bridge into academic language.", source: "Global education discussion: language support" },
      { text: "The teacher adjusted the support when students showed they needed more processing time.", source: "Public lesson-study discussion" },
      { text: "A next step could be to gradually remove the support as students become more confident.", source: "L&D explainer: transfer of learning" }
    ],
    prompts: [
      "What support did the teacher provide before students worked independently?",
      "How did the support help students produce language or ideas?",
      "When could the teacher reduce the support?"
    ]
  },
  "teacher-presence": {
    sentences: [
      { text: "The teacher's calm presence helped create a classroom climate where students were willing to try.", source: "OECD Global Teaching InSights: social-emotional support" },
      { text: "Her movement around the room made the support feel immediate but not intrusive.", source: "Public classroom observation" },
      { text: "The teacher's energy gave the lesson rhythm without making it feel rushed.", source: "Global education discussion: classroom climate" },
      { text: "Students seemed more settled when the teacher used a steady tone and clear signals.", source: "OECD public observation: classroom management" },
      { text: "A reflective question could focus on how teacher presence shapes student confidence.", source: "UNESCO lifelong learning: reflective teacher development" }
    ],
    prompts: [
      "How did the teacher's tone, movement, or rhythm affect the class?",
      "What classroom moment showed teacher presence clearly?",
      "How did students respond to the teacher's presence?"
    ]
  },
  "group-discussion": {
    sentences: [
      { text: "The group task gave students time to rehearse their ideas before speaking publicly.", source: "OECD public observation: student discourse" },
      { text: "Students participated more productively when the discussion had a clear role and output.", source: "L&D explainer: task design" },
      { text: "The teacher monitored the groups and offered support without taking over the discussion.", source: "Public lesson-study discussion" },
      { text: "The quality of discussion improved when students had a sentence frame to start from.", source: "Global education discussion: language scaffolding" },
      { text: "One adjustment could be to give groups a more specific question to discuss.", source: "OECD teacher professional learning: actionable feedback" }
    ],
    prompts: [
      "What made the group discussion purposeful?",
      "How did the teacher monitor without interrupting student thinking?",
      "What would make the next discussion more balanced?"
    ]
  },
  "bilingual-support": {
    sentences: [
      { text: "The teacher used Chinese briefly to clarify meaning and then returned students to the English task.", source: "Global education discussion: bilingual support" },
      { text: "The bilingual support made the task more accessible without replacing English practice.", source: "Inclusive education discussion" },
      { text: "Students seemed more ready to respond after the teacher confirmed the key idea in Chinese.", source: "Public classroom observation" },
      { text: "The teacher balanced English input with strategic first-language support.", source: "OECD public observation: instructional support" },
      { text: "A useful next step could be to make the bilingual support shorter and more targeted.", source: "L&D explainer: reducing support over time" }
    ],
    prompts: [
      "When did Chinese support help students understand the task?",
      "Did the bilingual support lead students back to English use?",
      "How could the support be more strategic next time?"
    ]
  },
  "feedback-reflection": {
    sentences: [
      { text: "The feedback was useful because it connected a specific teaching move to student learning.", source: "OECD TALIS feedback" },
      { text: "The teacher reflected on what worked and what could be adjusted in the next lesson.", source: "UNESCO lifelong learning" },
      { text: "A stronger feedback conversation would focus on one observable classroom moment.", source: "OECD teacher professional learning" },
      { text: "The next step should feel small enough for the teacher to try immediately.", source: "L&D explainer: actionable next steps" },
      { text: "Combining classroom observation with student work can make feedback more grounded.", source: "OECD TALIS feedback" }
    ],
    prompts: [
      "What specific evidence would make the feedback more useful?",
      "How can the feedback sound developmental rather than evaluative?",
      "What is one realistic next step for the teacher?"
    ]
  }
};

function hydrateThemeDatabase() {
  const weekOne = themes[0];
  weekOne.sentences = [
    ...weekOne.sentences.map((sentence) => ({
      text: sentence,
      source: "Week 1 foundation pack"
    })),
    ...expandedClassroomObservationSentences
  ];
  weekOne.practicePrompts = expandedClassroomObservationPrompts.flatMap((group) =>
    group.items.map((item) => ({ text: item, source: group.source }))
  );
  weekOne.questionGroups = expandedClassroomObservationPrompts;
  weekOne.sourceThreads = Object.values(sourceThreads);

  themes.slice(1).forEach((theme) => {
    const expansion = topicSourceExpansions[theme.id];
    if (!expansion) return;
    theme.sentences = [
      ...expansion.sentences,
      ...theme.sentences.map((sentence) => ({
        text: sentence,
        source: "Original topic seed"
      }))
    ];
    theme.practicePrompts = expansion.prompts.map((prompt) => ({
      text: prompt,
      source: "Source-informed topic prompt"
    }));
    theme.questionGroups = [
      {
        source: `${theme.title}: source-informed prompts`,
        items: expansion.prompts
      }
    ];
    theme.sourceThreads = Object.values(sourceThreads);
  });
}

hydrateThemeDatabase();

const categories = {
  opening: "開場句",
  praise: "稱讚句",
  observation: "觀察句",
  suggestion: "建議句",
  favorite: "喜歡的句型",
  practice: "想再練習",
  meeting: "下次開會可用"
};

const defaultBank = [
  {
    category: "opening",
    text: "One thing that stood out to me was how clearly you structured the lesson."
  },
  {
    category: "praise",
    text: "Your use of visual prompts helped students follow the task without feeling lost."
  },
  {
    category: "suggestion",
    text: "One next step could be to give students a short sentence frame before pair work."
  }
];

const dialoguePrompts = [
  "So, how did the lesson go?",
  "That's good to hear. Do you have any suggestions?",
  "Could you connect that suggestion to students' learning?",
  "Great. Now try saying the whole feedback in two or three connected sentences."
];

const stages = [
  { title: "選主題", caption: "Week pack" },
  { title: "今日一句", caption: "Listen & repeat" },
  { title: "30句句型", caption: "Pick 10" },
  { title: "改寫", caption: "Keep your logic" },
  { title: "對話", caption: "Scenario" },
  { title: "回顧", caption: "Phrase bank" }
];

const state = {
  themeId: localStorage.getItem("themeId") || themes[0].id,
  currentStage: Number(localStorage.getItem("currentStage") || 0),
  maxUnlockedStage: Number(localStorage.getItem("maxUnlockedStage") || 0),
  coreSentenceMode: localStorage.getItem("coreSentenceMode") || "builtIn",
  completed: Number(localStorage.getItem("completed") || 0),
  streak: Number(localStorage.getItem("streak") || 0),
  dialogueTurns: Number(localStorage.getItem("dialogueTurns") || 0),
  bank: JSON.parse(localStorage.getItem("phraseBank") || "null") || defaultBank,
  chatStep: 0
};

const $ = (selector) => document.querySelector(selector);

let availableVoices = [];

function refreshVoices() {
  availableVoices = speechSynthesis.getVoices();
}

function getMediumFemaleVoice() {
  refreshVoices();
  const englishVoices = availableVoices.filter((voice) => /^en(-|_)?/i.test(voice.lang));
  const femaleNameHints = [
    "samantha",
    "karen",
    "victoria",
    "susan",
    "zira",
    "jenny",
    "aria",
    "female",
    "woman"
  ];

  return (
    englishVoices.find((voice) =>
      femaleNameHints.some((hint) => voice.name.toLowerCase().includes(hint))
    ) ||
    englishVoices.find((voice) => /google|microsoft|apple/i.test(voice.name)) ||
    englishVoices[0] ||
    availableVoices[0]
  );
}

function currentTheme() {
  return themes.find((theme) => theme.id === state.themeId) || themes[0];
}

function sentenceText(sentence) {
  return typeof sentence === "string" ? sentence : sentence.text;
}

function sentenceSource(sentence) {
  return typeof sentence === "string" ? "Theme pack" : sentence.source;
}

function getVocabCard(word) {
  return (
    vocabularyCards[word] || {
      zh: "專業用語",
      use: "可用在教學觀察、回饋或課程討論中。",
      example: `This is a useful phrase when discussing ${word}.`
    }
  );
}

function addToPhraseBank(text, category, source = "") {
  const normalized = text.trim();
  if (!normalized) return;

  const exists = state.bank.some(
    (item) => item.text === normalized && item.category === category
  );

  if (!exists) {
    state.bank.unshift({ category, text: normalized, source });
  }

  state.maxUnlockedStage = Math.max(state.maxUnlockedStage, 5);
  saveState();
  renderBank();
  renderStats();
  renderStages();
}

function isSavedPhrase(text, category) {
  return state.bank.some((item) => item.text === text && item.category === category);
}

function getPersonalSentenceGroups() {
  const preferredCategories = ["favorite", "practice", "observation", "suggestion", "opening", "praise", "meeting"];
  return preferredCategories
    .map((category) => ({
      title: categories[category],
      items: state.bank
        .filter((item) => item.category === category)
        .map((item) => item.text)
    }))
    .filter((group) => group.items.length > 0);
}

function saveState() {
  localStorage.setItem("themeId", state.themeId);
  localStorage.setItem("currentStage", String(state.currentStage));
  localStorage.setItem("maxUnlockedStage", String(state.maxUnlockedStage));
  localStorage.setItem("coreSentenceMode", state.coreSentenceMode);
  localStorage.setItem("completed", String(state.completed));
  localStorage.setItem("streak", String(state.streak));
  localStorage.setItem("dialogueTurns", String(state.dialogueTurns));
  localStorage.setItem("phraseBank", JSON.stringify(state.bank));
}

function unlockStage(stageIndex) {
  state.maxUnlockedStage = Math.max(state.maxUnlockedStage, stageIndex);
  state.currentStage = stageIndex;
  saveState();
  renderStages();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderStages() {
  state.maxUnlockedStage = Math.min(Math.max(state.maxUnlockedStage, 0), stages.length - 1);
  state.currentStage = Math.min(Math.max(state.currentStage, 0), state.maxUnlockedStage);
  $("#stageNav").innerHTML = stages
    .map((stage, index) => {
      const active = index === state.currentStage ? " active" : "";
      const locked = index > state.maxUnlockedStage ? " locked" : "";
      return `
        <button class="stage-tab${active}${locked}" type="button" data-stage-tab="${index}" ${locked ? "disabled" : ""}>
          <strong>${index + 1}. ${stage.title}</strong>
          <span>${stage.caption}</span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-stage]").forEach((panel) => {
    panel.classList.toggle("active", Number(panel.dataset.stage) === state.currentStage);
  });

  document.querySelectorAll("[data-stage-tab]").forEach((button) => {
    button.addEventListener("click", () => {
      const stageIndex = Number(button.dataset.stageTab);
      if (stageIndex <= state.maxUnlockedStage) {
        state.currentStage = stageIndex;
        saveState();
        renderStages();
      }
    });
  });
}

function renderThemes() {
  $("#themeCount").textContent = `${themes.length} themes`;
  $("#themeList").innerHTML = themes
    .map((theme) => {
      const active = theme.id === state.themeId ? " active" : "";
      return `
        <button class="theme-button${active}" type="button" data-theme="${theme.id}">
          <span class="theme-icon">${theme.icon}</span>
          <span>
            <span class="theme-title">${theme.title}</span>
            <span class="theme-subtitle">${theme.zh}</span>
          </span>
        </button>
      `;
    })
    .join("");

  document.querySelectorAll("[data-theme]").forEach((button) => {
    button.addEventListener("click", () => {
      state.themeId = button.dataset.theme;
      saveState();
      render();
    });
  });
}

function renderDaily() {
  const theme = currentTheme();
  const dayIndex = new Date().getDay() % theme.sentences.length;
  const dailySentence = theme.sentences[dayIndex];
  const promptIndex = dayIndex % (theme.practicePrompts?.length || 1);
  const dailyPrompt = theme.practicePrompts?.[promptIndex];
  $("#dailyTitle").textContent = `${theme.zh}：今日一句`;
  $("#dailySentence").textContent = sentenceText(dailySentence);
  $("#dailySource").textContent = sentenceSource(dailySentence);
  $("#taskSteps").innerHTML = theme.steps
    .map((step) => `<div class="task-step">${step}</div>`)
    .join("");
  $("#dailyQuestion").innerHTML = dailyPrompt
    ? `<strong>今日題目</strong>${dailyPrompt.text}<br><small>${dailyPrompt.source}</small>`
    : `<strong>今日題目</strong>Use today's sentence to describe one real classroom moment.`;
  $("#themeToolkit").innerHTML = `
    <article class="toolkit-card wide">
      <h3>中文情境</h3>
      <p>${theme.situation}</p>
    </article>
    <article class="toolkit-card">
      <h3>比較專業的詞</h3>
      <ul>${theme.professionalWords.map((word) => `<li>${word}</li>`).join("")}</ul>
    </article>
    <article class="toolkit-card">
      <h3>比較口語的說法</h3>
      <ul>${theme.spokenWords.map((word) => `<li>${word}</li>`).join("")}</ul>
    </article>
    <article class="toolkit-card wide">
      <h3>可替換句型</h3>
      <p>${theme.pattern}</p>
    </article>
    ${
      theme.weeklyTasks
        ? `<article class="toolkit-card wide">
            <h3>本週練習任務</h3>
            <ul>${theme.weeklyTasks.map((task) => `<li>${task}</li>`).join("")}</ul>
          </article>`
        : ""
    }
    ${
      theme.sourceThreads
        ? `<article class="toolkit-card wide">
            <h3>題庫來源脈絡</h3>
            <ul>${theme.sourceThreads.map((source) => `<li><a href="${source.url}" target="_blank" rel="noreferrer">${source.label}</a></li>`).join("")}</ul>
          </article>`
        : ""
    }
  `;

  $("#questionBank").innerHTML = theme.questionGroups
    ? theme.questionGroups
        .map(
          (group) => `
          <div>
            <strong>${group.source}</strong>
            <ul>${group.items.map((item) => `<li>${item}</li>`).join("")}</ul>
          </div>
        `
        )
        .join("")
    : `<strong>題目庫</strong><ul><li>What did the teacher do?</li><li>How did students respond?</li><li>What could be adjusted next time?</li></ul>`;

  $("#vocabCards").innerHTML = theme.professionalWords
    .map((word) => {
      const card = getVocabCard(word);
      const phrase = `${word}: ${card.example}`;
      return `
        <article class="vocab-card">
          <div>
            <span class="tag">專業詞</span>
            <h3>${word}</h3>
            <p class="vocab-zh">${card.zh}</p>
          </div>
          <p>${card.use}</p>
          <blockquote>${card.example}</blockquote>
          <button class="mini-save-button" type="button" data-save-vocab="${encodeURIComponent(phrase)}">↻ 再練</button>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll("[data-save-vocab]").forEach((button) => {
    button.addEventListener("click", () => {
      addToPhraseBank(decodeURIComponent(button.dataset.saveVocab), "practice", `${theme.title} vocabulary card`);
      button.textContent = "已存入再練習";
    });
  });

  $("#builtInModeButton").classList.toggle("active", state.coreSentenceMode === "builtIn");
  $("#savedModeButton").classList.toggle("active", state.coreSentenceMode === "saved");

  const personalGroups = getPersonalSentenceGroups();
  const usingSaved = state.coreSentenceMode === "saved";
  const coreGroups = usingSaved ? personalGroups : theme.sentenceGroups || [];

  $("#coreSourceNote").innerHTML = usingSaved
    ? `<strong>來源：</strong>你在前端 localStorage 裡存下來的句庫內容。這些句子來自你按過「喜歡」、「再練」或「收藏到句庫」的項目。`
    : `<strong>來源：</strong>內建在前端 app.js 的主題種子句型與 source-informed 題庫。你可以切到「我的儲存句型」改用自己的句庫練習。`;

  $("#questionBank").style.display = usingSaved ? "none" : "";
  $("#vocabCards").style.display = usingSaved ? "none" : "";

  $("#coreSentences").innerHTML = coreGroups.length
    ? coreGroups
        .map(
          (group, index) => `
          <details class="sentence-group" ${index === 0 ? "open" : ""}>
            <summary>${group.title}</summary>
            <ol>
              ${group.items
                .map(
                  (sentence) => `
                    <li>
                      <div class="sentence-row">
                        <span>${sentence}</span>
                        <span class="mini-actions">
                          <button class="mini-button${isSavedPhrase(sentence, "favorite") ? " saved" : ""}" type="button" data-save-sentence="favorite" data-sentence="${encodeURIComponent(sentence)}" title="存到喜歡的句型">♡</button>
                          <button class="mini-button${isSavedPhrase(sentence, "practice") ? " saved" : ""}" type="button" data-save-sentence="practice" data-sentence="${encodeURIComponent(sentence)}" title="存到想再練習">↻</button>
                        </span>
                      </div>
                    </li>
                  `
                )
                .join("")}
            </ol>
          </details>
        `
        )
        .join("")
    : `<div class="empty-state">你還沒有儲存任何句型。回到「今日一句」或內建句型，按 ♡ 或 ↻ 就會出現在這裡。</div>`;

  document.querySelectorAll("[data-save-sentence]").forEach((button) => {
    button.addEventListener("click", () => {
      const sentence = decodeURIComponent(button.dataset.sentence);
      const category = button.dataset.saveSentence;
      addToPhraseBank(sentence, category, `${theme.title} core sentence`);
      button.classList.add("saved");
    });
  });

  $("#builtInModeButton").onclick = () => {
    state.coreSentenceMode = "builtIn";
    saveState();
    renderDaily();
  };

  $("#savedModeButton").onclick = () => {
    state.coreSentenceMode = "saved";
    saveState();
    renderDaily();
  };
}

function inferRewrite(input) {
  const text = input.trim();
  const hasEnergy = /享受|熱情|韻律|energy|rhythm/i.test(text);
  const hasRoutine = /流程|步驟|指令|routine|instruction/i.test(text);
  const hasSupport = /支持|圖片|手勢|鷹架|support|visual/i.test(text);
  const hasDiscussion = /討論|小組|pair|group/i.test(text);

  if (hasEnergy) {
    return {
      intuitive: "The teacher seemed to truly enjoy the class.",
      professional:
        "The teacher's energy and rhythm helped create a lively and engaging classroom atmosphere.",
      spoken:
        "I could feel that the teacher really enjoyed teaching this class. Whether she was leading from the front or walking around to check on students, she brought a strong sense of rhythm and energy."
    };
  }

  if (hasRoutine) {
    return {
      intuitive: "The teacher made the lesson easy to follow.",
      professional:
        "The teacher established clear routines and gave students enough guidance to move through the lesson with confidence.",
      spoken:
        "I noticed that the lesson flow was very clear. Students seemed to know what to do next because the teacher gave them simple steps and checked their understanding along the way."
    };
  }

  if (hasSupport) {
    return {
      intuitive: "The teacher gave students useful support.",
      professional:
        "The teacher used verbal and visual scaffolds to support students' understanding and participation.",
      spoken:
        "I think the support was helpful because students did not have to rely only on listening. The teacher used visuals, gestures, and short explanations to help them follow the English task."
    };
  }

  if (hasDiscussion) {
    return {
      intuitive: "The discussion helped students share their ideas.",
      professional:
        "The group discussion created a purposeful space for students to rehearse and clarify their thinking.",
      spoken:
        "The group discussion worked well because students had time to try out their ideas before speaking to the whole class. That made the final sharing feel more confident."
    };
  }

  return {
    intuitive: "The teacher helped students understand the lesson more clearly.",
    professional:
      "The teacher provided clear support that helped students participate more confidently in the learning process.",
    spoken:
      "What I noticed was that the teacher gave students enough support to stay with the lesson. It made the class feel clear, manageable, and easier for students to join."
  };
}

function renderRewriteCards(target, input) {
  const versions = inferRewrite(input);
  target.innerHTML = `
    <article class="version-card">
      <h3>1. 直覺版</h3>
      <p>${versions.intuitive}</p>
    </article>
    <article class="version-card">
      <h3>2. 專業觀察版</h3>
      <p>${versions.professional}</p>
    </article>
    <article class="version-card">
      <h3>3. 可口說回饋版</h3>
      <p>${versions.spoken}</p>
    </article>
  `;
  return versions;
}

function renderBank() {
  const filter = $("#bankFilter").value;
  const items = state.bank.filter((item) => filter === "all" || item.category === filter);
  $("#phraseBank").innerHTML = items.length
    ? items
        .map(
          (item) => `
          <article class="phrase-card">
            <span class="tag">${categories[item.category] || "句庫"}</span>
            <p>${item.text}</p>
            ${item.source ? `<small>${item.source}</small>` : ""}
          </article>
        `
        )
        .join("")
    : `<div class="empty-state">這個分類還沒有句子。先從今日任務收藏一句吧。</div>`;
}

function renderStats() {
  $("#streakCount").textContent = state.streak;
  $("#completedCount").textContent = state.completed;
  $("#savedCount").textContent = state.bank.length;
  $("#practiceCount").textContent = state.dialogueTurns;

  const theme = currentTheme();
  $("#weeklyReview").textContent = `This week, you practiced describing ${theme.title}. You are building useful phrases such as "${theme.pattern}" Next, try adding one concrete classroom example after each observation.`;
}

function addMessage(role, text) {
  const message = document.createElement("div");
  message.className = `message ${role}`;
  message.textContent = text;
  $("#chatWindow").appendChild(message);
  $("#chatWindow").scrollTop = $("#chatWindow").scrollHeight;
}

function resetDialogue() {
  state.chatStep = 0;
  $("#chatWindow").innerHTML = "";
  addMessage("ai", dialoguePrompts[0]);
}

function coachReply(answer) {
  const rewrites = inferRewrite(answer);
  if (/開始對話|start/i.test(answer)) {
    state.chatStep = 0;
    return dialoguePrompts[0];
  }
  if (state.chatStep < dialoguePrompts.length - 1) {
    state.chatStep += 1;
    return `${dialoguePrompts[state.chatStep]} A safe version you could use is: "${rewrites.professional}"`;
  }
  state.chatStep += 1;
  return `Nice. Here is a polished version that keeps your logic: I noticed that students were quite engaged during the activity. The teacher provided clear instructions, and this helped students stay on task. One possible adjustment could be to give a bit more time for discussion, so more students have a chance to share their ideas.`;
}

function bindEvents() {
  document.querySelectorAll("[data-next-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      unlockStage(Number(button.dataset.nextStage));
    });
  });

  $("#rewriteButton").addEventListener("click", () => {
    renderRewriteCards($("#rewriteResults"), $("#rewriteInput").value);
    state.maxUnlockedStage = Math.max(state.maxUnlockedStage, 4);
    saveState();
    renderStages();
  });

  $("#rewriteDailyButton").addEventListener("click", () => {
    const input = $("#dailyInput").value || sentenceText(currentTheme().sentences[0]);
    renderRewriteCards($("#dailyFeedback"), input);
    state.maxUnlockedStage = Math.max(state.maxUnlockedStage, 4);
    saveState();
    renderStages();
  });

  $("#saveDailyButton").addEventListener("click", () => {
    const input = $("#dailyInput").value.trim();
    const versions = inferRewrite(input || sentenceText(currentTheme().sentences[0]));
    addToPhraseBank(versions.spoken, "observation", "AI rewrite");
  });

  $("#favoriteDailyButton").addEventListener("click", () => {
    addToPhraseBank($("#dailySentence").textContent, "favorite", $("#dailySource").textContent);
  });

  $("#practiceDailyButton").addEventListener("click", () => {
    addToPhraseBank($("#dailySentence").textContent, "practice", $("#dailySource").textContent);
  });

  $("#completeTaskButton").addEventListener("click", () => {
    state.completed += 1;
    state.streak += 1;
    state.maxUnlockedStage = Math.max(state.maxUnlockedStage, 2);
    saveState();
    renderStats();
    renderStages();
  });

  $("#speakButton").addEventListener("click", () => {
    const utterance = new SpeechSynthesisUtterance($("#dailySentence").textContent);
    const voice = getMediumFemaleVoice();
    utterance.lang = "en-US";
    utterance.voice = voice || null;
    utterance.pitch = 0.88;
    utterance.rate = 0.9;
    utterance.volume = 1;
    speechSynthesis.cancel();
    speechSynthesis.speak(utterance);
  });

  $("#sendChatButton").addEventListener("click", sendChat);
  $("#chatInput").addEventListener("keydown", (event) => {
    if (event.key === "Enter") sendChat();
  });

  $("#resetDialogueButton").addEventListener("click", resetDialogue);
  $("#bankFilter").addEventListener("change", renderBank);
}

function sendChat() {
  const input = $("#chatInput");
  const answer = input.value.trim();
  if (!answer) return;
  addMessage("user", answer);
  input.value = "";
  state.dialogueTurns += 1;
  state.maxUnlockedStage = Math.max(state.maxUnlockedStage, 5);
  saveState();
  setTimeout(() => {
    addMessage("ai", coachReply(answer));
    renderStats();
  }, 250);
}

function render() {
  renderThemes();
  renderDaily();
  renderBank();
  renderStats();
  renderStages();
}

bindEvents();
refreshVoices();
speechSynthesis.addEventListener("voiceschanged", refreshVoices);
render();
renderRewriteCards($("#rewriteResults"), $("#rewriteInput").value);
resetDialogue();
