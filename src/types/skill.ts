/**
 * Skill category interface
 */
export interface SkillCategory {
  /** Category name (e.g., "AI/ML", "Backend") */
  category: string;
  /** Icon emoji for the category */
  icon: string;
  /** Array of skill names */
  skills: string[];
  /** Number of skills to display on desktop */
  desktopDisplayCount?: number;
}
