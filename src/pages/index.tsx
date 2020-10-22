import React from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Post } from '../components';

import { PostData } from '../types';

type QueryData = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  allMdx: {
    nodes: PostData[];
  };
};

const BlogIndex: React.FC<PageProps> = ({ location }) => {
  const data: QueryData = useStaticQuery(
    graphql`
      query {
        allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
          nodes {
            body
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
            }
            id
          }
        }
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.nodes;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      {posts.map((post) => (
        <Post key={post.id} post={post} shouldLinkifyTitle />
      ))}
    </Layout>
  );
};

export default BlogIndex;
