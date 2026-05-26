export interface Course {
  id: string;
  title: string;
  description?: string;
  progress: number;
  status?: string;
  color?: string;
  icon_name?: string;
  created_at?: string;
}