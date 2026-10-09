import Layout from "@/components/layout/Layout";
import { Sparkles, ExternalLink, Zap, Users, Target, Lightbulb, MessageSquare, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import TrackResourceWidget from "@/components/resources/TrackResourceWidget";

const customGPTFeatures = [
    {
        title: "Specialized Knowledge",
        description: "Create GPTs with specific expertise in your subject area or teaching methodology.",
        icon: Target,
    },
    {
        title: "Custom Instructions",
        description: "Define how the GPT should respond, what tone to use, and what information to prioritize.",
        icon: MessageSquare,
    },
    {
        title: "File Integration",
        description: "Upload course materials, syllabi, or research papers for context-aware responses.",
        icon: BookOpen,
    },
];

const geminiGemsFeatures = [
    {
        title: "Personalized AI",
        description: "Create Gems tailored to your specific workflows and teaching needs.",
        icon: Sparkles,
    },
    {
        title: "Quick Access",
        description: "Save your custom Gems for instant access across all your Gemini conversations.",
        icon: Zap,
    },
    {
        title: "Share with Team",
        description: "Share your Gems with colleagues to standardize AI assistance across your department.",
        icon: Users,
    },
];

const customGPTExamples = [
    {
        title: "REVA Course Outcome Generator",
        description: "REVA-specific GPT for generating course outcomes aligned with institutional standards.",
        use: "Create course outcomes, learning objectives, and assessment criteria for REVA courses.",
        url: "https://chatgpt.com/g/g-68636a8422688191adb95bb22d3082e8-reva-course-outcome-generator",
    },
    {
        title: "Code Tutor",
        description: "Interactive programming tutor that helps students learn coding concepts step-by-step.",
        use: "Provide personalized coding guidance and debugging assistance to students.",
        url: "https://chatgpt.com/g/g-HxPrv1p8v-code-tutor",
    },
    {
        title: "TutorMe from Khan Academy",
        description: "Khan Academy's official tutoring GPT for personalized learning support.",
        use: "Offer personalized tutoring across various subjects with Khan Academy's methodology.",
        url: "https://chatgpt.com/g/g-hRCqiqVlM-tutor-me",
    },
    {
        title: "Presentations",
        description: "Create professional presentations with structured content and design suggestions.",
        use: "Generate presentation outlines, slide content, and speaker notes for lectures.",
        url: "https://chatgpt.com/g/g-t3BUYjh4C-presentations",
    },
    {
        title: "Academic Assistant",
        description: "Comprehensive academic support for research, writing, and teaching tasks.",
        use: "Assist with academic writing, research organization, and teaching preparation.",
        url: "https://chatgpt.com/g/g-t3BUYjh4C-presentations",
    },
    {
        title: "Scholar AI",
        description: "AI-powered research assistant for finding and analyzing academic papers.",
        use: "Search academic literature, summarize research papers, and identify key findings.",
        url: "https://chatgpt.com/g/g-L2HknCZTC-scholar-ai",
    },
    {
        title: "Ask Your PDF",
        description: "Research assistant that analyzes and answers questions about PDF documents.",
        use: "Extract information from research papers, textbooks, and academic documents.",
        url: "https://chatgpt.com/g/g-UfFxTDMxq-askyourpdf-research-assistant",
    },
    {
        title: "SciSpace",
        description: "Scientific research tool for understanding and analyzing research papers.",
        use: "Simplify complex research papers and get explanations of scientific concepts.",
        url: "https://chatgpt.com/g/g-NgAcklHd8-scispace",
    },
    {
        title: "Software Architect GPT",
        description: "Expert guidance on software architecture, design patterns, and system design.",
        use: "Design software systems, review architecture decisions, and plan technical projects.",
        url: "https://chatgpt.com/g/g-J0FYgDhN5-software-architect-gpt",
    },
    {
        title: "Career Coach",
        description: "Professional career guidance for interviews, resumes, and job search strategies.",
        use: "Help students and faculty with career development, interview prep, and resume writing.",
        url: "https://chatgpt.com/g/g-MPzLx3VuB-interview-resume-cv-job-career-coach",
    },
    {
        title: "Course Design Assistant",
        description: "A GPT trained on instructional design principles and your institution's curriculum guidelines.",
        use: "Help design course outlines, learning objectives, and assessment strategies.",
        url: "https://chatgpt.com/gpts/discovery",
    },
    {
        title: "Research Paper Reviewer",
        description: "Specialized in your research domain with knowledge of publication standards and methodologies.",
        use: "Review drafts, suggest improvements, and check for clarity and coherence.",
        url: "https://chatgpt.com/gpts/discovery",
    },
    {
        title: "Student Feedback Generator",
        description: "Trained to provide constructive, personalized feedback aligned with your grading rubrics.",
        use: "Generate detailed feedback on student assignments and projects.",
        url: "https://chatgpt.com/gpts/discovery",
    },
];


const CustomGPTsGems = () => {
    return (
        <Layout>
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-primary/10 via-background to-accent/5 py-16 md:py-24">
                <div className="container">
                    <div className="max-w-3xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                            <Sparkles className="h-4 w-4" />
                            Resources
                        </div>
                        <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
                            Custom GPTs & Gemini Gems
                        </h1>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Create personalized AI assistants tailored to your specific teaching and research needs.
                        </p>
                    </div>
                </div>
            </section>

            {/* Gemini Gems Section — shown first */}
            <section className="py-16 md:py-20 bg-muted/30">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-accent/10 text-accent">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                                Gemini Gems
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Gemini Gems are customizable AI experts that you create within Google Gemini. Each Gem can have
                            its own instructions, personality, and focus area, making it easy to switch between different
                            AI assistants optimized for specific tasks.
                        </p>

                        {/* Features */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {geminiGemsFeatures.map((feature) => (
                                <div key={feature.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                                    <div className="p-3 rounded-xl bg-accent/10 text-accent w-fit mb-4">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Examples via widget */}
                        <div className="mb-8">
                            <h3 className="font-semibold text-foreground mb-4">Browse Gemini Gems</h3>
                            <TrackResourceWidget track="All" compact />
                        </div>

                        {/* How to Create */}
                        <div className="bg-muted/50 rounded-xl p-6 border border-border mb-6">
                            <h3 className="font-semibold text-foreground mb-4">How to Create a Gemini Gem</h3>
                            <ol className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-accent shrink-0">1.</span>
                                    <span>Open Google Gemini and click on "Gem manager"</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-accent shrink-0">2.</span>
                                    <span>Click "New Gem" and give it a descriptive name</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-accent shrink-0">3.</span>
                                    <span>Write detailed instructions about the Gem's role and behavior</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-accent shrink-0">4.</span>
                                    <span>Test the Gem with sample queries and refine instructions</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-accent shrink-0">5.</span>
                                    <span>Save and access your Gem anytime from the chat interface</span>
                                </li>
                            </ol>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg">
                                <a href="https://gemini.google.com" target="_blank" rel="noopener noreferrer">
                                    Open Gemini
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a href="https://support.google.com/gemini/answer/14681366" target="_blank" rel="noopener noreferrer">
                                    Learn More
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Custom GPTs Section — shown second */}
            <section className="py-16 md:py-20 bg-background">
                <div className="container">
                    <div className="max-w-5xl mx-auto">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Sparkles className="h-6 w-6" />
                            </div>
                            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                                Custom GPTs
                            </h2>
                        </div>

                        <p className="text-muted-foreground mb-8 leading-relaxed">
                            Custom GPTs are personalized versions of ChatGPT that you can create for specific tasks.
                            They combine custom instructions, knowledge files, and capabilities to serve as specialized
                            AI assistants for your teaching, research, and administrative work.
                        </p>

                        {/* Features */}
                        <div className="grid md:grid-cols-3 gap-6 mb-8">
                            {customGPTFeatures.map((feature) => (
                                <div key={feature.title} className="bg-card rounded-xl p-6 border border-border shadow-sm">
                                    <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit mb-4">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Examples */}
                        <div className="mb-8">
                            <h3 className="font-semibold text-foreground mb-4">Example Custom GPTs for Faculty</h3>
                            <div className="space-y-4">
                                {customGPTExamples.map((example) => (
                                    <div key={example.title} className="bg-muted/30 rounded-xl p-5 border border-border">
                                        <div className="flex items-start justify-between mb-2">
                                            <h4 className="font-semibold text-foreground">{example.title}</h4>
                                            {example.url && (
                                                <a href={example.url} target="_blank" rel="noopener noreferrer">
                                                    <Button variant="ghost" size="sm">
                                                        Try It <ExternalLink className="h-3 w-3 ml-1" />
                                                    </Button>
                                                </a>
                                            )}
                                        </div>
                                        <p className="text-sm text-muted-foreground mb-2">{example.description}</p>
                                        <div className="flex items-center justify-between gap-4 mt-3 pt-3 border-t border-border/50">
                                            <div className="flex items-start gap-2">
                                                <Lightbulb className="h-4 w-4 text-primary shrink-0 mt-0.5" />
                                                <span className="text-sm text-muted-foreground italic">{example.use}</span>
                                            </div>
                                            <span className="text-[10px] text-muted-foreground px-1.5 py-0.5 rounded bg-muted/50 whitespace-nowrap italic">
                                                Added by: Sanjay Chitnis
                                            </span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* How to Create */}
                        <div className="bg-card rounded-xl p-6 border border-border mb-6">
                            <h3 className="font-semibold text-foreground mb-4">How to Create a Custom GPT</h3>
                            <ol className="space-y-3 text-muted-foreground">
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-primary shrink-0">1.</span>
                                    <span>Go to ChatGPT and click "Explore GPTs" then "Create a GPT"</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-primary shrink-0">2.</span>
                                    <span>Describe what you want your GPT to do in natural language</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-primary shrink-0">3.</span>
                                    <span>Upload relevant files (syllabi, rubrics, research papers)</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-primary shrink-0">4.</span>
                                    <span>Test and refine the instructions until it works as expected</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="font-semibold text-primary shrink-0">5.</span>
                                    <span>Save and share with colleagues or keep private</span>
                                </li>
                            </ol>
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap gap-4">
                            <Button asChild size="lg">
                                <a href="https://chat.openai.com/gpts/editor" target="_blank" rel="noopener noreferrer">
                                    Create Custom GPT
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </a>
                            </Button>
                            <Button asChild variant="outline" size="lg">
                                <a href="https://help.openai.com/en/articles/8554397-creating-a-gpt" target="_blank" rel="noopener noreferrer">
                                    Learn More
                                    <ExternalLink className="h-4 w-4 ml-2" />
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default CustomGPTsGems;
