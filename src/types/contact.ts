/**
 * Contact information interface
 */
export interface ContactInfo {
  /** Contact icon emoji */
  icon: string;
  /** Contact text/label */
  text: string;
  /** Optional URL link */
  link?: string;
  /** Optional PDF-only display text */
  pdfText?: string;
}
