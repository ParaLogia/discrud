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
          <li>
            <Link to="/">Discrud</Link>
          </li>
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
            <Link to="/">Developers</Link>
          </li>
          <li>
            <Link to="/">Community</Link>
          </li>
          <li>
            <Link to="/">Support</Link>
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
            <button className="download-button">
              Download for your OS
            </button>
          </div>
          <div className="splash-button-container">
            <button className="open-app-button">
              Open Discrud in your browser
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Splash;