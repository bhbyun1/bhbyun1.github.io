import './App.css';
import Blank from './components/blank';
import Header from './components/header';
import About from './components/about';
import Navbar from './components/navbar';
import Resume from './components/resume';
import Projects from './components/projects';
import Contacts from './components/contacts';

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Projects from './pages/projects';
// import Home from './pages/home';

function App() {

  const options = {
    fullScreen: { enable: false },
    particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            area: 800
          }
        },
        color: {
          value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
        },
        shape: {
          type: "circle"
        },
        opacity: {
          value: 1
        },
        size: {
          value: { min: 1, max: 8 }
        },
        links: {
          enable: true,
          distance: 150,
          color: "#808080",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: "none",
          random: false,
          straight: false,
          outModes: "out"
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab"
          },
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          grab: {
            distance: 140,
            links: {
              opacity: 1
            }
          },
          push: {
            quantity: 4
          }
        }
      }
};

const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
}, []);
  
  return (
    <div className='App'>
      <Navbar/>
      
      <Header/>
      {/* <Particles options={options} init={particlesInit}/> */}
      
      <About/>
      <Resume/>
      <Contacts/>
      {/* <Projects/> */}
      {/* <Header/> */}
    </div>
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home/>}/>
    //     <Route path="/projects" element={<Projects/>}/>
    //     <Route element={Projects}/>
    //   </Routes>
    // </Router>
  )

}

export default App;
