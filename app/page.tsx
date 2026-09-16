import Image from "next/image";
import Link from "next/link";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <section className="mx-auto max-w-6xl px-6 py-24">

        {/* =====================================================
            Navbar
        ===================================================== */}
        <nav className="mb-28 flex items-center justify-between">
          {/* Name */}
          <div className="flex flex-col">
            <span className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Thomas Kao
            </span>

            <span className="mt-2 text-lg font-medium tracking-[0.2em] text-zinc-500 sm:text-xl">
              高睿駿
            </span>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-end gap-5 text-sm text-zinc-400 sm:gap-6">
            <a href="#about" className="transition hover:text-white">
              About
            </a>

            <a href="#experience" className="transition hover:text-white">
              Experience
            </a>

            <a href="#focus" className="transition hover:text-white">
              Focus
            </a>

            <a href="#projects" className="transition hover:text-white">
              Projects
            </a>

            <a href="#contact" className="transition hover:text-white">
              Contact
            </a>
          </div>
        </nav>

        {/* =====================================================
            Hero
        ===================================================== */}
        <section className="mb-40 grid items-center gap-16 lg:grid-cols-[1.4fr_0.6fr]">
          <div>
            <p className="mb-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
              AI Engineer / Backend Developer
            </p>

            <h1 className="mb-8 text-5xl font-semibold leading-tight sm:text-7xl">
              Building practical
              <br />
              AI systems.
            </h1>

            <p className="max-w-2xl text-lg leading-8 text-zinc-400">
              AI engineer focused on building enterprise AI applications,
              RAG systems, document-processing pipelines and automated
              data workflows.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
              >
                View Projects
              </a>

              <a
                href="#about"
                className="rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium transition hover:border-zinc-500"
              >
                About Me
              </a>
            </div>
          </div>

          {/* Profile Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative h-72 w-72 overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900 sm:h-80 sm:w-80">
              <Image
                src="/images/profile.jpg"
                alt="Thomas Kao 高睿駿"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </section>

        {/* =====================================================
            About
        ===================================================== */}
        <section id="about" className="mb-40 scroll-mt-24">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            About Me
          </p>

          <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-semibold leading-tight">
                Building AI systems
                <br />
                for real-world workflows.
              </h2>
            </div>

            <div>
              <div className="space-y-5 leading-7 text-zinc-400">
                <p>
                  I&apos;m an AI engineer with experience building enterprise
                  AI applications, including RAG systems, document intelligence
                  pipelines, automated data ingestion workflows and backend
                  services.
                </p>

                <p>
                  My work focuses on turning AI models into practical systems —
                  from document processing and data preparation to retrieval,
                  LLM integration, API development and cloud deployment.
                </p>

                <p>
                  I&apos;m particularly interested in AI applications that
                  combine software engineering, data and real-world business
                  workflows.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  "Python",
                  "FastAPI",
                  "RAG",
                  "LLM",
                  "Azure Cloud",
                  "GCP",
                  "FAISS",
                  "Docker",
                  "SQL",
                  "CI/CD",
                  "Web Crawling",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            Experience & Education
        ===================================================== */}
        <section id="experience" className="mb-40 scroll-mt-24">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Experience & Education
          </p>

          <h2 className="mb-14 text-3xl font-semibold">
            My journey
          </h2>

          <div className="grid gap-16 lg:grid-cols-2">

            {/* Work Experience */}
            <div>
              <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Experience
              </p>

              <div className="relative border-l border-zinc-800 pl-8">

                {/* KGI */}
                <div className="relative pb-12">
                  <div className="absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 border-zinc-950 bg-white" />

                  <p className="mb-2 text-sm text-zinc-500">
                    Jul 2025 — Present
                  </p>

                  <h3 className="text-xl font-semibold">
                    AI Engineer
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    KGI Financial Holding Co., Ltd.
                  </p>

                  <p className="mt-5 leading-7 text-zinc-400">
                    Building enterprise AI applications and backend systems,
                    including RAG, document intelligence, LLM fine-tuning,
                    automated data pipelines, cloud workflows and on-premise
                    model serving.
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "LLM",
                      "RAG",
                      "FastAPI",
                      "Azure",
                      "Docker",
                      "H100",
                    ].map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Wistron ITS */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 border-zinc-950 bg-zinc-600" />

                  <p className="mb-2 text-sm text-zinc-500">
                    Mar 2024 — Jul 2024
                  </p>

                  <h3 className="text-xl font-semibold">
                    AI & Data Analytics Intern
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Wistron ITS · T Ambassador Program
                  </p>

                  <p className="mt-5 leading-7 text-zinc-400">
                    Participated in the T Ambassador Program, gaining practical
                    experience in AI, data analytics and collaborative software
                    development in an enterprise environment.
                  </p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
                Education
              </p>

              <div className="relative border-l border-zinc-800 pl-8">

                {/* Master's */}
                <div className="relative pb-12">
                  <div className="absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 border-zinc-950 bg-white" />

                  <p className="mb-2 text-sm text-zinc-500">
                    Sep 2023 — Jun 2025
                  </p>

                  <h3 className="text-xl font-semibold">
                    M.S. in Statistics
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    National Taipei University
                  </p>

                  <p className="mt-5 leading-7 text-zinc-400">
                    Graduate studies in statistics, data analysis and quantitative
                    methods, providing a foundation for machine learning and
                    data-driven AI applications.
                  </p>

                  {/* Master's Thesis */}
                  <div className="mt-6">
                    <p className="mb-2 text-xs uppercase tracking-[0.18em] text-zinc-500">
                      Master&apos;s Thesis
                    </p>

                    <p className="font-medium leading-7 text-zinc-200">
                      Impact of Corporate ESG Performance on Earnings Conference
                      Calls
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {[
                        "NLP",
                        "Text Analysis",
                        "Data Processing",
                        "ESG",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-500"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bachelor's */}
                <div className="relative">
                  <div className="absolute -left-[37px] top-2 h-3 w-3 rounded-full border-2 border-zinc-950 bg-zinc-600" />

                  <p className="mb-2 text-sm text-zinc-500">
                    Sep 2019 — Jun 2022
                  </p>

                  <h3 className="text-xl font-semibold">
                    B.S. in Financial Engineering and Actuarial Mathematics
                  </h3>

                  <p className="mt-1 text-sm text-zinc-400">
                    Soochow University
                  </p>

                  <p className="mt-5 leading-7 text-zinc-400">
                    Studied financial mathematics, statistics, risk modeling
                    and quantitative analysis, building a foundation in
                    finance and applied mathematics.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            Technical Focus
        ===================================================== */}
        <section id="focus" className="mb-40 scroll-mt-24">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Technical Focus
          </p>

          <h2 className="mb-4 text-3xl font-semibold">
            Areas I&apos;ve worked on
          </h2>

          <p className="mb-12 max-w-2xl leading-7 text-zinc-400">
            My experience covers the end-to-end AI engineering lifecycle — from
            data ingestion and retrieval to model adaptation, speech AI, backend
            services and enterprise deployment.
          </p>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Enterprise RAG */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Knowledge Engineering
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Enterprise RAG
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience building enterprise knowledge retrieval systems,
                covering document parsing, structure-aware chunking, embeddings,
                vector search, metadata filtering, reranking and grounded LLM
                generation.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "RAG",
                  "BGE-M3",
                  "FAISS",
                  "Chunking",
                  "Vector Search",
                  "Reranking",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            {/* LLM Fine-Tuning */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Model Adaptation
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                LLM Fine-Tuning
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience constructing enterprise training datasets, designing
                labeling workflows and adapting language models with supervised
                fine-tuning and parameter-efficient techniques for task-specific
                AI applications.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "Gemma",
                  "SFT",
                  "LoRA",
                  "PyTorch",
                  "Hugging Face",
                  "Evaluation",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            {/* Knowledge Ingestion */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Data & Document Engineering
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Knowledge Ingestion
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience building data ingestion workflows with incremental
                crawling, heterogeneous document processing, custom chunking and
                search indexing for enterprise knowledge systems.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "Web Crawling",
                  "Document Parsing",
                  "Custom Chunking",
                  "Azure Blob",
                  "Azure AI Search",
                  "Incremental Updates",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            {/* Document AI */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Workflow Automation
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Document AI & Automation
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience automating enterprise document workflows with
                event-driven processing, document intelligence, LLM
                summarization and integration with internal enterprise systems.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "Azure DI",
                  "Azure OpenAI",
                  "Event Grid",
                  "FastAPI",
                  "SharePoint",
                  "Event-Driven",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            {/* Speech AI */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Speech AI
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Speech AI & On-Premise
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience building local speech-to-text services with speech
                recognition, timestamp alignment and speaker diarization for
                privacy-sensitive enterprise audio processing.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "WhisperX",
                  "Speech-to-Text",
                  "Alignment",
                  "Diarization",
                  "FastAPI",
                  "On-Prem",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>

            {/* AI Backend & Deployment */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                AI Infrastructure
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                AI Backend & Deployment
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience building AI backend services and deploying
                containerized workloads across cloud and on-premise
                environments, including model serving on enterprise GPU
                infrastructure.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "FastAPI",
                  "Docker",
                  "Azure",
                  "CI/CD",
                  "vLLM",
                  "NVIDIA H100",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 px-3 py-1 text-xs text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </article>
          </div>
        </section>

        {/* =====================================================
            Projects
        ===================================================== */}
        <section id="projects" className="mb-40 scroll-mt-24">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Selected Projects
          </p>

          <h2 className="mb-12 text-3xl font-semibold">
            What I&apos;ve built
          </h2>

          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/projects/${project.slug}`}
                className="group block"
              >
                <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7 transition duration-300 group-hover:-translate-y-1 group-hover:border-zinc-600">
                  <h3 className="mb-4 text-xl font-semibold">
                    {project.title}
                  </h3>

                  <p className="mb-6 text-sm leading-6 text-zinc-400">
                    {project.summary}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="rounded-full bg-zinc-800 px-2.5 py-1 text-xs text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-2 text-sm text-zinc-500 transition group-hover:text-white">
                    View project →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        {/* =====================================================
            Contact
        ===================================================== */}
        <section
          id="contact"
          className="border-t border-zinc-800 py-20 text-center"
        >
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Contact
          </p>

          <h2 className="mb-5 text-3xl font-semibold">
            Let&apos;s build something useful.
          </h2>

          <p className="mx-auto max-w-xl leading-7 text-zinc-400">
            Feel free to reach out if you&apos;d like to discuss AI
            engineering, backend systems, data pipelines or potential
            opportunities.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/ThomasKAO0514"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm transition hover:border-zinc-500 hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/睿駿-高-285057317"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-zinc-700 px-5 py-3 text-sm transition hover:border-zinc-500 hover:text-white"
            >
              LinkedIn
            </a>

            <a
              href="mailto:thomas.kao0514@gmail.com"
              className="rounded-lg bg-white px-5 py-3 text-sm font-medium text-black transition hover:bg-zinc-200"
            >
              Email Me
            </a>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-900 py-8 text-center text-sm text-zinc-600">
          © 2026 Thomas Kao · 高睿駿
        </footer>
      </section>
    </main>
  );
}