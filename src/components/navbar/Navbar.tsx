import { RobotFilled } from '@components/icons';
import * as React from 'react';
import { useState } from 'react';

export function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  function showNavbarMenu() {
    setIsVisible(s => !s);
  }

  const activeClass = isVisible ? "is-active" : "";

  return (
    <nav className="navbar is-fixed-top" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="#">
          <span className="icon is-medium"><RobotFilled /></span>
          <p className="title">atopic.io</p>
        </a>

        <a role="button" onClick={showNavbarMenu} className={`navbar-burger ${activeClass}`} aria-label="menu" aria-expanded="false" data-target="navbar-content">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbar-content" className={`navbar-menu ${activeClass}`}>
        <div className="navbar-start">
          <a className="navbar-item">
            Dashboard
          </a>
        </div>

        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a className="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
