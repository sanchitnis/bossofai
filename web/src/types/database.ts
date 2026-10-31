export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type UserRole =
  | 'student'
  | 'faculty'
  | 'mentor'
  | 'institutional_lead'
  | 'industry_partner'
  | 'admin';

export type SrujanaStage = 'Stage 1' | 'Stage 2' | 'Stage 3' | 'Stage 4';

export type Database = {
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
          name: string | null;
          role: UserRole;
          institution: string | null;
          avatar: string | null;
          points: number;
          stage: SrujanaStage;
          badge: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          name?: string | null;
          role?: UserRole;
          institution?: string | null;
          avatar?: string | null;
          points?: number;
          stage?: SrujanaStage;
          badge?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          name?: string | null;
          role?: UserRole;
          institution?: string | null;
          avatar?: string | null;
          points?: number;
          stage?: SrujanaStage;
          badge?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [];
      };
      projects: {
        Row: {
          id: string;
          title: string;
          category: string;
          stage: string;
          smi_score: number;
          description: string;
          lead_name: string;
          institution: string | null;
          github_url: string | null;
          demo_url: string | null;
          upvotes: number;
          status: 'draft' | 'published' | 'archived';
          created_at: string;
        };
        Insert: {
          id?: string;
          title: string;
          category: string;
          stage?: string;
          smi_score?: number;
          description: string;
          lead_name: string;
          institution?: string | null;
          github_url?: string | null;
          demo_url?: string | null;
          upvotes?: number;
          status?: 'draft' | 'published' | 'archived';
          created_at?: string;
        };
        Update: {
          id?: string;
          title?: string;
          category?: string;
          stage?: string;
          smi_score?: number;
          description?: string;
          lead_name?: string;
          institution?: string | null;
          github_url?: string | null;
          demo_url?: string | null;
          upvotes?: number;
          status?: 'draft' | 'published' | 'archived';
          created_at?: string;
        };
        Relationships: [];
      };
      leaderboard_entries: {
        Row: {
          id: string;
          user_id: string | null;
          name: string;
          institution: string;
          stage: string;
          points: number;
          velocity: string;
          badge: string;
          rank: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id?: string | null;
          name: string;
          institution: string;
          stage?: string;
          points?: number;
          velocity?: string;
          badge?: string;
          rank?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string | null;
          name?: string;
          institution?: string;
          stage?: string;
          points?: number;
          velocity?: string;
          badge?: string;
          rank?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      hub_nodes: {
        Row: {
          id: string;
          institution_name: string;
          executive_sponsor: string | null;
          active_students: number;
          completed_probes: number;
          tier: string;
          spocs_count: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          institution_name: string;
          executive_sponsor?: string | null;
          active_students?: number;
          completed_probes?: number;
          tier?: string;
          spocs_count?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          institution_name?: string;
          executive_sponsor?: string | null;
          active_students?: number;
          completed_probes?: number;
          tier?: string;
          spocs_count?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      audience_inquiries: {
        Row: {
          id: string;
          name: string;
          email: string;
          role_type: 'student' | 'faculty' | 'mentor' | 'hub' | 'industry' | 'general';
          organization: string | null;
          message: string;
          status: 'new' | 'reviewed' | 'contacted' | 'archived';
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          email: string;
          role_type?: 'student' | 'faculty' | 'mentor' | 'hub' | 'industry' | 'general';
          organization?: string | null;
          message: string;
          status?: 'new' | 'reviewed' | 'contacted' | 'archived';
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          email?: string;
          role_type?: 'student' | 'faculty' | 'mentor' | 'hub' | 'industry' | 'general';
          organization?: string | null;
          message?: string;
          status?: 'new' | 'reviewed' | 'contacted' | 'archived';
          created_at?: string;
        };
        Relationships: [];
      };
      broadcast_subscribers: {
        Row: {
          id: string;
          email: string;
          role_interest: string;
          subscribed_at: string;
        };
        Insert: {
          id?: string;
          email: string;
          role_interest?: string;
          subscribed_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          role_interest?: string;
          subscribed_at?: string;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

export type DBUser = Database['public']['Tables']['users']['Row'];
export type DBProject = Database['public']['Tables']['projects']['Row'];
export type DBLeaderboardEntry = Database['public']['Tables']['leaderboard_entries']['Row'];
export type DBHubNode = Database['public']['Tables']['hub_nodes']['Row'];
export type DBAudienceInquiry = Database['public']['Tables']['audience_inquiries']['Row'];
export type DBBroadcastSubscriber = Database['public']['Tables']['broadcast_subscribers']['Row'];
