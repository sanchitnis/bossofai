import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GraduationCap, Heart, Shield, Building2 } from "lucide-react";

// Public pages
import ScrollToTop from "./components/ScrollToTop";
import Index from "./pages/Index";
import AssessmentVault from "./pages/AssessmentVault";
import Resources from "./pages/Resources";
import Governance from "./pages/Governance";
import Teaching from "./pages/track/Teaching";
import Research from "./pages/track/Research";
import Administration from "./pages/track/Administration";
import Consulting from "./pages/track/Consulting";
import Kaizen from "./pages/track/Kaizen";
import UnderDevelopment from "./pages/UnderDevelopment";
import NotFound from "./pages/NotFound";
import GetStarted from "./pages/GetStarted";
import LearningHub from "./pages/resources/LearningHub";
import PromptLibrary from "./pages/resources/PromptLibrary";
import Notebooks from "./pages/resources/Notebooks";
import CustomGPTsGems from "./pages/resources/CustomGPTsGems";
import ClaudeArtifacts from "./pages/resources/ClaudeArtifacts";
import KillercodaScenarios from "./pages/resources/KillercodaScenarios";
import Planning from "./pages/resources/Planning";
import ReportsLibrary from "./pages/resources/ReportsLibrary";
import PlatformsTools from "./pages/resources/PlatformsTools";
import StudentGuidelines from "./pages/StudentGuidelines";
import AssessmentDesign from "./pages/track/teaching/AssessmentDesign";
import StudentEngagement from "./pages/track/teaching/StudentEngagement";
import AgriLanding from "./pages/track/research/agriculture/AgriLanding";
import AgriAcademy from "./pages/track/research/agriculture/AgriAcademy";
import AgriResearch from "./pages/track/research/agriculture/AgriResearch";
import AgriPartnerships from "./pages/track/research/agriculture/AgriPartnerships";
import AgriCommunity from "./pages/track/research/agriculture/AgriCommunity";
import SmartMfgLanding from "./pages/track/research/smart-manufacturing/SmartMfgLanding";
import SmartMfgAcademy from "./pages/track/research/smart-manufacturing/SmartMfgAcademy";
import SmartMfgResearch from "./pages/track/research/smart-manufacturing/SmartMfgResearch";
import SmartMfgPartnerships from "./pages/track/research/smart-manufacturing/SmartMfgPartnerships";
import SmartMfgCommunity from "./pages/track/research/smart-manufacturing/SmartMfgCommunity";
import ResearchCenterPlaceholder from "./pages/track/research/ResearchCenterPlaceholder";
import AgendaGenerator from "./pages/track/administration/AgendaGenerator";
import PolicySummarizer from "./pages/track/administration/PolicySummarizer";
import InternalCommunications from "./pages/track/administration/InternalCommunications";
import SimulationsCaseStudies from "./pages/track/consulting/SimulationsCaseStudies";
import AITutor from "./pages/track/kaizen/AITutor";
import News from "./pages/News";
import Projects from "./pages/track/research/Projects";
import Datasets from "./pages/track/research/Datasets";
import StaffAIProcedures from "./pages/StaffAIProcedures";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        basename="/aihub"
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <ScrollToTop />
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/assessment-vault" element={<AssessmentVault />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/governance" element={<Governance />} />
          <Route path="/governance/staff-procedures" element={<StaffAIProcedures />} />
          <Route path="/track/teaching" element={<Teaching />} />
          <Route path="/track/teaching/assessment-design" element={<AssessmentDesign />} />
          <Route path="/track/teaching/engagement" element={<StudentEngagement />} />
          <Route path="/student-guidelines" element={<StudentGuidelines />} />
          <Route path="/track/research" element={<Research />} />
          <Route path="/track/research/projects" element={<Projects />} />
          <Route path="/track/research/datasets" element={<Datasets />} />
          <Route path="/track/research/agriculture" element={<AgriLanding />} />
          <Route path="/track/research/agriculture/academy" element={<AgriAcademy />} />
          <Route path="/track/research/agriculture/research" element={<AgriResearch />} />
          <Route path="/track/research/agriculture/partnerships" element={<AgriPartnerships />} />
          <Route path="/track/research/agriculture/community" element={<AgriCommunity />} />
          <Route path="/track/research/smart-manufacturing" element={<SmartMfgLanding />} />
          <Route path="/track/research/smart-manufacturing/academy" element={<SmartMfgAcademy />} />
          <Route path="/track/research/smart-manufacturing/research" element={<SmartMfgResearch />} />
          <Route path="/track/research/smart-manufacturing/partnerships" element={<SmartMfgPartnerships />} />
          <Route path="/track/research/smart-manufacturing/community" element={<SmartMfgCommunity />} />
          <Route path="/track/research/education/*" element={<ResearchCenterPlaceholder name="Education" basePath="/track/research/education" icon={GraduationCap} colorClass="text-track-teaching" />} />
          <Route path="/track/research/healthcare/*" element={<ResearchCenterPlaceholder name="Bioinformatics & Healthcare" basePath="/track/research/healthcare" icon={Heart} colorClass="text-destructive" />} />
          <Route path="/track/research/defense/*" element={<ResearchCenterPlaceholder name="Defense" basePath="/track/research/defense" icon={Shield} colorClass="text-primary" />} />
          <Route path="/track/research/infrastructure/*" element={<ResearchCenterPlaceholder name="Sustainable Infrastructure" basePath="/track/research/infrastructure" icon={Building2} colorClass="text-track-consulting" />} />
          <Route path="/track/administration/agenda-generator" element={<AgendaGenerator />} />
          <Route path="/track/administration/policy-summarizer" element={<PolicySummarizer />} />
          <Route path="/track/administration/communications" element={<InternalCommunications />} />
          <Route path="/track/consulting/simulations" element={<SimulationsCaseStudies />} />
          <Route path="/track/kaizen/ai-tutor" element={<AITutor />} />
          <Route path="/track/administration" element={<Administration />} />
          <Route path="/track/consulting" element={<Consulting />} />
          <Route path="/track/kaizen" element={<Kaizen />} />
          <Route path="/under-development" element={<UnderDevelopment />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/resources/learning-hub" element={<LearningHub />} />
          <Route path="/resources/prompt-library" element={<PromptLibrary />} />
          <Route path="/resources/notebooks" element={<Notebooks />} />
          <Route path="/resources/custom-gpts-gems" element={<CustomGPTsGems />} />
          <Route path="/resources/claude-artifacts" element={<ClaudeArtifacts />} />
          <Route path="/resources/labs" element={<KillercodaScenarios />} />
          <Route path="/resources/planning" element={<Planning />} />
          <Route path="/resources/reports" element={<ReportsLibrary />} />
          <Route path="/resources/platforms-tools" element={<PlatformsTools />} />
          <Route path="/news" element={<News />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
