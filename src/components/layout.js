import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import styled from "styled-components"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"



class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props

    return (
      <Wrapper>
        <Header title={title}></Header>
        <div>
          <main>{children}</main>
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
