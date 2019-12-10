import React from 'react';
import { Link } from 'react-router-dom';

const Splash = ({ loggedIn }) => {
  const appLink = loggedIn ? (
    <Link to="/channels/@me">Open</Link>
  ) : (
    <Link to="/login">Login</Link>
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
    </div>
  )
}

export default Splash;