import React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from 'react-seo-component';
import { Layout } from '../components/Layout/Layout';
import Img from "gatsby-image"

export default ({ data, pageContext }) => {
  const { tag } = pageContext
  const { edges, totalCount } = data.allMdx;
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? "" : "s"
  } tagged with "${tag}"`
  return (
    <Layout>
      <h1>{tagHeader}</h1>
      <ul>
        {edges.map(({ node }) => {
          const { slug } = node.fields
          const { title } = node.frontmatter
          return (
            <li key={slug}>
              <Link to={slug}>{title}</Link>
            </li>
          )
        })}
      </ul>
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}


export const query = graphql`
query($tag: String) {
  allMdx(
    limit: 2000
    sort: { fields: [frontmatter___date], order: DESC }
    filter: { frontmatter: { tags: { in: [$tag] } } }
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
}
`
