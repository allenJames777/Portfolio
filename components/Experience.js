"use client";

import { experience } from "@/data/experience";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

/* Renders **text** in a highlight as bold, so key phrases stand out when skimming */
function withBold(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="font-semibold text-gray-900 dark:text-gray-100">
        {part}
      </strong>
    ) : (
      part
    )
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="w-screen h-dvh flex-none snap-start flex overflow-y-auto px-6 pt-20 pb-8"
    >
      <div className="m-auto max-w-4xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-10">Experience</h2>

        {/* Timeline */}
        <ol className="relative border-l border-gray-200 dark:border-gray-700 space-y-10">
          {experience.map((job) => (
            <li key={job.id} className="ml-6">
              <span className="absolute -left-1.5 mt-2 w-3 h-3 rounded-full bg-gray-900 dark:bg-gray-100 ring-4 ring-white dark:ring-gray-950" />

              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{job.role}</h3>
                <span className="text-sm text-gray-400 shrink-0">{job.period}</span>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                {job.link ? (
                  <a
                    href={job.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-gray-700 dark:text-gray-300 underline hover:text-gray-900 dark:hover:text-gray-100"
                  >
                    {job.company}
                  </a>
                ) : (
                  <span className="font-medium text-gray-700 dark:text-gray-300">{job.company}</span>
                )}
                {" · "}
                {job.type} · {job.location}
              </p>

              {/* Description */}
              {job.description && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{job.description}</p>
              )}

              {/* Highlights */}
              {job.highlights.length > 0 && (
                <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 dark:text-gray-400 mb-4">
                  {job.highlights.map((item, i) => (
                    <li key={i}>{withBold(item)}</li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              {job.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {job.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>

        {/* Navigation */}
        <div className="flex justify-end mt-10">
          <button
            onClick={() => scrollTo("projects")}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
          >
            View Projects
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
