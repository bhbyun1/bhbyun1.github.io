import { Grid } from "@mui/material";
// import Container from "@mui/material";
import { Container } from "@mui/material";
import { Box}  from "@mui/material";
import React, { Component } from "react";

class Projects extends Component {
    render() {
        return(
            <div>
                <div>
                    My Projects
                </div>
                <Grid container spacing={2} className="grid">
                    <Grid item xs={1} className="grid-item">
                        <Grid>xs=4</Grid>
                    </Grid>
                    <Grid item xs={1} className="grid-item">
                        <Grid>xs=4</Grid>
                    </Grid>
                    <Grid item xs={1} className="grid-item">
                        <Grid>xs=4</Grid>
                    </Grid>
                    <Grid item xs={1} className="grid-item">
                        <Grid>xs=4</Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default Projects;