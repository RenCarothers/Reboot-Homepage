import { HashRouter as Router, Route, Switch } from "react-router-dom";
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
import bioimg from './images/bio.png';

function App() {
  useEffect(() => {
    document.title = "Reboot: Online 2D Visual Novel Game"
 }, []);

  return (
    <Router hashtype={'slash'} basename={'Reboot-Homepage/'}>
      <div className="App p-3 mb-2 container">

        {/* <!-- Navigation --> */}
        <nav className="navbar navbar-expand-lg navbar-custom fixed-top">
          <div className="container">
            <a className="navbar-brand" href="/Reboot-Homepage"><img src={logo} className="w-50" alt="logo" /></a>

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="/Reboot-Homepage/play"><img src={playbtn} className="w-75 button-switch-play" alt="play button" /></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/Reboot-Homepage"><img src={aboutbtn} className="w-75 button-switch-about" alt="about page link" /></a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="https://github.com/RenCarothers/Reboot" target="new"><img src={repobtn} className="w-75 button-switch-repo" alt="repo link" /></a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      {/* <!-- Header --> */}
      <div className="container header"><img src={header} className="" alt="header image - locker filled hallway full of children" /></div>

      {/* <!-- Updates --> */}
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

      {/* <!-- Main Content --> */}
        <div class="container spaced-content">
          <div class="row">
            <div class="col-sm left-col spaced-content">
                  <Switch>
                  <Route exact path="/Reboot-Homepage">
                    <About />
                  </Route> 
                  <Route path="/Reboot-Homepage/play">
                    <Play />
                  </Route>
                </Switch>                 
            </div>
            <div class="col-sm middle-col" />
            <div class="col-sm right-col spaced-content">
                <img src={bioimg} className="wrap-img w-50" alt="bio headpic of game character, Rockett" />
            <div className="wrap-text">
                Reboot is in-browser interactive visual novel game.  You play young student Rockett on their first day at a new middle school.  
                You encounter a tense bullying situation and must decide how to handle it.  Do you put the bully in her place but risk harming your new friendship 
                or do you try to figure out how to de-escalate the situation in hopes of staying on your pal's good side?  Careful-- your decision will affect the outcome of the game.
                <br /><br />Reboot is a school project by Ren Carothers and not intended for distribution.  Reboot uses characters and themes from a 90s game franchise by Purple Moon Media.
            </div>
            </div>
          </div>
          <div className="container spaced-out">
              <p>Note: Firefox is reccommended for best speeds! Sorry, Reboot is not yet compatible for mobile.</p>
          </div>
        </div>

      </div>
    </Router>
  );
}

export default App;
