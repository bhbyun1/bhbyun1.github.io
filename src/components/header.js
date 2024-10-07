import React, { Component } from "react";
import '../css/layout.css';
// import Waves from '../Assets/layered-waves-haikei.svg'
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import zIndex from "@mui/material/styles/zIndex";
// import zIndex from "@mui/material/styles/zIndex";


const Header = () => {
    // render() {

    const name = "Brad Byun";
    const description = "Computer Science Graduate of 2022";

    const options = {
        fullScreen: {
            enable: false,
            zIndex: -1
        },
        background: {
            color: {
              value: "#232741",
            }
        },
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

    return(
        <header id="home">
            
            <div className="banner">
            
                <div className="banner-text">
                    <h1 className="responsive-headline">{name}</h1>
                    <h3>{description}</h3>
                    <hr />
                </div>
                <Particles className="particles" options={options} init={particlesInit}/>
            </div>
            
        </header>
    );
    // }
}

export default Header;