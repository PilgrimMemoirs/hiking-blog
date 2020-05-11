import React from "react"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"

import Header from "./header"
import BlogHeader from "./blog-header"

import { rhythm, scale } from "../utils/typography"



class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const shortcodes = { BlogHeader }
    
    return (
      <Wrapper>
        <Header
          title={title}
          location={location}
        ></Header>
        <div>
          <main><MDXProvider components={shortcodes}>{children}</MDXProvider></main>
        </div>
        <Footer>
          © {new Date().getFullYear()}
        </Footer>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
