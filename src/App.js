import "./App.css";
import About from "./components/About/About";
import Navbar from "./components/Navbar/Navbar";
import ParticleBackground from "./components/ParticleBackground/ParticleBackground";

function App() {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <About />
    </div>
  );
}

export default App;
