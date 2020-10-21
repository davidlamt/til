import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';

import SEO from '../components/seo';

const Title = styled.h1`
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
`;

const Date = styled.p`
  font-size: var(--fontSize-2);
  font-family: var(--font-heading);
`;

const OtherPostsList = styled.ul`
  margin: var(--spacing-0);
`;

type PostProps = {
  next?: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  post: {
    id: string;
    excerpt: string;
    body: string;
    frontmatter: {
      date: string;
      title: string;
      description: string;
    };
  };
  previous?: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
};

const Post: React.FC<PostProps> = ({ next, post, previous }) => {
  return (
    <>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <div>
          <Title itemProp="headline">{post.frontmatter.title}</Title>
          <Date>{post.frontmatter.date}</Date>
        </div>
        <MDXRenderer>{post.body}</MDXRenderer>
        <hr />
        <footer></footer>
      </article>
      <nav>
        <OtherPostsList
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
        </OtherPostsList>
      </nav>
    </>
  );
};

export default Post;
