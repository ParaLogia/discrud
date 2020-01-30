import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ loggedIn }) => {
  const appLink = loggedIn ? (
    <Link to="/channels/@me" className="button">
      Open
    </Link>
  ) : (
    <Link to="/login" className="button">
      Login
    </Link>
  )
  return (
    <div className="splash">
      <nav className="splash-nav">
        <ul>
          <Link to="/">
            <div className="logo-container">
              <svg viewBox="0 0 33 36" className="splash-logo">
                <ellipse cx="19.6" cy="17.1" rx="2" ry="1.585" />
                <ellipse cx="12.8" cy="17.1" rx="2" ry="1.585" />
                <path d="M 28.5 0 L 3.8 0 C 1.735 -0.012 0.043 1.635 0 3.7 L 0 28 C 0.007 30.08 1.721 31.748 3.8 31.7 L 24.8 31.7 L 23.8 28.4 L 26.2 30.5 L 28.4 32.5 L 32.4 35.9 L 32.4 3.7 C 32.275 1.633 30.571 0.016 28.5 0 Z M 18.051 9.507 C 19.377 9.507 19.825 9.468 19.054 8.697 L 19.249 8.5 C 21.14 8.568 23.011 9.233 24.5 10.4 C 26.21 13.64 28.817 23.849 21.155 23.696 C 21.155 23.696 20.553 22.798 20.053 22.098 C 21.358 21.789 21.82 20.821 21.101 21.15 C 20.231 21.508 19.625 21.626 18.7 21.8 C 17.11 22.051 15.49 22.051 13.9 21.8 C 12.973 21.636 12.067 21.367 11.2 21 C 10.8 20.8 10.931 21.773 12.2 22.1 C 11.6 22.8 11 23.6 11 23.6 C 3.591 23.6 6.39 13.64 8.1 10.4 C 9.589 9.233 11.409 8.568 13.3 8.5 L 13.5 8.7 C 13.136 9.064 12.7 9.481 14.242 9.481" />
              </svg>

              <svg viewBox="0 0 98 36" className="splash-logo-text">
                <path d="M 13.2 7.804 L 7.1 7.804 L 7.1 14.604 L 11.2 18.204 L 11.2 11.604 L 13.4 11.604 C 14.8 11.604 15.453 11.974 15.453 12.974 L 15.5 18.304 C 15.5 19.304 14.9 20.104 13.4 20.104 L 7.1 20.104 L 7.1 23.904 L 13.2 23.904 C 16.5 23.904 19.6 22.304 19.6 18.604 L 19.6 13.204 C 19.6 9.404 16.5 7.804 13.2 7.804 Z M 45.4 18.604 L 45.4 13.004 C 45.4 11.004 49.1 10.504 50.2 12.504 L 53.6 11.204 C 52.62 8.888 50.313 7.417 47.8 7.504 C 44.5 7.504 41.3 9.404 41.3 13.004 L 41.3 18.604 C 41.3 22.304 44.5 24.104 47.8 24.104 C 50.287 24.109 52.567 22.718 53.7 20.504 L 50 18.904 C 49.1 21.104 45.4 20.604 45.4 18.604 Z M 34.2 13.804 C 32.9 13.504 32.1 13.104 32 12.304 C 32.1 10.404 35 10.404 36.7 12.204 L 39.4 10.204 C 38.048 8.502 35.972 7.538 33.8 7.604 C 30.8 7.604 27.9 9.304 27.9 12.404 C 27.9 15.504 30.3 17.104 33 17.504 C 34.3 17.704 35.8 18.204 35.8 19.104 C 35.7 20.804 32.1 20.704 30.4 18.804 L 27.8 21.204 C 29.127 22.973 31.189 24.041 33.4 24.104 C 36.4 24.104 39.7 22.404 39.9 19.304 C 40 15.304 37.1 14.304 34.2 13.804 Z M 21.8 23.904 L 26 23.904 L 26 7.804 L 21.9 7.804 L 21.9 23.904 L 21.8 23.904 Z M 91.6 7.804 L 85.5 7.804 L 85.5 14.604 L 89.6 18.204 L 89.6 11.604 L 91.8 11.604 C 93.2 11.604 93.9 12.304 93.9 13.304 L 93.9 18.304 C 93.9 19.304 93.3 20.104 91.8 20.104 L 85.5 20.104 L 85.5 23.904 L 91.6 23.904 C 94.9 23.904 98 22.304 98 18.604 L 98 13.204 C 98 9.404 94.9 7.804 91.6 7.804 Z M 69.662 8.018 L 69.709 18.625 C 69.709 22.325 73.109 24.125 76.509 24.125 C 79.909 24.125 83.309 22.325 83.309 18.625 L 83.309 8.018 L 69.662 8.018 Z M 79.209 8.018 L 79.209 18.498 C 79.209 19.698 77.909 20.298 76.609 20.298 C 75.309 20.298 73.886 19.721 73.886 18.521 L 73.886 8.018 L 79.209 8.018 Z M 67.842 13.123 C 67.742 9.323 65.142 7.823 61.742 7.823 L 55.142 7.823 L 55.142 23.923 L 59.342 23.923 L 59.342 18.823 L 60.042 18.823 L 63.842 23.923 L 69.042 23.923 L 64.542 18.423 C 66.642 17.823 67.842 16.123 67.842 13.123 Z M 61.842 15.323 L 59.442 15.323 L 59.442 11.623 L 61.842 11.623 C 63.266 11.542 64.244 13.033 63.602 14.307 C 63.27 14.966 62.579 15.365 61.842 15.323 Z" />
              </svg>
            </div>
          </Link>
          <li>
            <Link to="/">Download</Link>
          </li>
          <li>
            <Link to="/">Nitro</Link>
          </li>
          <li>
            <Link to="/">Jobs</Link>
          </li>
          <li>
            <Link to="/">Developers <i className="fas fa-angle-down"></i></Link>
          </li>
          <li>
            <Link to="/">Community <i className="fas fa-angle-down"></i></Link>
          </li>
          <li>
            <Link to="/">Support <i className="fas fa-angle-down"></i></Link>
          </li>
        </ul>
        <ul>
          <li>
            {appLink}
          </li>
        </ul>
      </nav>
      <section className="splash-content">
        <h1>It&apos;s time to ditch Skype and Teamspeak.</h1>
        <p>
          All-in-one voice and text chat for gamers that&apos;s free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.
        </p>
        <div className="splash-buttons-container">
          <div className="splash-button-container">
            <Link to="/register" className="download-button">
              Register for an account
            </Link>
          </div>
          <div className="splash-button-container">
            <Link to={loggedIn ? "/channels/@me" : "/login"} className="open-app-button">
              Open Discrud in your browser
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Splash;