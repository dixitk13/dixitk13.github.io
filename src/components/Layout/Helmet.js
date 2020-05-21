import React from "react";
import { Helmet } from "react-helmet";

import favicon from "../../../static/favicon.ico";

export const SiteHelmet = ({ siteMetadata }) => {
  if (!siteMetadata) return null;
  const { title, image, twitterUsername } = siteMetadata;
  return (
    <Helmet
      htmlAttributes={{
        lang: "en",
      }}
      title={title}
      meta={[
        {
          name: "description",
          content: title,
        },
        {
          name: "keywords",
          content: "gatsbyjs, reactjs, graphql, dixitk13",
        },
        {
          name: "image",
          content: image,
        },
        {
          name: "twitter:creator",
          content: twitterUsername,
        },
      ]}
      link={[{ rel: "shortcut icon", type: "image/png", href: `${favicon}` }]}
    />
  );
};
