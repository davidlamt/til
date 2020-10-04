import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  font-family: var(--font-heading);
  left: 0;
  line-height: var(--lineHeight-tight);
  margin: var(--spacing-6);
  position: fixed;
  right: 0;
  text-align: center;
  top: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Title = styled(Link)`
  font-size: 6vw;
  font-weight: var(--fontWeight-black);
  letter-spacing: 0.075em;
  text-transform: uppercase;
`;

const Description = styled.div`
  font-size: var(--fontSize-2);
  margin-top: var(--spacing-8);
`;

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <Title to="/">{title}</Title>
      <Description>
        Tidbits of (hopefully) useful information on technologies and tools
        related to software development.
      </Description>
    </HeaderContainer>
  );
};

export default Header;
