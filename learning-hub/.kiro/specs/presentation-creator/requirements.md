# Requirements Document

## Introduction

The AI-powered presentation creator is part of the **Learning Hub** — a Human-AI collaborative platform for AI-era curriculum development, portfolio-first learning, and enterprising student formation. This system works alongside specialist academic agents (particularly the `content-developer` agent) to generate first-draft learning objects that faculty review, edit, and contextualise.

The presentation creator converts markdown-based course content into modern, interactive Next.js web applications deployed on Vercel. It supports the institutional pedagogical philosophy by enabling:
- **AI-Native Learning Experience**: Server-side rendering, API routes, and extensibility for AI-driven feedback and conversational tutoring
- **Outcome-Based Education (OBE)**: Foundation for tracking learning outcomes and student progress (Phase 2)
- **Portfolio-First Design**: Every presentation becomes a deployable artifact demonstrating technical and pedagogical competency
- **Human-in-the-Loop Quality**: AI generates drafts; humans ensure institutional rigor and pedagogical quality

### Architectural Shift: From Static to Dynamic

**Previous Architecture (Deprecated):**
- Static HTML/CSS/JS hosted on GitHub Pages
- Limited interactivity and no backend capabilities
- No analytics or learner tracking

**New Architecture (Current):**
- **Frontend**: Next.js (React framework) with server-side rendering, API routes, and modern web standards
- **Deployment**: Vercel with zero-config deployment, automatic scaling, edge network distribution, and preview environments
- **Future Backend (Phase 2)**: Supabase (PostgreSQL) for learner analytics, OBE tracking, and event logs
- **Content Storage**: Markdown files in Git repositories (version controlled)

This architectural shift enables a **resilient AI-era pedagogical engine** — a decoupled, high-velocity stack that supports innovation while maintaining institutional rigor.

### Technical Stack

**Frontend**: Next.js (React framework) provides server-side rendering (SSR), optimal performance, modern web standards, and extensibility for AI-augmented features.

**Deployment**: Vercel offers zero-config deployment, automatic scaling, edge network distribution, preview environments, and seamless Next.js integration.

**AI Integration**: Direct integration with AI agents for feedback, tutoring, and real-time project evaluation (roadmap).

**Future Backend (Phase 2)**: Supabase (PostgreSQL) for learner analytics, Outcomes-Based Education (OBE) tracking, and event logs with ACID compliance.

**Content Storage**: Markdown files in Git repositories (version controlled).

### Phase 1 vs Phase 2 Scope

**Phase 1 (Current):**
- Markdown → Next.js web app conversion with React components
- Vercel deployment with automatic preview environments
- Client-side interactivity (quizzes, QR codes, embedded media)
- No database dependency — all content in markdown/Git
- AI-agent integration readiness through API route structure
- Basic responsive design and mobile compatibility

**Phase 2 (Future):**
- Supabase integration for learner analytics and OBE tracking
- AI-driven conversational tutoring and real-time feedback
- Learning outcome tracking and CO attainment analysis
- Student progress dashboards and at-risk detection
- Integration with Learning Hub analytics infrastructure

### Content Storage Architecture

Course content (presentations, slides, quizzes) remains in markdown or other textual formats that are version-controlled via Git/GitHub. The PresentationCreator converts this markdown content into a Next.js web application for delivery to learners. The application is deployed on Vercel for optimal performance, automatic scaling, and global edge distribution.

**Content Flow:**
- Authors (faculty + AI content-developer agent) edit markdown files (version controlled)
- PresentationCreator converts markdown → Next.js web application (React components, pages, API routes)
- Next.js application is deployed to Vercel with automatic preview environments for review
- Learners interact with the web application through server-side rendered pages with optimal loading times

**Data Storage:**
- Course content (presentations, slides, quiz questions) → Markdown files in Git repositories (NOT in databases)
- Learner analytics data (quiz responses, progress tracking, engagement metrics) → Supabase (PostgreSQL) in Phase 2 (OPTIONAL)

The Next.js application provides API routes and middleware for future extensibility. In Phase 2, the application can connect to Supabase to log learner interactions for analytics purposes, but all course content itself remains in version-controlled text files.

### Integration with Learning Hub

This system operates as part of the broader Academic Platform ecosystem:

**Primary Agent Integration:**
- **`content-developer`**: Generates first-draft presentations that this system converts to Next.js apps
- **`session-planner`**: Suggests active learning strategies embedded as quizzes and interactive elements
- **`pedagogy-advisor`**: Reviews presentation quality for Bloom's alignment and engagement
- **`syllabus-publisher`**: May incorporate generated presentations into course pages

**AI-Augmented Professional Development Loop:**
1. **Requirement Capture**: Faculty feedback and changes → requirements.md
2. **AI-Agent Synchronization**: AI agent (this system) parses requirements, proposes updates to presentation structure
3. **Human-in-the-Loop Validation**: AI drafts presentations; faculty approves, edits, and contextualizes (ensuring quality, not "slop")
4. **Continuous Improvement**: Feedback loop ensures presentations align with institutional pedagogical principles

**Design Philosophy Alignment:**
- **Human-AI Collaboration**: Faculty retains decision authority; AI accelerates draft generation
- **Portfolio-First**: Every presentation is a deployable portfolio artifact
- **AI-Era Ambition**: Content focuses on synthesis, judgment, and creative application (not AI-trivial recall)

### AI-Augmented Development Loop

This system embraces an "Agentic Factory" approach where AI agents participate in the evolution of the platform:

**Requirements Evolution:**
- Requirements are captured in requirements.md (this document)
- AI agents can propose updates to requirements based on pedagogical insights, user feedback, or technical improvements
- Human-in-the-loop validation ensures quality and alignment with educational goals and institutional standards
- Changes are version-controlled and auditable

**Benefits of Next.js + Vercel Architecture:**
- **Speed & Performance**: Server-side rendering, optimal loading times, responsive UX, and SEO benefits
- **AI-Native Architecture**: Supports AI integration at every layer (conversational tutoring, real-time feedback, adaptive content)
- **Scalability**: Vercel handles auto-scaling for traffic spikes; Supabase handles database scaling in Phase 2
- **Developer Experience**: Modern tooling, hot reload, preview deployments for every PR, built-in Vercel analytics
- **Extensibility**: Easy to add new features via API routes, middleware, edge functions, and React components
- **Institutional Rigor**: PostgreSQL in Phase 2 provides ACID compliance for OBE data and learner records
- **Portfolio Artifacts**: Every generated presentation is a deployable Next.js app demonstrating technical capability

## Glossary

- **PresentationCreator**: The main system that converts markdown presentations to a Next.js web application with embedded media, quizzes, and branding
- **NotebookLMSkill**: The skill that integrates with Google NotebookLM to research topics, collect resources, and generate pedagogical content
- **TemplateGeneratorSkill**: The skill that creates initial markdown templates based on topics and pedagogical principles
- **ReviewSkill**: The skill that analyzes presentations for impact, engagement, and learning quality
- **NextJsApp**: The generated Next.js web application that learners interact with, deployed on Vercel with server-side rendering and API routes for extensibility
- **AnalyticsDatabase**: Optional backend database (Supabase with PostgreSQL) used exclusively for storing learner interaction data (quiz responses, progress tracking, engagement metrics, OBE tracking) in Phase 2, NOT for storing course content
- **FrontMatter**: YAML metadata at the beginning of markdown files containing presentation metadata
- **SlideSeparator**: Markdown syntax that separates slides in the presentation
- **QuizBlock**: Markdown syntax for inserting interactive quizzes into presentations
- **QRCodeSyntax**: Markdown syntax for generating QR codes for response collection
- **PedagogicalMarker**: Markdown syntax for marking places where diagrams, memes, acronyms, or summary videos should be inserted
- **VercelDeployment**: The hosting and deployment platform that provides zero-config Next.js deployment, automatic scaling, edge network, and preview environments for every Git branch
- **AI_Agent_Integration**: Architecture pattern using Next.js API routes to enable future integration with AI tutoring, feedback, and adaptive content systems

## Requirements

### Requirement 1: Main Presentation Skill - Markdown to Next.js Conversion

**User Story:** As an author, I want to convert markdown presentations to a Next.js web application, so that I can deploy them on Vercel with optimal performance and modern web capabilities.

#### Acceptance Criteria

1. THE PresentationCreator SHALL convert a valid markdown presentation file into a complete Next.js web application with React components
2. WHEN a missing file is detected, THE PresentationCreator SHALL return a file system error indicating the file does not exist
3. WHEN invalid markdown content is provided, THE PresentationCreator SHALL return a content error describing the parsing issue
4. FOR ALL errors, THE PresentationCreator SHALL include specific guidance for resolving the issue
5. THE PresentationCreator SHALL preserve all markdown formatting including headings, lists, and emphasis in the React component output
6. WHILE processing a presentation, THE PresentationCreator SHALL maintain slide order and structure in the generated Next.js pages

### Requirement 2: Embedded Media Support

**User Story:** As an author, I want to embed videos, images, and interactive elements in my presentation, so that I can create engaging educational content.

#### Acceptance Criteria

1. WHERE a markdown file contains an image reference, THE PresentationCreator SHALL convert it to an appropriate Next.js Image component with optimization
2. WHERE a markdown file contains a video reference, THE PresentationCreator SHALL prefer native HTML5 video elements when possible and fall back to iframe embeds for external platforms
3. WHERE a markdown file contains an interactive element reference, THE PresentationCreator SHALL convert it to the appropriate React component
4. WHEN an unsupported media format is referenced, THE PresentationCreator SHALL log a warning and attempt conversion, then skip the element if conversion fails
5. THE PresentationCreator SHALL allow the overall conversion to succeed even if some video references cannot be converted to appropriate components

### Requirement 3: Quiz Insertion Capabilities

**User Story:** As an author, I want to insert quizzes at specific points in my presentation, so that I can engage my audience and check understanding.

#### Acceptance Criteria

1. WHEN a quiz block is present in the markdown file, THE PresentationCreator SHALL convert it to an interactive React quiz component
2. WHERE a quiz block has invalid syntax or missing required fields, THE PresentationCreator SHALL display an error message where the quiz would appear
3. WHERE a quiz block specifies multiple choice questions, THE PresentationCreator SHALL render them as interactive radio button or checkbox groups with React state management
4. WHERE a quiz block specifies short answer questions, THE PresentationCreator SHALL render them as controlled text input components
5. FOR ALL quiz types, THE PresentationCreator SHALL include a submit button and feedback display area with client-side interactivity

### Requirement 4: QR Code Generation for Response Collection

**User Story:** As an author, I want to generate QR codes for my presentation, so that attendees can easily access related resources or provide feedback.

#### Acceptance Criteria

1. WHERE a QR code syntax is present in the markdown, THE PresentationCreator SHALL generate a QR code image
2. WHERE a QR code includes a URL, THE PresentationCreator SHALL generate a QR code that encodes that URL
3. WHERE a QR code includes custom text, THE PresentationCreator SHALL include that text below the QR code image
4. FOR ALL QR codes, THE PresentationCreator SHALL generate scannable QR codes using a standard QR code library

### Requirement 5: Branding Support

**User Story:** As an author, I want to include branding information in my presentation, so that it has a consistent identity and professional appearance.

#### Acceptance Criteria

1. WHERE front matter includes author information, THE PresentationCreator SHALL display it in the presentation footer
2. WHERE front matter includes affiliation information, THE PresentationCreator SHALL display it in the presentation footer
3. WHERE front matter includes a logo path, THE PresentationCreator SHALL embed the logo in the header
4. WHERE front matter includes a logo that doesn't exist or is corrupted, THEN THE PresentationCreator SHALL show an error and halt presentation generation
5. WHERE front matter includes a theme name, THE PresentationCreator SHALL apply the corresponding CSS styling

### Requirement 6: Vercel Deployment Ready Output

**User Story:** As an author, I want the output to be ready for Vercel deployment, so that I can share my presentation online with optimal performance, automatic scaling, preview environments, and edge network distribution.

#### Acceptance Criteria

1. THE PresentationCreator SHALL generate a complete Next.js application with proper project structure (pages/ or app/, components/, public/, package.json, next.config.js)
2. WHEN the generated Next.js application is deployed to Vercel, THE PresentationCreator SHALL ensure all media, API routes, and client-side scripts function correctly
3. THE PresentationCreator SHALL include proper viewport meta tags and responsive design for mobile compatibility
4. THE PresentationCreator SHALL generate a vercel.json configuration file if custom deployment settings are needed
5. FOR ALL generated presentations, THE PresentationCreator SHALL ensure compatibility with Vercel's Edge Network and serverless functions
6. THE PresentationCreator SHALL support automatic preview deployments for each Git branch when connected to Vercel
7. THE PresentationCreator SHALL include package.json with all necessary dependencies for Next.js, React, and any required libraries (QR code generation, quiz components, etc.)
8. WHERE environment-specific configuration is needed, THE PresentationCreator SHALL use Next.js environment variable patterns (.env.local, .env.production)

### Requirement 7: Google NotebookLM Integration - Topic Research

**User Story:** As an author, I want to research my presentation topic using NotebookLM, so that I can create content based on authoritative sources.

#### Acceptance Criteria

1. WHEN a topic is provided, THE NotebookLMSkill SHALL research relevant resources using Google NotebookLM
2. WHERE a research request is made, THE NotebookLMSkill SHALL collect and organize relevant documents and sources
3. IF NotebookLM integration fails, THEN THE NotebookLMSkill SHALL return a descriptive error with fallback suggestions
4. WHERE resources are collected, THE NotebookLMSkill SHALL provide them in a structured format for template generation
5. WHERE research stalls or fails due to network timeouts or empty results, THEN THE NotebookLMSkill SHALL report explicit completion status with appropriate error information

### Requirement 8: Google NotebookLM Integration - Video and Flashcard Generation

**User Story:** As an author, I want to generate videos and flashcards for my presentation topic, so that I can provide multiple learning resources.

#### Acceptance Criteria

1. WHERE video generation is requested, THE NotebookLMSkill SHALL use NotebookLM's video generation capabilities to create relevant videos
2. WHERE flashcard generation is requested, THE NotebookLMSkill SHALL create educational flashcards based on the topic
3. FOR ALL generated resources, THE NotebookLMSkill SHALL provide URLs or embedded content that can be included in the presentation

### Requirement 9: Template Generator Skill - Topic-Based Template Creation

**User Story:** As an author, I want the template generator to create an initial markdown structure based on my topic, so that I can start creating immediately.

#### Acceptance Criteria

1. WHEN a topic is provided, THE TemplateGeneratorSkill SHALL create an initial markdown template with appropriate slide structure
2. WHERE pedagogical principles are specified, THE TemplateGeneratorSkill SHALL include sections based on those principles
3. FOR the activation principle, THE TemplateGeneratorSkill SHALL include a slide that activates prior knowledge
4. FOR the 5 questions principle, THE TemplateGeneratorSkill SHALL include slides addressing each of the 5 questions

### Requirement 10: Template Generator Skill - Pedagogical Principles

**User Story:** As an author, I want templates to follow pedagogical principles, so that my presentation supports effective learning.

#### Acceptance Criteria

1. WHERE the 5 questions principle from Teach For India is requested, THE TemplateGeneratorSkill SHALL include at least 5 slides that address different questions about the topic
2. WHERE the PQRST principle is requested, THE TemplateGeneratorSkill SHALL create slides for Survey, Question, Read, Self-recitation, and Test sections
3. FOR any requested pedagogical principle, THE TemplateGeneratorSkill SHALL document which principle is being used in the front matter

### Requirement 11: Template Generator Skill - Pedagogical Markers

**User Story:** As an author, I want the template to suggest places for diagrams, memes, acronyms, and summary videos, so that I can enhance my content.

#### Acceptance Criteria

1. WHERE a diagram suggestion is appropriate, THE TemplateGeneratorSkill SHALL add a pedagogical marker for a diagram
2. WHERE a meme suggestion is appropriate, THE TemplateGeneratorSkill SHALL add a pedagogical marker for a meme
3. WHERE an acronym suggestion is appropriate, THE TemplateGeneratorSkill SHALL add a pedagogical marker for an acronym
4. WHERE a summary video suggestion is appropriate, THE TemplateGeneratorSkill SHALL add a pedagogical marker for a summary video

### Requirement 12: Review Skill - Impact and Engagement Analysis

**User Story:** As an author, I want to receive feedback on my presentation's impact and engagement, so that I can improve my content.

#### Acceptance Criteria

1. WHEN a presentation is submitted for review, THE ReviewSkill SHALL analyze it for engagement elements
2. WHERE engagement elements are present, THE ReviewSkill SHALL identify specific examples and suggest improvements
3. WHERE engagement elements are missing, THE ReviewSkill SHALL suggest relevant engagement strategies
4. IF the analysis system is temporarily unavailable, THEN THE ReviewSkill SHALL block the review process until analysis succeeds

### Requirement 13: Review Skill - Learning Quality Analysis

**User Story:** As an author, I want to receive feedback on the learning quality of my presentation, so that I can ensure educational effectiveness.

#### Acceptance Criteria

1. WHEN a presentation is submitted for review, THE ReviewSkill SHALL analyze it for learning quality indicators
2. WHERE learning quality indicators meet best practices, THE ReviewSkill SHALL provide positive feedback with evidence supporting why the presentation is effective
3. WHERE learning quality indicators can be improved, THE ReviewSkill SHALL suggest specific improvements with evidence
4. WHERE analysis is positive, THE ReviewSkill SHALL guarantee delivery of the positive feedback to the author

### Requirement 14: Markdown Format - Front Matter Metadata

**User Story:** As an author, I want to define presentation metadata in a standard format, so that the system can apply branding and organization.

#### Acceptance Criteria

1. WHEN front matter is provided in YAML format, THE PresentationCreator SHALL parse it and apply the metadata
2. WHERE front matter includes title, THE PresentationCreator SHALL use it as the presentation title
3. WHERE front matter includes theme, THE PresentationCreator SHALL apply the specified visual theme
4. IF front matter is missing or invalid, THEN THE PresentationCreator SHALL use sensible defaults for all missing fields

### Requirement 15: Markdown Format - Slide Separation

**User Story:** As an author, I want to separate slides with a clear syntax, so that the system can organize my presentation.

#### Acceptance Criteria

1. WHEN a slide separator is present, THE PresentationCreator SHALL treat everything between separators as a single slide component
2. WHERE no slide separator is present, THE PresentationCreator SHALL treat the entire document as a single slide
3. FOR ALL slide separators, THE PresentationCreator SHALL preserve slide order in the Next.js page structure

### Requirement 16: Markdown Format - Quiz Syntax

**User Story:** As an author, I want to insert quizzes using a simple syntax, so that I can add interactive elements to my presentation.

#### Acceptance Criteria

1. WHEN a quiz block is present, THE PresentationCreator SHALL parse it according to the defined quiz syntax
2. WHERE a quiz block specifies a question type, THE PresentationCreator SHALL render the appropriate React input component
3. FOR multiple choice quizzes, THE PresentationCreator SHALL provide clear options with interactive radio buttons or checkboxes
4. FOR short answer quizzes, THE PresentationCreator SHALL provide controlled text input components

### Requirement 17: Markdown Format - QR Code Syntax

**User Story:** As an author, I want to insert QR codes using a simple syntax, so that I can provide quick access to resources.

#### Acceptance Criteria

1. WHEN QR code syntax is present, THE PresentationCreator SHALL generate a QR code image
2. WHERE QR code syntax includes a URL, THE PresentationCreator SHALL encode that URL in the QR code
3. WHERE QR code syntax includes custom text, THE PresentationCreator SHALL render the text below the QR code
4. WHEN QR code content is invalid or would exceed size limits, THEN THE PresentationCreator SHALL skip QR code generation

### Requirement 18: Markdown Format - Pedagogical Markers Syntax

**User Story:** As an author, I want to use simple markers for pedagogical elements, so that I can plan my content structure.

#### Acceptance Criteria

1. WHEN a pedagogical marker for diagrams is present, THE TemplateGeneratorSkill SHALL suggest diagram placement
2. WHEN a pedagogical marker for memes is present, THE TemplateGeneratorSkill SHALL suggest meme placement
3. WHEN a pedagogical marker for acronyms is present, THE TemplateGeneratorSkill SHALL suggest acronym placement
4. WHEN a pedagogical marker for summary videos is present, THE TemplateGeneratorSkill SHALL suggest summary video placement

### Requirement 19: Workflow Integration

**User Story:** As an author, I want the skills to work together seamlessly, so that I can create presentations without context switching.

#### Acceptance Criteria

1. WHEN the NotebookLMSkill completes research, THE TemplateGeneratorSkill SHALL be able to consume the research output as input
2. WHEN the TemplateGeneratorSkill creates a template, THE ReviewSkill SHALL be able to analyze it for quality
3. WHEN the ReviewSkill provides feedback, THE TemplateGeneratorSkill SHALL be able to incorporate it into an updated template
4. FOR ALL skill interactions, THE System SHALL provide clear error messages if integration fails

### Requirement 20: Round Trip Consistency

**User Story:** As an author, I want to edit and re-export my presentation without losing content, so that I can iterate on my work.

#### Acceptance Criteria

1. FOR ALL valid markdown presentations, parsing, converting to a Next.js application, and extracting the markdown representation from the generated components SHALL produce an equivalent markdown structure
2. WHERE front matter is modified, THE System SHALL preserve unchanged front matter fields during round-trip
3. FOR ALL quiz blocks, THE System SHALL preserve question types and content during round-trip
4. FOR ALL QR codes, THE System SHALL preserve URL and text during round-trip

### Requirement 21: Optional Analytics Integration (Phase 2)

**User Story:** As an author, I want the option to collect learner analytics data in Phase 2, so that I can understand how learners engage with my content and track OBE outcomes.

#### Acceptance Criteria

1. WHERE analytics integration is enabled in front matter, THE NextJsApp SHALL connect to Supabase (PostgreSQL) via API routes to log learner interactions in Phase 2
2. WHEN a learner submits a quiz response, THE NextJsApp SHALL send the response data to Supabase through a secure API route if analytics is enabled
3. WHERE analytics integration is not enabled, THE NextJsApp SHALL function fully without any database connection
4. THE PresentationCreator SHALL ensure that all course content (slides, quizzes, media) is embedded in or referenced by the NextJsApp and NOT stored in any database
5. WHERE analytics data is collected in Phase 2, THE NextJsApp SHALL only transmit learner interaction data (responses, timestamps, progress, OBE tracking events) and NOT course content itself
6. THE NextJsApp SHALL use server-side API routes to protect database credentials and ensure secure communication with Supabase

### Requirement 22: AI-Augmented Feature Extensibility

**User Story:** As a developer, I want the Next.js architecture to support AI-augmented features, so that I can add conversational tutoring, real-time feedback, and adaptive content in Phase 2.

#### Acceptance Criteria

1. THE PresentationCreator SHALL generate Next.js applications with API route structure (pages/api/ or app/api/) that supports AI service integration
2. WHERE AI-augmented features are planned, THE NextJsApp SHALL provide middleware hooks for request processing and response augmentation
3. THE PresentationCreator SHALL ensure the application architecture separates presentation logic from AI integration logic for maintainability
4. WHERE server-side rendering is used, THE NextJsApp SHALL support dynamic content generation based on AI responses without compromising performance
5. THE PresentationCreator SHALL document extension points for AI features in the generated codebase (comments, README.md)
6. THE NextJsApp SHALL include API route examples or templates for future integration with AI tutoring services
7. WHERE API routes are generated, THE NextJsApp SHALL implement proper error handling and timeout management for AI service calls

### Requirement 23: Learning Hub Integration

**User Story:** As a faculty member, I want the presentation creator to integrate with other academic agents, so that I can leverage the full collaborative intelligence environment for course development.

#### Acceptance Criteria

1. WHERE the `content-developer` agent generates markdown presentations, THE PresentationCreator SHALL accept them as input without requiring manual formatting
2. WHEN pedagogical markers are present from the `session-planner` agent, THE PresentationCreator SHALL convert them to appropriate interactive React components
3. WHERE institutional branding is specified in front matter, THE PresentationCreator SHALL apply institutional brand colors, logo, and styling guidelines
4. THE PresentationCreator SHALL support integration with the `pedagogy-advisor` agent for quality review by accepting review feedback and highlighting areas for improvement
5. WHERE Bloom's taxonomy levels are specified in front matter, THE NextJsApp SHALL display them appropriately for OBE compliance
6. THE PresentationCreator SHALL generate presentations that align with our human-AI collaboration philosophy by clearly documenting which sections were AI-generated and which were human-authored
7. WHERE portfolio artifacts are required, THE NextJsApp SHALL include metadata that identifies the presentation as a portfolio-worthy learning object
