import { GitHub, Instagram, LinkedIn, Mail, Phone } from "@mui/icons-material";
import React, { Component } from "react";
import { Icon, IconButton } from "@mui/material";

class Contacts extends Component {
    render() {
        return(
            <div id="contacts" className="contacts">
                {/* <div>
                    Contact Me.
                </div> */}
                <div>
                    <IconButton href="mailto:bradbyun1@gmail.com">
                        <Mail/>
                    </IconButton>
                    bradbyun1@gmail.com
                </div>
                <div>
                    <IconButton href="tel:562-371-7898">
                        <Phone/>
                    </IconButton>
                    562-371-7898
                </div>
                <div>
                    <IconButton href="https://www.linkedin.com/in/brad-byun/">
                        <LinkedIn/>
                    </IconButton>
                    LinkedIn
                </div>
                <div>
                    <IconButton href="https://github.com/bhbyun1">
                        <GitHub/>
                    </IconButton>
                    GitHub
                </div>
            </div>
        );
    }
}

export default Contacts;