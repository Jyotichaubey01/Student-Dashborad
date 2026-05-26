
export interface Course {
  id: number;
  title: string;
  description: string;
  progress: number;
  status: string;
  color: string;
}
export interface NavItem {
  id: string;
  label: string;
  icon: string;
  href: string;
}

export interface ActivityDay {
  date: string;
  count: number;
}
