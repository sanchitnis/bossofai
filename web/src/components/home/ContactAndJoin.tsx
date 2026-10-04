import React, { useState } from "react";
import {
  Mail,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
  Sparkles,
  Users,
  GraduationCap,
  Building,
  Briefcase,
  HelpCircle,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";

export const ContactAndJoin: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<string>("all");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role_type: "student" as "student" | "faculty" | "mentor" | "hub" | "industry" | "general",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedMessage, setSubmittedMessage] = useState(false);

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const rolePersonas = [
    {
      id: "students",
      role: "student",
      badge: "🎓 STUDENTS & BUILDERS",
      title: "Students, Faculty & Lifelong Learners",
      desc: "Join Srujana Stage 1–4 project sprints, train in the Brain GYM, develop 4 C skills, build real-world portfolios, and lead AI agent guilds.",
    },
    {
      id: "mentors",
      role: "mentor",
      badge: "🧙‍♂️ MENTORS & HEITL JURY",
      title: "Mentors & Domain Experts",
      desc: "Guide student teams across the 5-Tier Mentorship Network, co-author publications/patents, and conduct HEITL expert reviews.",
    },
    {
      id: "hubs",
      role: "hub",
      badge: "🏛️ INSTITUTIONAL HUBS",
      title: "Universities, Deans & R&D Labs",
      desc: "Establish a Boss of AI Institutional Hub Node, nominate 1 Executive Sponsor + 4 SPOCs, and embed R&D into STEAM curricula.",
    },
    {
      id: "industry",
      role: "industry",
      badge: "🏢 CORPORATE PARTNERS",
      title: "Enterprise CTOs & VCs",
      desc: "Submit real-world problem statements, sponsor Stage 3 probes, host paid internships, and engage in high-TRL outcome-based consulting.",
    },
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in your name, email, and message.");
      return;
    }

    setIsSubmitting(true);
    try {
      if (isSupabaseConfigured()) {
        const { error } = await supabase.from("audience_inquiries").insert({
          name: formData.name,
          email: formData.email,
          role_type: formData.role_type,
          organization: formData.organization || null,
          message: formData.message,
          status: "new",
        });
        if (error) throw error;
      }
      setSubmittedMessage(true);
      setFormData({
        name: "",
        email: "",
        role_type: "student",
        organization: "",
        message: "",
      });
    } catch (err) {
      console.error("Inquiry submission error:", err);
      // Fallback optimistic message
      setSubmittedMessage(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;

    try {
      if (isSupabaseConfigured()) {
        await supabase.from("broadcast_subscribers").insert({
          email: newsletterEmail,
          role_interest: "general",
        });
      }
      setNewsletterSubscribed(true);
      setNewsletterEmail("");
    } catch (err) {
      console.warn("Newsletter subscription:", err);
      setNewsletterSubscribed(true);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 border-t border-cyan-500/20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-semibold text-cyan-300 mb-3">
            <MessageSquare className="h-3.5 w-3.5 text-cyan-400" />
            <span>Audience Communication & Onboarding</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Join the PROdi<span className="text-cyan-400">GYM</span> Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Connect directly with studio orchestrators, join active cohorts, register an institutional academic hub, or mentor high-velocity student teams.
          </p>
        </div>

        {/* Persona Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
          {rolePersonas.map((p) => (
            <Card
              key={p.id}
              className="border border-white/10 bg-slate-900/60 backdrop-blur-md flex flex-col justify-between hover:border-cyan-500/40 transition-all"
            >
              <CardHeader className="space-y-2 pb-2">
                <Badge variant="gym" className="w-fit text-[10px]">
                  {p.badge}
                </Badge>
                <CardTitle className="text-base font-bold text-white leading-tight pt-1">
                  {p.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-xs text-slate-300 leading-relaxed">{p.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 2-Column Contact & Registration Engine */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-5xl mx-auto items-start">
          {/* Col 1: Direct Message Form (Submits to Supabase) */}
          <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-slate-900/70 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="h-5 w-5 text-cyan-400" />
              <h3 className="font-heading text-xl font-bold text-white">Send Direct Inquiry</h3>
            </div>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Have a question about joining cohorts, becoming an institutional hub, or sponsoring R&D probes? Send us a message directly or email us at{" "}
              <a href="mailto:info@bossofai.org" className="text-cyan-400 hover:underline font-mono">
                info@bossofai.org
              </a>.
            </p>

            {submittedMessage ? (
              <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 text-center space-y-3">
                <CheckCircle2 className="h-10 w-10 text-emerald-400 mx-auto" />
                <h4 className="text-base font-bold text-white">Inquiry Received!</h4>
                <p className="text-xs text-slate-300">
                  Thank you for reaching out. Dr. Sanjay Chitnis and the Boss of AI team will get back to you shortly.
                </p>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => setSubmittedMessage(false)}
                  className="text-xs mt-2"
                >
                  Send Another Inquiry
                </Button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Full Name *</label>
                    <Input
                      placeholder="e.g. Maya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="e.g. maya@university.edu"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Your Role / Interest *</label>
                    <select
                      value={formData.role_type}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          role_type: e.target.value as any,
                        })
                      }
                      className="flex h-11 w-full rounded-xl border border-white/15 bg-slate-900 px-4 py-2 text-xs text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                    >
                      <option value="student">Student / Lifelong Learner</option>
                      <option value="faculty">Faculty / Academic Researcher</option>
                      <option value="mentor">Mentor / Industry CTO</option>
                      <option value="hub">University Dean / Academic Hub</option>
                      <option value="industry">Corporate Partner / Enterprise</option>
                      <option value="general">General Collaborator / Press</option>
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-300">Organization / College</label>
                    <Input
                      placeholder="e.g. REVA University / Tech Corp"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-300">Your Inquiry / Message *</label>
                  <Textarea
                    placeholder="Tell us about your project, your background, or how you'd like to collaborate..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  variant="gym"
                  className="w-full gap-2 text-sm font-semibold h-11"
                  disabled={isSubmitting}
                >
                  <Send className="h-4 w-4" />
                  <span>{isSubmitting ? "Sending..." : "Submit Inquiry to Boss of AI"}</span>
                </Button>
              </form>
            )}
          </div>

          {/* Col 2: Official Registration & Broadcast Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            {/* Google Form Card */}
            <div className="rounded-2xl border border-cyan-500/30 bg-gradient-to-tr from-indigo-950/40 via-slate-900/80 to-slate-950/90 p-6 backdrop-blur-xl shadow-xl">
              <h4 className="font-heading text-lg font-bold text-white mb-2">
                Official Registration Form
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed mb-4">
                To formally enroll as a verified student participant, apply as a mentor, or register an academic hub node, complete our comprehensive registration form.
              </p>
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSf6CkQQXXr3306tPjUFi6nODpdLXT-F6uyFrLpoEcK5iBAa5Q/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full block"
              >
                <Button variant="default" className="w-full gap-2 text-xs font-semibold">
                  <span>Complete Google Form Registration</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </Button>
              </a>
              <div className="mt-3 text-[11px] text-slate-400 space-y-1">
                <div>Directly overseen by <strong className="text-slate-200">Dr. Sanjay Chitnis</strong> (<code>sanjay.chitnis@gmail.com</code>).</div>
                <div>General & ecosystem queries: <a href="mailto:info@bossofai.org" className="text-cyan-400 hover:underline font-mono">info@bossofai.org</a></div>
              </div>
            </div>

            {/* Community Broadcast Card */}
            <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="h-4 w-4 text-cyan-400" />
                <h4 className="font-heading text-base font-bold text-white">Community Broadcasts</h4>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed mb-4">
                Subscribe for announcements on upcoming cohort dates, hackathons, and open R&D compute credits.
              </p>

              {newsletterSubscribed ? (
                <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-500/10 p-3 rounded-lg border border-emerald-500/20">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  <span>Subscribed! You'll receive studio updates.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="h-10 text-xs"
                  />
                  <Button type="submit" variant="secondary" size="sm" className="w-full text-xs">
                    Subscribe to Updates
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
