import React from "react"


class BlogHeader extends React.Component {
  render() {
    const { img, title, desc } = this.props

    const styles = {
      backgrondSize: 'cover',
      background: `linear-gradient(#000, transparent), url(${img}) no-repeat center`
    }

    return (
      <div style={styles}><h1>Hello</h1></div>
    )
  }
}

export default BlogHeader
