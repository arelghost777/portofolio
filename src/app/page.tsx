import PersonalAbout from "@/components/About";
import ContactSection from "@/components/ContactSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import Footer from "@/components/Footer";
import FrontendSkills from "@/components/FrontendSkills";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header/>
      <PersonalAbout/>
      <FrontendSkills/>
      <FeaturedProjects/>
      <ContactSection/>
      <Footer/>
    </>
  );
}
