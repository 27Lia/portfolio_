import "./App.css";
import LeftSidebar from "./components/LeftSidebar";
import RightSidebar from "./components/RightSidebar";
import Introduce from "./pages/Introduce";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Portfolio from "./pages/Portfolio";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <video className="body-overlay" autoPlay loop muted playsInline>
        <source src="/wave5.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="content">
          <LeftSidebar />
          <Introduce />
          <Skills />
          <Portfolio />
          <Resume />
        </div>
        <RightSidebar />
      </div>
    </>
  );
}

export default App;
