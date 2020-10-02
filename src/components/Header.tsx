import React from 'react';
import { Link } from 'gatsby';
import styled from '@emotion/styled';

const HeaderContainer = styled.header`
  color: var(--color-heading-black);
  font-family: var(--font-heading);
  font-size: var(--fontSize-7);
  font-weight: var(--fontWeight-black);
  letter-spacing: -0.025em;
  line-height: var(--lineHeight-tight);
  margin-bottom: var(--spacing-12);
  margin-top: var(--spacing-12);

  a {
    color: inherit;
    text-decoration: none;
  }
`;

type HeaderProps = {
  title: string;
};

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <HeaderContainer>
      <Link to="/">{title}</Link>
    </HeaderContainer>
  );
};

export default Header;
