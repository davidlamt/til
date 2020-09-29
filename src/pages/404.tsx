import React from 'react';
import { PageProps, graphql, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';

type QueryData = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const NotFoundPage: React.FC<PageProps> = ({ location }) => {
  const data: QueryData = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  );
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  );
};

export default NotFoundPage;
