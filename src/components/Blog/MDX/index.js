import React from "react";
import { Quote } from "./quote.js";
import { Paragraph } from "./p.js";
import { Anchor } from "./a.js";

export const mdxComponents = {
  p: (props) => <Paragraph {...props} />,
  quote: (props) => <Quote {...props} />,
  a: (props) => <Anchor {...props} />,
};
