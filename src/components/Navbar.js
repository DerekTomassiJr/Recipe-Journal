import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';
import CloseIcon from '@mui/icons-material/Close';
import { useRef } from 'react';


function Navbar() {
  const navRef = useRef();

  //whenever the reorder icon is clicked shows the navbar animation
  const showNavbar = () => {
    navRef.current.classList.toggle("animation");
  }

  //added function so whenever link is clicked it closes animation
  const closeNavbar = () => {
    navRef.current.classList.remove("animation");
  }

  /*standard nav setup where header acts as container*/
  return (
    <header>
      <h3><a href='/'>LOGO</a></h3>
      <nav ref={navRef}>
        <Link to='/' onClick={closeNavbar}>Home</Link>
        <Link to='/features' onClick={closeNavbar}>Features</Link>
        <Link to='/recipes' onClick={closeNavbar}>Recipes</Link>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}>
          <CloseIcon />
        </button>
      </nav>
      <button className='nav-btn' onClick={showNavbar}>
        <ReorderIcon />
      </button>
    </header>
  )
}

export default Navbar;

