import PersonalAbout from "@/components/Section/About";
import ContactSection from "@/components/Section/ContactSection";
import FeaturedProjects from "@/components/Section/FeaturedProjects";
import Hero from "@/components/Section/Hero";

export default function Home() {
  return (
    <>
      <Hero/>
      <PersonalAbout/>
      <FeaturedProjects/>
      <ContactSection/>
    </>
  );
}
