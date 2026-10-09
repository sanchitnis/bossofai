import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import TrackPillars from "@/components/home/TrackPillars";
import Strategy from "@/components/home/Strategy";
import AssessmentPreview from "@/components/home/AssessmentPreview";
import ResourcesPreview from "@/components/home/ResourcesPreview";
import GovernanceBanner from "@/components/home/GovernanceBanner";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>BossOfAI — Students AI Hub</title>
        <meta name="description" content="Your open gateway to AI literacy, tools, and resources. Explore the TRACK framework, student guidelines, and curated learning materials." />
        <meta property="og:title" content="BossOfAI — Students AI Hub" />
        <meta property="og:description" content="AI literacy, tools, and resources for higher education students and educators." />
      </Helmet>
      <Hero />
      <TrackPillars />
      <Strategy />
      <AssessmentPreview />
      <ResourcesPreview />
      <GovernanceBanner />
    </Layout>
  );
};

export default Index;
