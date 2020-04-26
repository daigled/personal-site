import React, { useState, useEffect } from 'react'
import './About.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHtml5,
    faCss3,
    faJava,
    faAndroid
 } from '@fortawesome/free-brands-svg-icons'

 import { CSSTransition } from "react-transition-group";

export default function About() {

    const [ skillsFilter, setSkillsFilter ] = useState("all")   
    
    return (
        <div id="about" className="site-section">
            <h2 className="page-title">About</h2>
            <p className="intro">Professional full-stack application developer and DevOps engineer specializing in the architecture and quality assurance of modern frontend applications.</p> 

            <section>
                <h2 className="section-header">Skills</h2>
                <ul id="skills-filter">
                    <li className={ skillsFilter === "all" ? "active" : ""} id="all" onClick={e => setSkillsFilter(e.target.id)}>All</li>
                    <li className={ skillsFilter === "master" ? "active" : ""} id="master" onClick={e => setSkillsFilter(e.target.id)}>Master</li>
                    <li className={ skillsFilter === "knight" ? "active" : ""} id="knight" onClick={e => setSkillsFilter(e.target.id)}>Knight</li>
                    <li className={ skillsFilter === "padawan" ? "active" : ""} id="padawan" onClick={e => setSkillsFilter(e.target.id)}>Padawan</li>
                </ul>
                <div id="skills-grid">
                    <CSSTransition
                            in={skillsFilter === "all" || skillsFilter ==="master" }
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                        <FontAwesomeIcon size="3x" key="html-icon" icon={faHtml5} />
                    </CSSTransition>
                    <CSSTransition
                            in={skillsFilter === "all" || skillsFilter ==="master" }
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                        <FontAwesomeIcon size="3x" key="css-icon" icon={faCss3} />
                    </CSSTransition>
                    <CSSTransition
                            in={skillsFilter === "all" || skillsFilter ==="knight" }
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                        <FontAwesomeIcon size="3x" key="java-icon" icon={faJava} />
                    </CSSTransition>
                    <CSSTransition
                            in={skillsFilter === "all" || skillsFilter ==="padawan" }
                            timeout={300}
                            classNames="page"
                            unmountOnExit
                        >
                        <FontAwesomeIcon size="3x" key="android-icon" icon={faAndroid} />
                    </CSSTransition>
                </div>
            </section>
        </div>
    )
}
