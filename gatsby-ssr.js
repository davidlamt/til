import React from 'react';
import { withPrefix } from 'gatsby';

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  setHeadComponents([
    <link
      href={withPrefix('asciinema-player.css')}
      key="asciinema-player.css"
      rel="stylesheet"
      type="text/css"
    />,
  ]);

  setPostBodyComponents([
    <script
      key="asciinema-player.js"
      src={withPrefix('asciinema-player.js')}
      type="text/javascript"
    />,
  ]);
};
