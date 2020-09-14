import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import layoutStyles from './layout.module.scss'

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div>
      <Header siteTitle={ title } siteDescription={ description } />
      <AppStyles>
        { children }
      </AppStyles>
    </div>
  );
};
