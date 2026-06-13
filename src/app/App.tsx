import { useState } from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { GitHubDashboard } from './components/GitHubDashboard';
import { Projects } from './components/Projects';
import { AWSArchitecture } from './components/AWSArchitecture';
import { KubernetesArchitecture } from './components/KubernetesArchitecture';
import { Timeline } from './components/Timeline';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 overflow-x-hidden">
      {/* Background gradient orbs */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 right-1/3 w-[700px] h-[700px] bg-indigo-400/15 rounded-full blur-[140px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <GitHubDashboard />
        <Projects />
        <AWSArchitecture />
        <KubernetesArchitecture />
        <Timeline />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
