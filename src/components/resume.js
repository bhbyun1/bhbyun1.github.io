import React, { Component } from "react";

const Resume = () => {
    // render() {
        const education = {
            school: "University of California, Santa Cruz",
            degree: "Computer Science",
            graduated: "Dec. 2022",
            description: ['Graduated with a GPA of 3.88', 'Graduated cum laude', 'Graduated with Dean\'s Honors']
        }

        const work = {
            jobs: [
                {
                    name: "PayStand",
                    title: "Software Engineer",
                    date: "Jan. 2023 - Feb. 2023",
                    description: ["Automated graphile workers to retry varying types of payments sent to NetSuite upon failure.", "Improved downloading records and summaries of payments on the merchant’s dashboard."]
                },
                {
                    name: "PayStand",
                    title: "Software Engineer",
                    date: "June 2022 - Sep. 2022",
                    description: ["Worked with NetSuite to create new features to make payments easier to manage for merchants.", "Implemented the basis for the creation of unit tests for NetSuite related functionalities using SuiteCloud CLI and Jest.", "Helped create documentation for the NetSuite frontend to prevent bottleneck amongst other NetSuite Engineers."]
                },
                {
                    name: "Twigoh",
                    title: "Full Stack Intern",
                    date: "Jan. 2022 - April 2022",
                    description: ["Worked on company website using React, Tailwind, and PostgreSQL.", "Drafted design of relational schema for the collection of user data.", "Implemented user sign up pages following Figma designs.", "Website implementation increased investor interest and led to more inquiries."]
                }
            ]
        }

        const projects = {
            creations: [
                {
                    name: "Client Server Instant Messenger",
                    languages: "Node, React, Flask",
                    description: ["Created a client server messenging app for a school project, integrating Socket.io and WebSocket to allow real time communication between client and server.", "Implemented UI for chatrooms, creation of chatrooms, and a login system.", "Referenced API calls to retrieve message history, accessible chatrooms, and sending new messages."]
                },
                {
                    name: "Marketplace Clone",
                    languages: "Node, React, Express, PostgreSQL",
                    description: ["Created a mobile interface for a mock marketplace that allows users to sign in to post and view listings.", "Designed with React and MaterialUI for a user-friendly interface", "Fetches all listings with RESTful API using Node.js and Express.", "Sorted listings by category/subcategory and made them searchable by those filters."]
                },
                {
                    name: "Daily Mandarin Bot",
                    languages: "Python, Heroku, BeautifulSoup",
                    description: ["Programmed a Twitter bot using Tweepy that tweets a Mandarin word as well as its English definition.", "Built to scrape a website using BeautifulSoup to retrieve daily word and definition.", "Hosted on Heroku and pinged on a regular basis to keep the bot up 24/7."]
                },
                {
                    name: "Video Game Addon",
                    languages: "Lua",
                    description: ["• Developed an addon for the MMORPG The Elder Scrolls Online.", "Semi-automated repetition of daily quests with the use of in–game API by sorting rewards and selling junk.", "Implemented option to specify whether items should be marked as a reward or junk in the addon menu."]
                }
            ]

        }

        // const createDesc = (arrDesc) => {
        //     for (let line = 0; i < arrDesc.length; i++) {

        //     }
        // }

        const workDiv = [];
        for (let i = 0; i < work.jobs.length; i++) {
            workDiv.push(
                <div className="resume-row">
                    <div className="resume-text">
                        <div key={work.jobs[i].name}>
                            <h3>{work.jobs[i].name}</h3>
                            <p className="info">
                                {work.jobs[i].title}
                                <span> &bull; </span>
                                <em className="date">{work.jobs[i].date}</em>
                            </p>
                            {
                                Array.from({ length: work.jobs[i].description.length }, (_, k) => (
                                <p key={k}>
                                    • {work.jobs[i].description[k]}
                                </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            );
        }

        const projDiv = [];
        for (let i = 0; i < projects.creations.length; i++) {
            projDiv.push(
                <div className="resume-row">
                    <div className="resume-text">
                        <div key={projects.creations[i].name}>
                            <h3>{projects.creations[i].name}</h3>
                            <p className="info">
                                {/* {projects.creations[i].languages} */}
                                {/* <span> &bull; </span> */}
                                <em>{projects.creations[i].languages}</em>
                            </p>
                            {
                                Array.from({ length: projects.creations[i].description.length }, (_, k) => (
                                <p key={k}>
                                    • {projects.creations[i].description[k]}
                                </p>
                                ))
                            }
                        </div>
                    </div>
                </div>
            );
        }

        return(
            <div className="resume">
                <div className="education">
                    <h1 className="resume-subject-wrapper">
                        <span className="resume-subject">Education</span>
                    </h1>

                    <div className="resume-textbox">
                        <div className="resume-row">
                            <div className="resume-text">
                                <div key={education.school}>
                                    <h3>{education.school}</h3>
                                    <p className="info">
                                        {education.degree}
                                        <span> &bull; </span>
                                        <em className="date">{education.graduated}</em>
                                    </p>
                                    {
                                        Array.from({ length: education.description.length }, (_, k) => (
                                        <p key={k}>
                                            • {education.description[k]}
                                        </p>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="education">
                    <h1 className="resume-subject-wrapper">
                        <span className="resume-subject">Work</span>
                    </h1>

                    <div className="resume-textbox">
                        {workDiv}
                    </div>
                </div>
                <div className="education">
                    <h1 className="resume-subject-wrapper">
                        <span className="resume-subject">Work</span>
                    </h1>

                    <div className="resume-textbox">
                        {projDiv}
                    </div>
                </div>
            </div>
            
            // <div className="resume">
            //     <div className="resume-item">
            //         <div className="resume-subject">
            //             <div>Education</div>
            //         </div>
            //         <div className="resume-box">
            //             <div className="resume-box-item">
            //                 <div className="resume-box-header">
            //                     University of California, Santa Cruz
            //                 </div>
            //                 <div className="resume-box-info">
            //                     Bachelor of Science in Computer Science - Sept. 2019 - December 2022
            //                 </div>
            //             </div>
                        
            //             {/* University of California, Santa Cruz */}
            //         </div>
            //     </div>
            //     <hr/>
            //     <div className="resume-item">
            //         <div className="resume-subject">
            //             <div>Work</div>
            //         </div>
            //         <div className="resume-box">
            //             <div className="resume-box-item">
            //                 <div className="resume-box-header">
            //                     PayStand
            //                 </div>
            //                 <div className="resume-box-info">
            //                     Software Engineer - Jan. 2023 - Feb. 2023
            //                 </div>
            //                 <div className="resume-box-summary">
            //                     • Automated graphile workers to retry varying types of payments sent to NetSuite upon failure.
            //                     <br/>
            //                     • Improved downloading records and summaries of payments on the merchant’s dashboard.
            //                 </div>
            //             </div>
            //             <div className="resume-box-item">
            //                 <div className="resume-box-header">
            //                     PayStand
            //                 </div>
            //                 <div className="resume-box-info">
            //                     Software Engineer - Jan. 2023 - Feb. 2023
            //                 </div>
            //                 <div className="resume-box-summary">
            //                     • Worked with NetSuite to create new features to make payments easier to manage for merchants.<br/>
            //                     • Implemented the basis for the creation of unit tests for NetSuite related functionalities using SuiteCloud CLI and
            //                     Jest.<br/>
            //                     • Helped create documentation for the NetSuite frontend to prevent bottleneck amongst other NetSuite Engineers
            //                 </div>
            //             </div>
            //             <div className="resume-box-item">
            //                 <div className="resume-box-header">
            //                     Twigoh
            //                 </div>
            //                 <div className="resume-box-info">
            //                     Software Engineer - Jan. 2023 - Feb. 2023
            //                 </div>
            //                 <div className="resume-box-summary">
            //                 • Worked on company website using React, Tailwind, and PostgreSQL.<br/>
            //                 • Drafted design of relational schema for the collection of user data.<br/>
            //                 • Implemented user sign up pages following Figma designs.<br/>
            //                 • Website implementation increased investor interest and led to more inquiries.
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            //     <div className="resume-item">
            //         <div className="resume-subject">
            //             <div>Projects</div>
            //         </div>
            //         <div className="resume-box">
            //             <div className="resume-box-item">
            //                 <div className="resume-box-header">
            //                     Client Server Instant Messenger
            //                 </div>
            //                 <div className="resume-box-info">
            //                     Node, React, Flask
            //                 </div>
            //                 <div className="resume-box-summary">
            //                     • Created a client server messenging app for a school project, integrating Socket.io and WebSocket to allow real time communication between client and server.<br/>
            //                     • Implemented UI for chatrooms, creation of chatrooms, and a login system.<br/>
            //                     • Referenced API calls to retrieve message history, accessible chatrooms, and sending new messages.
            //                 </div>
            //             </div>
            //             <div className="resume-box-item">
            //                 <div className="resume-box-header">
            //                     Marketplace Clone
            //                 </div>
            //                 <div className="resume-box-info">
            //                     Node, React, Express, PostgreSQL
            //                 </div>
            //                 <div className="resume-box-summary">
            //                     • Created a mobile interface for a mock marketplace that allows users to sign in to post and view listings.
            //                     • Designed with React and MaterialUI for a user-friendly interface.<br/>
            //                     • Fetches all listings with RESTful API using Node.js and Express.<br/>
            //                     • Sorted listings by category/subcategory and made them searchable by those filters.
            //                 </div>
            //             </div>
            //             <div className="resume-box-item">
            //                 <div className="resume-box-header">
            //                     Daily Mandarin Bot
            //                 </div>
            //                 <div className="resume-box-info">
            //                     Python, Heroku, BeautifulSoup
            //                 </div>
            //                 <div className="resume-box-summary">
            //                     • Programmed a Twitter bot using Tweepy that tweets a Mandarin word as well as its English definition.<br/>
            //                     • Built to scrape a website using BeautifulSoup to retrieve daily word and definition.<br/>
            //                     • Hosted on Heroku and pinged on a regular basis to keep the bot up 24/7.
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        );
    // }
}

export default Resume;