import React from 'react';
import styled from '@emotion/styled';
import GitHubSvg from '../assets/github.svg';

const FooterContainer = styled.footer`
  font-family: var(--font-heading);
  font-size: var(--fontSize-2);
  line-height: var(--spacing-12);
  text-align: center;

  svg {
    width: 40px;
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <div>
        Learnings sourced by everyone who has taught me, either directly or
        indirectly. Thanks!
      </div>
      <div>
        Visit my <a href="https://davidltran.com">main site</a> for more, and
        sometimes longer, content.
      </div>
      <a href="https://github.com/davidlamt/til">
        <GitHubSvg />
      </a>
    </FooterContainer>
  );
};

export default Footer;
