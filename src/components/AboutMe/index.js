import React, { useEffect, useState } from "react";
import AboutMeView from "./AboutMeView";

const AboutMe = () => {
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

  return <AboutMeView on={on} toggleOn={toggleOn} />;
};

export default AboutMe;
