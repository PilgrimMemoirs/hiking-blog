import React from 'react';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { useSiteMetadata } from '../../hooks/useSiteMetadata';
import styled from 'styled-components';
import layoutStyles from './layout.module.scss'

const AppStyles = styled.main`
  width: 800px;
  margin: 0 auto;
`;

export const Layout = ({ children }) => {
  const { title, description } = useSiteMetadata();

  return (
    <div className="container">
      <Header siteTitle={ title } siteDescription={ description } />
      <AppStyles>
        { children }
      </AppStyles>
      <Footer/>
    </div>
  );
};
