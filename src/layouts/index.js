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
            <div className="logo">   
                <Link to="/">
                    <h3>Bright City Church</h3>
                </Link>
            </div>
            <ul>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/leaders/">Leaders</ListLink>
                <ListLink to="/values/">Core Values</ListLink>
                <ListLink to="/beliefs/">What We Believe</ListLink>
                <ListLink to="/give/">Give</ListLink>
                <ListLink to="/contact/">Contact Us</ListLink>
            </ul>
        </header>
        <article className="content">
            {children()}
        </article>
        <footer>
            <div>
                <p>Coded by Vincent Williams</p>
            </div>
        </footer>
</div>