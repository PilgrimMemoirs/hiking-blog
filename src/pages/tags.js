import React from 'react';
import { Link, graphql } from "gatsby";
import { Layout } from '../components/Layout/Layout';
import '../styles/tags.scss';

export default ({ data: { allMdx: { group }}}) => {

  return (
    <Layout>
      <div className="tags-page">
        <h1>Posts</h1>

        <h2>Categories</h2>
        <div className="categories">
          <ul>
            <li><Link to="/tags/Hike/">Hikes</Link></li>
            <li><Link to="/tags/Backpacking/">Backpacking</Link></li>
            <li><Link to="/tags/Road%20Trip/">Road Trips</Link></li>
          </ul>
        </div>
        <div className="tags">
          <h2>Tags</h2>
            <ul>
            {group.map(function(a) {
              return (
                <li key={a.id}>
                  <Link to={`/tags/${a['fieldValue']}`}>
                    {a["fieldValue"]} ({a["totalCount"]})
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query {
    allMdx(limit: 20) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
