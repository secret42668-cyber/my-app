const questionGroups = {
  year_review: [
    {
      stage: "moment",
      category: "時刻與畫面",
      intensity: "light",
      actionType: "awareness",
      helperText: "不用急著解釋原因，先把那個畫面留下來。",
      items: [
        "現在想起來，今年最深刻的一個畫面是什麼？",
        "今年最開心大笑出聲的一個瞬間，是因為什麼？",
        "回想一個今年最痛苦的時刻，你想對當時的自己說什麼？",
        "相簿裡有哪一張最莫名其妙的照片？",
        "今年的一個重要節日，當時是怎麼過的？",
        "今年有哪一個第一次，現在想起來還有感覺？",
        "如果有人今年幫你拍了一部紀錄片，什麼一定要被記錄？",
        "有沒有一個很小，但你其實一直記得的瞬間？",
        "今年有哪一個地方，讓你留下特別清楚的記憶？",
      ],
    },
    {
      stage: "feeling",
      category: "感受與狀態",
      intensity: "medium",
      actionType: "self_care",
      helperText: "可以只寫幾個詞，不必整理成完整故事。",
      items: [
        "今年最困擾你的命題是什麼？",
        "今年有沒有好好吃飯、睡覺、休息、運動？",
        "今年你花最多時間精力在做什麼？是否收到預期成效？",
        "今年的工作有帶來成就感嗎？",
        "今年有沒有一段時間，你其實在撐？",
        "哪一件事，讓你比想像中更疲累？",
        "今年哪一種情緒，陪你待得最久？",
        "今年有哪一刻，你發現自己需要停一下？",
      ],
    },
    {
      stage: "growth",
      category: "成長與自我",
      intensity: "medium",
      actionType: "learning",
      helperText: "那個清楚不一定很大，也可能只是一點點分辨。",
      items: [
        "在困境與低潮中，你發現自己哪些問題需要改善？",
        "今年最重要的決定，現在帶來什麼改變？",
        "今年你最重要的學習是什麼？",
        "年初訂下的目標實現了嗎？",
        "如果要選一個年度代表字，你會選什麼？",
        "有沒有一件事，讓你重新認識自己？",
        "你今年更確定了什麼？",
        "今年的你，有沒有在哪件事上比較敢誠實了？",
      ],
    },
    {
      stage: "relationship",
      category: "關係與他人",
      intensity: "medium",
      actionType: "relationship",
      helperText: "可以是靠近、遠離，也可以是某個還沒說出口的感謝。",
      items: [
        "今年最想感謝的一個人是誰？",
        "今年影響你最深的三個人是誰？",
        "今年新認識，或更認識的一個人是誰？",
        "今年跟家人一起創造的回憶是什麼？",
        "有沒有還沒有跟友人說的安慰、道歉或分享？",
        "對所愛的人，有沒有想說卻尚未說的話？",
        "有沒有一段關係，今年變得不一樣了？",
        "今年誰曾經用很小的方式接住你？",
        "今年有沒有一段關係，讓你重新理解距離？",
      ],
    },
    {
      stage: "action",
      category: "行動與選擇",
      intensity: "medium",
      actionType: "action",
      helperText: "先看見自己做過的事，不急著評分。",
      items: [
        "今年做的突破舒適圈的一件事是什麼？",
        "今年有哪一件幫助別人的事，你還記得？",
        "今年培養的新興趣，或延續的興趣是什麼？",
        "今年完成的一個好作品是什麼？",
        "有沒有一件你本來不想做，但後來做了的事？",
        "今年有哪一次選擇，讓你更像現在的自己？",
        "今年有哪個小行動，後來帶來意外的改變？",
        "今年你把力氣放在哪裡，覺得是值得的？",
      ],
    },
    {
      stage: "letting_go",
      category: "放下與結束",
      intensity: "deep",
      actionType: "letting_go",
      helperText: "放下不一定是忘記，也可能只是不用一直拿在手上。",
      items: [
        "今年你是否放棄了什麼？",
        "今年的離開或分開，現在消化到哪裡了？",
        "希望明年行事曆不要再出現的行程是什麼？",
        "今年最想刪除的手機 App 是哪一個？",
        "有沒有一件事，你其實可以不用再抓著？",
        "今年有什麼期待，後來你決定不再用力抓著？",
        "如果要替今年關上一個抽屜，你會把什麼留在裡面？",
        "今年有什麼消耗，你希望它停在今年就好？",
      ],
    },
  ],
  new_year: [
    {
      stage: "direction",
      category: "方向",
      intensity: "light",
      actionType: "awareness",
      helperText: "先不要急著訂目標，可以從感覺開始。",
      items: [
        "新的一年，你想更靠近什麼樣的狀態？",
        "一年後，你想增加或減少哪些標籤？",
        "如果要選下一個年度代表字，你會選什麼？",
        "如果明年結束時你會滿意，那一年會長什麼樣？",
        "新的一年，你想讓生活多一點什麼？",
        "明年的你，想更靠近哪一種生活感？",
        "如果明年只保留一個關鍵字，你會選哪一個？",
        "你希望明年的自己，在哪件事上更自在？",
        "明年你想把注意力放回哪裡？",
        "新的一年，你想先守住什麼？",
      ],
    },
    {
      stage: "plan",
      category: "行動",
      intensity: "medium",
      actionType: "action",
      helperText: "小到明天就能做，也很好。",
      items: [
        "新的一年目前已經安排的計畫是什麼？",
        "一直沒有做，希望明年可以完成的事是什麼？",
        "夢想清單裡，有哪一個項目想先靠近？",
        "明年想嘗試的一個突破舒適圈挑戰是什麼？",
        "有沒有一件事，你其實已經準備好開始了？",
        "如果只能先做一個小改變，你會想從哪裡開始？",
        "有哪件事，你想先用一週試試看？",
        "明年你想把哪件重要的事，拆得更小一點？",
        "哪一個計畫，如果有人陪你，會比較容易開始？",
        "明年第一個月，你想留給哪件事一點時間？",
      ],
    },
    {
      stage: "relationship",
      category: "關係",
      intensity: "medium",
      actionType: "relationship",
      helperText: "不一定是更用力，也可能是更穩定地出現。",
      items: [
        "新的一年，你想維繫哪個團體或哪段關係？",
        "有沒有一個應該要多經營的人，你想傳訊息給他？",
        "工作上有沒有想改善關係的人？",
        "有沒有一段關係，你想更誠實一點面對？",
        "新的一年，你想把更多時間留給誰？",
        "新的一年，你想用什麼方式照顧一段重要關係？",
        "明年你想少在哪些關係裡勉強自己？",
        "明年你想和誰一起創造一個新的回憶？",
        "有沒有一句話，你希望明年能更早說出口？",
        "新的一年，你想練習怎麼表達需要？",
      ],
    },
    {
      stage: "habit",
      category: "習慣與生活",
      intensity: "medium",
      actionType: "self_care",
      helperText: "不需要完美，只要能被日常接住。",
      items: [
        "明年有沒有照顧自己的安排？",
        "新的一年期待建立的習慣或興趣是什麼？",
        "明年想要繼續保持的習慣是什麼？",
        "有沒有幾項想持續或嘗試的運動？",
        "明年想怎麼替自己設定休息放鬆的 Me time？",
        "有沒有一個很小，但你願意每天留下的位置？",
        "哪一個習慣，會讓你的日子比較有餘裕？",
        "明年你想替身體留下一個什麼樣的位置？",
        "哪一個日常細節，會讓你比較不那麼耗竭？",
        "明年睡前，你想少做一件什麼事？",
      ],
    },
    {
      stage: "adjustment",
      category: "放下與調整",
      intensity: "deep",
      actionType: "letting_go",
      helperText: "這不是否定過去，而是替自己騰出一點位置。",
      items: [
        "哪件事情你願意丟棄、放手、不再執著？",
        "明年有沒有不想再聯絡的人？",
        "檢視自己的消費習慣，有沒有想改變的地方？",
        "讓你覺得心累的事，有沒有替代方案？",
        "有沒有一種過去的做法，你不想再延續？",
        "明年你想少把力氣花在哪裡？",
        "明年有什麼標準，你想試著放鬆一點？",
        "你想把哪一種反覆消耗，留在今年就好？",
        "明年你想少答應哪一類事情？",
        "有沒有一個責任，你想重新分配，而不是自己扛著？",
      ],
    },
  ],
};

const questions = Object.entries(questionGroups).flatMap(([mode, groups]) =>
  groups.flatMap((group) =>
    group.items.map((questionText, index) => ({
      id: `${mode === "year_review" ? "yr" : "ny"}_${group.stage}_${String(index + 1).padStart(3, "0")}`,
      mode,
      stage: group.stage,
      category: group.category,
      intensity: group.intensity,
      questionText,
      helperText: group.helperText,
      actionEnabled: true,
      actionType: group.actionType,
    })),
  ),
);

const stageOrder = {
  year_review: ["moment", "feeling", "growth", "relationship", "action", "letting_go"],
  new_year: ["direction", "plan", "relationship", "habit", "adjustment"],
};

const labels = {
  year_review: "年末回顧",
  new_year: "新年展望",
};

const shareStyleLabels = {
  year_review_blue: "年末回顧夜藍",
  new_year_red: "年度展望暖紅",
  paper_warm: "溫紙",
  night_drawer: "夜晚抽屜",
  minimal_white: "極簡白",
};

const makerLogoPath = "assets/seed-tree.png";

const actionSeeds = {
  awareness: {
    options: [
      {
        label: "把這個畫面留成一段小紀錄",
        actionText: "把「{memory}」寫成一段小紀錄，先不用解釋它為什麼重要。",
        reminderText: "今天，有沒有一個畫面值得被你留下來？",
      },
      {
        label: "用三句話寫下那個瞬間",
        actionText: "用三句話寫下「{memory}」：發生了什麼、你感覺到什麼、現在還記得什麼。",
        reminderText: "那個瞬間裡，最想被留下的是什麼？",
      },
      {
        label: "找一張照片替這段記憶命名",
        actionText: "找一張和「{memory}」有關的照片，替它加上一句你看得懂的說明。",
        reminderText: "今天，要不要替一個記憶留下名字？",
      },
    ],
  },
  action: {
    options: [
      {
        label: "先做一次小到可以開始的版本",
        actionText: "替「{thing}」找一個小到明天就能開始的版本，先做一次就好。",
        reminderText: "今天，這件事最小的開始可以是什麼？",
      },
      {
        label: "把這件事安排成一週的小嘗試",
        actionText: "把「{thing}」安排成一週的小嘗試，不先要求結果，只觀察它適不適合你。",
        reminderText: "這週，哪一步可以先試試看？",
      },
      {
        label: "把想做的事拆成三個比較不難的步驟",
        actionText: "把「{thing}」拆成三個比較不難的步驟，今天只處理第一步。",
        reminderText: "這件事的第一步，可以再小一點嗎？",
      },
    ],
  },
  relationship: {
    options: [
      {
        label: "傳一個訊息給{person}",
        actionText: "傳一個簡短訊息給{person}，不用寫得很完整，只要讓對方知道你有想起。",
        reminderText: "今天，你想把哪一句話傳給{person}？",
      },
      {
        label: "向{person}說一句之前沒有說出口的話",
        actionText: "先寫下想向{person}說、但之前沒有說出口的一句話；要不要傳出去，可以之後再決定。",
        reminderText: "有沒有一句話，你想先寫給{person}？",
      },
      {
        label: "留一段不被打擾的時間給{person}",
        actionText: "這週留一段不被打擾的時間給{person}，可以是一餐飯、一通電話，或只是好好回一則訊息。",
        reminderText: "這週，你想把一點時間留給{person}嗎？",
      },
    ],
  },
  self_care: {
    options: [
      {
        label: "替自己留一段不用補進度的時間",
        actionText: "替自己留 10 分鐘，不拿來補進度，也不拿來責怪自己。",
        reminderText: "今天，你有沒有替自己留下一點位置？",
      },
      {
        label: "先照顧一件身體正在提醒你的事",
        actionText: "今天先照顧一件身體需要的事：吃飯、睡覺、走路或休息。",
        reminderText: "現在身體最需要哪一種照顧？",
      },
      {
        label: "讓一個正在消耗你的習慣少出現一次",
        actionText: "選一個讓你耗竭的小習慣，今天先減少一次，不需要一次改完。",
        reminderText: "今天，有哪一件小事可以少消耗你一點？",
      },
    ],
  },
  letting_go: {
    options: [
      {
        label: "把{thing}先放鬆一點點",
        actionText: "把「{thing}」先放鬆一點點，這週只練習少抓一次，不急著完全放下。",
        reminderText: "今天，這件事有沒有一個地方可以先放鬆一點？",
      },
      {
        label: "替{thing}清出一個比較輕的位置",
        actionText: "清理一個和「{thing}」有關的小地方：行事曆、App、訊息或待辦清單。",
        reminderText: "哪一個小地方空出來，會讓你比較輕？",
      },
      {
        label: "替{thing}找一個比較不消耗的做法",
        actionText: "替「{thing}」先寫下一個比較不消耗的替代做法，下次遇到時可以試著換一種方式。",
        reminderText: "這件事有沒有比較溫和的做法？",
      },
    ],
  },
  learning: {
    options: [
      {
        label: "把這次學到的事留成一句提醒",
        actionText: "把「{thing}」帶給你的學習寫成一句提醒，留給之後的自己。",
        reminderText: "今天，有沒有一個發現值得被記下來？",
      },
      {
        label: "寫一段話給三個月後的自己",
        actionText: "寫一段話給三個月後的自己，提醒那時候的你不要忘記這次的發現。",
        reminderText: "現在的你，想提醒未來的自己什麼？",
      },
      {
        label: "根據這次學到的事做一個小調整",
        actionText: "選一個可以因為這次學習而微調的日常做法，先改一點點就好。",
        reminderText: "這個發現，可以怎麼小小改變下一次？",
      },
    ],
  },
};

const responseGuides = {
  "year_review:moment": {
    followUps: [
      "如果把那個畫面停住，你最先注意到的是什麼？",
      "那個瞬間之所以留下來，是因為它讓你感覺到什麼？",
      "如果只用一句話替這個畫面命名，你會怎麼說？",
    ],
    describe: "你回到了一個今年留下痕跡的畫面：",
    extract: "這類記憶通常不是要證明什麼，而是在提醒你，某些瞬間其實比當時看起來更有重量。",
    hope: "先把它留下來就好，之後你也許會更知道它為什麼重要。",
  },
  "year_review:feeling": {
    followUps: [
      "這個狀態最常出現在什麼時候？",
      "如果不急著解決它，你覺得它正在提醒你什麼？",
      "這段時間裡，有哪一件事其實不該只由你承擔？",
    ],
    describe: "你提到今年某段狀態或感受：",
    extract: "這裡面比較值得被看見的，也許不是你有沒有撐過，而是你怎麼知道自己其實累了。",
    hope: "能辨認自己的狀態，本身已經是一個很小但重要的開始。",
  },
  "year_review:growth": {
    followUps: [
      "這件事讓你對自己多知道了什麼？",
      "如果這是一個學習，它真正教你的不是方法，而是什麼？",
      "現在回頭看，你在哪裡變得比較清楚了？",
    ],
    describe: "你寫到一段和選擇、學習或自我理解有關的經驗：",
    extract: "它看起來不只是事件本身，也牽涉到你開始重新判斷什麼值得、什麼需要調整。",
    hope: "這份清楚不用很大，只要能被你帶進下一次選擇裡就夠了。",
  },
  "year_review:relationship": {
    followUps: [
      "如果只留下一句話，你會想對這個人說什麼？",
      "這段關係今年讓你更明白什麼？",
      "你想把這份感謝、距離或未說出口的話，放在什麼位置？",
    ],
    describe: "你提到了一段關係，或一個在今年對你有份量的人：",
    extract: "關係留下的東西，有時不是事件本身，而是你在其中看見的靠近、距離、支持或遺憾。",
    hope: "有些話不一定要立刻說完，但先承認它在心裡的位置，也是一種整理。",
  },
  "year_review:action": {
    followUps: [
      "你當時為什麼最後還是做了這件事？",
      "這個行動帶來的改變，和你原本預期的一樣嗎？",
      "如果要從這件事裡帶走一個方法，會是什麼？",
    ],
    describe: "你提到今年做過的一個行動、作品或選擇：",
    extract: "這裡面可以看見的，不只是成果，也包括你如何把力氣放到某個方向上。",
    hope: "這些做過的事，會慢慢變成你判斷下一步的依據。",
  },
  "year_review:letting_go": {
    followUps: [
      "如果不再抓著它，你希望空出來的位置留給什麼？",
      "這件事現在比較像結束、暫停，還是慢慢放遠？",
      "你需要怎麼對待自己，才比較能把它放回抽屜？",
    ],
    describe: "你寫到一件和放下、結束或消耗有關的事：",
    extract: "這裡面重要的也許不是立刻放開，而是你已經開始分辨，什麼不需要再一直被拿在手上。",
    hope: "不用急著把它變成漂亮的答案，能少抓一點點，就已經有空間了。",
  },
  "new_year:direction": {
    followUps: [
      "這個方向如果落在日常裡，會長成什麼樣子？",
      "你想靠近的狀態，最先會出現在一天中的哪個時刻？",
      "如果只先守住一件事，哪一件最重要？",
    ],
    describe: "你提到新的一年想靠近的方向：",
    extract: "它比較像一種生活感，而不只是目標；真正重要的是它怎麼進到你的日常判斷裡。",
    hope: "方向不需要一次走完，先能被你看見，就已經開始有形狀。",
  },
  "new_year:plan": {
    followUps: [
      "如果要把它拆小，第一步小到什麼程度會比較能開始？",
      "這件事需要的是時間、陪伴、資源，還是一個比較清楚的起點？",
      "你希望用什麼方式知道自己有在前進？",
    ],
    describe: "你寫到一件想開始、安排或完成的事：",
    extract: "這裡的重點不是把計畫訂得很滿，而是找到一個真的能被日常接住的入口。",
    hope: "只要第一步夠小，它就不必等到狀態完美才開始。",
  },
  "new_year:relationship": {
    followUps: [
      "你希望這段關係明年多一點什麼，少一點什麼？",
      "如果要更誠實一點，最小的一句話會是什麼？",
      "你想用靠近、界線，還是穩定出現來照顧這段關係？",
    ],
    describe: "你提到新的一年想照看的關係：",
    extract: "這不一定代表要更用力，也可能是更清楚地知道自己想怎麼靠近，或怎麼保留界線。",
    hope: "關係裡的小調整，常常比一次很大的表態更能留下來。",
  },
  "new_year:habit": {
    followUps: [
      "這個習慣如果要每天發生，最小版本會是什麼？",
      "你想讓它幫你減少什麼消耗？",
      "哪個時間點最適合替它留一個位置？",
    ],
    describe: "你寫到一個和生活、習慣或照顧自己有關的安排：",
    extract: "它真正指向的也許不是自律，而是讓日子比較有餘裕、比較能被你承受。",
    hope: "一個小習慣如果足夠溫和，就比較有機會陪你久一點。",
  },
  "new_year:adjustment": {
    followUps: [
      "如果明年少一點這件事，你覺得自己會多出什麼？",
      "這個調整最難的地方，是習慣、關係，還是對自己的要求？",
      "你想先減少一次，還是先替它找一個替代做法？",
    ],
    describe: "你提到一件想放下、調整或不再延續的事：",
    extract: "這裡面不是單純否定過去，而是你開始看見，有些做法已經不適合繼續帶往明年。",
    hope: "少一點消耗，也是在替更重要的東西留位置。",
  },
};

const state = {
  view: "home",
  mode: null,
  number: "",
  sessionId:
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : String(Date.now()),
  answers: [],
  currentQuestion: null,
  answerText: "",
  followUpAnswer: "",
  followUpQuestion: "",
  summary: null,
  action: null,
  riskAlert: null,
  share: {
    displayQuestion: true,
    displayAnswer: false,
    displayAppName: true,
    displayMaker: true,
    backgroundStyle: "paper_warm",
  },
  toast: "",
};

const app = document.querySelector("#app");

const storageKeys = {
  answers: "drawerAnswers",
  actions: "drawerActions",
  submissions: "drawerSubmissions",
  shareCards: "drawerShareCards",
};

function createId(prefix) {
  const raw =
    typeof crypto !== "undefined" && crypto.randomUUID
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(16).slice(2)}`;
  return `${prefix}_${raw}`;
}

function readStored(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]");
  } catch {
    return [];
  }
}

function writeStored(key, records) {
  localStorage.setItem(key, JSON.stringify(records));
}

function upsertStored(key, record) {
  const records = readStored(key);
  const index = records.findIndex((item) => item.id === record.id);
  if (index >= 0) {
    records[index] = record;
  } else {
    records.unshift(record);
  }
  writeStored(key, records);
}

function appendStored(key, record) {
  const records = readStored(key);
  records.unshift(record);
  writeStored(key, records);
}

function setView(view) {
  state.view = view;
  render();
}

function setToast(message) {
  state.toast = message;
  render();
  window.setTimeout(() => {
    state.toast = "";
    render();
  }, 2200);
}

function page(content, side = defaultSide()) {
  app.innerHTML = `
    <section class="frame mode-${state.mode || "home"}">
      <aside class="side">${side}</aside>
      <section class="content">
        ${content}
        ${state.toast ? `<div class="toast">${state.toast}</div>` : ""}
      </section>
    </section>
  `;
  bindEvents();
}

function defaultSide() {
  const modeText = state.mode ? labels[state.mode] : "打開一個抽屜";
  const modeLine =
    state.mode === "new_year"
      ? "把期待放小一點，放到明天也能開始的位置。"
      : state.mode === "year_review"
        ? "把今年的光、暗、停頓與成長，慢慢收回來看。"
        : "打開一個抽屜，看看今年留下了什麼。";
  return `
    <div class="brand">
      <div class="maker">製作者：種樹人</div>
      <h1>回憶<br />抽屜</h1>
    </div>
    <p class="quote">說到底，我們問自己的問題，決定了我們會變成什麼樣的人。<br />—— Leo Babauta</p>
    <div>
      <div class="eyebrow">${modeText}</div>
      <p class="mode-line">${modeLine}</p>
    </div>
  `;
}

function bindEvents() {
  document.querySelectorAll("[data-view]").forEach((el) => {
    el.addEventListener("click", () => setView(el.dataset.view));
  });

  document.querySelectorAll("[data-mode]").forEach((el) => {
    el.addEventListener("click", () => {
      state.mode = el.dataset.mode;
      state.number = "";
      state.currentQuestion = null;
      state.answerText = "";
      state.followUpAnswer = "";
      state.summary = null;
      state.answers = [];
      state.share.backgroundStyle = state.mode === "new_year" ? "new_year_red" : "year_review_blue";
      setView("number");
    });
  });

  const numberInput = document.querySelector("#numberInput");
  if (numberInput) {
    numberInput.addEventListener("input", (event) => {
      const rawNumber = event.target.value.replace(/\D/g, "").slice(0, 2);
      state.number = rawNumber && Number(rawNumber) > 50 ? "50" : rawNumber;
      event.target.value = state.number;
    });
  }

  const answerInput = document.querySelector("#answerText");
  if (answerInput) {
    answerInput.addEventListener("input", (event) => {
      state.answerText = event.target.value;
    });
  }

  const followInput = document.querySelector("#followUpAnswer");
  if (followInput) {
    followInput.addEventListener("input", (event) => {
      state.followUpAnswer = event.target.value;
    });
  }

  const submissionForm = document.querySelector("#submissionForm");
  if (submissionForm) {
    submissionForm.addEventListener("submit", submitQuestion);
  }

  const actionForm = document.querySelector("#actionForm");
  if (actionForm) {
    actionForm.addEventListener("submit", saveAction);
  }

  document.querySelectorAll("[data-action-option]").forEach((el) => {
    el.addEventListener("change", updateActionOption);
  });

  document.querySelectorAll("[data-share-option]").forEach((el) => {
    el.addEventListener("change", updateShareOptions);
  });

  const drawButton = document.querySelector("#drawButton");
  if (drawButton) {
    drawButton.addEventListener("click", drawQuestion);
  }

  const submitAnswerButton = document.querySelector("#submitAnswer");
  if (submitAnswerButton) {
    submitAnswerButton.addEventListener("click", submitAnswer);
  }

  const saveFollowButton = document.querySelector("#saveFollowUp");
  if (saveFollowButton) {
    saveFollowButton.addEventListener("click", saveFollowUp);
  }

  const saveAndNextButton = document.querySelector("#saveAndNext");
  if (saveAndNextButton) {
    saveAndNextButton.addEventListener("click", saveAndNext);
  }

  const summaryButton = document.querySelector("#makeSummary");
  if (summaryButton) {
    summaryButton.addEventListener("click", makeSummary);
  }

  const downloadButton = document.querySelector("#downloadShare");
  if (downloadButton) {
    downloadButton.addEventListener("click", downloadShareCard);
  }

  const downloadQuestionButton = document.querySelector("#downloadQuestionCard");
  if (downloadQuestionButton) {
    downloadQuestionButton.addEventListener("click", downloadQuestionCard);
  }
}

function render() {
  const views = {
    home: renderHome,
    number: renderNumber,
    question: renderQuestion,
    follow: renderFollowUp,
    summary: renderSummary,
    action: renderAction,
    share: renderShare,
    submit: renderSubmitQuestion,
    done: renderDone,
    admin: renderAdmin,
  };

  views[state.view]();
}

function renderHome() {
  page(`
    <div class="stack">
      <span class="eyebrow">打開一個抽屜，看看今年留下了什麼。</span>
      <h2>先選一個方向。</h2>
      <div class="mode-grid">
        <button class="mode-card year" data-mode="year_review">
          <strong>年末回顧</strong>
          <span>整理今年的亮點、感受、關係、失去與成長。</span>
        </button>
        <button class="mode-card new" data-mode="new_year">
          <strong>新年展望</strong>
          <span>看見明年的方向，並把期待放進日常裡。</span>
        </button>
      </div>
      <div class="actions">
        <button class="button secondary" data-view="submit">投稿一張抽屜卡</button>
        <button class="button secondary" data-view="admin">管理後台</button>
      </div>
    </div>
  `);
}

function renderNumber() {
  page(`
    <div class="stack">
      <span class="eyebrow">${labels[state.mode]}</span>
      <h2>請選一個數字。</h2>
      <p class="helper">請輸入 1～50。不用想太多，讓直覺先回答。</p>
      <div class="number-row">
        <input id="numberInput" class="field number" inputmode="numeric" min="1" max="50" value="${state.number}" placeholder="27" />
        <button id="drawButton" class="button">打開抽屜</button>
      </div>
      <div class="actions">
        <button class="button secondary" data-view="home">回首頁</button>
      </div>
    </div>
  `);
}

function drawQuestion() {
  const userNumber = Number(state.number);
  if (!userNumber || userNumber < 1 || userNumber > 50) {
    setToast("請先選一個 1 到 50 的數字。");
    return;
  }

  const answeredIds = state.answers.map((answer) => answer.question.id);
  const progress = state.answers.length;
  const stage = stageOrder[state.mode][Math.min(progress, stageOrder[state.mode].length - 1)];
  const candidates = questions.filter(
    (question) =>
      question.mode === state.mode &&
      question.stage === stage &&
      !answeredIds.includes(question.id),
  );
  const pool = candidates.length ? candidates : questions.filter((question) => question.mode === state.mode);
  const freshPool =
    state.currentQuestion && pool.length > 1
      ? pool.filter((question) => question.id !== state.currentQuestion.id)
      : pool;
  state.currentQuestion = freshPool[userNumber % freshPool.length];
  state.answerText = "";
  state.followUpAnswer = "";
  state.followUpQuestion = "";
  setView("question");
}

function renderQuestion() {
  const question = state.currentQuestion;
  page(`
    <div class="stack">
      <article class="question-card">
        <div class="category">${question.category}</div>
        <h2 class="question-text">${question.questionText}</h2>
        <p class="helper">${question.helperText}</p>
      </article>
      <p class="helper">不用整理得很好。先留下你當時真的在想的。</p>
      <textarea id="answerText" class="textarea" placeholder="寫下你想到的就好。">${escapeHtml(state.answerText)}</textarea>
      <div class="actions">
        <button id="submitAnswer" class="button">留下回答</button>
        <button class="button secondary" data-view="home">回首頁</button>
      </div>
    </div>
  `);
}

function submitAnswer() {
  if (state.answerText.trim().length < 3) {
    setToast("可以再多留下一點點。");
    return;
  }

  state.riskAlert = detectRiskContent(state.answerText);
  state.followUpQuestion = makeFollowUpQuestion(state.currentQuestion, state.answerText, state.riskAlert);
  setView("follow");
}

function detectRiskContent(text) {
  const source = String(text || "");
  const crisisKeywords = [
    "自殺",
    "想死",
    "不想活",
    "活不下去",
    "結束生命",
    "輕生",
    "自傷",
    "自殘",
    "割腕",
    "跳樓",
    "吞藥",
    "了結自己",
    "消失算了",
  ];
  const violenceKeywords = [
    "殺了",
    "殺掉",
    "打死",
    "弄死",
    "傷害他",
    "傷害她",
    "報復",
  ];
  const distressKeywords = [
    "崩潰",
    "絕望",
    "撐不下去",
    "沒希望",
    "很想消失",
    "恨死",
    "幹你",
    "去死",
  ];

  if (hasAny(source, crisisKeywords)) {
    return {
      level: "crisis",
      title: "先把安全放在最前面",
      message: "你寫到的內容可能和自傷或自殺風險有關。這一刻先不用把回答整理好，請優先讓自己不要獨自承受。",
    };
  }

  if (hasAny(source, violenceKeywords)) {
    return {
      level: "crisis",
      title: "先離開可能失控的現場",
      message: "你寫到的內容可能牽涉到傷害自己或他人的風險。請先把距離拉開，並立即找可以協助的人或緊急資源。",
    };
  }

  if (hasAny(source, distressKeywords)) {
    return {
      level: "distress",
      title: "這段內容聽起來很重",
      message: "如果這份情緒正在變得難以承受，可以先找人一起待著，或撥打下面的支持資源。",
    };
  }

  return null;
}

function renderSafetyCard(alert = state.riskAlert) {
  if (!alert) return "";
  const isCrisis = alert.level === "crisis";
  return `
    <section class="safety-card ${isCrisis ? "urgent" : ""}">
      <span>${isCrisis ? "安全提醒" : "支持資源"}</span>
      <h3>${alert.title}</h3>
      <p>${alert.message}</p>
      <div class="resource-grid">
        <a href="tel:110">110 警察</a>
        <a href="tel:119">119 消防 / 救護</a>
        <a href="tel:1925">1925 安心專線</a>
        <a href="tel:1995">1995 生命線</a>
        <a href="tel:1980">1980 張老師</a>
      </div>
      <p class="resource-note">若你或身邊的人正處於立即危險，請立刻撥打 110 或 119。1925 安心專線為 24 小時服務；1995 生命線通常為全天服務；1980 張老師依官網公告有服務時段。</p>
    </section>
  `;
}

function makeFollowUpQuestion(question, answer, riskAlert = null) {
  if (riskAlert?.level === "crisis") {
    return "現在先不用整理回答。你身邊有沒有一個人，或一個比較安全的地方，可以讓你先不要獨自待著？";
  }

  if (riskAlert?.level === "distress") {
    return "這段情緒聽起來很重。現在有沒有一件能讓你稍微穩住的事，或一個可以先聯絡的人？";
  }

  const guide = getResponseGuide(question);
  const normalizedAnswer = String(answer || "");
  const normalizedQuestion = question.questionText;

  if (hasAny(normalizedAnswer, ["謝", "感謝", "陪", "朋友", "家人"]) || question.stage === "relationship") {
    if (question.stage !== "relationship") {
      return "這個人或這段陪伴，在那個經驗裡真正重要的是什麼？";
    }
    return guide.followUps.find((item) => item.includes("關係") || item.includes("一句話")) || "如果只留下一句話，你會想對這個人說什麼？";
  }

  if (hasAny(normalizedAnswer, ["累", "忙", "撐", "睡", "休息", "心累"])) {
    return guide.followUps.find((item) => item.includes("狀態") || item.includes("消耗") || item.includes("承擔")) || "這段疲累裡，有哪一件事其實不該只由你承擔？";
  }

  if (hasAny(normalizedQuestion, ["痛苦", "離開", "分開", "放棄", "放手", "刪除", "不再"])) {
    return guide.followUps.find((item) => item.includes("放") || item.includes("結束") || item.includes("位置")) || "如果不再抓著它，你希望空出來的位置留給什麼？";
  }

  if (hasAny(normalizedQuestion, ["計畫", "開始", "完成", "挑戰", "習慣", "運動"])) {
    return guide.followUps.find((item) => item.includes("第一") || item.includes("最小") || item.includes("日常")) || "如果要讓這件事進到日常，第一個很小的動作會是什麼？";
  }

  const seed = stableTextIndex(`${question.id}:${normalizedAnswer}`, guide.followUps.length);
  return guide.followUps[seed];
}

function getResponseGuide(question) {
  return responseGuides[`${question.mode}:${question.stage}`] || responseGuides["year_review:moment"];
}

function hasAny(text, keywords) {
  return keywords.some((keyword) => text.includes(keyword));
}

function stableTextIndex(text, length) {
  const source = String(text || "");
  let hash = 0;
  for (let index = 0; index < source.length; index += 1) {
    hash = (hash + source.charCodeAt(index) * (index + 1)) % 9973;
  }
  return hash % length;
}

function renderFollowUp() {
  page(`
    <div class="stack">
      ${renderSafetyCard()}
      <span class="eyebrow">追問</span>
      <h2>${state.followUpQuestion}</h2>
      <textarea id="followUpAnswer" class="textarea" placeholder="可以回答，也可以先跳過。">${escapeHtml(state.followUpAnswer)}</textarea>
      <p class="helper">這題回答完就可以停在這裡，不會自動帶你去下一題。</p>
      <div class="actions">
        <button id="makeSummary" class="button">完成並看總結</button>
        <button id="saveFollowUp" class="button secondary">只收進抽屜</button>
        <button id="saveAndNext" class="button secondary">我想再抽一題</button>
        <button class="button secondary" data-view="home">回首頁</button>
      </div>
    </div>
  `);
}

function rememberCurrentAnswer() {
  if (!state.currentQuestion || !state.answerText.trim()) return;

  const nextAnswer = {
    question: state.currentQuestion,
    answerText: state.answerText,
    followUpQuestion: state.followUpQuestion,
    followUpAnswer: state.followUpAnswer,
  };
  const answerIndex = state.answers.findIndex((item) => item.question.id === state.currentQuestion.id);

  if (answerIndex >= 0) {
    state.answers[answerIndex] = nextAnswer;
  } else {
    state.answers.push(nextAnswer);
  }

  upsertStored(storageKeys.answers, {
    id: `${state.sessionId}_${state.currentQuestion.id}`,
    sessionId: state.sessionId,
    mode: state.currentQuestion.mode,
    modeLabel: labels[state.currentQuestion.mode],
    questionId: state.currentQuestion.id,
    stage: state.currentQuestion.stage,
    category: state.currentQuestion.category,
    questionText: state.currentQuestion.questionText,
    answerText: state.answerText,
    followUpQuestion: state.followUpQuestion,
    followUpAnswer: state.followUpAnswer,
    riskLevel: state.riskAlert?.level || "none",
    riskTitle: state.riskAlert?.title || "",
    actionType: inferActionType({ question: state.currentQuestion, answerText: state.answerText, followUpAnswer: state.followUpAnswer }),
    createdAt: new Date().toISOString(),
  });
}

function saveFollowUp() {
  rememberCurrentAnswer();
  setToast("已收進抽屜。");
  setView("done");
}

function saveAndNext() {
  rememberCurrentAnswer();
  state.number = "";
  setView("number");
}

function renderDone() {
  const latest = state.answers[state.answers.length - 1];
  const question = latest?.question;
  const style = question?.mode === "new_year" ? "new_year_red" : "year_review_blue";
  page(`
    <div class="stack">
      ${renderSafetyCard()}
      <span class="eyebrow">已收進抽屜</span>
      <h2>這一題已經變成一張卡。</h2>
      <article id="questionCardPreview" class="saved-question-card ${style}">
        <p class="app-name">回憶抽屜</p>
        <p class="category-label">${question?.category || "抽屜卡"}</p>
        <p class="main">${question?.questionText || "剛剛那張卡片"}</p>
        <img class="maker-watermark" src="${makerLogoPath}" alt="種樹人" />
      </article>
      <p class="helper">這張卡預設只放題目，不放你的回答。適合下載後分享到社群，或先存起來。</p>
      <div class="actions">
        <button id="downloadQuestionCard" class="button">下載題目卡</button>
        <button id="makeSummary" class="button">看這題的總結</button>
        <button class="button secondary" data-view="share">製作分享卡</button>
        <button class="button secondary" data-view="number">再抽一題</button>
        <button class="button secondary" data-view="home">回首頁</button>
      </div>
    </div>
  `);
}

function makeSummary() {
  rememberCurrentAnswer();
  const latest = state.answers[state.answers.length - 1];
  const question = latest?.question || state.currentQuestion;
  const answerText = latest?.answerText || state.answerText || "";
  const followUpAnswer = latest?.followUpAnswer || state.followUpAnswer || "";

  state.summary = buildConcreteSummary(question, answerText, followUpAnswer, state.riskAlert);
  setView("summary");
}

function buildConcreteSummary(question, answerText, followUpAnswer, riskAlert = null) {
  if (riskAlert?.level === "crisis") {
    return [
      {
        title: "先確認安全",
        text: "這份回答裡出現了和自傷、自殺或立即危險相關的訊號。此刻不需要完成反思，優先目標是讓自己不要獨自承受，並靠近可以協助你的人或資源。",
      },
      {
        title: "目前可以做的事",
        text: "如果你或身邊的人正處於立即危險，請立刻撥打 110 或 119。也可以撥打 1925 安心專線、1995 生命線或 1980 張老師，先讓真人陪你度過這一段。",
      },
      {
        title: "下一步",
        text: "現在先不用整理答案。請先找一個人、走到比較安全的地方，或直接撥打一通電話。",
      },
    ];
  }

  const answer = trimText(answerText, 110);
  const follow = trimText(followUpAnswer, 90);
  const context = getActionContext({ question, answerText, followUpAnswer });
  const actionType = inferActionType({ question, answerText, followUpAnswer });
  const seed = actionSeeds[actionType] || actionSeeds.awareness;
  const option = applyActionContext(seed.options[0], context);

  return [
    {
      title: getSummaryTitle(question, "describe"),
      text: buildFactSummary(question, answer, follow),
    },
    {
      title: "回答裡可確認的線索",
      text: getAnswerSignals(question, answerText, followUpAnswer),
    },
    {
      title: "可以接著整理的一步",
      text: `如果你想把這份回答往日常放一點，可以選擇：「${option.label}」。具體做法是：${option.actionText}`,
    },
  ];
}

function buildFactSummary(question, answer, follow) {
  const topic = question?.questionText || "這一題";
  if (!answer) return `這題問的是「${topic}」。目前還沒有足夠回答可以整理。`;

  const followLine = follow ? `追問裡，你補充了：「${follow}」` : "";
  return `這題問的是「${topic}」。你留下的回答是：「${answer}」${followLine}`;
}

function getAnswerSignals(question, answerText, followUpAnswer) {
  const text = `${answerText || ""} ${followUpAnswer || ""}`;
  const signals = [];

  if (hasAny(text, ["朋友", "家人", "媽媽", "爸爸", "伴侶", "同事", "陪", "謝謝", "感謝"])) {
    signals.push("有一個人或一段關係在這份回答裡佔了位置");
  }
  if (hasAny(text, ["累", "撐", "睡", "休息", "壓力", "耗竭", "心累"])) {
    signals.push("你提到了疲累、壓力或需要休息的狀態");
  }
  if (hasAny(text, ["開始", "計畫", "完成", "挑戰", "目標", "習慣", "運動", "嘗試"])) {
    signals.push("回答裡有一件想開始、維持或調整的具體行動");
  }
  if (hasAny(text, ["放下", "放手", "不再", "離開", "分開", "刪除", "消耗", "執著"])) {
    signals.push("你正在分辨某件事是否還要繼續拿在手上");
  }
  if (hasAny(text, ["照片", "畫面", "晚上", "早上", "地方", "第一次", "節日", "相簿"])) {
    signals.push("回答裡有可被記下來的時間、畫面或場景");
  }
  if (hasAny(text, ["學", "清楚", "知道", "確定", "發現", "決定", "認識"])) {
    signals.push("你提到了一個學到、發現或變得比較清楚的地方");
  }

  if (!signals.length) {
    signals.push(getStageSignal(question));
  }

  return `目前只根據你寫出的內容整理，不額外替你下結論。可確認的是：${signals.join("；")}。`;
}

function getStageSignal(question) {
  const signals = {
    moment: "這份回答正在處理一個被你記住的畫面或瞬間",
    feeling: "這份回答正在處理一段狀態或感受",
    growth: "這份回答正在處理一段學習、自我理解或選擇",
    relationship: "這份回答正在處理一段關係或一個人",
    action: "這份回答正在處理一個行動、作品或選擇",
    letting_go: "這份回答正在處理一件想放下或結束的事",
    direction: "這份回答正在處理明年想靠近的方向",
    plan: "這份回答正在處理一件想開始或安排的事",
    habit: "這份回答正在處理一個生活習慣或照顧自己的安排",
    adjustment: "這份回答正在處理一件想減少或調整的事",
  };
  return signals[question?.stage] || "這份回答正在整理一個對你有意義的片段";
}

function getSummaryTitle(question, section) {
  const titles = {
    "year_review:moment": ["你留下的畫面", "這個畫面帶出的東西"],
    "year_review:feeling": ["你今年的狀態", "這段感受提醒你的事"],
    "year_review:growth": ["你看見的改變", "這段經驗裡的學習"],
    "year_review:relationship": ["你提到的關係", "這段關係留下的重量"],
    "year_review:action": ["你做過的選擇", "這個行動帶出的方向"],
    "year_review:letting_go": ["你想放回抽屜的事", "這個放下正在整理什麼"],
    "new_year:direction": ["你想靠近的方向", "這個方向真正指向的生活"],
    "new_year:plan": ["你想開始的事", "讓它進入日常的方法"],
    "new_year:relationship": ["你想照看的關係", "這段關係需要的調整"],
    "new_year:habit": ["你想留下的習慣", "這個習慣想照顧的部分"],
    "new_year:adjustment": ["你想調整的事", "減少消耗後留下的空間"],
  };
  const pair = titles[`${question.mode}:${question.stage}`] || ["你看見的自己", "你可以帶走的東西"];
  return section === "describe" ? pair[0] : pair[1];
}

function renderSummary() {
  const blocks = state.summary || [];
  page(`
    <div class="stack">
      ${renderSafetyCard()}
      <span class="eyebrow">總結</span>
      <h2>這題的整理</h2>
      <section class="panel">
        ${blocks.map((block) => `
          <div class="summary-block">
            <h3>${block.title}</h3>
            <p class="helper">${block.text}</p>
          </div>
        `).join("")}
      </section>
      <div class="actions">
        <button class="button" data-view="share">分享這張抽屜卡</button>
        <button class="button secondary" data-view="number">再回答一題</button>
        <button class="button secondary" data-view="action">建立行動提醒</button>
        <button class="button secondary" data-view="home">回首頁</button>
      </div>
    </div>
  `);
}

function renderAction() {
  const latest = state.answers[state.answers.length - 1];
  const actionType = inferActionType(latest);
  const seed = actionSeeds[actionType] || actionSeeds.awareness;
  const options = rankActionOptions(seed.options, latest);
  const selected = options[0];

  page(`
    <form id="actionForm" class="stack">
      <span class="eyebrow">正在種的事</span>
      <h2>你願意替這件事，在日常裡留下一個小位置嗎？</h2>
      <p class="helper">先選一顆比較貼近你回答的行動種子，下面的文字可以再改成你的語氣。</p>
      <div class="option-grid">
        ${options.map((option, index) => `
          <label class="action-option">
            <input
              data-action-option
              type="radio"
              name="actionChoice"
              value="${index}"
              ${index === 0 ? "checked" : ""}
            />
            <span>
              <strong>${option.label}</strong>
              <small>${option.actionText}</small>
            </span>
          </label>
        `).join("")}
      </div>
      <label class="stack">
        <span class="small">建議行動</span>
        <input id="actionTextInput" class="field" name="actionText" value="${selected.actionText}" />
      </label>
      <label class="stack">
        <span class="small">提醒文字</span>
        <input id="reminderTextInput" class="field" name="reminderText" value="${selected.reminderText}" />
      </label>
      <label class="stack">
        <span class="small">提醒頻率</span>
        <select class="select" name="frequency">
          <option value="daily">每天</option>
          <option value="weekly">每週</option>
          <option value="monthly">每月</option>
          <option value="none">不提醒，只存下來</option>
        </select>
      </label>
      <label class="stack">
        <span class="small">提醒時間</span>
        <input class="field" type="time" name="time" value="21:30" />
      </label>
      <div class="actions">
        <button class="button" type="submit">存下來</button>
        <button class="button secondary" type="button" data-view="summary">回總結</button>
        <button class="button secondary" type="button" data-view="home">回首頁</button>
      </div>
    </form>
  `);
}

function inferActionType(latest) {
  const text = `${latest?.question.questionText || ""} ${latest?.answerText || ""} ${latest?.followUpAnswer || ""}`;

  if (hasAny(text, ["朋友", "家人", "關係", "感謝", "謝謝", "陪", "訊息", "道歉", "所愛", "聯絡"])) {
    return "relationship";
  }

  if (hasAny(text, ["累", "撐", "睡", "休息", "身體", "吃飯", "運動", "耗竭", "心累", "壓力"])) {
    return "self_care";
  }

  if (hasAny(text, ["放下", "放手", "不再", "刪除", "離開", "分開", "丟棄", "執著", "消耗"])) {
    return "letting_go";
  }

  if (hasAny(text, ["開始", "計畫", "完成", "挑戰", "習慣", "嘗試", "安排", "目標", "作品"])) {
    return "action";
  }

  if (hasAny(text, ["學", "清楚", "認識", "確定", "代表字", "決定", "改善"])) {
    return "learning";
  }

  return latest?.question.actionType || "awareness";
}

function rankActionOptions(options, latest) {
  const text = `${latest?.question.questionText || ""} ${latest?.answerText || ""} ${latest?.followUpAnswer || ""}`;
  const context = getActionContext(latest);
  const scored = options.map((option, index) => ({
    ...applyActionContext(option, context),
    originalIndex: index,
    score: getActionOptionScore(applyActionContext(option, context), text),
  }));

  return scored.sort((a, b) => b.score - a.score || a.originalIndex - b.originalIndex);
}

function getActionContext(latest) {
  const text = `${latest?.question.questionText || ""} ${latest?.answerText || ""} ${latest?.followUpAnswer || ""}`;
  let person = "那個重要的人";
  let thing = "這件事";
  let memory = "這個畫面";

  if (hasAny(text, ["媽媽", "爸爸", "父母", "家人", "家裡", "兄弟", "姊妹", "姐妹"])) {
    person = "家人";
  } else if (hasAny(text, ["伴侶", "男友", "女友", "另一半", "愛人", "所愛"])) {
    person = "重要他人";
  } else if (hasAny(text, ["朋友", "同學", "夥伴"])) {
    person = "那位朋友";
  } else if (hasAny(text, ["同事", "主管", "工作"])) {
    person = "工作上那位重要的人";
  }

  if (hasAny(text, ["工作", "專案", "作品"])) {
    thing = "工作裡那件重要的事";
  } else if (hasAny(text, ["休息", "睡", "吃飯", "運動", "身體"])) {
    thing = "照顧自己的這件事";
  } else if (hasAny(text, ["App", "手機", "行事曆", "待辦", "訊息"])) {
    thing = "那個讓你消耗的日常習慣";
  } else if (hasAny(text, ["計畫", "目標", "挑戰", "開始", "完成"])) {
    thing = "那件想開始的事";
  } else if (hasAny(text, ["關係", "朋友", "家人", "伴侶", "陪"])) {
    thing = "這段關係";
  }

  if (hasAny(text, ["照片", "相簿"])) {
    memory = "那張照片";
  } else if (hasAny(text, ["節日", "生日", "過年", "聖誕"])) {
    memory = "那個節日";
  } else if (hasAny(text, ["晚上", "早上", "下午", "瞬間", "第一次"])) {
    memory = "那個瞬間";
  }

  return { person, thing, memory };
}

function applyActionContext(option, context) {
  const replace = (text) =>
    text
      .replaceAll("{person}", context.person)
      .replaceAll("{thing}", context.thing)
      .replaceAll("{memory}", context.memory);

  return {
    ...option,
    label: replace(option.label),
    actionText: replace(option.actionText),
    reminderText: replace(option.reminderText),
  };
}

function getActionOptionScore(option, text) {
  const rules = [
    { keys: ["朋友", "家人", "關係", "感謝", "謝謝", "陪", "訊息", "說"], labels: ["訊息", "說", "時間"] },
    { keys: ["累", "撐", "睡", "休息", "身體", "吃飯", "耗竭", "心累"], labels: ["自己", "身體", "消耗"] },
    { keys: ["放下", "放手", "不再", "刪除", "離開", "分開", "清理"], labels: ["放鬆", "清", "替"] },
    { keys: ["開始", "計畫", "完成", "挑戰", "習慣", "運動", "嘗試"], labels: ["開始", "一週", "步驟"] },
    { keys: ["學", "清楚", "認識", "確定", "代表字", "決定"], labels: ["學", "三個月", "調整"] },
    { keys: ["畫面", "照片", "瞬間", "紀錄", "地方", "第一次"], labels: ["紀錄", "三句", "照片"] },
  ];

  return rules.reduce((score, rule) => {
    const hasTextSignal = rule.keys.some((key) => text.includes(key));
    const hasOptionSignal = rule.labels.some((label) => option.label.includes(label) || option.actionText.includes(label));
    return hasTextSignal && hasOptionSignal ? score + 2 : score;
  }, 0);
}

function updateActionOption(event) {
  const latest = state.answers[state.answers.length - 1];
  const seed = actionSeeds[inferActionType(latest)] || actionSeeds.awareness;
  const options = rankActionOptions(seed.options, latest);
  const option = options[Number(event.target.value)] || options[0];
  const actionTextInput = document.querySelector("#actionTextInput");
  const reminderTextInput = document.querySelector("#reminderTextInput");

  if (actionTextInput) actionTextInput.value = option.actionText;
  if (reminderTextInput) reminderTextInput.value = option.reminderText;
}

function saveAction(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const latest = state.answers[state.answers.length - 1];
  state.action = Object.fromEntries(form.entries());
  appendStored(storageKeys.actions, {
    id: createId("action"),
    sessionId: state.sessionId,
    mode: latest?.question.mode || state.mode,
    modeLabel: labels[latest?.question.mode || state.mode],
    questionId: latest?.question.id,
    questionText: latest?.question.questionText,
    answerText: latest?.answerText,
    actionText: state.action.actionText,
    reminderText: state.action.reminderText,
    frequency: state.action.frequency,
    reminderTime: state.action.time,
    createdAt: new Date().toISOString(),
  });
  setToast("已存進「正在種的事」。");
}

function renderAdmin() {
  const answers = readStored(storageKeys.answers);
  const actions = readStored(storageKeys.actions);
  const submissions = readStored(storageKeys.submissions);
  const shareCards = readStored(storageKeys.shareCards);
  const yearCount = answers.filter((item) => item.mode === "year_review").length;
  const newYearCount = answers.filter((item) => item.mode === "new_year").length;

  page(`
    <div class="stack admin-view">
      <span class="eyebrow">管理後台</span>
      <h2>目前存在這台瀏覽器裡的內容</h2>
      <p class="helper">這是本機原型後台，資料存在這個瀏覽器的 localStorage。正式產品需要接資料庫，才看得到所有使用者與跨裝置紀錄。</p>
      <section class="admin-stats">
        ${renderStat("回答數", answers.length)}
        ${renderStat("年末回顧", yearCount)}
        ${renderStat("新年展望", newYearCount)}
        ${renderStat("行動提醒", actions.length)}
        ${renderStat("分享卡", shareCards.length)}
        ${renderStat("投稿題目", submissions.length)}
      </section>
      ${renderAdminSection("最近留下的回答", answers, renderAnswerRecord)}
      ${renderAdminSection("正在種的事", actions, renderActionRecord)}
      ${renderAdminSection("題目卡與分享紀錄", shareCards, renderShareRecord)}
      ${renderAdminSection("投稿題目", submissions, renderSubmissionRecord)}
      <div class="actions">
        <button class="button secondary" data-view="home">回首頁</button>
      </div>
    </div>
  `);
}

function renderStat(label, value) {
  return `
    <article class="stat-card">
      <strong>${value}</strong>
      <span>${label}</span>
    </article>
  `;
}

function renderAdminSection(title, records, renderer) {
  const preview = records.slice(0, 8);
  return `
    <section class="admin-section">
      <div class="admin-section-title">
        <h3>${title}</h3>
        <span>${records.length} 筆</span>
      </div>
      ${preview.length ? preview.map(renderer).join("") : `<p class="helper">目前還沒有資料。</p>`}
    </section>
  `;
}

function renderAnswerRecord(record) {
  return `
    <article class="admin-record">
      <div class="record-meta">${formatDate(record.createdAt)} · ${record.modeLabel || labels[record.mode] || ""} · ${record.category || ""}</div>
      <strong>${escapeHtml(record.questionText)}</strong>
      <p>${escapeHtml(trimText(record.answerText, 120))}</p>
      ${record.followUpAnswer ? `<p class="record-sub">追問：${escapeHtml(trimText(record.followUpAnswer, 100))}</p>` : ""}
    </article>
  `;
}

function renderActionRecord(record) {
  return `
    <article class="admin-record">
      <div class="record-meta">${formatDate(record.createdAt)} · ${record.modeLabel || labels[record.mode] || ""} · ${record.frequency || "none"}</div>
      <strong>${escapeHtml(record.actionText)}</strong>
      <p>${escapeHtml(record.reminderText || "")}</p>
      <p class="record-sub">${escapeHtml(trimText(record.questionText || "", 90))}</p>
    </article>
  `;
}

function renderShareRecord(record) {
  return `
    <article class="admin-record">
      <div class="record-meta">${formatDate(record.createdAt)} · ${record.cardType} · ${record.backgroundStyle}</div>
      <strong>${escapeHtml(record.questionText || "分享卡")}</strong>
      <p>${record.displayAnswer ? "包含回答" : "只顯示題目"}</p>
    </article>
  `;
}

function renderSubmissionRecord(record) {
  return `
    <article class="admin-record">
      <div class="record-meta">${formatDate(record.createdAt)} · ${record.mode} · ${record.status}</div>
      <strong>${escapeHtml(record.questionText)}</strong>
      <p>${escapeHtml(record.reason || "尚未填寫投稿理由。")}</p>
      ${record.allowCredit && record.authorName ? `<p class="record-sub">署名：${escapeHtml(record.authorName)}</p>` : ""}
    </article>
  `;
}

function formatDate(value) {
  if (!value) return "";
  return new Intl.DateTimeFormat("zh-Hant", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(value));
}

function renderShare() {
  const latest = state.answers[state.answers.length - 1];
  const questionText = latest?.question.questionText || state.currentQuestion?.questionText || "今年最感謝的一個人是誰？";
  const answerText = latest?.answerText || state.answerText || "我想到的是……";
  const summaryText = state.summary?.map((block) => block.text).join(" ") || "";
  const isSummary = Boolean(state.summary);

  page(`
    <div class="share-layout">
      <section class="panel">
        <span class="eyebrow">製作分享卡</span>
        <label class="check">
          <input data-share-option="displayQuestion" type="checkbox" ${state.share.displayQuestion ? "checked" : ""} />
          顯示題目
        </label>
        <label class="check">
          <input data-share-option="displayAnswer" type="checkbox" ${state.share.displayAnswer ? "checked" : ""} />
          顯示自己的回答
        </label>
        <label class="check">
          <input data-share-option="displayAppName" type="checkbox" ${state.share.displayAppName ? "checked" : ""} />
          顯示 App 名稱
        </label>
        <label class="check">
          <input data-share-option="displayMaker" type="checkbox" ${state.share.displayMaker ? "checked" : ""} />
          顯示製作者
        </label>
        <label class="stack">
          <span class="small">背景樣式</span>
          <select class="select" data-share-option="backgroundStyle">
            ${["year_review_blue", "new_year_red", "paper_warm", "night_drawer", "minimal_white"].map((style) => `
              <option value="${style}" ${state.share.backgroundStyle === style ? "selected" : ""}>${shareStyleLabels[style]}</option>
            `).join("")}
          </select>
        </label>
        <p class="small">預設不公開回答。下載前先確認畫面，只會在這台裝置產生圖片。</p>
        <div class="actions">
          <button id="downloadShare" class="button">下載分享圖</button>
          <button class="button secondary" data-view="summary">回總結</button>
          <button class="button secondary" data-view="home">回首頁</button>
        </div>
      </section>
      <article id="sharePreview" class="share-card-preview ${state.share.backgroundStyle}">
        ${state.share.displayAppName ? `<p class="app-name">回憶抽屜</p>` : ""}
        ${state.share.displayQuestion ? `<p class="main">${escapeHtml(questionText)}</p>` : ""}
        ${state.share.displayAnswer ? `<p class="answer">「${escapeHtml(trimText(isSummary ? summaryText : answerText, 96))}」</p>` : ""}
        ${state.share.displayMaker ? `<p class="credit">製作者：種樹人</p>` : ""}
      </article>
    </div>
  `);
}

function updateShareOptions(event) {
  const key = event.target.dataset.shareOption;
  state.share[key] = event.target.type === "checkbox" ? event.target.checked : event.target.value;
  renderShare();
}

function downloadShareCard() {
  const preview = document.querySelector("#sharePreview");
  const latest = state.answers[state.answers.length - 1];
  const canvas = document.createElement("canvas");
  const size = 1080;
  const context = canvas.getContext("2d");
  canvas.width = size;
  canvas.height = size;

  const style = state.share.backgroundStyle;
  const palettes = {
    year_review_blue: ["#dfe8ed", "#f8f0df", "#c9d7e4", "#272421"],
    new_year_red: ["#f6e4d9", "#fff6e8", "#d9a49a", "#272421"],
    paper_warm: ["#fff8e9", "#f4ead5", "#fff8e9", "#272421"],
    night_drawer: ["#1f2f48", "#2c2730", "#745638", "#fff8ea"],
    minimal_white: ["#fffdf7", "#fffdf7", "#fffdf7", "#272421"],
  };
  const palette = palettes[style];
  drawCardBackground(context, size, size, style);

  const lines = Array.from(preview.querySelectorAll("p")).map((node) => node.textContent.trim());
  context.fillStyle = palette[3];
  context.textAlign = "center";
  context.textBaseline = "middle";

  let y = 220;
  lines.forEach((line, index) => {
    const isMain = index === (state.share.displayAppName ? 1 : 0);
    const fontSize = isMain ? 54 : 31;
    context.font = `${isMain ? 700 : 400} ${fontSize}px serif`;
    const wrapped = wrapCanvasText(context, line, size - 220);
    wrapped.forEach((textLine) => {
      context.fillText(textLine, size / 2, y);
      y += fontSize * 1.55;
    });
    y += 34;
  });

  const link = document.createElement("a");
  link.download = "回憶抽屜-分享卡.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
  appendStored(storageKeys.shareCards, {
    id: createId("share"),
    sessionId: state.sessionId,
    mode: latest?.question.mode || state.mode,
    cardType: state.share.displayAnswer ? "question_answer" : "question_only",
    backgroundStyle: state.share.backgroundStyle,
    questionId: latest?.question.id,
    questionText: latest?.question.questionText || state.currentQuestion?.questionText,
    displayQuestion: state.share.displayQuestion,
    displayAnswer: state.share.displayAnswer,
    createdAt: new Date().toISOString(),
  });
  setToast("分享圖已產生。");
}

async function downloadQuestionCard() {
  const latest = state.answers[state.answers.length - 1];
  const question = latest?.question || state.currentQuestion;
  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  const width = 1080;
  const height = 1350;
  const style = question?.mode === "new_year" ? "new_year_red" : "year_review_blue";
  const palettes = {
    year_review_blue: ["#dfe8ed", "#f8f0df", "#c9d7e4", "#253853", "#272421"],
    new_year_red: ["#f6e4d9", "#fff6e8", "#d9a49a", "#8e3731", "#272421"],
  };
  const palette = palettes[style];

  canvas.width = width;
  canvas.height = height;
  drawCardBackground(context, width, height, style);

  context.textAlign = "center";
  context.textBaseline = "middle";

  context.fillStyle = "rgba(39,36,33,.66)";
  context.font = "400 34px serif";
  context.fillText("回憶抽屜", width / 2, 180);

  context.fillStyle = palette[3];
  context.font = "700 30px serif";
  context.fillText(question?.category || "抽屜卡", width / 2, 286);

  context.fillStyle = palette[4];
  context.font = "700 70px serif";
  const questionLines = wrapCanvasText(context, question?.questionText || "剛剛那張卡片", width - 260);
  let questionY = height / 2 - (questionLines.length - 1) * 58;
  questionLines.forEach((line) => {
    context.fillText(line, width / 2, questionY);
    questionY += 116;
  });

  try {
    const logo = await loadImage(makerLogoPath);
    context.save();
    context.globalAlpha = 0.16;
    context.drawImage(logo, width - 310, height - 310, 170, 170);
    context.restore();
  } catch {
    context.fillStyle = "rgba(39,36,33,.28)";
    context.font = "400 24px serif";
    context.fillText("種樹人", width - 215, height - 210);
  }

  const link = document.createElement("a");
  link.download = "回憶抽屜-題目卡.png";
  link.href = canvas.toDataURL("image/png");
  link.click();
  appendStored(storageKeys.shareCards, {
    id: createId("question_card"),
    sessionId: state.sessionId,
    mode: question?.mode || state.mode,
    cardType: "question_only",
    backgroundStyle: style,
    questionId: question?.id,
    questionText: question?.questionText,
    displayQuestion: true,
    displayAnswer: false,
    createdAt: new Date().toISOString(),
  });
  setToast("題目卡已產生。");
}

function drawCardBackground(context, width, height, style) {
  const isYearReview = style === "year_review_blue" || style === "night_drawer";
  const isNewYear = style === "new_year_red";

  const base = context.createLinearGradient(0, 0, width, height);
  if (isYearReview) {
    base.addColorStop(0, "#243752");
    base.addColorStop(0.42, "#dbe4e9");
    base.addColorStop(0.72, "#f7eedb");
    base.addColorStop(1, "#b9cbd8");
  } else if (isNewYear) {
    base.addColorStop(0, "#8e3731");
    base.addColorStop(0.32, "#d99675");
    base.addColorStop(0.66, "#fff4df");
    base.addColorStop(1, "#f1c69b");
  } else {
    base.addColorStop(0, style === "minimal_white" ? "#fffdf7" : "#fff8e9");
    base.addColorStop(0.58, style === "minimal_white" ? "#fffdf7" : "#f4ead5");
    base.addColorStop(1, "#fff8e9");
  }
  context.fillStyle = base;
  context.fillRect(0, 0, width, height);

  if (isYearReview) {
    const glow = context.createRadialGradient(width * 0.78, height * 0.18, 10, width * 0.78, height * 0.18, width * 0.28);
    glow.addColorStop(0, "rgba(243,218,158,.42)");
    glow.addColorStop(1, "rgba(243,218,158,0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    context.fillStyle = "rgba(255,248,226,.28)";
    context.fillRect(0, 0, width * 0.13, height);
    context.fillRect(width * 0.87, 0, width * 0.13, height);
  }

  if (isNewYear) {
    const sun = context.createRadialGradient(width * 0.78, height * 0.18, 10, width * 0.78, height * 0.18, width * 0.34);
    sun.addColorStop(0, "rgba(255,244,199,.72)");
    sun.addColorStop(1, "rgba(255,244,199,0)");
    context.fillStyle = sun;
    context.fillRect(0, 0, width, height);

    context.strokeStyle = "rgba(181,139,73,.18)";
    context.lineWidth = 2;
    for (let x = 120; x < width - 120; x += 42) {
      context.beginPath();
      context.moveTo(x, 120);
      context.lineTo(x, height - 120);
      context.stroke();
    }
  }

  context.strokeStyle = isYearReview ? "rgba(248,238,212,.5)" : "rgba(39,36,33,.16)";
  context.lineWidth = 2;
  context.strokeRect(width * 0.08, height * 0.08, width * 0.84, height * 0.84);

  context.fillStyle = isYearReview ? "rgba(255,255,255,.14)" : "rgba(39,36,33,.06)";
  for (let y = height * 0.14; y < height * 0.86; y += 38) {
    context.fillRect(width * 0.13, y, width * 0.74, 1);
  }

  context.strokeStyle = isNewYear ? "rgba(142,55,49,.24)" : "rgba(37,56,83,.26)";
  context.beginPath();
  context.moveTo(width * 0.35, height * 0.74);
  context.lineTo(width * 0.65, height * 0.74);
  context.stroke();
}

function loadImage(src) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = src;
  });
}

function wrapCanvasText(context, text, maxWidth) {
  const chars = Array.from(text);
  const lines = [];
  let line = "";
  chars.forEach((char) => {
    const testLine = line + char;
    if (context.measureText(testLine).width > maxWidth && line) {
      lines.push(line);
      line = char;
    } else {
      line = testLine;
    }
  });
  if (line) lines.push(line);
  return lines.slice(0, 5);
}

function renderSubmitQuestion() {
  page(`
    <form id="submissionForm" class="stack">
      <span class="eyebrow">投稿題目</span>
      <h2>你也有一個值得被問的問題嗎？</h2>
      <p class="helper">把它放進抽屜裡，也許明年會被某個人打開。</p>
      <label class="stack">
        <span class="small">題目</span>
        <textarea class="textarea" name="questionText" required placeholder="今年有沒有一件小事，後來成為很重要的事？"></textarea>
      </label>
      <label class="stack">
        <span class="small">適用模式</span>
        <select class="select" name="mode">
          <option value="year_review">年末回顧</option>
          <option value="new_year">新年展望</option>
          <option value="both">兩者都適合</option>
        </select>
      </label>
      <label class="stack">
        <span class="small">分類</span>
        <input class="field" name="category" placeholder="時刻與畫面" />
      </label>
      <label class="stack">
        <span class="small">為什麼想投稿這題</span>
        <textarea class="textarea" name="reason" placeholder="這題可以讓人回看不起眼但重要的變化。"></textarea>
      </label>
      <div class="toolbar">
        <label class="check"><input type="checkbox" name="allowCredit" /> 願意顯示署名</label>
        <input class="field" name="authorName" placeholder="署名，可留空" />
      </div>
      <div class="actions">
        <button class="button" type="submit">送出投稿</button>
        <button class="button secondary" type="button" data-view="home">回首頁</button>
      </div>
    </form>
  `);
}

function submitQuestion(event) {
  event.preventDefault();
  const form = new FormData(event.currentTarget);
  const submission = {
    id: createId("submission"),
    questionText: form.get("questionText"),
    mode: form.get("mode"),
    category: form.get("category"),
    reason: form.get("reason"),
    authorName: form.get("authorName"),
    allowCredit: form.get("allowCredit") === "on",
    status: "pending",
    createdAt: new Date().toISOString(),
  };
  appendStored(storageKeys.submissions, submission);
  setToast("已收到。種樹人會先讀過，再決定是否放進題庫。");
  event.currentTarget.reset();
}

function trimText(text, length) {
  const normalized = String(text || "").trim().replace(/\s+/g, " ");
  return normalized.length > length ? `${normalized.slice(0, length)}...` : normalized;
}

function escapeHtml(text) {
  return String(text || "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

render();
