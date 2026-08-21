import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <Link
          href="/"
          className="mb-16 inline-block text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to home
        </Link>

        {/* Header */}
        <header className="mb-20">
          <p className="mb-5 text-sm uppercase tracking-[0.25em] text-zinc-500">
            Project
          </p>

          <h1 className="mb-6 text-4xl font-semibold leading-tight sm:text-6xl">
            {project.title}
          </h1>

          <p className="max-w-3xl text-lg leading-8 text-zinc-400">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tech.map((item) => (
              <span
                key={item}
                className="rounded-full border border-zinc-800 px-3 py-1 text-sm text-zinc-300"
              >
                {item}
              </span>
            ))}
          </div>
        </header>

        {/* Problem / Solution */}
        <section className="mb-20 grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Problem
            </p>
            <p className="leading-7 text-zinc-300">{project.problem}</p>
          </div>

          <div>
            <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Solution
            </p>
            <p className="leading-7 text-zinc-300">{project.solution}</p>
          </div>
        </section>

        {/* Overview */}
        <section className="mb-20">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Overview
          </p>

          <p className="max-w-3xl text-lg leading-8 text-zinc-400">
            {project.description}
          </p>
        </section>

        {/* Project Specs */}
        {project.slug === "enterprise-rag" && (
          <ProjectSpecs>
            <MetricCard label="Chunk Size" value="300" description="characters" />
            <MetricCard label="Overlap" value="1" description="sentences" />
            <MetricCard label="Embedding" value="BGE-M3" description="BAAI" />
            <MetricCard label="Vector Index" value="FAISS" description="IndexFlatIP" />
            <MetricCard label="Input" value="PDF" description="internal regulations" />
            <MetricCard label="Parsed Format" value="Markdown" description="Azure DI" />
            <MetricCard label="Similarity" value="Cosine" description="normalized vectors" />
            <MetricCard
              label="Retrieval"
              value="Layered"
              description="router + metadata + vector"
            />
            <MetricCard
              label="Generation"
              value="Azure OpenAI"
              description="grounded answers"
            />
            <MetricCard
              label="Observability"
              value="RAG Logs"
              description="latency · tokens · retrieval"
            />
          </ProjectSpecs>
        )}

        {project.slug === "document-intelligence-pipeline" && (
          <ProjectSpecs>
            <MetricCard
              label="Trigger"
              value="Event Grid"
              description="BlobCreated event"
            />
            <MetricCard
              label="Storage"
              value="Blob Storage"
              description="PDF source"
            />
            <MetricCard
              label="Backend"
              value="FastAPI"
              description="Azure Web App"
            />
            <MetricCard
              label="Document AI"
              value="Azure DI"
              description="OCR · layout"
            />
            <MetricCard
              label="Generation"
              value="Azure OpenAI"
              description="publication summary"
            />
            <MetricCard
              label="Output"
              value="MD / JSON"
              description="structured results"
            />
            <MetricCard
              label="Destination"
              value="SharePoint"
              description="enterprise sync"
            />
            <MetricCard
              label="Architecture"
              value="Event-Driven"
              description="automated pipeline"
            />
          </ProjectSpecs>
        )}

        {project.slug === "financial-regulatory-crawler" && (
          <ProjectSpecs>
            <MetricCard label="Crawlers" value="3" description="specialized sources" />
            <MetricCard label="Schedule" value="Daily" description="automatic monitoring" />
            <MetricCard label="Container" value="Docker" description="reproducible runtime" />
            <MetricCard label="CI" value="Image Build" description="automated pipeline" />
            <MetricCard label="Registry" value="ACR" description="Azure Container Registry" />
            <MetricCard label="Execution" value="ACJ" description="Container Apps Jobs" />
            <MetricCard label="Storage" value="Blob Storage" description="data + logs" />
            <MetricCard
              label="Reporting"
              value="Email"
              description="REBUILD / NO_CHANGE"
            />
          </ProjectSpecs>
        )}

        {project.slug === "enterprise-ai-query-router" && (
          <ProjectSpecs>
            <MetricCard label="Base Model" value="Gemma 3 4B" />
            <MetricCard label="Training" value="SFT" description="supervised fine-tuning" />
            <MetricCard label="PEFT" value="LoRA" />
            <MetricCard label="LoRA Rank" value="32" />
            <MetricCard label="Epochs" value="5" />
            <MetricCard label="Batch Size" value="8" />
            <MetricCard label="Grad Accum" value="8" />
            <MetricCard label="Max Length" value="1024" description="tokens" />
            <MetricCard label="Precision" value="BF16" />
            <MetricCard label="Classes" value="5" description="routing categories" />
          </ProjectSpecs>
        )}

        {/* Architecture */}
        <section className="mb-20">
          <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Architecture
          </p>

          {project.slug === "enterprise-rag" ? (
            <EnterpriseRagArchitecture />
          ) : project.slug === "document-intelligence-pipeline" ? (
            <DocumentPipelineArchitecture />
          ) : project.slug === "financial-regulatory-crawler" ? (
            <CrawlerArchitecture />
          ) : project.slug === "enterprise-ai-query-router" ? (
            <QueryRouterArchitecture />
          ) : (
            <GenericArchitecture architecture={project.architecture} />
          )}
        </section>

        {/* Highlights */}
        <section className="mb-20">
          <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
            Key Highlights
          </p>

          <div className="grid gap-4 md:grid-cols-2">
            {project.highlights.map((item) => (
              <div
                key={item}
                className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-5 text-zinc-300"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-zinc-800 pt-10">
          <Link
            href="/#projects"
            className="text-sm text-zinc-400 transition hover:text-white"
          >
            ← View all projects
          </Link>
        </section>
      </div>
    </main>
  );
}

/* =========================================================
   Query Router
========================================================= */

function QueryRouterArchitecture() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-10">
      <PipelineSection title="Dataset Construction" />

      <div className="flex flex-col items-center">
        <ArchitectureNode
          title="Enterprise AI Chat Logs"
          description="Real user questions collected from enterprise AI usage"
        />

        <Arrow />

        <ArchitectureNode
          title="Query Extraction & Cleaning"
          description="Remove invalid · noisy · duplicated · unusable queries"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Valid Query Filtering"
          description="Retain meaningful user questions for dataset construction"
        />

        <Arrow />

        <ArchitectureNode
          title="~500 Manually Labeled Queries"
          description="Human-labeled seed dataset used to establish classification rules"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Five Routing Categories"
          description="General · Knowledge Base · Finance · Product · Programming"
        />

        <Arrow />

        <ArchitectureNode
          title="LLM-Assisted Labeling"
          description="Use manually labeled examples as references to classify more queries"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Dataset Review & Cleanup"
          description="Review generated labels before final training dataset creation"
        />

        <Arrow />

        <ArchitectureNode
          title="SFT Training Dataset"
          description="Structured prompt / answer data for router fine-tuning"
        />
      </div>

      <PipelineDivider title="Model Training" />

      <div className="flex flex-col items-center">
        <ArchitectureNode
          title="Gemma 3 4B"
          description="Base causal language model"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="LoRA Adapter"
          description="Parameter-efficient fine-tuning · Rank 32"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Structure-Aware SFT"
          description="Train the model to generate structured routing outputs"
        />

        <Arrow />

        <ArchitectureNode
          title="Weighted Structure Token Loss"
          description="Increase loss weight on structured output tokens"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="BF16 Training"
          description="Gradient accumulation · gradient clipping · torch.compile"
        />

        <Arrow />

        <ArchitectureNode
          title="Validation"
          description="Evaluate routing accuracy · confidence · validation loss"
        />

        <Arrow />

        <ArchitectureNode
          title="TensorBoard Monitoring"
          description="Track training loss · answer accuracy · confidence · learning rate"
        />

        <Arrow />

        <ArchitectureNode
          title="LoRA Checkpoints"
          description="Save adapter weights after each training epoch"
          highlight
        />
      </div>

      <PipelineDivider title="Query Routing Runtime" />

      <div className="flex flex-col items-center">
        <ArchitectureNode
          title="User Query"
          description="Incoming enterprise AI request"
        />

        <Arrow />

        <ArchitectureNode
          title="Fine-Tuned Query Router"
          description="Predict the appropriate downstream workflow"
          highlight
        />

        <BranchArrowFive />

        <div className="grid w-full max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          <ArchitectureNode title="General" description="General LLM flow" />
          <ArchitectureNode title="Knowledge Base" description="Enterprise RAG" />
          <ArchitectureNode title="Finance" description="Finance workflow" />
          <ArchitectureNode title="Product" description="Product workflow" />
          <ArchitectureNode title="Programming" description="Coding workflow" />
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   RAG
========================================================= */

function EnterpriseRagArchitecture() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-10">
      <PipelineSection title="Offline Indexing Pipeline" />

      <div className="flex flex-col items-center">
        <ArchitectureNode
          title="Internal Regulation PDFs"
          description="Enterprise internal policy documents"
        />

        <Arrow />

        <ArchitectureNode
          title="Azure Document Intelligence"
          description="OCR · document parsing · PDF → Markdown"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Markdown Documents"
          description="Structured representation of extracted content"
        />

        <Arrow />

        <ArchitectureNode
          title="Cleaning & Parsing"
          description="Page markers · document structure · content cleanup"
        />

        <Arrow />

        <ArchitectureNode
          title="Document-aware Chunking"
          description="Page-aware · sentence-aware · table-aware"
          highlight
        />

        <BranchArrow />

        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <ArchitectureNode
            title="Text Blocks"
            description="Sentence splitting · 600-char target · 2-sentence overlap"
          />

          <ArchitectureNode
            title="Table Blocks"
            description="Preserve complete tables as standalone chunks"
          />
        </div>

        <MergeArrow />

        <ArchitectureNode
          title="Chunk JSONL"
          description="Chunk text + document ID + path + metadata"
        />

        <Arrow />

        <ArchitectureNode
          title="BGE-M3 Embeddings"
          description="Normalized semantic embeddings"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="FAISS IndexFlatIP"
          description="Persistent vector index using normalized embeddings"
          highlight
        />
      </div>

      <PipelineDivider title="Query Runtime Pipeline" />

      <div className="flex flex-col items-center">
        <ArchitectureNode
          title="User Query"
          description="Natural-language internal regulation question"
        />

        <Arrow />

        <ArchitectureNode
          title="Domain Router"
          description="Route query toward relevant regulation domains"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Allowed Document Scope"
          description="Restrict retrieval to routed document paths"
        />

        <Arrow />

        <ArchitectureNode
          title="Metadata Candidate Filtering"
          description="Topics · keywords · chunk summary"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Candidate FAISS Subindex"
          description="Reconstruct selected vectors into a temporary subindex"
        />

        <Arrow />

        <ArchitectureNode
          title="BGE-M3 Semantic Search"
          description="Vector retrieval only within selected candidates"
          highlight
        />

        <Arrow />

        <FallbackNode />

        <Arrow />

        <ArchitectureNode
          title="Final Reranking"
          description="Vector similarity + document routing bonus"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Top-K Regulation Chunks"
          description="Highest-ranked internal regulation contexts"
        />

        <Arrow />

        <ArchitectureNode
          title="Context Builder"
          description="Combine document path · chunk metadata · retrieved content"
        />

        <Arrow />

        <ArchitectureNode
          title="Azure OpenAI"
          description="Generate grounded answers using retrieved regulation context"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Grounded Answer"
          description="Traditional Chinese · action-oriented · explicit source references"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="RAG Pipeline Logging"
          description="Retrieval latency · LLM latency · token usage · retrieved documents"
        />
      </div>
    </div>
  );
}

/* =========================================================
   Document Intelligence
========================================================= */

function DocumentPipelineArchitecture() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-10">
      <PipelineSection title="Event-Driven Trigger" />

      <div className="flex flex-col items-center">
        <ArchitectureNode
          title="Regular Publication Update"
          description="Financial publications are released and updated periodically"
        />

        <Arrow />

        <ArchitectureNode
          title="New PDF Upload"
          description="New publication PDF is uploaded to enterprise storage"
        />

        <Arrow />

        <ArchitectureNode
          title="Azure Blob Storage"
          description="Stores publication PDFs and acts as the event source"
          highlight
        />

        <ArrowWithLabel label="BlobCreated Event" />

        <ArchitectureNode
          title="Azure Event Grid"
          description="Detects and forwards matching storage events"
          highlight
        />

        <ArrowWithLabel label="HTTPS Webhook" />

        <ArchitectureNode
          title="Azure Web App / FastAPI"
          description="Receives the event and starts the automated workflow"
          highlight
        />
      </div>

      <PipelineDivider title="Document Processing Pipeline" />

      <div className="flex flex-col items-center">
        <ArchitectureNode
          title="Trigger Validation"
          description="Validate event · publication · date folder · processing scope"
        />

        <Arrow />

        <ArchitectureNode
          title="Folder Ready Gate"
          description="Confirm required PDF input is available before processing"
        />

        <Arrow />

        <ArchitectureNode
          title="Journal Pipeline"
          description="Reusable document-processing business logic"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Load Processing Configuration"
          description="Resolve publication-specific processing settings"
        />

        <Arrow />

        <ArchitectureNode
          title="Azure Document Intelligence"
          description="OCR · layout analysis · document extraction"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Azure OpenAI Summary"
          description="Generate summaries using publication-specific strategies"
          highlight
        />
      </div>

      <PipelineDivider title="Output & Delivery" />

      <div className="flex flex-col items-center">
        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <ArchitectureNode
            title="Markdown"
            description="Human-readable processed content"
          />

          <ArchitectureNode
            title="JSON"
            description="Structured processing result"
          />
        </div>

        <MergeArrow />

        <ArchitectureNode
          title="SharePoint Sync"
          description="Automatically synchronize processed outputs"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Resource Cleanup"
          description="Remove temporary files after processing"
        />
      </div>
    </div>
  );
}

/* =========================================================
   Crawler
========================================================= */

function CrawlerArchitecture() {
  return (
    <div className="rounded-3xl border border-zinc-800 bg-zinc-900/30 p-6 md:p-10">
      <PipelineSection title="Build & Deployment" />

      <div className="flex flex-col items-center">
        <ArchitectureNode
          title="Crawler Source Code"
          description="Python crawler implementation and shared utilities"
        />

        <Arrow />

        <ArchitectureNode
          title="CI Pipeline"
          description="Automatically build crawler container images"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Docker Image"
          description="Containerized crawler runtime"
        />

        <Arrow />

        <ArchitectureNode
          title="Azure Container Registry"
          description="Store versioned crawler images"
          highlight
        />
      </div>

      <PipelineDivider title="Daily Scheduled Execution" />

      <div className="flex flex-col items-center">
        <ArchitectureNode
          title="Azure Container Apps Jobs"
          description="Run crawler workloads on a daily schedule"
          highlight
        />

        <ArrowWithLabel label="Daily Schedule" />

        <ArchitectureNode
          title="Crawler Container"
          description="Start isolated crawler workload"
        />

        <Arrow />

        <ArchitectureNode
          title="Regulatory Website Monitoring"
          description="Check financial regulatory websites for new or updated data"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Dynamic URL Discovery"
          description="Discover current target pages instead of relying only on hard-coded URLs"
        />
      </div>

      <PipelineDivider title="Data Ingestion" />

      <div className="flex flex-col items-center">
        <BranchArrowThree />

        <div className="grid w-full max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <ArchitectureNode
            title="Inspection Manual"
            description="Complete and revision versions"
          />

          <ArchitectureNode
            title="Annual Inspection Points"
            description="Yearly industry-specific content"
          />

          <ArchitectureNode
            title="Five-Year Deficiencies"
            description="PDFs and document metadata"
          />
        </div>

        <TripleMergeArrow />

        <ArchitectureNode
          title="Content & Metadata Extraction"
          description="Parse content · update dates · categories · years · file metadata"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Azure Blob Version Comparison"
          description="Compare latest website state with existing stored versions"
        />

        <Arrow />

        <ArchitectureNode
          title="Update Detection"
          description="Determine whether new regulatory data is available"
          highlight
        />

        <BranchArrow />

        <div className="grid w-full max-w-3xl grid-cols-1 gap-4 md:grid-cols-2">
          <ArchitectureNode
            title="No Change"
            description="Skip unnecessary rebuild"
          />

          <ArchitectureNode
            title="Update Found"
            description="Start full dataset rebuild"
            highlight
          />
        </div>

        <MergeArrow />

        <ArchitectureNode
          title="Full Rebuild / Sync"
          description="Rebuild latest dataset and replace outdated stored content when required"
        />

        <Arrow />

        <ArchitectureNode
          title="Azure Blob Storage"
          description="Store synchronized regulatory data and crawler logs"
          highlight
        />

        <Arrow />

        <ArchitectureNode
          title="Logs & Email Report"
          description="Report REBUILD or NO_CHANGE execution result"
        />
      </div>
    </div>
  );
}

/* =========================================================
   Generic
========================================================= */

function GenericArchitecture({
  architecture,
}: {
  architecture: string[];
}) {
  return (
    <div className="space-y-3">
      {architecture.map((step, index) => (
        <div key={step}>
          <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-4">
            <span className="mr-4 text-sm text-zinc-600">
              {String(index + 1).padStart(2, "0")}
            </span>

            <span className="font-medium">{step}</span>
          </div>

          {index !== architecture.length - 1 && (
            <div className="ml-7 h-5 border-l border-zinc-800" />
          )}
        </div>
      ))}
    </div>
  );
}

/* =========================================================
   Shared Components
========================================================= */

function ProjectSpecs({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="mb-20">
      <p className="mb-8 text-sm uppercase tracking-[0.2em] text-zinc-500">
        Project Specs
      </p>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {children}
      </div>
    </section>
  );
}

function ArchitectureNode({
  title,
  description,
  highlight = false,
}: {
  title: string;
  description?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`w-full max-w-xl rounded-2xl border px-6 py-5 text-center transition duration-300 hover:-translate-y-0.5 ${
        highlight
          ? "border-zinc-500 bg-zinc-800/70"
          : "border-zinc-800 bg-zinc-950/70"
      }`}
    >
      <p className="font-medium text-zinc-100">{title}</p>

      {description && (
        <p className="mt-2 text-sm leading-6 text-zinc-500">
          {description}
        </p>
      )}
    </div>
  );
}

function MetricCard({
  label,
  value,
  description,
}: {
  label: string;
  value: string;
  description?: string;
}) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-5">
      <p className="mb-3 text-xs uppercase tracking-[0.15em] text-zinc-600">
        {label}
      </p>

      <p className="text-xl font-semibold text-zinc-100">{value}</p>

      {description && (
        <p className="mt-1 text-sm text-zinc-500">{description}</p>
      )}
    </div>
  );
}

function Arrow() {
  return (
    <div className="flex h-12 flex-col items-center justify-center">
      <div className="h-7 border-l border-zinc-700" />
      <div className="-mt-1 text-xs text-zinc-600">▼</div>
    </div>
  );
}

function ArrowWithLabel({
  label,
}: {
  label: string;
}) {
  return (
    <div className="flex h-16 flex-col items-center justify-center">
      <div className="h-4 border-l border-zinc-700" />

      <span className="my-1 text-[10px] uppercase tracking-[0.15em] text-zinc-600">
        {label}
      </span>

      <div className="h-3 border-l border-zinc-700" />

      <div className="-mt-1 text-xs text-zinc-600">▼</div>
    </div>
  );
}

function BranchArrow() {
  return (
    <div className="relative h-14 w-full max-w-3xl">
      <div className="absolute left-1/2 top-0 h-7 border-l border-zinc-700" />
      <div className="absolute left-1/4 right-1/4 top-7 border-t border-zinc-700" />
      <div className="absolute left-1/4 top-7 h-7 border-l border-zinc-700" />
      <div className="absolute right-1/4 top-7 h-7 border-l border-zinc-700" />
    </div>
  );
}

function BranchArrowThree() {
  return (
    <div className="relative h-14 w-full max-w-4xl">
      <div className="absolute left-1/2 top-0 h-7 border-l border-zinc-700" />
      <div className="absolute left-1/6 right-1/6 top-7 border-t border-zinc-700" />
      <div className="absolute left-1/6 top-7 h-7 border-l border-zinc-700" />
      <div className="absolute left-1/2 top-7 h-7 border-l border-zinc-700" />
      <div className="absolute right-1/6 top-7 h-7 border-l border-zinc-700" />
    </div>
  );
}

function BranchArrowFive() {
  return (
    <div className="relative h-16 w-full max-w-5xl">
      <div className="absolute left-1/2 top-0 h-7 border-l border-zinc-700" />

      <div className="absolute left-[10%] right-[10%] top-7 border-t border-zinc-700" />

      <div className="absolute left-[10%] top-7 h-9 border-l border-zinc-700" />
      <div className="absolute left-[30%] top-7 h-9 border-l border-zinc-700" />
      <div className="absolute left-1/2 top-7 h-9 border-l border-zinc-700" />
      <div className="absolute left-[70%] top-7 h-9 border-l border-zinc-700" />
      <div className="absolute right-[10%] top-7 h-9 border-l border-zinc-700" />
    </div>
  );
}

function MergeArrow() {
  return (
    <div className="relative h-16 w-full max-w-3xl">
      <div className="absolute left-1/4 top-0 h-7 border-l border-zinc-700" />
      <div className="absolute right-1/4 top-0 h-7 border-l border-zinc-700" />
      <div className="absolute left-1/4 right-1/4 top-7 border-t border-zinc-700" />
      <div className="absolute left-1/2 top-7 h-7 border-l border-zinc-700" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-zinc-600">
        ▼
      </div>
    </div>
  );
}

function TripleMergeArrow() {
  return (
    <div className="relative h-16 w-full max-w-4xl">
      <div className="absolute left-1/6 top-0 h-7 border-l border-zinc-700" />
      <div className="absolute left-1/2 top-0 h-7 border-l border-zinc-700" />
      <div className="absolute right-1/6 top-0 h-7 border-l border-zinc-700" />
      <div className="absolute left-1/6 right-1/6 top-7 border-t border-zinc-700" />
      <div className="absolute left-1/2 top-7 h-7 border-l border-zinc-700" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-xs text-zinc-600">
        ▼
      </div>
    </div>
  );
}

function PipelineSection({
  title,
}: {
  title: string;
}) {
  return (
    <div className="mb-10">
      <p className="text-center text-xs uppercase tracking-[0.25em] text-zinc-500">
        {title}
      </p>
    </div>
  );
}

function PipelineDivider({
  title,
}: {
  title: string;
}) {
  return (
    <div className="my-16 flex w-full items-center gap-5">
      <div className="h-px flex-1 bg-zinc-800" />

      <span className="whitespace-nowrap text-xs uppercase tracking-[0.25em] text-zinc-500">
        {title}
      </span>

      <div className="h-px flex-1 bg-zinc-800" />
    </div>
  );
}

function FallbackNode() {
  return (
    <div className="w-full max-w-xl rounded-2xl border border-dashed border-zinc-700 bg-zinc-950/40 px-6 py-5 text-center">
      <p className="font-medium text-zinc-300">
        Retrieval Fallback
      </p>

      <p className="mt-2 text-sm leading-6 text-zinc-500">
        If metadata candidates are empty, the subindex fails, or too few hits
        are returned, fall back to global FAISS semantic search.
      </p>
    </div>
  );
}