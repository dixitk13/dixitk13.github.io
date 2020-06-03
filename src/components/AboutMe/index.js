import React, { useEffect, useState } from "react";
import { AboutMeCardView } from "./CardView";
import { FlatView } from "./FlatView";

const AboutMe = ({ flat }) => {
  const [on, setOn] = useState(false);
  let timeoutId = undefined;

  const toggleOn = () => {
    setOn(true);

    timeoutId = setTimeout(() => {
      setOn(false);
    }, 1000);
  };

  useEffect(() => {
    //noop
    return () => clearTimeout(timeoutId);
  }, [timeoutId]);

  if (flat) return <FlatView />;
  return <AboutMeCardView on={on} toggleOn={toggleOn} />;
};

export default AboutMe;
