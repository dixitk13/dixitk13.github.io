import React, { useEffect, useState } from "react";
import AboutMeView from "./AboutMeView";

const AboutMe = () => {
  const [on, setOn] = useState(false);
  let toggleHeart = undefined;

  useEffect(() => {
    //noop
    return clearTimeout(toggleHeart);
  }, [toggleHeart]);

  const toggleOn = () => {
    setOn(true);

    toggleHeart = setTimeout(() => {
      setOn(false);
    }, 1000);
  };

  return <AboutMeView on={on} toggleOn={toggleOn} />;
};

export default AboutMe;
