export type UserRole = "admin" | "faculty";
export type ResourceType = "course" | "gem" | "prompt" | "artifact";
export type ResourceStatus = "draft" | "published";
export type WorkshopStatus = "draft" | "published" | "completed";
export type WorkshopMode = "online" | "offline" | "hybrid";
export type EnrollmentStatus = "enrolled" | "attended";
export type CourseStatus = "draft" | "published";
export type MaterialType = "ppt" | "pdf" | "video" | "link" | "doc";
export type SubmissionStatus = "submitted" | "graded";
export type ContributionStatus = "pending" | "approved" | "rejected";

export interface DBUser {
  id: string;
  email: string;
  name: string | null;
  role: UserRole;
  department: string | null;
  avatar: string | null;
  points: number;
  created_at: string;
}

export interface DBResource {
  id: string;
  type: ResourceType;
  title: string;
  description: string | null;
  track: string | null;
  level: string | null;
  stage: string | null;
  tool: string | null;
  platform: string | null;
  url: string | null;
  prompt_text: string | null;
  tags: string[];
  upvotes: number;
  downvotes: number;
  usage_count: number;
  featured: boolean;
  status: ResourceStatus;
  created_by: string | null;
  contributor?: string;
  created_at: string;
  updated_at: string;
}

export interface DBResourceVote {
  user_id: string;
  resource_id: string;
  vote: "up" | "down";
}

export interface DBWorkshop {
  id: string;
  title: string;
  description: string | null;
  track: string | null;
  scheduled_at: string | null;
  capacity: number | null;
  mode: WorkshopMode | null;
  meeting_url: string | null;
  created_by: string | null;
  status: WorkshopStatus;
  created_at: string;
}

export interface DBWorkshopEnrollment {
  user_id: string;
  workshop_id: string;
  status: EnrollmentStatus;
  enrolled_at: string;
}

export interface DBCourse {
  id: string;
  title: string;
  description: string | null;
  track: string | null;
  level: string | null;
  thumbnail_url: string | null;
  created_by: string | null;
  status: CourseStatus;
  created_at: string;
}

export interface DBCourseModule {
  id: string;
  course_id: string;
  title: string;
  description: string | null;
  order_index: number | null;
}

export interface DBCourseMaterial {
  id: string;
  module_id: string;
  type: MaterialType | null;
  title: string;
  file_url: string | null;
  order_index: number | null;
}

export interface DBAssignment {
  id: string;
  module_id: string;
  title: string;
  description: string | null;
  due_date: string | null;
  rubric: string | null;
  max_score: number;
}

export interface DBSubmission {
  id: string;
  assignment_id: string;
  user_id: string;
  content_text: string | null;
  file_url: string | null;
  submitted_at: string;
  status: SubmissionStatus;
  score: number | null;
  feedback: string | null;
  graded_by: string | null;
  graded_at: string | null;
}

export interface DBContribution {
  id: string;
  user_id: string;
  resource_id: string | null;
  type: string | null;
  track: string | null;
  points_awarded: number;
  status: ContributionStatus;
  reviewer_notes: string | null;
  submitted_at: string;
  reviewed_at: string | null;
}

export interface DBBadge {
  id: string;
  user_id: string;
  badge_type: string;
  earned_at: string;
}

export interface DBCourseEnrollment {
  user_id: string;
  course_id: string;
  enrolled_at: string;
  completed: boolean;
}

// Joined types
export interface WorkshopWithEnrollment extends DBWorkshop {
  enrollment_count?: number;
  user_enrollment?: DBWorkshopEnrollment | null;
}

export interface CourseWithEnrollment extends DBCourse {
  module_count?: number;
  user_enrollment?: DBCourseEnrollment | null;
}

export interface ContributionWithUser extends DBContribution {
  user?: DBUser;
  resource?: DBResource;
}

export interface Database {
  public: {
    Tables: {
      users: { Row: DBUser; Insert: Partial<DBUser>; Update: Partial<DBUser> };
      resources: { Row: DBResource; Insert: Partial<DBResource>; Update: Partial<DBResource> };
      resource_votes: { Row: DBResourceVote; Insert: Partial<DBResourceVote>; Update: Partial<DBResourceVote> };
      workshops: { Row: DBWorkshop; Insert: Partial<DBWorkshop>; Update: Partial<DBWorkshop> };
      workshop_enrollments: { Row: DBWorkshopEnrollment; Insert: Partial<DBWorkshopEnrollment>; Update: Partial<DBWorkshopEnrollment> };
      courses: { Row: DBCourse; Insert: Partial<DBCourse>; Update: Partial<DBCourse> };
      course_modules: { Row: DBCourseModule; Insert: Partial<DBCourseModule>; Update: Partial<DBCourseModule> };
      course_materials: { Row: DBCourseMaterial; Insert: Partial<DBCourseMaterial>; Update: Partial<DBCourseMaterial> };
      assignments: { Row: DBAssignment; Insert: Partial<DBAssignment>; Update: Partial<DBAssignment> };
      submissions: { Row: DBSubmission; Insert: Partial<DBSubmission>; Update: Partial<DBSubmission> };
      contributions: { Row: DBContribution; Insert: Partial<DBContribution>; Update: Partial<DBContribution> };
      badges: { Row: DBBadge; Insert: Partial<DBBadge>; Update: Partial<DBBadge> };
      course_enrollments: { Row: DBCourseEnrollment; Insert: Partial<DBCourseEnrollment>; Update: Partial<DBCourseEnrollment> };
    };
  };
}
