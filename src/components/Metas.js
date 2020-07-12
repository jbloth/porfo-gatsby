import React from "react";
import Helmet from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

const Metas = ({ title, description }) => {
  // Get default site metadata from gatsy-config.js
  const { site } = useStaticQuery(query);
  const { defaultTitle, defaultDescription } = site.siteMetadata;
  const siteDetails = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  };

  return (
    <Helmet title={siteDetails.title}>
      <html lang="en" />

      {/* --- seo --- */}
      <meta name="description" content={siteDetails.description} />

      {siteDetails.title && (
        <meta property="og:title" content={siteDetails.title} />
      )}

      {siteDetails.description && (
        <meta property="og:description" content={siteDetails.description} />
      )}

      {/* --- preload fonts --- */}
      <link
        rel="preload"
        as="font"
        href="/fonts/LazyOyster-Regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        as="font"
        href="/fonts/b612-mono-v4-latin-regular.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      <link
        rel="preload"
        as="font"
        href="/fonts/b612-mono-v4-latin-700.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </Helmet>
  );
};

export default Metas;

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`;
