import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import '../styles/Navbar.css';
import journalLogo from "../assets/JournalLogo.png";
import settingsIcon from "../assets/settings_icon.png";
import profilePicture from "../assets/profile_picture.JPG";

export default function Navbar() {
  return ( 
  <nav className="nav">
      <Link to="/" className="site-title"><img id="site_logo" src={ journalLogo } alt="Site_Logo"/></Link>
      <ul>
          <CustomLink to="/profile"><img id="profile_picture" src={ profilePicture } alt="Profile_Picture"/>Profile</CustomLink>
          <CustomLink to="/recipes">Recipes</CustomLink>
          <CustomLink to="/finder">Finder</CustomLink>
          <CustomLink to="/ingredients">Ingredients</CustomLink>
          <CustomLink to="/settings"><img id="settings_icon" src={ settingsIcon } alt="Settings_Icon" /></CustomLink>
      </ul>
  </nav>
  )
}

function CustomLink({ to, children, ...props }) {    
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
      <li className={isActive ? "active" : ""}>
          <Link to={to} {...props}>
              {children}
          </Link>
      </li>
  )
}

