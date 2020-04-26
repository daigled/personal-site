import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './Header.scss'



export default function Header(props) {

    const { routes, isMobile } = props
    const [ menuVisible, setMenuVisible ] = useState(false);

    const toggleMenuVisible = () => setMenuVisible(!menuVisible)

    return (
        <header id="site-header">
            <div className="container">
                <NavLink to="/"><img className="logo" src="https://placehold.it/50x50"/></NavLink>
                <nav id="primary-navigation" className={ isMobile ? menuVisible ? "visible" : "" : "visible" }>
                    <ul>
                    {routes.map(route => (
                        <li><NavLink
                            key={route.path}
                            to={route.path}
                            onClick={e => isMobile ? toggleMenuVisible() : console.log()}
                            activeClassName="active"
                            exact                                           
                        >
                            {route.name}
                        </NavLink></li>
                        ))}
                    </ul>
                    <span className="menu-toggle" onClick={e => toggleMenuVisible()}><FontAwesomeIcon icon={faTimes} /></span>
                </nav>
                <span className="menu-toggle" onClick={e => toggleMenuVisible()}><FontAwesomeIcon icon={faBars} /></span>
            </div>
        </header>
    )
}