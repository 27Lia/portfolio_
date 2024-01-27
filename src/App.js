import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Introduce from "./pages/Introduce";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <video className="body-overlay" autoPlay loop muted>
        {/* <source src="/wave5.mp4" type="video/mp4" /> */}
      </video>
      <LeftSidebar />
      <div className="content">
        <Introduce />
        <Resume />
        <Skills />
        <Portfolio />
        <Contact />
      </div>

      <RightSidebar />
    </div>
  );
}

export default App;
