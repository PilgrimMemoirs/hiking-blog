import React from 'react';
import { Link, graphql } from "gatsby";
import { Layout } from '../components/Layout';
import aboutStyles from '../components/about.module.scss'
import image from '../../content/imgs/jamie-pilgrim-2.jpg'

export default () => (
  <Layout>
    <img src={image} className={aboutStyles.aboutImg}/>
    <div className={aboutStyles.bodyText}>
      <h2> About </h2>
      <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <p>
      Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </div>
    <hr />
    <div className={aboutStyles.socials}>
      <h4>Follow On:</h4>
      <ul>
        <li><a href="https://www.instagram.com/pilgrimmemoirs/" target="_blank">Instagram</a></li>
        <li><a href="https://www.twitter.com/pilgrimmemoirs/" target="_blank">Twitter</a></li>
        <li><a href="https://unsplash.com/@pilgrimmemoirs" target="_blank">Unsplash</a></li>
        <li><a href="https://society6.com/pilgrimmemoirs" target="_blank">Society 6</a></li>
      </ul>
    </div>
  </Layout>
)
