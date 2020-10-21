import React from 'react';
import { graphql, PageProps } from 'gatsby';

import Layout from '../components/layout';
import { Post } from '../components';

type QueryData = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  mdx: {
    id: string;
    excerpt: string;
    body: string;
    frontmatter: {
      date: string;
      title: string;
      description: string;
    };
  };
};

type PageContextProps = {
  next: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  previous: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
};

const BlogPostTemplate: React.FC<PageProps<QueryData, PageContextProps>> = ({
  data,
  location,
  pageContext,
}) => {
  const post = data.mdx;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <Post next={next} post={post} previous={previous} />
    </Layout>
  );
};

export default BlogPostTemplate;

export const query = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
