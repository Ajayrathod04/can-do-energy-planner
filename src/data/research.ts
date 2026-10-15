export interface InterviewQuote {
  id: string;
  quote: string;
  role: string;
  context: string;
}

export interface UsabilityResult {
  id: string;
  n: number;
  date: string;
  metric: string;
  finding: string;
}

export interface AccessibilityAuditNumber {
  id: string;
  standard: string;
  score: string;
  notes: string;
}

// Real research data populated by the author. Empty arrays hide the Evidence section automatically.
export const interviewQuotes: InterviewQuote[] = [];
export const usabilityResults: UsabilityResult[] = [];
export const accessibilityAuditNumbers: AccessibilityAuditNumber[] = [];
