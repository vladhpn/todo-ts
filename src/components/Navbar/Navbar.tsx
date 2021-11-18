import React from "react"
import { Link } from "react-router-dom";

 const Navbar: React.FC = () => (

    <nav>
    <div className="nav-wrapper indigo px1">
      <a href="/" className="brand-logo">Logo</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to='/'> ToDo</Link>
          </li>
        <li>
        <Link to='/about'> About Us</Link>
          </li>
      </ul>
    </div>
  </nav>
)

export default Navbar