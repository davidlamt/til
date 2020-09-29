import React from 'react';
import { graphql, Link, PageProps } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

type QueryData = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
  markdownRemark: {
    id: string;
    excerpt: string;
    html: string;
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
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const { previous, next } = pageContext;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer></footer>
      </article>
      <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav>
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
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`;
