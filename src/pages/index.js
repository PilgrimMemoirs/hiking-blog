import React from 'react';
import Img from 'gatsby-image';
import { Link } from 'gatsby';

import styled from 'styled-components';
import SEO from 'react-seo-component';

import { useSiteMetadata } from '../hooks/useSiteMetadata'
import { Layout } from '../components/Layout/Layout';
import '../styles/index.scss'

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
        <p>
          Follow along on my adventures where I often solo-hike with my two pups around Washington state.
        </p>
      </section>
      <hr />
      <h2>Recent Posts</h2>
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
                <p className="description">{frontmatter.description}</p>
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
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
          category
          description
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
