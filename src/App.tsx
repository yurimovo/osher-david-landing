import React from 'react';
import './App.css';
import { useResponsive } from './utils/hooks/useResponsive';

import HeaderSection from "./components/header-section/HeaderSection";
import AboutSection from "./components/about-section/AboutSection";
import AboutSectionLarge from './components/about-section/AboutSectionLarge';
import ContactUsSection from './components/contact-us-section/ContactUsSection';
import ContactsSection from "./components/contacts-section/ContactsSection";
import WorkProcessSection from "./components/work-process-section/WorkProcessSection";
import ProjectsSection from "./components/projects-section/ProjectsSection";


function App() {
  const { isDesktopLarge } = useResponsive();

  return (
    <div className="App">
      <HeaderSection />
      {isDesktopLarge ? <AboutSectionLarge /> : <AboutSection />}
      <WorkProcessSection />
      <ProjectsSection />
      <ContactUsSection />
      <ContactsSection />
    </div>
  );
}

export default App;