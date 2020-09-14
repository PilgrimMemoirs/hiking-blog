import React from 'react';
import { Link } from 'gatsby';

export const Header = ({ siteTitle, siteDescription }) => (
  <header>
    <Link to="/">
      <h1>{ siteTitle }</h1>
    </Link>
    <p>{ siteDescription }</p>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/tags">Posts</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </header>
);
