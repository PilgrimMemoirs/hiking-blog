import React from "react"
import { Link } from "gatsby"


class Header extends React.Component {
  render() {
    const rootPath = `${__PATH_PREFIX__}/`
    const blogPath = `${__PATH_PREFIX__}/blog/`
    const title = this.props.title
    const location = this.props.location
    
    let header

    if (location.pathname === rootPath || location.pathname === blogPath) {
      header = (
        <h1
          style={{
            marginTop: 0,
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
      <header>{header}</header>
    )
  }
}

export default Header
