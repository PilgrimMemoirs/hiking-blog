import React from 'react';
import { Link } from 'gatsby';

import './footer.scss'

export const Footer = () => (
  <footer className="site-footer">
    <h3><Link to="/">Memoirs of a Pilgrim</Link></h3>
    <p>&#169; 2020 Jamie Pilgrim</p>
    <p>Content may not be used without permission.</p>
  </footer>
);
