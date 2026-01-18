import { AboutSection, HeroSection, ProjectsSection } from "./components";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[rgb(20,20,20)]">
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
