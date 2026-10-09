export type RoleSlug = "students" | "faculty" | "institutions" | "practitioners" | "teachers";

export interface RoleInfo {
  slug: RoleSlug;
  label: string;
  /** form value stored in audience_inquiries.role_type */
  roleType: "student" | "faculty" | "hub" | "general";
  path: string;
  become: string;
  promise: string;
  soon?: boolean;
}

export const ROLES: RoleInfo[] = [
  {
    slug: "students",
    label: "Student",
    roleType: "student",
    path: "Srujana Pathway",
    become: "an AI engineer",
    promise: "Build real things with AI. Become an AI engineer or step into an AI-era career.",
  },
  {
    slug: "faculty",
    label: "Faculty",
    roleType: "faculty",
    path: "T.R.A.C.K.",
    become: "a Superfaculty",
    promise: "Be an excellent teacher, researcher and mentor at once. Let agents carry the drudgery.",
  },
  {
    slug: "institutions",
    label: "Institution",
    roleType: "hub",
    path: "T.R.A.C.K. for Institutions",
    become: "an AI-ready institution",
    promise: "Curriculum that updates itself, workflows run by agents, and a direct line to learners.",
  },
  {
    slug: "practitioners",
    label: "Practitioner",
    roleType: "general",
    path: "Reskill / Upskill",
    become: "an agent orchestrator",
    promise: "Move from doing the task to directing the AI that does it. Ship a work-relevant project.",
    soon: true,
  },
  {
    slug: "teachers",
    label: "School teacher",
    roleType: "general",
    path: "Teach-the-Teachers",
    become: "a confident AI-era teacher",
    promise: "Use AI in class safely and well, so tomorrow's citizens are ready today.",
    soon: true,
  },
];

export const roleBySlug = (s: string) => ROLES.find((r) => r.slug === s);

export interface Idea {
  title: string;
  detail: string;
}

export const IDEAS: Record<"students" | "faculty" | "institutions", Idea[]> = {
  students: [
    {
      title: "Study buddy that proves it is right",
      detail: "Build an English study buddy that quizzes you from your own notes. Add evals that measure how often it is wrong.",
    },
    {
      title: "Syllabus to weekly project plan",
      detail: "An agent that turns a college syllabus into a week-by-week plan of small, shippable projects.",
    },
    {
      title: "Red-team a campus chatbot",
      detail: "Find ten ways a chatbot fails. Fix three. Write up what you learned.",
    },
    {
      title: "Local problem clinic",
      detail: "Build an AI tool for a nearby shop, farm or clinic, with the owner as your first user.",
    },
    {
      title: "Reproduce a paper, audit the agent",
      detail: "Reproduce one result from a recent paper using a coding agent, then document every mistake the agent made.",
    },
  ],
  faculty: [
    {
      title: "One course, project-based",
      detail: "Redesign one course around projects, with an AI tutor and open-agent assessment.",
    },
    {
      title: "Automate one admin burden",
      detail: "Attendance, rubric audits or accreditation evidence, run by an agent workflow that a human checks.",
    },
    {
      title: "Literature-sweep agent",
      detail: "A research agent for your area that cites every claim and flags what it could not verify.",
    },
    {
      title: "Mentoring-load dashboard",
      detail: "Flag the students who need a human conversation, so your mentoring time lands where it matters.",
    },
    {
      title: "Half-day school workshop",
      detail: "Teach a nearby school's teachers how to use AI safely in class.",
    },
  ],
  institutions: [
    {
      title: "Living-syllabus pilot",
      detail: "One programme, reviewed every quarter with AI-assisted evidence, instead of every four years.",
    },
    {
      title: "AI-use policy, co-written",
      detail: "Draft the policy with students, faculty and staff in the room, then test it on real cases.",
    },
    {
      title: "Agent-run department workflow",
      detail: "Timetabling, grievance triage or audit prep for one department, with a human sign-off at every gate.",
    },
  ],
};
