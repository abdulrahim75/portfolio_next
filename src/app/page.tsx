import { Navbar } from "@/components/layout/navbar";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { EducationLearningSection } from "@/components/sections/education-learning-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { Footer } from "@/components/sections/footer";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { PortfolioIntro } from "@/components/shared/portfolio-intro";
import { ResumeDownloadProvider } from "@/components/shared/resume-download-provider";

export default function Home() {
  return (
    <ResumeDownloadProvider>
      <PortfolioIntro />
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationLearningSection />
      <ContactSection />
      <Footer />
    </ResumeDownloadProvider>
  );
}
