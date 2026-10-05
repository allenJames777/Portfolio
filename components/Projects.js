"use client";

import { projects } from "@/data/projects";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="w-screen h-dvh flex-none snap-start flex overflow-y-auto px-6 pt-20 pb-8 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="m-auto max-w-6xl w-full">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-2">Projects</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-8">Things I&apos;ve designed and built myself.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <article
              key={project.id}
              className="flex flex-col bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Thumbnail */}
              {project.image ? (
                <div className="aspect-[2/1] bg-gray-100 dark:bg-gray-700 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.image}
                    alt={`${project.title} preview`}
                    loading="lazy"
                    className={`w-full h-full ${
                      project.imageFit === "contain" ? "object-contain p-6 bg-white" : "object-cover"
                    }`}
                  />
                </div>
              ) : (
                <div className="aspect-[2/1] flex items-center justify-center bg-gray-100 dark:bg-gray-700 text-3xl font-bold text-gray-300 dark:text-gray-500">
                  {project.title
                    .split(" ")
                    .filter((w) => /^[A-Z]/.test(w))
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 3)}
                </div>
              )}

              <div className="flex flex-col flex-1 p-5">
                {/* Type + period */}
                <div className="flex items-center justify-between gap-2 text-xs text-gray-500 dark:text-gray-400 mb-1">
                  <span className="font-medium uppercase tracking-wide">{project.type}</span>
                  {project.period && <span className="shrink-0">{project.period}</span>}
                </div>

                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{project.title}</h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">{project.role}</p>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 flex-1">{project.description}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-xs text-gray-600 dark:text-gray-300 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                {project.links.length > 0 && (
                  <div className="flex flex-wrap gap-x-4 gap-y-2">
                    {project.links.map((l) => (
                      <a
                        key={l.url}
                        href={l.url}
                        {...(l.download
                          ? { download: true }
                          : { target: "_blank", rel: "noopener noreferrer" })}
                        className="text-sm text-gray-900 dark:text-gray-100 underline hover:text-gray-600 dark:hover:text-gray-400"
                      >
                        {l.label} {l.download ? "↓" : "→"}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex justify-end mt-8">
          <button
            onClick={() => scrollTo("contact")}
            className="text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2"
          >
            Get In Touch
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
