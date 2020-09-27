import React from 'react';
import { Link } from 'gatsby';
import headerStyles from './header.module.scss'

export const Header = ({ siteTitle, siteDescription }) => (
  <header >
    <Link to="/">
      <h1>{ siteTitle }</h1>
    </Link>
    <ul>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/tags">Posts</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </header>
);
