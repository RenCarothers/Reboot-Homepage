import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import React, { useEffect } from 'react';
import Play from './components/Play';
import About from './components/About';
import './Bootstrap.css'
import './App.css';
import logo from './images/logo.png';
import header from './images/header.png';
import repobtn from './images/repo.png';
import playbtn from './images/play.png';
import aboutbtn from './images/about.png';

function App() {
  useEffect(() => {
    document.title = "Reboot: Online 2D Visual Novel Game"
 }, []);

  return (
    <Router>
      <div className="App p-3 mb-2 container">

      {/* <!-- Navigation --> */}
      <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#"><img src={logo} className="w-50" alt="logo" /></a>

          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="/play"><img src={playbtn} className="w-75 button-switch-play" alt="play button" /></a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="/"><img src={aboutbtn} className="w-75 button-switch-about" alt="about page link" /></a>
              </li>
              <li className="nav-item">
              <a className="nav-link" href="#"><img src={repobtn} className="w-75 button-switch-repo" alt="repo link" /></a>
              </li>
            </ul>
          </div>

        </div>
      </nav>

      {/* <!-- Full Page Image Header with Vertically Centered Content --> */}
      {/* <header className="masthead" /> */}

      <div className="container header"><img src={header} className="" alt="header image - locker filled hallway full of children" /></div>

      <div className="container d-flex justify-content-center spaced-content">
          <div className="spaced-content">
            <div className="bubble spaced-out">
              <h3>Version 1.3</h3>
              <ul className="text-left">
                <li>Adds Reboot Buttons</li>
                <li>Adds Credits</li>
              </ul>  
            </div>
            <div className="bubble:after" />
          </div>
          <div className="spaced-content">
            <div className="bubble">
              <h3>Version 1.2</h3>
              <ul className="text-left spaced-content">
                <li>Fixes Battle Sprites</li>
                <li>Loops Battle Music</li>
                <li>Adjusts Cutoff Dialog</li>
              </ul>  
            </div>
            <div className="bubble:after" />
          </div>
          <div className="spaced-content">
            <div className="bubble">
              <h3>Version 1.1</h3>
              <ul className="text-left spaced-content">
                <li>Adds Battle</li>
                <li>Adds Hidden Pictures</li>
                <li>Adds Journal Photos</li>
              </ul>  
            </div>
            <div className="bubble:after" />
          </div>
          <div className="spaced-content">
            <div className="bubble">
              <h3>Version 1.0</h3>
              <ul className="text-left spaced-content">
                <li>Fullscreen Mode</li>
                <li>3 Endings</li>
              </ul>  
            </div>
            <div className="bubble:after" />
          </div>
      </div>

      <section className="App-main">
          <Switch>
          <Route exact path="/">
            <About />
          </Route> 
          <Route path="/play">
            <Play />
          </Route>
        </Switch>
        </section>
    
      </div>
    </Router>
  );
}

export default App;
