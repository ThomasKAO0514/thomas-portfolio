export const projects = [
  {
    slug: "enterprise-rag",

    title: "Enterprise Internal Regulations RAG System",

    summary:
      "An end-to-end enterprise RAG system that transforms internal PDF regulations into searchable knowledge and generates grounded answers with source references.",

    description:
      "Built an end-to-end RAG system for enterprise internal regulations, covering document parsing, structure-aware chunking, vector indexing, layered retrieval, reranking and LLM answer generation. Internal PDF regulations are converted into Markdown using Azure Document Intelligence, embedded with BGE-M3 and indexed in FAISS. At query time, a domain router and metadata filtering narrow the search scope before semantic retrieval and reranking. Retrieved chunks are then provided to Azure OpenAI to generate grounded answers with explicit source references.",

    problem:
      "Enterprise internal regulations were mainly stored as PDF documents containing long-form text, page structures and complex tables. Traditional keyword search made it difficult to retrieve precise policy information, while naive fixed-length chunking could break semantic context or split structured tables. The final answer also needed to remain strictly grounded in internal regulations without unsupported inference.",

    solution:
      "Designed an end-to-end document processing and layered RAG pipeline. PDF regulations are parsed into Markdown using Azure Document Intelligence and processed with custom page-, sentence- and table-aware chunking. BGE-M3 generates normalized embeddings stored in FAISS. At query time, domain routing narrows the document scope, metadata selects candidate chunks, candidate-level semantic retrieval finds relevant context, and final reranking combines vector similarity with document routing bonuses. The retrieved Top-K chunks are then formatted as structured context and passed to Azure OpenAI for grounded answer generation with explicit source references.",

    tech: [
      "Python",
      "Azure Document Intelligence",
      "Azure OpenAI",
      "BGE-M3",
      "FAISS",
      "SentenceTransformers",
      "RAG",
      "Markdown",
    ],

    highlights: [
      "Converted enterprise PDF regulations into structured Markdown using Azure Document Intelligence",
      "Designed page-aware, sentence-aware and table-aware chunking for complex policy documents",
      "Preserved complete tables as standalone chunks to maintain structured information",
      "Used 600-character chunk targets with two-sentence overlap to preserve neighboring context",
      "Generated normalized semantic embeddings using BAAI/bge-m3",
      "Built a FAISS IndexFlatIP vector index with 1:1 corpus metadata mapping",
      "Implemented domain routing to narrow queries to relevant regulation groups",
      "Used chunk topics, keywords and summaries as metadata gates before semantic retrieval",
      "Built temporary FAISS subindexes for candidate-only vector search",
      "Added global semantic fallback when candidate-level retrieval is insufficient",
      "Reranked retrieved chunks using vector similarity and document routing bonuses",
      "Constructed structured RAG context containing document path, chunk metadata and retrieved content",
      "Integrated Azure OpenAI for grounded answer generation based only on retrieved regulations",
      "Designed prompting rules to prevent unsupported inference and enforce explicit source references",
      "Implemented request-level logging for retrieval latency, LLM latency, token usage and retrieved documents",
    ],

    architecture: [
      "Internal Regulation PDFs",
      "Azure Document Intelligence",
      "Markdown Documents",
      "Cleaning & Parsing",
      "Document-aware Chunking",
      "Chunk JSONL",
      "BGE-M3 Embeddings",
      "FAISS IndexFlatIP",
      "User Query",
      "Domain Router",
      "Allowed Document Scope",
      "Metadata Candidate Filtering",
      "Candidate FAISS Subindex",
      "BGE-M3 Semantic Search",
      "Global Semantic Fallback",
      "Final Reranking",
      "Top-K Regulation Chunks",
      "Context Builder",
      "Azure OpenAI",
      "Grounded Answer",
      "RAG Pipeline Logging",
    ],
  },

  {
  slug: "document-intelligence-pipeline",

  title: "Event-Driven Document Intelligence Pipeline",

  summary:
    "An event-driven document automation system that monitors regularly updated financial publications and automatically processes new PDF documents using Azure Document Intelligence and Azure OpenAI.",

  description:
    "Designed and implemented an event-driven document processing pipeline for financial publications that are updated on a regular basis. When a new publication PDF is uploaded to Azure Blob Storage, a BlobCreated event automatically triggers the processing workflow through Azure Event Grid and FastAPI. The system extracts document content using Azure Document Intelligence, generates publication-specific summaries with Azure OpenAI, produces structured Markdown and JSON outputs, and synchronizes the results to SharePoint.",

  problem:
    "Financial publications are released and updated regularly, creating repetitive document-processing work. Each new PDF needs to be detected, parsed, summarized and synchronized to enterprise storage. A manual workflow would require repeated monitoring and processing, while different publication types also require different summarization strategies.",

  solution:
    "Redesigned the workflow around an event-driven architecture using Azure Blob Storage, Event Grid and FastAPI. BlobCreated events are filtered and delivered directly to an Azure Web App through HTTPS webhooks. A shared trigger handler supports automatic events, manual execution and replay through the same processing path. The business pipeline then performs Document Intelligence parsing, publication-specific Azure OpenAI summarization, structured output generation and SharePoint synchronization.",

  tech: [
    "Python",
    "FastAPI",
    "Azure Event Grid",
    "Azure Blob Storage",
    "Azure Web App",
    "Azure Document Intelligence",
    "Azure OpenAI",
    "SharePoint",
  ],

  highlights: [
    "Designed an event-driven document processing architecture using Azure Event Grid and FastAPI",
    "Integrated BlobCreated events with Azure Web App through HTTPS webhooks",
    "Unified automatic triggers, manual execution and replay through a shared trigger handler",
    "Implemented folder readiness checks before starting document processing",
    "Built reusable document processing modules independent of FastAPI and trigger infrastructure",
    "Processed PDF documents using Azure Document Intelligence OCR and layout analysis",
    "Implemented publication-specific summarization strategies using Azure OpenAI",
    "Generated structured Markdown and JSON outputs",
    "Synchronized processed results to SharePoint",
    "Separated event handling, business logic, Blob operations and AI processing into reusable modules",
  ],

  architecture: [
    "PDF Upload",
    "Azure Blob Storage",
    "BlobCreated Event",
    "Azure Event Grid",
    "FastAPI Webhook",
    "Trigger Handler",
    "Folder Ready Gate",
    "Journal Pipeline",
    "Azure Document Intelligence",
    "Azure OpenAI Summary",
    "Markdown / JSON Output",
    "SharePoint Sync",
  ],
},

{
  slug: "financial-regulatory-crawler",

  title: "Financial Regulatory Data Crawler",

  summary:
    "A scheduled financial regulatory data ingestion pipeline that runs daily to detect website updates, synchronize new content to Azure Blob Storage, and report execution results automatically.",

  description:
    "Designed and implemented three specialized web crawlers for financial regulatory websites with different page and document structures. Each crawler is containerized with Docker, built and pushed to Azure Container Registry through CI, and executed daily using Azure Container Apps Jobs. During each scheduled run, the crawler dynamically discovers target pages, extracts the latest content and metadata, compares the website state with existing Azure Blob Storage data, and performs a full rebuild when updates are detected. Execution logs and email reports are generated automatically after each run.",

  problem:
    "Financial regulatory information is distributed across multiple website structures and updated periodically. Manually checking inspection manuals, annual inspection points, and historical deficiencies for new versions is repetitive and difficult to maintain. Changes to page URLs, document versions, and content structures also make hard-coded crawling workflows fragile.",

  solution:
    "Built three specialized crawlers under a shared automated ingestion architecture. CI builds the crawler Docker images and publishes them to Azure Container Registry. Azure Container Apps Jobs runs the workloads on a daily schedule to monitor regulatory websites for updates. Each crawler dynamically discovers target pages, extracts structured content or PDF metadata, compares the latest website state against Azure Blob Storage, and either skips processing when no changes are found or performs a full rebuild and synchronization when new data is detected.",

  tech: [
    "Python",
    "BeautifulSoup",
    "Requests",
    "Docker",
    "CI/CD",
    "Azure Container Registry",
    "Azure Container Apps Jobs",
    "Azure Blob Storage",
  ],

  architecture: [
    "Source Code",
    "CI Pipeline",
    "Docker Image Build",
    "Azure Container Registry",
    "Azure Container Apps Jobs",
    "Daily Scheduled Execution",
    "Dynamic URL Discovery",
    "Specialized Crawlers",
    "Content & Metadata Extraction",
    "Version Comparison",
    "Update Detection",
    "Full Dataset Rebuild",
    "Azure Blob Storage",
    "Logging & Email Report",
  ],

  highlights: [
    "Built three specialized crawlers for different financial regulatory website structures",
    "Covered financial inspection manuals, annual inspection points, and five-year inspection deficiencies",
    "Implemented dynamic URL discovery to reduce dependency on hard-coded website URLs",
    "Designed daily automated monitoring using Azure Container Apps Jobs",
    "Implemented version comparison between website metadata and existing Azure Blob Storage data",
    "Skipped unnecessary processing when no website changes were detected",
    "Performed automatic full dataset rebuild and synchronization when updates were detected",
    "Containerized crawler workloads with Docker",
    "Built CI workflows to build and push Docker images to Azure Container Registry",
    "Centralized crawler data and execution logs in Azure Blob Storage",
    "Generated automated email reports with REBUILD and NO_CHANGE execution status",
  ],
},
{
  slug: "enterprise-ai-query-router",

  title: "Enterprise AI Query Router Fine-Tuning",

  summary:
    "Fine-tuned a Gemma-based query router using real enterprise AI usage logs to classify user queries into five downstream AI workflows.",

  description:
    "This project builds a domain-specific query routing model for an enterprise AI platform. Real user questions were collected from enterprise AI interaction logs, cleaned and filtered to remove invalid or noisy queries. An initial set of approximately 500 questions was manually labeled to establish classification rules across five categories: General, Knowledge Base, Finance, Product and Programming. These labeled examples were then used as references for LLM-assisted classification to expand the training dataset. After dataset review and cleanup, the resulting data was used to fine-tune Gemma 3 4B with supervised fine-tuning and LoRA. The trained model acts as a lightweight router that determines which downstream AI workflow should handle each user query.",

  problem:
    "Enterprise AI assistants receive very different types of user requests. Sending every query through the same retrieval or generation workflow increases unnecessary processing and makes it difficult to apply domain-specific handling. A routing layer was needed to identify user intent before downstream processing.",

  solution:
    "Built a human-in-the-loop data labeling and fine-tuning pipeline using real enterprise AI usage logs. Approximately 500 representative queries were manually classified first, then used as reference examples for LLM-assisted labeling of a larger dataset. A Gemma 3 4B model was fine-tuned with LoRA to learn structured routing outputs and classify incoming queries into the appropriate downstream workflow.",

  tech: [
    "Gemma 3",
    "PyTorch",
    "Hugging Face",
    "LoRA",
    "SFT",
    "LLM",
    "TensorBoard",
  ],

  architecture: [
    "Enterprise AI Chat Logs",
    "User Query Extraction",
    "Data Cleaning & Valid Query Filtering",
    "~500 Manually Labeled Queries",
    "Five-category Routing Definition",
    "LLM-assisted Dataset Labeling",
    "Dataset Review & Cleanup",
    "Supervised Fine-Tuning Dataset",
    "Gemma 3 4B + LoRA Fine-Tuning",
    "Structure-aware Weighted Loss",
    "Validation & Model Evaluation",
    "Fine-Tuned Query Router",
    "Route Query to Downstream AI Workflow",
  ],

  highlights: [
    "Built the training dataset from real enterprise AI usage logs instead of synthetic-only data",
    "Manually labeled approximately 500 representative user queries to establish the initial classification baseline",
    "Used human-labeled examples as references for LLM-assisted dataset expansion",
    "Designed five routing categories: General, Knowledge Base, Finance, Product and Programming",
    "Fine-tuned Gemma 3 4B using supervised fine-tuning and LoRA",
    "Applied higher loss weights to structured output tokens to improve routing format reliability",
    "Evaluated routing performance using answer accuracy, confidence and validation loss",
    "Used BF16 training, gradient accumulation, gradient clipping and torch.compile",
    "Tracked training and validation metrics with TensorBoard",
    "Saved LoRA checkpoints after each training epoch",
  ],

  specs: [
    {
      label: "Base Model",
      value: "Gemma 3 4B",
    },
    {
      label: "Training",
      value: "Supervised Fine-Tuning",
    },
    {
      label: "PEFT",
      value: "LoRA",
    },
    {
      label: "LoRA Rank",
      value: "32",
    },
    {
      label: "Epochs",
      value: "5",
    },
    {
      label: "Batch Size",
      value: "8",
    },
    {
      label: "Gradient Accumulation",
      value: "8",
    },
    {
      label: "Max Sequence Length",
      value: "1024",
    },
    {
      label: "Precision",
      value: "BF16",
    },
    {
      label: "Routing Classes",
      value: "5",
    },
  ],
},
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}