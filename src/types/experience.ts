/**
 * Sub-project within an internship/experience
 */
export interface ExperienceProject {
  /** Project title */
  title: string;
  /** Brief project description */
  description: string;
  /** Project highlights/achievements */
  highlights: string[];
  /** Tech stack used */
  techStack: string[];
  /** Special achievement badge (e.g., "2-3일 Solo 개발") */
  badge?: string;
}

/**
 * Career experience/internship interface
 */
export interface Experience {
  /** Company name */
  company: string;
  /** Job role/position */
  role: string;
  /** Employment period */
  period: string;
  /** Employment type (e.g., "인턴", "정규직") */
  type: string;
  /** Overall experience description */
  description: string;
  /** Projects worked on during this experience */
  projects: ExperienceProject[];
  /** Overall tech stack (consolidated from all projects) */
  techStack: string[];
}
