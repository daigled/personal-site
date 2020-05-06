import React from 'react'
import './Thanks.scss'

export default function Thanks() {
    return (
        <div id="thanks">
            <h2 className="page-title">Special Thanks</h2>
            <h3 className="page-subtitle">This site and its author brought to you by the following</h3>
            <ul>
                <li>
                    <a href="https://confitdesign.com/" target="_blank">Confit Design</a>
                </li>
                <li>
                    <a href="https://css-tricks.com/" target="_blank">CSS-Tricks</a>
                </li>
                <li>
                    <a href="https://devdocs.io/" target="_blank">DevDocs</a>
                </li>
                <li>
                    <a href="https://reactjs.org/" target="_blank">React</a>
                </li>           
                <li>
                    <a href="https://stackoverflow.com/search?q=react" target="_blank">StackOverflow</a>
                </li>                             
                <li>
                    <a href="https://www.cs.olemiss.edu/" target="_blank">University of Mississippi Department of Computer and Information Science</a>
                </li>
            </ul>
        </div>
    )
}
