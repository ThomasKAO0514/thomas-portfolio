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
                  "Azure",
                  "FAISS",
                  "Docker",
                  "PostgreSQL",
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
                    Graduate studies in statistics, data analysis and
                    quantitative methods, providing a foundation for machine
                    learning and data-driven AI applications.
                  </p>
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
            My experience covers multiple layers of AI engineering — from
            model serving and retrieval to model adaptation, backend
            development and cloud infrastructure.
          </p>

          <div className="grid gap-6 md:grid-cols-2">

            {/* Model Serving */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                LLM Infrastructure
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Model Serving & GPU Infrastructure
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience deploying and evaluating large language models on
                enterprise GPU infrastructure, with a focus on model serving,
                inference performance, GPU utilization and privacy-sensitive
                on-premise environments.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "NVIDIA H100",
                  "vLLM",
                  "Gemma",
                  "Llama",
                  "GPU Inference",
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

            {/* Retrieval */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Knowledge Engineering
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Retrieval & Knowledge Engineering
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience designing document ingestion and retrieval
                workflows, including document parsing, chunking strategies,
                embeddings, vector search, metadata filtering and reranking
                for knowledge-intensive AI applications.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "Chunking",
                  "BGE-M3",
                  "FAISS",
                  "Vector Search",
                  "Metadata Filtering",
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

            {/* Model Adaptation */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Machine Learning
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                Model Adaptation & Evaluation
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience preparing domain-specific training data,
                designing labeling workflows and adapting language models
                using supervised fine-tuning and parameter-efficient
                techniques, with validation and experiment tracking
                throughout training.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "SFT",
                  "LoRA",
                  "PyTorch",
                  "Hugging Face",
                  "Dataset Curation",
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

            {/* Backend */}
            <article className="flex h-full flex-col rounded-2xl border border-zinc-800 bg-zinc-900/30 p-7 transition duration-300 hover:-translate-y-1 hover:border-zinc-600">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                Software Engineering
              </p>

              <h3 className="mb-4 text-2xl font-semibold">
                AI Backend & Cloud Architecture
              </h3>

              <p className="leading-7 text-zinc-400">
                Experience building backend services and production workflows
                that connect AI models with enterprise systems, including APIs,
                event-driven processing, containerized workloads and automated
                cloud deployment.
              </p>

              <div className="mt-auto flex flex-wrap gap-2 pt-7">
                {[
                  "FastAPI",
                  "Azure",
                  "Docker",
                  "CI/CD",
                  "Event Grid",
                  "Container Apps",
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