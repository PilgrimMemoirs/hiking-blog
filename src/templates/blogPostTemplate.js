import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import React from 'react';
import SEO from 'react-seo-component';
import { Layout } from '../components/Layout';
import { useSiteMetadata } from '../hooks/useSiteMetadata';
import Img from "gatsby-image"
import postStyles from '../components/post.module.scss'
import Dump from '../components/Dump.js'

export default ({ data, pageContext }) => {
  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();
  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title, date, cover, category, description } = frontmatter;
  const { previous, next } = pageContext;
  return (
    <Layout>
      <SEO
        title={title}
        description={excerpt}
        image={
          cover === null
            ? `${siteUrl}${image}`
            : `${siteUrl}${cover.publicURL}`
        }
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />
      <article>
        <header className={postStyles.postHeader}>
          <h4>
            <Link to={"/tags/" + category}>{category}</Link>
          </h4>
          <h2>{title}</h2>
          <p className={postStyles.date}>{date}</p>
          <p>{frontmatter.description}</p>
        </header>
        <Img
          className={postStyles.cover}
          sizes={cover.childImageSharp.sizes}
          alt="cover photo"
        />

        <MDXRenderer>{body}</MDXRenderer>

        <footer>
          <hr />
          <h3>Read Next</h3>
          {previous === false ? null : (
            <>
              {previous && (
                <Link to={previous.fields.slug} className={postStyles.prev}>
                  <p className={postStyles.category}>{previous.frontmatter.category}</p>
                  <img src={previous.frontmatter.cover.childImageSharp.fluid.srcWebp} />
                  <p className={postStyles.title}>{previous.frontmatter.title}</p>
                </Link>
              )}
            </>
          )}
          {next === false ? null : (
            <>
              {next && (
                <Link to={next.fields.slug}>
                  <p className={postStyles.category}>{next.frontmatter.category}</p>
                  <img src={next.frontmatter.cover.childImageSharp.fluid.srcWebp} />
                  <p className={postStyles.title}>{next.frontmatter.title}</p>
                </Link>
              )}
            </>
          )}
        </footer>
      </article>
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "MMMM Do YYYY")
        description
        category
        cover {
          publicURL
          childImageSharp {
            sizes(traceSVG: { color: "#fff" }) {
              ...GatsbyImageSharpSizes_tracedSVG
            }
          }
        }
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
