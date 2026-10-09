export const GUIDE_REPO = "https://github.com/sanchitnis/learn-ai-engineering";
const g = (anchor: string) => `${GUIDE_REPO}#${anchor}`;

export type SkillKey = "build" | "swe" | "agents" | "shape" | "judgment" | "foundations" | "community";

export const SKILL_LABEL: Record<SkillKey, string> = {
  build: "Build AI apps",
  swe: "Software fundamentals",
  agents: "Coding agents",
  shape: "Shape the build",
  judgment: "Judgment",
  foundations: "Foundations",
  community: "Community",
};

export interface Quest {
  id: string;
  level: number;
  title: string;
  skill: SkillKey;
  /** a suggested time box, not a measured duration */
  time: string;
  goal: string;
  steps: string[];
  read: { label: string; url: string }[];
  proof: string;
}

export const LEVELS = [
  { n: 1, name: "Warm up", blurb: "Set up, make the first call, and learn to specify before you build." },
  { n: 2, name: "Build and test", blurb: "Retrieval, evals and agents. Learn to measure whether your thing works." },
  { n: 3, name: "Ship and shape", blurb: "Talk to real users, ship a small thing, and try to break it." },
  { n: 4, name: "Judgment and proof", blurb: "Explain it, own the risks, show your work, and help the next person." },
] as const;

export const QUESTS: Quest[] = [
  {
    id: "workshop",
    level: 1,
    title: "Set up your workshop",
    skill: "swe",
    time: "1 to 2 hours",
    goal: "Have a working place to build: a GitHub repo, a Python environment and an AI coding assistant you can talk to.",
    steps: [
      "Create a GitHub account if you don't have one, and a new public repository called `ai-quests`.",
      "Install Python and make a virtual environment. Run a one-line script that prints your name.",
      "Pick one AI coding assistant and ask it to explain what your script does.",
      "Write a short README: who you are and what you want to build this term.",
    ],
    read: [
      { label: "Guide: Git and GitHub", url: g("git--github") },
      { label: "Guide: Development environment and tooling", url: g("development-environment--tooling") },
      { label: "Python tutorial (official)", url: "https://docs.python.org/3/tutorial/" },
    ],
    proof: "Link to your `ai-quests` repository with a README and your first script.",
  },
  {
    id: "first-call",
    level: 1,
    title: "Talk to a model from code",
    skill: "build",
    time: "2 hours",
    goal: "Call a language model from your own script, handle a failure, and see what changes when you change the prompt.",
    steps: [
      "Get access to any LLM API (a free tier is fine). Keep the key out of your repo.",
      "Write a script that sends a question and prints the answer.",
      "Make it fail on purpose (bad key, empty input) and handle the error cleanly.",
      "Try the same question three ways. Write two lines on what changed.",
    ],
    read: [
      { label: "Guide: Orchestrating AI (prompting, RAG, agents)", url: g("orchestrating-ai-prompting-rag--agents-for-builders") },
      { label: "Guide: Prompting techniques", url: g("prompting-techniques") },
    ],
    proof: "Repo link to the script and a short note on the three prompt variants. No keys in the code.",
  },
  {
    id: "spec-first",
    level: 1,
    title: "Spec before code",
    skill: "agents",
    time: "2 to 3 hours",
    goal: "Write a one-page spec for a tiny tool, then have a coding agent build it from the spec while you review every change.",
    steps: [
      "Choose a tiny tool, such as a study-timer or a flashcard shuffler.",
      "Write the spec: who uses it, what it does, what it must not do, and how you will know it works.",
      "Give the spec to a coding agent. Read each change before accepting it.",
      "List anything the agent got wrong or did that you didn't ask for.",
    ],
    read: [
      { label: "Guide: AI-native SDLC and spec-driven development", url: g("ai-native-sdlc--spec-driven-development") },
      { label: "Guide: AI coding tools and vibe-coding workflows", url: g("ai-coding-tools--vibe-coding-workflows") },
    ],
    proof: "The spec file and the finished tool in your repo, plus your list of agent mistakes.",
  },
  {
    id: "rag-notes",
    level: 2,
    title: "Answer from your own notes",
    skill: "build",
    time: "3 to 4 hours",
    goal: "Build a small retrieval-augmented tool that answers questions from your own notes and shows which passage it used.",
    steps: [
      "Collect at least ten pages of your own notes or a public document you can legally use.",
      "Split them into chunks and store them so you can search by meaning.",
      "For a question, retrieve the best chunks and pass them to the model with the question.",
      "Show the source passage next to every answer.",
    ],
    read: [
      { label: "Guide: RAG (retrieval-augmented generation)", url: g("rag-retrieval-augmented-generation") },
      { label: "Guide: Vector databases", url: g("vector-databases") },
    ],
    proof: "Repo link and a screenshot or transcript of three questions, each with its cited source passage.",
  },
  {
    id: "evals",
    level: 2,
    title: "Measure it: ten test questions",
    skill: "build",
    time: "2 to 3 hours",
    goal: "Write a small test set for your notes tool, measure how often it is right, and study the mistakes.",
    steps: [
      "Write ten questions whose answers you know from the notes, including two it should refuse.",
      "Run them all and record pass or fail for each.",
      "For every failure, say why: bad retrieval, bad prompt, or missing information.",
      "Change one thing, rerun, and compare the score.",
    ],
    read: [
      { label: "Guide: LLM evaluation", url: g("llm-evaluation") },
      { label: "Guide: Evaluation metrics", url: g("evaluation-metrics") },
    ],
    proof: "The test set, the before and after scores, and your failure analysis in the repo.",
  },
  {
    id: "agent-one-tool",
    level: 2,
    title: "An agent with one tool",
    skill: "build",
    time: "3 to 4 hours",
    goal: "Build a simple agent loop that can use one tool, with guardrails that stop it doing harm.",
    steps: [
      "Pick one safe tool: a calculator, a file reader or a web search.",
      "Let the model decide when to call it, run it, and feed the result back.",
      "Log every step the agent takes.",
      "Add two guardrails: a maximum number of steps and a block on anything that changes or deletes data.",
    ],
    read: [
      { label: "Guide: Agentic AI systems", url: g("agentic-ai-systems") },
      { label: "Guide: LLM agents", url: g("llm-agents") },
      { label: "DeepLearning.AI: Agentic AI course", url: "https://learn.deeplearning.ai/courses/agentic-ai/information" },
    ],
    proof: "Repo link, a step log from one real run, and a note on your two guardrails.",
  },
  {
    id: "know-your-user",
    level: 3,
    title: "Talk to three real people",
    skill: "shape",
    time: "A few days, in short chats",
    goal: "Find a real problem by talking to the people who have it, before you build anything for them.",
    steps: [
      "Pick a group you can reach: classmates, a shopkeeper, a teacher, a relative who runs something.",
      "Interview three people for ten minutes each about how they do the task today. Ask about the past, not what they'd like.",
      "Write a one-paragraph problem statement in their words.",
      "Decide: is this worth building, and what is the smallest version?",
    ],
    read: [
      { label: "Guide: Product engineering with AI", url: g("product-engineering-with-ai") },
    ],
    proof: "Your three sets of notes (with permission, names removed) and the problem statement.",
  },
  {
    id: "ship-small",
    level: 3,
    title: "Ship a small thing",
    skill: "shape",
    time: "4 to 6 hours",
    goal: "Put a working version of your idea on the internet where another person can use it.",
    steps: [
      "Cut your idea to the smallest useful version.",
      "Deploy it to a free host so it has a public link.",
      "Write a README with what it does, what it doesn't do, and its known limits.",
      "Have one real person try it and note what confused them.",
    ],
    read: [
      { label: "Guide: Shipping AI products (cloud, APIs, observability)", url: g("shipping-ai-products-cloud-apis--observability") },
      { label: "Guide: Cloud fundamentals", url: g("cloud-fundamentals") },
    ],
    proof: "The live link, the repo link and the notes from your first user.",
  },
  {
    id: "red-team",
    level: 3,
    title: "Red-team your own build",
    skill: "judgment",
    time: "2 to 3 hours",
    goal: "Try to make your own project fail or be misused, and fix what you can.",
    steps: [
      "List five ways it could fail or be misused: wrong answers, private data, bias, abuse, over-trust.",
      "Try each one for real and record what happened.",
      "Fix at least two. For the rest, write what you would do.",
      "Add a plain-language limits note to your README.",
    ],
    read: [
      { label: "Guide: Ethics and responsibility in the AI era", url: g("ethics--responsibility-in-the-ai-era") },
    ],
    proof: "Your failure list with results, the fixes in your repo, and the limits note.",
  },
  {
    id: "explain-transformer",
    level: 4,
    title: "Explain a transformer in your own words",
    skill: "foundations",
    time: "3 to 4 hours",
    goal: "Learn how the model underneath works well enough to teach it to someone else.",
    steps: [
      "Read or watch one good explanation of attention and transformers.",
      "Close it and write a one-page explanation from memory, with one diagram you drew yourself.",
      "Give it to a friend or mentor and ask them to say what is unclear.",
      "Revise once using their questions.",
    ],
    read: [
      { label: "The Illustrated Transformer", url: "https://jalammar.github.io/illustrated-transformer/" },
      { label: "Karpathy: Let's build GPT from scratch", url: "https://www.youtube.com/watch?v=kCc8FmEb1nY" },
      { label: "Guide: Transformers and attention", url: g("transformers--attention") },
    ],
    proof: "Your one-page explanation and the questions your reviewer asked.",
  },
  {
    id: "risk-memo",
    level: 4,
    title: "Write a one-page risk memo",
    skill: "judgment",
    time: "2 hours",
    goal: "Own the biggest risk in your project and say what you decided and why.",
    steps: [
      "Pick the single most serious risk in your project.",
      "Describe who could be harmed and how likely it is.",
      "State your decision: fix, limit, warn or don't ship. Give reasons.",
      "Ask a mentor or peer to challenge the memo, and record their pushback.",
    ],
    read: [
      { label: "Guide: Core human life skills for the AI era", url: g("core-human-life-skills-for-the-ai-era") },
    ],
    proof: "The memo and the challenge it received.",
  },
  {
    id: "portfolio",
    level: 4,
    title: "Build your public portfolio",
    skill: "shape",
    time: "3 hours",
    goal: "Gather your work into one public page that a stranger can understand in two minutes.",
    steps: [
      "Create a single page (a README or a simple site) that lists your quests.",
      "For each project: one sentence on the problem, a link, and what you learned.",
      "Add your spec, test results and risk memo so people can check your thinking.",
      "Ask someone who doesn't know you to read it and say what they think you can do.",
    ],
    read: [
      { label: "Guide: Building and showcasing your portfolio", url: g("building--showcasing-your-portfolio") },
    ],
    proof: "The public link to your portfolio.",
  },
  {
    id: "pay-it-forward",
    level: 4,
    title: "Pay it forward",
    skill: "community",
    time: "2 to 3 hours",
    goal: "Help one other person complete a quest. This is how access stays free.",
    steps: [
      "Find a classmate or friend who is starting out.",
      "Walk them through one quest you have finished, without doing it for them.",
      "Review their proof and give one specific suggestion.",
      "Write down what you learned from teaching it.",
    ],
    read: [],
    proof: "A short note on who you helped (with their permission) and what you both learned.",
  },
];

export const questById = (id: string) => QUESTS.find((q) => q.id === id);
