import { LeadInsert } from "@/types";

export async function notifyLeadCaptured(_lead: LeadInsert) {
  // Placeholder for email, Slack, or webhook notifications.
  void _lead;
  return { ok: true };
}
