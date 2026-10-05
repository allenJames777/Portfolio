/*
 * ============================================
 *  EXPERIENCE DATA (jobs and internships)
 * ============================================
 *
 *  Newest first. To add a role, copy one of the
 *  objects below and fill in your details.
 *
 *  Fields:
 *    id          – unique identifier (used as React key)
 *    role        – your job title
 *    company     – company name
 *    type        – e.g. "Full-time", "Internship"
 *    location    – city, country
 *    period      – time period (e.g. "July 2024 – Present")
 *    description – one-line summary of the role ("" to hide)
 *    highlights  – array of bullet points (key achievements)
 *    tags        – array of tools used
 *    link        – company or work URL (optional, null if none)
 */

export const experience = [
  {
    id: "itgenius",
    role: "Mid-Level Workflow Engineer",
    company: "ItGenius",
    type: "Full-time",
    location: "Sydney, Australia",
    period: "July 2024 – Present",
    description:
      "Designs and delivers automation and integration solutions, from no-code workflows to production services on Google Cloud.",
    highlights: [
      "Led development of an in-house **Intercom application for Stripe quoting and payments**, shipping 12 releases.",
      "Integrated **CRM, project management and billing systems** with Zapier and webhooks, and rebuilt a 13-step purchase workflow as a **Cloud Run service**.",
      "Built an **AI pipeline** that summarises customer meetings into Intercom, and trained the **Intercom Fin AI agent** to resolve client inquiries.",
      "Developed **Intercom automations** for team first-response tracking and lead-journey summaries for sales.",
      "Automated **Asana operations**, from rule-based task assignment to leave-to-calendar scheduling and monthly KPI scoring (in rollout).",
      "Built **client-facing and internal Looker Studio dashboards** from custom SQL and API data, plus **Intercom dashboards** for performance and engagement.",
      "Developed **internal tools**, including a real-time shared inbox for the staff portal and a billing-to-WordPress role sync.",
    ],
    tags: ["Python", "Node.js", "Google Cloud Run", "Stripe API", "Intercom", "Zapier", "Asana", "Looker Studio", "SQL"],
    link: null,
  },
  {
    id: "uic-teaching",
    role: "Teaching Staff",
    company: "University of the Immaculate Conception",
    type: "Part-time",
    location: "Davao City, Philippines",
    period: "February 2025 – April 2025",
    description: "",
    highlights: [
      "Taught **Artificial Intelligence and Data Analytics** to Medical Technology students through hands-on, real-world exercises.",
      "Delivered practical training in **Gemini, Power BI, Excel, Google Sheets and Kaggle datasets**.",
    ],
    tags: ["Gemini", "Power BI", "Excel", "Google Sheets", "Kaggle"],
    link: null,
  },
  {
    id: "lapit",
    role: "Front-End Web Developer Intern",
    company: "Lap-IT Solutions",
    type: "Internship",
    location: "Davao City, Philippines",
    period: "February 2024 – May 2024",
    description:
      "Designed and developed the front-end interface for the company store, enabling the owner to log in and update content instantly.",
    highlights: [
      "Collaborated on UI/UX design and built the front-end interface",
      "Created a content management system for instant site updates",
      "Managed PC assembly, reformatting, and OS installation for client hardware deliverables",
    ],
    tags: ["JavaScript", "HTML/CSS", "UI/UX"],
    link: "https://lap-it-landingpage-58eh.vercel.app/",
  },
];
