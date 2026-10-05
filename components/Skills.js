"use client";

/*
 * Skills grouped by capability.
 * To edit, update the array below — add/remove categories or tools.
 *
 * Each card has an accent color for its left border and icon background.
 * Colors: blue, emerald, amber, violet, rose
 * Set wide: true to make a card span both columns.
 */

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

const capabilities = [
  {
    name: "Workflow Automation",
    description: "I design and optimize automated workflows that eliminate repetitive tasks.",
    accent: {
      border: "border-l-blue-500",
      iconBg: "bg-blue-50 dark:bg-blue-950",
      iconText: "text-blue-600 dark:text-blue-400",
    },
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 010 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 010-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    tools: ["Zapier", "Make.com", "Appscript"],
  },
  {
    name: "Data & Analytics",
    description: "I turn raw data into dashboards and reports that drive decisions.",
    accent: {
      border: "border-l-emerald-500",
      iconBg: "bg-emerald-50 dark:bg-emerald-950",
      iconText: "text-emerald-600 dark:text-emerald-400",
    },
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    tools: ["SQL", "Power BI", "Looker Studio", "Google Sheets"],
  },
  {
    name: "Business Operations",
    description: "I manage and connect the tools that keep businesses running.",
    accent: {
      border: "border-l-amber-500",
      iconBg: "bg-amber-50 dark:bg-amber-950",
      iconText: "text-amber-600 dark:text-amber-400",
    },
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    tools: ["Asana", "Intercom", "Google Workspace", "Copper", "WHMCS", "Xero"],
  },
  {
    name: "Web & Development",
    description: "I build and maintain web platforms and deploy infrastructure.",
    accent: {
      border: "border-l-violet-500",
      iconBg: "bg-violet-50 dark:bg-violet-950",
      iconText: "text-violet-600 dark:text-violet-400",
    },
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    tools: ["JavaScript", "WordPress", "GitHub", "Postman", "Cloudflare", "Cloudways"],
  },
  {
    name: "AI-Assisted Development",
    description: "I use AI coding agents to plan, build and review automations faster.",
    wide: true,
    accent: {
      border: "border-l-rose-500",
      iconBg: "bg-rose-50 dark:bg-rose-950",
      iconText: "text-rose-600 dark:text-rose-400",
    },
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    tools: ["Claude", "Codex"],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="w-screen h-dvh flex-none snap-start flex overflow-y-auto px-6 pt-20 pb-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="m-auto max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">What I Do</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.name}
              className={`p-7 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 border-l-4 ${cap.accent.border} hover:shadow-md transition-shadow ${cap.wide ? "md:col-span-2" : ""}`}
            >
              {/* Icon + Title */}
              <div className="flex items-center gap-4 mb-3">
                <div className={`w-12 h-12 rounded-lg ${cap.accent.iconBg} ${cap.accent.iconText} flex items-center justify-center shrink-0`}>
                  {cap.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                  {cap.name}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                {cap.description}
              </p>

              {/* Tool tags */}
              <div className="flex flex-wrap gap-2">
                {cap.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1.5 bg-gray-50 dark:bg-gray-700 text-xs font-medium text-gray-700 dark:text-gray-300 rounded-full border border-gray-200 dark:border-gray-600"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-end mt-8">
          <button
            onClick={() => scrollTo("experience")}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
          >
            View Experience
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
