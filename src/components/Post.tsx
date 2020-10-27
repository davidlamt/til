import React from 'react';
import { Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import styled from '@emotion/styled';

import { PostData } from '../types';

export enum PostContext {
  AllPosts,
  SinglePost,
}

const BASE_REPO_URL =
  'https://github.com/davidlamt/til/edit/master/content/tils';

const PostContainer = styled.div`
  background-color: hsla(0, 0%, 100%, 0.9);
  box-shadow: 0 30px 50px 0 rgba(1, 1, 1, 0.15);
  padding: var(--spacing-16) var(--spacing-20);

  &:not(:last-child) {
    margin-bottom: var(--spacing-16);
  }

  @media (max-width: 600px) {
    padding: var(--spacing-8);
  }
`;

const Title = styled.h1`
  margin: var(--spacing-0) var(--spacing-0) var(--spacing-4) var(--spacing-0);
`;

const TitleLink = styled(Link)`
  text-decoration: none;

  h1 {
    color: var(--color-primary);
  }
`;

const Metadata = styled.p`
  font-size: var(--fontSize-2);
  font-family: var(--font-heading);
`;

const OtherPostsList = styled.ul`
  margin: var(--spacing-0);
`;

type PostProps = {
  context?: PostContext;
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
};

const Post: React.FC<PostProps> = ({
  context = PostContext.SinglePost,
  next,
  post,
  previous,
}) => {
  const slug = post.fields.slug;
  const editUrl = `${BASE_REPO_URL}${slug}index.mdx`;

  let titleFragment;
  if (context === PostContext.AllPosts) {
    titleFragment = (
      <TitleLink to={slug} itemProp="url">
        <Title itemProp="headline">{post.frontmatter.title}</Title>
      </TitleLink>
    );
  } else {
    titleFragment = <Title itemProp="headline">{post.frontmatter.title}</Title>;
  }

  return (
    <PostContainer>
      <article itemScope itemType="http://schema.org/Article">
        <div>
          {titleFragment}
          <Metadata>
            {post.frontmatter.date} - {post.frontmatter.categories[0]}
          </Metadata>
        </div>
        <MDXRenderer>{post.body}</MDXRenderer>
        {context === PostContext.SinglePost && (
          <em>
            Want to improve this post? Feel free to{' '}
            <a href={editUrl} rel="noopener noreferrer">
              submit a pull request
            </a>
            !
          </em>
        )}
      </article>
      {(previous || next) && (
        <>
          <br />
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
      )}
    </PostContainer>
  );
};

export default Post;
