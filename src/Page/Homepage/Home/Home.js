import React from "react";
import AboutMeSection from "../AboutMeSection/AboutMeSection";
import ContactSection from "../ContactSection/ContactSection";
import HeroSection from "../HeroSection/HeroSection";
import ProjectsSection from "../ProjectsSection/ProjectsSection";
import SkillsSection from "../SkillsSection/SkillsSection";

const Home = () => {
  return (
    <div className="pb-10" style={{ backdropFilter: "blur(2px)" }}>
      <HeroSection></HeroSection>
      <ProjectsSection></ProjectsSection>
      <SkillsSection></SkillsSection>
      <AboutMeSection></AboutMeSection>
      <ContactSection></ContactSection>
    </div>
  );
};

export default Home;
