import React from 'react';
import styled from 'styled-components';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import { Header } from './Header';
import layoutStyles form './layout.module.scss'

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <AppStyles>
      <Header siteTitle={ title } siteDescription={ description } />
      { children }
    </AppStyles>
  );
};
