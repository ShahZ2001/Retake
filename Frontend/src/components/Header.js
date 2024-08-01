import React from 'react';
import { Link } from 'react-router-dom';
import '../components/Header.css';

export default function Header() {
  return (
    <header className="App-header">
      <h1 className="heading">
        <span className="first">Feed th</span>
        <span className="second">e Need</span>
      </h1>
      <nav className="App-nav">
        <Link className="nav-link" to={'/'}>
          Home |
        </Link>
        <Link className="nav-link" to={'/Donation'}>
          Donation |
        </Link>
        <Link className="nav-link" to={'/HungerMap'}>
          Hunger Impact Map |
        </Link>
        <Link className="nav-link" to={'/EducationResource'}>
          Educational Resources |
        </Link>
        <Link className="nav-link" to={'/ContactUs'}>
          Contact Us |
        </Link>
        <Link className="nav-link" to={'/Registration'}>
          Registration |
        </Link>
        <Link className="nav-link" to={'/Login'}>
          Login
        </Link>
        
        
      </nav>
    </header>
  );
}
