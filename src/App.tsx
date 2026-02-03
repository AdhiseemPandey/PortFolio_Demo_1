import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import LinksHub from './components/LinksHub';
import ResumeViewer from './components/ResumeViewer';
import CTA from './components/CTA';
import ConnectWithMe from './components/ConnectWithMe';
import Contact from './components/Contact';
import ViewCounter from './components/ViewCounter';

function App() {
  return (
    <div className="min-h-screen bg-off-white">
      <Hero />
      <About />
      <ConnectWithMe />
      <Skills />
      <Projects />
      <LinksHub />
      <ResumeViewer />
      <Contact />
      <ViewCounter />
    </div>
  );
}

export default App;
