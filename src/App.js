import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import logo from './logo.svg';
import './App.scss';

import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

import Home from './components/Home'
import About from './components/About'
import Resume from './components/Resume'


const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Resume', Component: Resume },
]

// Hook
const useWindowSize = () => {
  const isClient = typeof window === 'object';

  function getSize() {
    return {
      width: isClient ? window.innerWidth : undefined,
      height: isClient ? window.innerHeight : undefined
    };
  }

  const [windowSize, setWindowSize] = useState(getSize);

  useEffect(() => {
    if (!isClient) {
      return false;
    }
    
    function handleResize() {
      setWindowSize(getSize());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []); // Empty array ensures that effect is only run on mount and unmount

  return windowSize;
}

function App() {
  const [ isLoaded, setIsLoaded ] = useState(false)
  const size = useWindowSize()
  const isMobile = size.width <= 797


  return (
    <Router>
      <div className={ isLoaded ? "App" : "App loading"}>
        <Header isMobile={isMobile} routes={routes} />

        <main>
          <div className="container">
            <div id="primary-layout">
            {routes.map(({ path, Component }) => (
              <Route key={path} exact path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames="page"
                    unmountOnExit
                  >
                    <div className="page">
                      <Component />
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ))}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
