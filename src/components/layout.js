import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import "./layout.css"

import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
            maxWidth: rhythm(10),
            position: 'fixed',
            top: 0,
            left: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={location.pathname === blogPath ? `/` : `/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
            maxWidth: rhythm(3),
            margin: '1rem',
            position: 'fixed',
            top: 0,
            left: 0
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `inherit`,
            }}
            to={`/blog/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <Wrapper>
        <header>{header}</header>
        <div
          style={{
            marginLeft: `auto`,
            maxWidth: rhythm(40),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main
            style={{
              maxWidth: rhythm(25),
            }}
          >{children}</main>
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
