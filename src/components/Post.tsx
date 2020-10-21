import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';

import { PostData } from '../types';

const Title = styled.h1`
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
`;

const TitleLink = styled(Link)`
  text-decoration: none;

  h1 {
    color: var(--color-primary);
  }
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
  post: PostData;
  previous?: {
    fields: {
      slug: string;
    };
    frontmatter: {
      title: string;
    };
  };
  shouldLinkifyTitle?: boolean;
};

const Post: React.FC<PostProps> = ({
  next,
  post,
  previous,
  shouldLinkifyTitle = false,
}) => {
  let titleFragment;
  if (shouldLinkifyTitle) {
    titleFragment = (
      <TitleLink to={post.fields.slug} itemProp="url">
        <Title itemProp="headline">{post.frontmatter.title}</Title>
      </TitleLink>
    );
  } else {
    titleFragment = <Title itemProp="headline">{post.frontmatter.title}</Title>;
  }

  return (
    <>
      <article itemScope itemType="http://schema.org/Article">
        <div>
          {titleFragment}
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
