import '../styles/layout.scss';
import React from "react";
import Link from "gatsby-link";

const ListLink = props =>
  <li>
    <Link to={props.to}>
      {props.children}
    </Link>
  </li>

export default ({ children }) =>
    <div className="layout">
        <header>   
            <Link to="/">
                <h3>Bright City Church</h3>
            </Link>
            <ul>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
          
            </header>
        {children()}
        <footer>
            <div>
                <p>Coded by Vincent Williams</p>
            </div>
        </footer>
    </div>

