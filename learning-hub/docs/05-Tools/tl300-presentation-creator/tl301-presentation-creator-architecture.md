# Presentation Creator - Technical Architecture

## System Overview

The AI-powered presentation creator is a resilient, AI-native pedagogical engine that converts markdown-based educational content into modern web applications. It operates as part of the Boss of AI Learning Hub ecosystem, enabling human-AI collaboration for high-quality course content generation.

## Architecture Principles

### 1. Decoupled Design
- **Content Layer**: Markdown files in Git repositories (version controlled)
- **Generation Layer**: Python scripts + AI skills for markdown-to-Next.js conversion
- **Presentation Layer**: Next.js web applications (React components)
- **Deployment Layer**: Vercel edge network (auto-scaling, CDN)
- **Analytics Layer** (Phase 2): Supabase PostgreSQL for learner data

### 2. AI-Native Architecture
- API routes ready for AI service integration
- Middleware hooks for request/response augmentation
- Server-side rendering supports dynamic AI-generated content
- Extension points for conversational tutoring and feedback

### 3. Human-in-the-Loop
- AI generates first drafts (content-developer agent)
- Faculty reviews, edits, and contextualizes
- Approval gates prevent AI "slop"
- Version control provides audit trail

### 4. Portfolio-First
- Every presentation is a deployable portfolio artifact
- Students can showcase presentations as technical competency
- Vercel deployment URL serves as permanent portfolio link
- Metadata tracks authorship and pedagogical principles

## Technical Stack

### Frontend

**Next.js 14+**
- React 18+ with Server Components
- Server-side rendering (SSR) for optimal performance
- API routes for backend logic
- Image optimization with next/image
- Font optimization with next/font
- Middleware for request processing

**React Component Library**
- Slide components (Title, Content, Quiz, Media)
- Interactive quiz components (MCQ, Short Answer, True/False)
- QR code generation components
- Navigation components (Previous, Next, Progress)
- Responsive layout components

**Styling**
- Tailwind CSS for utility-first styling
- Custom brand themes
- CSS modules for component-specific styles
- Dark/light mode support
- Mobile-responsive breakpoints

**State Management**
- React Context for global state (quiz progress, slide navigation)
- Client-side localStorage for user preferences
- Server state via API routes (Phase 2)

### Backend (Phase 1)

**Next.js API Routes**
- `/api/quiz/submit` - Client-side quiz submission (Phase 1: no persistence)
- `/api/analytics/*` - Placeholder for Phase 2 Supabase integration
- `/api/health` - Health check endpoint
- `/api/metadata` - Presentation metadata endpoint

**File System**
- Markdown files stored in Git repository
- Public assets in `public/` directory
- Generated components in `components/` directory
- Page routes in `pages/` or `app/` directory

### Backend (Phase 2)

**Supabase**
- PostgreSQL database for learner analytics
- Row-Level Security (RLS) for data access control
- Real-time subscriptions for live dashboards
- Edge Functions for serverless logic
- Authentication (email, OAuth, SSO)

**Database Schema (Phase 2)**
```sql
-- Users table
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  role TEXT DEFAULT 'student',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Presentations table
CREATE TABLE presentations (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  author_id UUID REFERENCES users(id),
  vercel_url TEXT,
  markdown_path TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Quiz attempts table
CREATE TABLE quiz_attempts (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  presentation_id UUID REFERENCES presentations(id),
  question_id TEXT,
  answer TEXT,
  is_correct BOOLEAN,
  attempted_at TIMESTAMPTZ DEFAULT NOW()
);

-- Learning outcomes table
CREATE TABLE learning_outcomes (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  presentation_id UUID REFERENCES presentations(id),
  co_code TEXT,
  description TEXT,
  blooms_level TEXT
);

-- CO attainment tracking
CREATE TABLE co_attainment (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  presentation_id UUID REFERENCES presentations(id),
  co_id UUID REFERENCES learning_outcomes(id),
  attainment_level DECIMAL(3,2),
  evidence JSONB,
  assessed_at TIMESTAMPTZ DEFAULT NOW()
);
```

### Deployment

**Vercel Platform**
- Zero-config deployment from Git
- Automatic preview environments for PRs
- Edge Network (global CDN)
- Serverless Functions (Node.js runtime)
- Environment variable management
- Custom domain support
- Analytics and Web Vitals tracking

**CI/CD Pipeline**
```yaml
# .github/workflows/deploy.yml
name: Deploy to Vercel
on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run test
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

### Content Generation Pipeline

**Markdown → Next.js Workflow**

```
1. Input: Markdown file with front matter
   ↓
2. Parser: Python script extracts:
   - Front matter (title, author, theme, etc.)
   - Slides (separated by ---)
   - Quiz blocks ([quiz]...[/quiz])
   - QR codes ([qr:url=...])
   - Pedagogical markers (<!-- ... -->)
   ↓
3. Generator: Creates Next.js project structure:
   - pages/index.tsx (main presentation page)
   - components/Slide.tsx
   - components/Quiz.tsx
   - components/QRCode.tsx
   - public/assets/ (images, videos)
   - package.json
   - next.config.js
   ↓
4. Builder: npm run build
   ↓
5. Deployer: vercel deploy
   ↓
6. Output: Live presentation URL
```

**Python Script Architecture**

```python
# scripts/markdown-to-nextjs.py

class MarkdownParser:
    def parse_front_matter(self, content: str) -> dict
    def extract_slides(self, content: str) -> list[Slide]
    def extract_quizzes(self, content: str) -> list[Quiz]
    def extract_qr_codes(self, content: str) -> list[QRCode]
    def extract_pedagogical_markers(self, content: str) -> list[Marker]

class NextJsGenerator:
    def create_project_structure(self, output_dir: str)
    def generate_page_component(self, slides: list[Slide]) -> str
    def generate_slide_component(self, slide: Slide) -> str
    def generate_quiz_component(self, quiz: Quiz) -> str
    def generate_qr_component(self, qr: QRCode) -> str
    def copy_assets(self, source_dir: str, dest_dir: str)
    def generate_package_json(self, metadata: dict) -> str
    def generate_next_config(self, metadata: dict) -> str

class VercelDeployer:
    def authenticate(self, token: str)
    def link_project(self, project_id: str)
    def deploy(self, project_dir: str) -> str  # Returns deployment URL
```

## Data Flow

### Phase 1: Static + Client-Side

```
Markdown (Git)
    ↓
Python Script
    ↓
Next.js App (SSR)
    ↓
Vercel Edge Network
    ↓
Learner Browser
    ↓
Client-side Quiz State (localStorage)
```

### Phase 2: Dynamic + Server-Side

```
Markdown (Git)
    ↓
Python Script + AI Skills
    ↓
Next.js App (SSR + API Routes)
    ↓
Vercel Edge Network
    ↓
Learner Browser
    ↓
API Routes (Next.js)
    ↓
Supabase (PostgreSQL)
    ↓
Analytics Dashboard
```

## Security Architecture

### Phase 1 (Current)
- **Content Security**: All content in public Git repository
- **No Auth Required**: Presentations are public
- **Client-side Only**: No sensitive data collected
- **HTTPS**: Automatic via Vercel

### Phase 2 (With Supabase)
- **Authentication**: Email + OAuth + SSO (Supabase Auth)
- **Authorization**: Row-Level Security (RLS) policies
- **API Security**: Server-side API routes protect database credentials
- **Data Encryption**: At rest (PostgreSQL) and in transit (TLS)
- **CORS**: Configured to allow only trusted platform domains
- **Rate Limiting**: Vercel Edge Middleware + Supabase RLS

**RLS Policies Example**:
```sql
-- Students can only read their own quiz attempts
CREATE POLICY "Students read own attempts"
ON quiz_attempts FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Faculty can read all attempts for their presentations
CREATE POLICY "Faculty read own presentation attempts"
ON quiz_attempts FOR SELECT
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM presentations
    WHERE presentations.id = quiz_attempts.presentation_id
    AND presentations.author_id = auth.uid()
  )
);
```

## Performance Considerations

### Optimization Strategies

1. **Server-Side Rendering (SSR)**
   - Initial page load optimized
   - SEO benefits for discoverability
   - Reduced client-side JavaScript

2. **Static Generation (SSG)**
   - Pre-render slides at build time
   - Serve from CDN edge nodes
   - Near-instant load times

3. **Image Optimization**
   - next/image for automatic optimization
   - WebP format with fallback
   - Lazy loading for off-screen images
   - Responsive srcset

4. **Code Splitting**
   - Dynamic imports for large components
   - Route-based splitting
   - Lazy load quiz/QR components

5. **Caching Strategy**
   - Browser cache for static assets
   - CDN cache for HTML/CSS/JS
   - API route caching (Phase 2)

### Performance Metrics

**Target Web Vitals**:
- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1
- **TTFB** (Time to First Byte): < 600ms

**Monitoring**:
- Vercel Analytics (built-in)
- Web Vitals tracking
- Custom performance marks
- Error tracking (Sentry integration planned)

## Scalability Architecture

### Vercel Scaling

```
Traffic Load
    ↓
Vercel Edge Network (Global CDN)
    ↓
Edge Functions (Serverless, auto-scale)
    ↓
[Phase 2] Supabase (Connection pooling, read replicas)
```

**Scaling Characteristics**:
- **Serverless Functions**: Auto-scale from 0 to thousands of concurrent invocations
- **Edge Network**: 70+ global locations
- **CDN Caching**: Reduces origin requests by 90%+
- **Database Connection Pooling** (Phase 2): PgBouncer for efficient connections

### Cost Optimization

**Vercel Free Tier**:
- 100 GB bandwidth/month
- 100 GB-hours compute/month
- Unlimited previews
- Commercial use allowed

**Supabase Free Tier** (Phase 2):
- 500 MB database
- 1 GB file storage
- 2 GB bandwidth/month
- Suitable for pilot programs

**Scaling Costs**:
- Vercel Pro: $20/month (unlimited bandwidth, more compute)
- Supabase Pro: $25/month (8 GB database, 100 GB bandwidth)
- Estimated cost for 10,000 monthly active users: ~$100-200/month

## Integration Architecture

### Boss of AI Agent Ecosystem

```
┌─────────────────────────────────────────────────────┐
│           Academic Learning Hub Agents              │
├─────────────────────────────────────────────────────┤
│  content-developer  →  Markdown Generator           │
│  session-planner    →  Quiz Strategy Advisor        │
│  pedagogy-advisor   →  Quality Reviewer             │
│  syllabus-publisher →  Course Page Integrator       │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│       Presentation Creator (This System)            │
├─────────────────────────────────────────────────────┤
│  Markdown Parser   →  Extract content structure     │
│  Next.js Generator →  Build React components        │
│  Vercel Deployer   →  Deploy to edge network        │
└─────────────────────────────────────────────────────┘
                        ↓
┌─────────────────────────────────────────────────────┐
│         Deployed Presentation (Vercel)              │
├─────────────────────────────────────────────────────┤
│  Learner Interface  →  Interactive slides + quizzes │
│  API Routes (Phase 2) → Analytics collection        │
│  Supabase (Phase 2)   → Data persistence            │
└─────────────────────────────────────────────────────┘
```

### API Integration Points (Phase 2)

**AI Tutoring Service**:
```typescript
// pages/api/tutor/ask.ts
export default async function handler(req, res) {
  const { question, context } = req.body;
  
  // Call AI tutoring service (OpenAI, Claude, etc.)
  const response = await aiService.chat({
    messages: [
      { role: 'system', content: 'You are a helpful tutor...' },
      { role: 'user', content: question }
    ],
    context: context
  });
  
  res.json({ answer: response.content });
}
```

**OBE Tracking Service**:
```typescript
// pages/api/obe/track.ts
export default async function handler(req, res) {
  const { userId, presentationId, coCode, evidence } = req.body;
  
  // Calculate CO attainment
  const attainment = calculateAttainment(evidence);
  
  // Store in Supabase
  await supabase.from('co_attainment').insert({
    user_id: userId,
    presentation_id: presentationId,
    co_id: coCode,
    attainment_level: attainment,
    evidence: evidence
  });
  
  res.json({ success: true, attainment });
}
```

## Development Workflow

### Local Development

```bash
# 1. Create markdown presentation
vi content/my-presentation.md

# 2. Generate Next.js app
python scripts/markdown-to-nextjs.py content/my-presentation.md

# 3. Preview locally
cd output/my-presentation
npm install
npm run dev  # Open http://localhost:3000

# 4. Make edits (hot reload active)
vi components/Slide.tsx

# 5. Build for production
npm run build

# 6. Test production build
npm run start
```

### Deployment Workflow

```bash
# Option 1: Deploy via Vercel CLI
vercel deploy

# Option 2: Deploy via Git integration
git add .
git commit -m "feat: add new presentation"
git push origin main  # Auto-deploys to production

# Option 3: Preview deployment
git checkout -b feature/new-presentation
git push origin feature/new-presentation  # Auto-generates preview URL
```

### Quality Gates

1. **Markdown Validation**: Linter checks syntax before generation
2. **Build Verification**: Next.js build must succeed
3. **Component Tests**: Jest/React Testing Library unit tests
4. **E2E Tests**: Playwright tests for quiz interactions
5. **Accessibility Audit**: axe-core checks WCAG compliance
6. **Performance Audit**: Lighthouse checks Web Vitals
7. **Security Scan**: Dependabot + Snyk for vulnerabilities
8. **Pedagogy Review**: `pedagogy-advisor` agent reviews content

## Extensibility

### Plugin Architecture (Planned)

```typescript
// plugins/mermaid-diagrams.ts
export const mermaidPlugin: PresentationPlugin = {
  name: 'mermaid-diagrams',
  markdown: {
    pattern: /```mermaid\n([\s\S]*?)\n```/g,
    transform: (match, diagram) => {
      return `<Mermaid diagram={${diagram}} />`;
    }
  },
  components: {
    Mermaid: './components/Mermaid.tsx'
  }
};

// Register in next.config.js
module.exports = {
  presentationCreator: {
    plugins: [mermaidPlugin, mathJaxPlugin, h5pPlugin]
  }
};
```

### Custom Themes

```typescript
// themes/default.ts
export const defaultTheme: PresentationTheme = {
  name: 'default',
  colors: {
    primary: '#1a73e8',
    secondary: '#34a853',
    background: '#ffffff',
    text: '#202124',
    accent: '#fbbc04'
  },
  fonts: {
    heading: 'Poppins, sans-serif',
    body: 'Inter, sans-serif',
    code: 'JetBrains Mono, monospace'
  },
  layout: {
    maxWidth: '1200px',
    slidePadding: '2rem',
    aspectRatio: '16:9'
  }
};
```

## Monitoring & Observability

### Metrics Dashboard (Planned)

```
┌─────────────────────────────────────────────┐
│  Presentation Analytics Dashboard           │
├─────────────────────────────────────────────┤
│  • Total Presentations: 1,234               │
│  • Active Learners: 5,678                   │
│  • Quiz Completion Rate: 87%                │
│  • Avg. Time per Presentation: 23 min       │
│  • CO Attainment: 78% (Target: 75%)         │
│  • Top Performing Presentations (Top 10)    │
│  • At-Risk Students (CO < 60%)              │
└─────────────────────────────────────────────┘
```

### Logging Strategy

```typescript
// lib/logger.ts
export const logger = {
  info: (message, meta?) => {
    console.log(JSON.stringify({ level: 'info', message, ...meta }));
  },
  error: (message, error, meta?) => {
    console.error(JSON.stringify({ level: 'error', message, error, ...meta }));
    // Send to error tracking service (Sentry)
  },
  performance: (metric, value, meta?) => {
    console.log(JSON.stringify({ level: 'perf', metric, value, ...meta }));
    // Send to analytics service (Vercel Analytics)
  }
};
```

---

**Document Version**: 1.0  
**Last Updated**: January 6, 2025  
**Status**: Phase 1 (Active Development) | Phase 2 (Planning)
