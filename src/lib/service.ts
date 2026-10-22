import type { Glance } from '../components/AtAGlance.astro';
import type { Topic } from '../i18n/routes';

// Copy of a service page (plan 2.4): definition, who it is for, deliverables, timing, cases, FAQ, CTA.
// `html` strings may contain inline links; `pending` marks what still needs data from Nicolás.
export interface ServiceCopy {
  crumb: string;
  label: string;
  h1: string;
  lead: string;
  glance: Glance; // the "En resumen" block under the lead
  proof?: boolean; // show the shared proof line (ui.ts heroProof, the anonymous €36M aggregate) under the lead
  updatedLabel: string;
  serviceName: string;
  serviceType: string;
  sections: { h2: string; html?: string; pending?: string }[];
  casesTitle: string;
  cases: string[]; // project slugs with a case study
  casesMore?: string;
  faqTitle: string;
  faq: { q: string; a?: string; pending?: string }[];
  ctaTitle: string;
  cta: string;
  topic: Topic; // preselected in the contact form
  secondary: { href: string; label: string }; // the low-commitment step beside the contact button
  midCta: { after: number; text: string; label: string }; // shown after sections[after]
}
