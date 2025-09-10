import Nav from "./nav.jsx";
import "./App.css";
import About from "./landing.jsx";
import ProjectCard from "./Project.jsx";
import AboutMe from "./AboutMe.jsx";
import ContactSayHi from "./footer.jsx";
import Certificate from "./certificate.jsx";

// --- MAIN APP COMPONENT ---
function App() {
  return (
    <div className="App">
        <Nav />
        <About />
        <ProjectCard/>
        <AboutMe/>
        <Certificate/>
        <ContactSayHi/>
    </div>
  );
}

export default App;
