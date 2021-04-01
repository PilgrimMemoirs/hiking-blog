import React from 'react';
import { graphql } from 'gatsby';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import styled from 'styled-components';
import socialsStyles from './socials.module.scss';

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Socials = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div className="socials">
      <h4>Follow On:</h4>
      <ul>
        <li><a href="https://www.instagram.com/pilgrimmemoirs/" target="_blank">Instagram</a></li>
        <li><a href="https://youtube.com/c/JamiePilgrimMemoirs" target="_blank">Youtube</a></li>
        <li><a href="https://www.twitter.com/pilgrimmemoirs/" target="_blank">Twitter</a></li>
        <li><a href="https://unsplash.com/@pilgrimmemoirs" target="_blank">Unsplash</a></li>
        <li><a href="https://society6.com/pilgrimmemoirs" target="_blank">Society 6</a></li>
      </ul>
    </div>
  );
};
