import React from 'react';
import { PageProps } from 'gatsby';
import styled from '@emotion/styled';

import { Footer, Header } from './';

const MainWrapper = styled.main`
  position: relative;
`;

const ContentWrapper = styled.div`
  margin: 15vw auto var(--spacing-0) auto;
  max-width: var(--maxWidth-wrapper);
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
      <MainWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </MainWrapper>
      <Footer />
    </div>
  );
};

export default Layout;
