import React from 'react';
import { Link } from 'gatsby';
import './footer.scss'

export const Footer = () => (
  <footer>
    <h3> Test </h3>
    <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/tags">Posts</Link></li>
      <li><Link to="/contact">Contact</Link></li>
    </ul>
  </footer>
);
