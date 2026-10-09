import Layout from "@/components/layout/Layout";
import { BookOpen, Lightbulb, ShieldCheck, Users, ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import TrackResourceWidget from "@/components/resources/TrackResourceWidget";

const features = [
  {
    title: "Course Design using AI",
    description: "Leverage NotebookLM to organize course materials, generate insights, and design comprehensive curriculum structures.",
    icon: BookOpen,
    href: "https://notebooklm.google.com/notebook/4aaa5f0d-54b9-4b9f-8068-f70638746776",
    uses: "500",
  },
  {
    title: "Lesson Planning and Instructional Design",
    description: "Create detailed lesson plans, instructional strategies, and engaging learning activities with AI assistance.",
    icon: Lightbulb,
    href: "https://notebooklm.google.com/notebook/c38df5ee-97c0-49e1-bc77-d3a18ff31a44",
    uses: "1.2k",
  },
  {
    title: "Assessment Vault",
    description: "Strategic frameworks for validating academic excellence with secure authenticity and AI-integrated innovation.",
    icon: ShieldCheck,
    href: "/assessment-vault",
    uses: "3.5k",
  },
  {
    title: "Student Engagement",
    description: "Strategies and tools to enhance classroom interaction and personalized learning experiences.",
    icon: Users,
    href: "/track/teaching/engagement",
    uses: "2.1k",
  },
];

const useCases = [
  "Generate creative analogies to explain complex concepts",
  "Create differentiated learning materials for diverse student needs",
  "Design rubrics aligned with learning outcomes",
  "Develop interactive discussion prompts",
  "Build adaptive quiz questions",
];

const Teaching = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-gradient-to-br from-track-teaching/10 via-background to-primary/5 py-16 md:py-24">
        <div className="container">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-track-teaching/10 text-track-teaching text-sm font-medium mb-6">
              <BookOpen className="h-4 w-4" />
              TRACK Pillar
            </div>
            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-4">
              <span className="text-track-teaching">T</span>eaching & Learning
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Empower your teaching with AI-driven planning, creative analogies, and innovative student engagement strategies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="teaching" size="lg">
                <Link to="/assessment-vault">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/under-development">
                  <Play className="h-4 w-4 mr-2" />
                  Watch Tutorial
                </Link>
              </Button>
            </div>

            {/* Instructional Design Infographic */}
            <div className="mt-12">
              <img
                src="/InstructionalDesignInfographic.png"
                alt="Instructional Design Process Infographic"
                className="w-full max-w-4xl mx-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => {
              const isExternal = feature.href.startsWith("http");
              const content = (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 rounded-xl bg-track-teaching/10 text-track-teaching group-hover:bg-track-teaching group-hover:text-white transition-colors">
                      <feature.icon className="h-7 w-7" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground bg-background/80 backdrop-blur-sm border border-border px-2 py-1 rounded-full">
                      {feature.uses} uses
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-track-teaching transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </>
              );

              if (isExternal) {
                return (
                  <a
                    key={feature.title}
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-card rounded-2xl p-8 border border-border hover:border-track-teaching/30 transition-all shadow-card hover:shadow-card-hover block"
                  >
                    {content}
                  </a>
                );
              }

              return (
                <Link
                  key={feature.title}
                  to={feature.href}
                  className="group bg-card rounded-2xl p-8 border border-border hover:border-track-teaching/30 transition-all shadow-card hover:shadow-card-hover block"
                >
                  {content}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 md:py-20 bg-muted/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
              What You Can Do
            </h2>
            <p className="text-muted-foreground">
              Practical applications of AI in your teaching workflow
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-4">
              {useCases.map((useCase, index) => (
                <div
                  key={useCase}
                  className="flex items-center gap-4 bg-card rounded-xl p-4 border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <div className="w-8 h-8 rounded-full bg-track-teaching/10 text-track-teaching flex items-center justify-center font-semibold text-sm shrink-0">
                    {index + 1}
                  </div>
                  <span className="text-foreground">{useCase}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="py-16 md:py-20 bg-background">
        <div className="container">
          <div className="mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">Resources for Teaching</h2>
            <p className="text-muted-foreground">Courses, prompts, and gems curated for Teaching &amp; Learning — rated by the community.</p>
          </div>
          <TrackResourceWidget track="Teaching" compact />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-track-teaching text-white">
        <div className="container text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready to Transform Your Teaching?
          </h2>
          <p className="text-white/80 max-w-xl mx-auto mb-8">
            Explore our prompt library for ready-to-use teaching templates.
          </p>
          <Button asChild variant="hero" size="lg">
            <Link to="/resources/prompt-library">
              Browse Teaching Prompts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Teaching;
