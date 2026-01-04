/**
 * Troubleshooting case interface
 */
export interface TroubleShootingItem {
  /** Case title */
  title: string;
  /** Case subtitle/description */
  subtitle: string;
  /** Problem description (rose box) */
  problem: string;
  /** Solution implementation details */
  solution: string;
  /** Result/outcome (emerald box) */
  result: string;
  /** Optional background/context (amber box) */
  background?: string;
}
