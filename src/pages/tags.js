import React from 'react';
import { Link, graphql } from "gatsby";

export default ({
  data: { allMdx: { group }, },
}) => {
  return (
    <div>
      <div>
        <h1>Tags</h1>
        <ul>
          {group.map(tag => (
            <li key={tag.fieldValue}>
              <Link to={`/tags/${tag.fieldValue}/`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;
