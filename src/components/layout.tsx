import React from 'react';
import { PageProps } from 'gatsby';
import styled from '@emotion/styled';

import { Footer, Header } from './';

const MainWrapper = styled.main`
  margin: 15vw auto var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
  position: relative;
  width: 90%;

  @media (max-width: 1260px) {
    margin-top: 20vw;
  }

  @media (max-width: 950px) {
    margin-top: 25vw;
  }

  @media (max-width: 600px) {
    margin-top: 180px;
  }
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
      <MainWrapper>{children}</MainWrapper>
      <Footer />
    </div>
  );
};

export default Layout;
