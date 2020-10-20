import React from 'react';
import { PageProps } from 'gatsby';
import styled from '@emotion/styled';

import { Footer, Header } from './';

const ContentWrapper = styled.div`
  background-color: hsla(0, 0%, 100%, 0.9);
  box-shadow: 0 30px 50px 0 rgba(1, 1, 1, 0.15);
  margin: 15vw auto var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  padding: var(--spacing-16) var(--spacing-20);
  position: relative;
  width: 90%;
`;

type LayoutProps = {
  children: React.ReactNode;
  location: PageProps['location'];
  title: string;
};

const Layout: React.FC<LayoutProps> = ({ children, location, title }) => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const isRootPath = location.pathname === rootPath;

  return (
    <div data-is-root-path={isRootPath}>
      <Header title={title} />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
    </div>
  );
};

export default Layout;
