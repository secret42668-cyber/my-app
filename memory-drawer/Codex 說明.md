# 《回憶抽屜》App 開發說明

製作者：種樹人  
核心概念：透過提問，幫助使用者回顧一年、整理感受，並把新年展望轉化成可延續的小行動。

核心句：

> 說到底，我們問自己的問題，決定了我們會變成什麼樣的人。  
> —— Leo Babauta

## 一、產品流程

### 1. 首頁

首頁呈現：

- App 名稱：回憶抽屜
- 製作者：種樹人
- 核心句
- 兩個主要入口：
  - 年末回顧
  - 新年展望

首頁文案：

> 打開一個抽屜，看看今年留下了什麼。

### 2. 模式選擇

使用者選擇：

#### A. 年末回顧

目標：協助使用者整理今年的亮點、感受、失去、得到、關係與成長。

#### B. 新年展望

目標：協助使用者整理明年的期待、方向、關係、習慣與想放下的事，並可延伸成提醒或行動計畫。

### 3. 抽卡流程

流程如下：

1. 使用者選擇模式
2. 使用者輸入一個數字
3. 後端根據模式、數字、抽卡節奏抽出題目
4. 前端顯示題目卡
5. 使用者回答
6. 系統根據回答給出追問
7. 使用者可選擇：
   - 再回答一題
   - 進入總結
   - 若是新年展望，可建立行動提醒

## 二、前端設計

### 1. 視覺風格

整體氛圍：

- 安靜
- 紙感
- 抽屜
- 卡片
- 夜晚
- 微光
- 不像占卜，也不要太工具感

色系建議：

#### 年末回顧

- 深藍
- 米白
- 淡金
- 灰藍

#### 新年展望

- 暖紅
- 奶油白
- 霧金
- 木質棕

### 2. 主要頁面

#### HomePage

內容：

- App Logo / 名稱
- 製作者
- 核心句
- 模式選擇按鈕

元件：

```ts
<HomePage />
<ModeButton mode="year_review" />
<ModeButton mode="new_year" />
```

#### NumberInputPage

文案：

> 請選一個數字。  
> 不用想太多，讓直覺先回答。

功能：

- 使用者輸入 1～99 的數字
- 點擊「打開抽屜」
- 呼叫後端抽題 API

元件：

```ts
<NumberInput />
<DrawerOpenButton />
```

#### QuestionCardPage

顯示：

- 題目分類
- 題目文字
- 補充說明
- 回答輸入框

文案：

> 不用整理得很好。  
> 先留下你當時真的在想的。

元件：

```ts
<QuestionCard />
<AnswerTextarea />
<SubmitAnswerButton />
```

#### FollowUpPage

顯示根據使用者回答產生的追問。

追問語氣要克制，不要像心靈雞湯。

例如：

- 這件事對你來說，真正重要的是什麼？
- 如果再多看一眼，你會發現什麼？
- 這段經驗提醒了你什麼？
- 你想把這個發現帶到明年嗎？

#### SummaryPage

總結分三段：

1. 你今年看見的自己 / 你正在靠近的方向
2. 你可以帶走的東西
3. 給下一段時間的一句提醒

語氣規則：

- 根據使用者回答生成
- 不過度解讀
- 不強迫正向
- 加一點希望感即可
- 避免煽情

#### ActionSetupPage

主要用於新年展望，也可用於部分年末回顧題目。

文案：

> 你願意替這件事，在日常裡留下一個小位置嗎？

功能：

- 顯示建議行動
- 使用者可選擇行動
- 可設定提醒頻率
- 可設定提醒時間
- 可自訂提醒文字

提醒選項：

- 每天
- 每週
- 每月
- 不提醒，只存下來

## 三、後端運算邏輯

### 1. 抽題邏輯

不要完全隨機，而是「有節奏的隨機」。

#### 年末回顧節奏

建議順序：

1. 時刻 / 畫面
2. 感受 / 狀態
3. 成長 / 自我
4. 關係 / 他人
5. 放下 / 結束

#### 新年展望節奏

建議順序：

1. 方向
2. 行動
3. 關係
4. 習慣 / 生活
5. 放下 / 調整

### 2. 抽題演算法

輸入：

```ts
{
  userId: string;
  mode: "year_review" | "new_year";
  userNumber: number;
  sessionId: string;
}
```

邏輯：

```ts
function drawQuestion(mode, userNumber, sessionProgress, answeredQuestionIds) {
  const stage = getCurrentStage(mode, sessionProgress);

  const candidateQuestions = questions.filter(q =>
    q.mode === mode &&
    q.stage === stage &&
    !answeredQuestionIds.includes(q.id)
  );

  const index = userNumber % candidateQuestions.length;

  return candidateQuestions[index];
}
```

說明：

- 使用者輸入的數字會影響抽題結果
- 但題目仍受到「節奏 stage」控制
- 避免第一題就抽到太重的問題
- 避免重複抽到同一題

### 3. 回答分析邏輯

使用 AI 分析使用者回答，輸出結構化結果。

輸入：

```ts
{
  question: string;
  answer: string;
  mode: "year_review" | "new_year";
}
```

AI 需回傳：

```ts
{
  themes: string[];
  emotions: string[];
  key_phrases: string[];
  action_potential: "none" | "low" | "medium" | "high";
  suggested_action_type:
    | "awareness"
    | "relationship"
    | "self_care"
    | "habit"
    | "letting_go"
    | "learning"
    | "planning"
    | null;
  follow_up_question: string;
}
```

## 四、AI 生成規則

### 1. 追問規則

追問要根據：

- 題目本身
- 使用者回答
- 使用者提到的情緒
- 使用者提到的人、事、選擇或困難

避免：

- 過度治療化
- 過度解讀
- 勵志口號
- 替使用者下結論

### 2. 總結生成公式

總結分三段。

#### 第一段：描述

只整理使用者說了什麼。

例如：

> 你提到今年有一段時間很疲累，也有一些事情其實是撐著完成的。

#### 第二段：提取

看見回答裡的脈絡。

例如：

> 這些經驗裡反覆出現的，是你開始分辨哪些事情值得繼續投入，哪些需要調整。

#### 第三段：微希望

只給一點點光，不要照成舞台燈。

例如：

> 你不一定要立刻改變什麼，但你已經開始看見自己真正需要的位置。

## 五、資料庫格式

### Table: users

```sql
CREATE TABLE users (
  id UUID PRIMARY KEY,
  name TEXT,
  email TEXT UNIQUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Table: question_cards

```sql
CREATE TABLE question_cards (
  id UUID PRIMARY KEY,
  mode TEXT NOT NULL,
  stage TEXT NOT NULL,
  category TEXT NOT NULL,
  intensity TEXT NOT NULL,
  question_text TEXT NOT NULL,
  helper_text TEXT,
  action_enabled BOOLEAN DEFAULT FALSE,
  default_action_type TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

欄位說明：

```ts
mode: "year_review" | "new_year"

stage:
  // 年末回顧
  "moment"
  "feeling"
  "growth"
  "relationship"
  "letting_go"

  // 新年展望
  "direction"
  "plan"
  "relationship"
  "habit"
  "adjustment"

intensity:
  "light" | "medium" | "deep"
```

### Table: action_suggestions

```sql
CREATE TABLE action_suggestions (
  id UUID PRIMARY KEY,
  question_id UUID REFERENCES question_cards(id),
  action_type TEXT NOT NULL,
  action_text TEXT NOT NULL,
  reminder_text TEXT,
  frequency_options TEXT[],
  created_at TIMESTAMP DEFAULT NOW()
);
```

範例：

```json
{
  "question_id": "xxx",
  "action_type": "relationship",
  "action_text": "傳一則簡短訊息給你想到的那個人。",
  "reminder_text": "今天，有沒有人值得你記得？",
  "frequency_options": ["once", "weekly", "monthly"]
}
```

### Table: reflection_sessions

```sql
CREATE TABLE reflection_sessions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  mode TEXT NOT NULL,
  status TEXT DEFAULT 'active',
  current_stage TEXT,
  summary TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);
```

### Table: user_answers

```sql
CREATE TABLE user_answers (
  id UUID PRIMARY KEY,
  session_id UUID REFERENCES reflection_sessions(id),
  question_id UUID REFERENCES question_cards(id),
  answer_text TEXT NOT NULL,
  ai_analysis JSONB,
  follow_up_question TEXT,
  follow_up_answer TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

### Table: user_actions

```sql
CREATE TABLE user_actions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  session_id UUID REFERENCES reflection_sessions(id),
  question_id UUID REFERENCES question_cards(id),
  action_text TEXT NOT NULL,
  reminder_text TEXT,
  frequency TEXT,
  reminder_time TIME,
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW()
);
```

## 六、題庫資料格式

建議用 JSON seed 匯入。

```json
{
  "id": "yr_moment_001",
  "mode": "year_review",
  "stage": "moment",
  "category": "時刻與畫面",
  "intensity": "light",
  "question_text": "現在想起來，最深刻的一個畫面",
  "helper_text": "不用解釋原因，先把那個畫面留下來。",
  "action_enabled": true,
  "default_action_type": "awareness",
  "actions": [
    {
      "action_text": "把這個畫面寫成三句話存下來。",
      "reminder_text": "今天，有沒有一個值得留下的畫面？",
      "frequency_options": ["daily", "weekly"]
    }
  ]
}
```

## 七、API 設計

### POST /api/sessions

建立回顧或展望 session。

```json
{
  "userId": "xxx",
  "mode": "year_review"
}
```

### POST /api/questions/draw

抽題。

```json
{
  "sessionId": "xxx",
  "mode": "year_review",
  "userNumber": 27
}
```

回傳：

```json
{
  "questionId": "yr_moment_001",
  "questionText": "現在想起來，最深刻的一個畫面",
  "category": "時刻與畫面",
  "helperText": "不用解釋原因，先把那個畫面留下來。"
}
```

### POST /api/answers

儲存回答並產生追問。

```json
{
  "sessionId": "xxx",
  "questionId": "xxx",
  "answerText": "今年我印象最深的是..."
}
```

### POST /api/summary

產生總結。

```json
{
  "sessionId": "xxx"
}
```

### POST /api/actions

建立行動提醒。

```json
{
  "userId": "xxx",
  "sessionId": "xxx",
  "questionId": "xxx",
  "actionText": "每天記下一件感謝的事",
  "reminderText": "今天，有沒有人值得你記得？",
  "frequency": "daily",
  "reminderTime": "21:30"
}
```

## 八、提醒功能邏輯

提醒不是任務，而是微提問。

不要顯示：

> 該打卡了。

改成：

> 今天，有沒有一件事值得被你留下來？

提醒類型：

```ts
type ReminderFrequency =
  | "once"
  | "daily"
  | "weekly"
  | "monthly"
  | "none";
```

## 九、MVP 優先順序

### MVP 1

- 首頁
- 模式選擇
- 輸入數字
- 抽題
- 回答
- AI 追問
- AI 總結

### MVP 2

- 新年展望後建立行動
- 設定提醒
- 使用者可查看「正在種的事」

### MVP 3

- 歷史紀錄
- 年度報告
- 多題完整回顧
- 匯出成文字卡片

## 十、重要產品原則

1. 所有建議都必須根據使用者回答生成。
2. 不要提供空泛建議。
3. 不要過度鼓勵。
4. 不要假裝理解超過使用者說出的內容。
5. 每個行動都要對應題目本身。
6. 總結只加一點希望感，不要煽情。
7. 這個 app 的目的不是讓人「變更好」，而是讓人「更清楚」。

## 十一、補充功能：題目投稿

### 功能目的

讓使用者可以投稿自己的好問題，作為未來題庫擴充來源。

### 前端流程

入口可放在：

- 題目卡片頁右上角：**投稿題目**
- 回答完成頁：**我也想到一個問題**
- 設定頁：**投稿一張抽屜卡**

投稿頁欄位：

```ts
{
  questionText: string;
  mode: "year_review" | "new_year" | "both";
  category?: string;
  reason?: string;
  authorName?: string;
  allowCredit: boolean;
}
```

前端文案：

> 你也有一個值得被問的問題嗎？  
> 把它放進抽屜裡，也許明年會被某個人打開。

送出後顯示：

> 已收到。種樹人會先讀過，再決定是否放進題庫。

### 後端資料表

```sql
CREATE TABLE question_submissions (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  question_text TEXT NOT NULL,
  mode TEXT NOT NULL,
  category TEXT,
  reason TEXT,
  author_name TEXT,
  allow_credit BOOLEAN DEFAULT FALSE,
  status TEXT DEFAULT 'pending',
  admin_note TEXT,
  created_at TIMESTAMP DEFAULT NOW(),
  reviewed_at TIMESTAMP
);
```

`status` 可為：

```ts
"pending" | "approved" | "rejected" | "edited"
```

### 管理邏輯

投稿題目不要直接進入正式題庫，需人工審核。

審核重點：

- 是否符合《回憶抽屜》的語氣
- 是否能引導反思，而非逼問
- 是否太煽情或太治療化
- 是否過度私密、刺激或帶有評判
- 是否適合年末回顧或新年展望

## 十二、補充功能：產生社群分享圖片

### 功能目的

讓使用者把「卡片問題＋自己的回答」生成一張可分享圖片。

注意：分享圖片應尊重隱私，預設不公開上傳，只儲存在使用者端或使用者帳號紀錄中。

### 前端流程

入口：

- 回答完成頁：**製作分享卡**
- 總結頁：**分享這張抽屜卡**

使用者可選：

1. 是否顯示自己的回答
2. 是否只顯示題目
3. 是否顯示 App 名稱
4. 是否顯示製作者：種樹人
5. 選擇背景樣式

背景樣式建議：

```ts
"year_review_blue"
"new_year_red"
"paper_warm"
"night_drawer"
"minimal_white"
```

### 圖片內容格式

#### 版本 A：只分享題目

```txt
回憶抽屜

今年最感謝的一個人是誰？

製作者：種樹人
```

#### 版本 B：題目＋回答

```txt
回憶抽屜

今年最感謝的一個人是誰？

「我想到的是……」

製作者：種樹人
```

#### 版本 C：總結分享

```txt
回憶抽屜

今年的我，看見了：

「……AI 生成的克制型總結……」

製作者：種樹人
```

### 後端資料表

```sql
CREATE TABLE share_cards (
  id UUID PRIMARY KEY,
  user_id UUID REFERENCES users(id),
  session_id UUID REFERENCES reflection_sessions(id),
  question_id UUID REFERENCES question_cards(id),
  answer_id UUID REFERENCES user_answers(id),
  card_type TEXT NOT NULL,
  background_style TEXT NOT NULL,
  display_question BOOLEAN DEFAULT TRUE,
  display_answer BOOLEAN DEFAULT FALSE,
  display_summary BOOLEAN DEFAULT FALSE,
  image_url TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
```

`card_type` 可為：

```ts
"question_only" | "question_answer" | "summary"
```

### API

#### POST /api/question-submissions

```json
{
  "userId": "xxx",
  "questionText": "今年有沒有一件小事，後來成為很重要的事？",
  "mode": "year_review",
  "category": "時刻與畫面",
  "reason": "這題可以讓人回看不起眼但重要的變化。",
  "authorName": "Gaga",
  "allowCredit": true
}
```

#### POST /api/share-cards

```json
{
  "userId": "xxx",
  "sessionId": "xxx",
  "questionId": "xxx",
  "answerId": "xxx",
  "cardType": "question_answer",
  "backgroundStyle": "year_review_blue",
  "displayQuestion": true,
  "displayAnswer": true
}
```

回傳：

```json
{
  "shareCardId": "xxx",
  "imageUrl": "https://..."
}
```

## 十三、圖片生成規則

### 尺寸

建議支援：

```ts
"instagram_story": "1080x1920"
"instagram_post": "1080x1080"
"line_share": "1200x630"
```

### 視覺規則

- 題目文字置中
- 回答文字可置中或靠左
- 回答太長時自動縮字或截斷
- 保留足夠留白
- 不要加入過多裝飾
- 卡片要有「安靜、抽屜、紙感、微光」的感覺

### 隱私規則

- 預設不顯示使用者姓名
- 預設不公開回答
- 分享前必須讓使用者確認畫面
- 使用者可以只分享題目，不分享回答

## 十四、更新後 MVP 順序

### MVP 1

- 首頁
- 模式選擇
- 輸入數字
- 抽題
- 回答
- AI 追問
- AI 總結

### MVP 2

- 新年展望行動提醒
- 「正在種的事」
- 分享圖片產生

### MVP 3

- 使用者投稿題目
- 投稿審核後擴充題庫
- 歷史紀錄
- 年度報告匯出
