import React from 'react'
import './CV.scss'

export default function CV() {
    return (
        <div id="CV" className="site-section">
            <h2 className="page-title">CV</h2>
            <div id="CV-container">
                <section id="experience">
                    <h2 className="section-header">Experience</h2>
                    <div className="subsection">
                        <h3 className="subsection-header">BBVA USA</h3>
                        <h4 className="subsection-subheader">Software Engineer</h4>
                        <div className="subsection-details">
                            <span className="location">Birmingham, AL</span>
                            <span className="date"><span className="start">Decemeber 2018</span> - <span className="end">Present</span></span>
                        </div>
                        <ul>
                            <li>Built and maintained a custom framework for test automation</li>
                            <li>Developed full stack, CI/CD integrated web applications for internal use. Application stack: Angular 8.x UI, Spring Boot API, MongoDB database</li>
                            <li>Directed frontend development team practices in order to facilitate smoother automated testing</li>
                            <li>Converted large applications to automation testing for regression tests and CI/CD pipelines for deployments</li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <h3 className="subsection-header">Confit Design</h3>
                        <h4 className="subsection-subheader">Frontend Developer</h4>
                        <div className="subsection-details">
                            <span className="location">Oxford, MS</span>
                            <span className="date"><span className="start">April 2017</span> - <span className="end">December 2018</span></span>
                        </div>
                        <ul>
                            <li>Developed custom WordPress websites which allowed clients to maintain their websites on their own upon contract completion</li>
                            <li>Wrote custom Shopify themes which could integrate with Wordpress to create e-commerce websites</li>
                            <li>Maintained servers and databases which contained client data</li>
                            <li>Created AngularJS and Angular 6.x applications to more easily offer higher quality frontends</li>
                        </ul>
                    </div>
                    <div className="subsection">
                        <h3 className="subsection-header">The University of Mississippi Department of Engineering</h3>
                        <h4 className="subsection-subheader">IT Technician</h4>
                        <div className="subsection-details">
                            <span className="location">Oxford, MS</span>
                            <span className="date"><span className="start">August 2016</span> - <span className="end">December 2016</span></span>
                        </div>
                        <ul>
                            <li>Created machine images and re-imaged machines when necessary</li>
                            <li>Repaired and restored faulty disk drives</li>
                            <li>Assisted faculty and staff with peripheral setup and troubleshooting machine issues</li>
                            <li>Assisted students with password resets and file recovery</li>
                        </ul>
                    </div>
                </section>
                <section>
                    <h2 className="section-header">Education</h2>
                    <div className="subsection">
                        <h3 className="subsection-header">The University of Mississippi</h3>
                        <h4 className="subsection-subheader">B.A. Computer Science; B.A. French</h4>
                        <div className="subsection-details">
                            <span className="location">Oxford, MS</span>
                            <span className="date"><span className="start">August 2012</span> - <span className="end">December 2016</span></span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
