import React , {useEffect} from 'react'
// import './Navbar.css';
import { NavLink } from 'react-router-dom';
import $ from 'jquery';

const Navbar = (props) => {

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
    contactSelected,
    setContactSelected
  } = props;

  return (
  <nav id='mainNavbar' className="navbar navbar-expand-lg navbar-mainbg py-0">
    
      <h2 className="navbar-brand navbar-logo my-0" to="/" exact>
      <i className="fas fa-code"></i> JN
      </h2>
    
    
      <button 
        className="navbar-toggler"

        type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <i className="fas fa-bars text-white"></i>
      </button>
 
      <div 
        className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact activeStyle={{color:'#3fff6c'}}>
                <i 
                className="fas fa-home">
                </i>
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about" exact activeStyle={{color:'#3fff6c'}}>
                ABOUT
              </NavLink> 
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" exact activeStyle={{color:'#3fff6c'}}>
                PORTFOLIO
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" exact activeStyle={{color:'#3fff6c'}}>
               CONTACT
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resume" exact activeStyle={{color:'#3fff6c'}}>
              RESUME
              </NavLink>
            </li>
        </ul>
      </div>
  </nav>
  )
}
export default Navbar;