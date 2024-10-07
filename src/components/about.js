import React, { Component } from "react";
import pfp from '../Assets/pfp.png';
import { useState, useEffect } from "react";

import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

//

const About = () => {
    // render() {
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

        const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);

        const updateMedia = () => {
            setDesktop(window.innerWidth > 1450);
        };

        useEffect(() => {
            window.addEventListener("resize", updateMedia);
            return () => window.removeEventListener("resize", updateMedia);
        });

        return(
            <div id="about" className="about-flex">
                { isDesktop && <img src={pfp} className='about-picture' alt="Profile Picture" />}
                {/* <Particles options={options} init={particlesInit}/> */}
                {/* {isDesktop ? (
                    <img src={pfp} className='about-picture' alt="Profile Picture" />
                )} */}

                {/* <div className="about-picture">
                    a
                </div> */}
                <div className="about-me">
                    <div className="about-text">
                        Hello, I'm Brad. I graduted cum laude from the <b>University of California, Santa Cruz</b> with a major in computer science.
                    </div>
                    <div className="about-text">
                        I have experience coding in <b>Python, Javascript, HTML, CSS, and React</b>.
                    </div>
                    <div className="about-text">
                        Right now, I'm focusing on developing projects to broaden my skills and gain more experience.
                    </div>
                </div>
            </div>
        );
    // }
}

export default About;