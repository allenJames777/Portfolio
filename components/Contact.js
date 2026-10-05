"use client";

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({
    behavior: "smooth",
    inline: "start",
    block: "nearest",
  });
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-screen h-dvh flex-none snap-start flex overflow-y-auto px-6 pt-20 pb-8"
    >
      <div className="m-auto max-w-3xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">Get In Touch</h2>

        <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto">
          I&apos;m open to new opportunities and collaborations. Feel free to
          reach out if you&apos;d like to work together.
        </p>

        <a
          href="mailto:allenjlluvido@gmail.com"
          className="inline-block px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-sm rounded-lg hover:bg-gray-800 dark:hover:bg-gray-300 transition-colors"
        >
          allenjlluvido@gmail.com
        </a>

        <p className="text-sm text-gray-400 mt-6">Davao City, Philippines</p>

        {/* Back to start */}
        <button
          onClick={() => scrollTo("hero")}
          className="mt-10 text-sm text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors flex items-center gap-2 mx-auto"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Back to Start
        </button>

        <p className="text-xs text-gray-300 dark:text-gray-600 mt-12">
          © {new Date().getFullYear()} Allen James Lluvido
        </p>
      </div>
    </section>
  );
}
