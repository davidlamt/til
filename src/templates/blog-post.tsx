import React from 'react';
import { graphql, PageProps } from 'gatsby';

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
  mdx: PostData;
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
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
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
      body
      excerpt(pruneLength: 160)
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      id
    }
  }
`;
