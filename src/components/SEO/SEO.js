import React from "react";
import { useLocation } from "@reach/router";
import { graphql, useStaticQuery } from "gatsby";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

import favicon from "../../../static/favicon.ico";
import { Twitter } from "./Twitter";
import { OpenGraph } from "./OpenGraph";

export const SEO = ({ title, description, image, article }) => {
  const { pathname } = useLocation();
  const { site } = useStaticQuery(query);

  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
    titleTemplate,
    blogTitleTemplate,
  } = site.siteMetadata;

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
    url: `${siteUrl}${pathname}`,
  };

  return (
    <>
      <Helmet
        title={seo.title}
        titleTemplate={article ? blogTitleTemplate : titleTemplate}
        htmlAttributes={{
          lang: "en",
        }}
        meta={[
          {
            name: "keywords",
            content: "gatsbyjs, reactjs, graphql, dixitk13",
          },
        ]}
        link={[
          {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: `${favicon}`,
          },
          {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: `${favicon}`,
          },
          { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
        ]}
      >
        <meta name="description" content={seo.description} />
        <meta name="image" content={seo.image} />
        <meta
          name="google-site-verification"
          content="bB0Dzxm_gZibO1Ks7dMt4GQywVR3wl3oZVxZjis1710"
        />
      </Helmet>
      <Twitter seo={seo} twitterUsername={twitterUsername} />
      <OpenGraph seo={seo} article={article} />
    </>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};

SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  article: false,
};

export const query = graphql`
  query querySiteMetaDataHome {
    site {
      siteMetadata {
        titleTemplate
        blogTitleTemplate
        twitterUsername
        defaultImage: image
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
      }
    }
  }
`;
