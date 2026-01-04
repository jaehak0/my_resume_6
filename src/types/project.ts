/**
 * Project metric interface
 */
export interface ProjectMetric {
  /** Metric value (e.g., "92%", "5만개") */
  value: string;
  /** Metric label/description */
  label: string;
}

/**
 * Project detail category interface
 */
export interface ProjectDetail {
  /** Detail category title */
  category: string;
  /** Array of detail items */
  items: string[];
}

/**
 * Main project interface
 */
export interface Project {
  /** Project role/position */
  role: string;
  /** Project title */
  title: string;
  /** Project subtitle/description */
  subtitle: string;
  /** Project period */
  period: string;
  /** Team size */
  teamSize: string;
  /** Special highlight/achievement */
  highlight: string;
  /** Detailed project description */
  description: string;
  /** Project implementation details grouped by category */
  details: ProjectDetail[];
  /** Project metrics/achievements */
  metrics: ProjectMetric[];
  /** Technology stack used */
  techStack: string[];
}
