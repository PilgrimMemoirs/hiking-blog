import React from 'react';
import { Link, graphql } from "gatsby";
import { Layout } from '../components/Layout';

export default ({ data: { allMdx: { group }}}) => {

  const tags = {};

  group.forEach(tag => {
    if(tags[tag.totalCount]) {
      tags[tag.totalCount].push(tag.fieldValue);
    } else {
      tags[tag.totalCount] = [tag.fieldValue];
    }
  })

  const tagOrder = Object.keys(tags).sort( (a, b) => { return b - a});


  return (
    <Layout>
      <div>
        <h1>Posts</h1>

        <div className="categories">
          <ul>
            <li><Link to="/tags/Hike/">Hikes</Link></li>
            <li><Link to="/tags/Backpacking/">Backpacking</Link></li>
            <li><Link to="/tags/Road%20Trip/">Road Trips</Link></li>
          </ul>
        </div>
          {tagOrder.map(i => (
            <ul key={i}>
              {tags[i].map(k => (
                <li key={k}>
                  <Link to={`/tags/${k}/`}>
                    {k}
                  </Link>
                </li>
              ))}
            </ul>
          ))}
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
