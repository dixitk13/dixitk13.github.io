import React from "react";
import * as Card from "../../common/Card";

export default () => {
  return (
    <Card.Container>
      <Card.Header>Richard Hamming on Luck</Card.Header>
      <Card.Description>
        <blockquote>
          <p>
            There is indeed an element of luck, and no, there isn’t. The
            prepared mind sooner or later finds something important and does it.
            So yes, it is luck.{" "}
            <em>
              The particular thing you do is luck, but that you do something is
              not.
            </em>
          </p>
        </blockquote>
      </Card.Description>
    </Card.Container>
  );
};
