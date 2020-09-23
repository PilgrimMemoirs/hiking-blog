import { Link } from 'gatsby';
import Img from 'gatsby-image';
import React from 'react';
import styled from 'styled-components';
import SEO from 'react-seo-component';
import { Layout } from '../components/Layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata'
import '../components/index.scss'

const Image = styled(Img)`
  border-radius: 5px;
`;

export default ({ data }) => {
  const {
    description,
    title,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata()
  return (
    <Layout>
      <SEO
        title={title}
        description={description}
        image={`${siteUrl}${image}`}
        pathname={siteUrl}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
      />
      <section className="intro">
        <h2>Hiking, Backpacking, & Traveling around the Pacific Northwest & Beyond</h2>
        <p>Follow along on my adventures of solo-hiking as I take my two pups to explore all that the PNW has to offer.</p>
      </section>
      <hr />
      <h2>Get Cozy & Read About My Latest Adventures</h2>
      <section className="posts">
        {data.allMdx.nodes.map(
          ({ id, excerpt, frontmatter, fields }) => (
            <div key={id} className="post">
              <Link to={fields.slug}>
                {!!frontmatter.cover ? (
                  <Image
                    sizes={frontmatter.cover.childImageSharp.sizes}
                  />
                ) : null}
                <p className="category">{frontmatter.category}</p>
                <h3>{frontmatter.title}</h3>
                <date>{frontmatter.date}</date>
                <p className="excerpt">{excerpt}</p>
              </Link>
            </div>
          )
        )}
      </section>
    </Layout>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 150)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          category
          cover {
            publicURL
            childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#565656" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }
          }
        }
        fields {
          slug
        }
      }
    }
  }
`


export const query = graphql`
  query {
    file(relativePath: { eq: "blog/avatars/kyle-mathews.jpeg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
