import React, { Component } from "react";
import { Link } from 'react-scroll';

class Navbar extends Component {
    render() {
        return (
            <nav id="nav-wrap">

                <ul id="nav" className="nav">
                    <li className="current">
                        <Link className="smoothscroll" to="home" spy={true} smooth={true} offset={0} duration={500}>
                            Home
                        </Link>
                    </li>

                    <li>
                        <Link className="smoothscroll" to="about" spy={true} smooth={true} offset={-50} duration={500}>
                            About
                        </Link>
                    </li>

                    <li>
                        <Link className="smoothscroll" to="resume" spy={true} smooth={true} offset={-50} duration={500}>
                            Resume
                        </Link>
                    </li>

                    {/* <li>
                        <Link className="smoothscroll" to="portfolio" spy={true} smooth={true} offset={0} duration={500}>
                            Works
                        </Link>
                    </li> */}

                    <li>
                        <Link className="smoothscroll" to="contacts" spy={true} smooth={true} offset={0} duration={500}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;