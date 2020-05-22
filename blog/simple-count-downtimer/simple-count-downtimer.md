---
title: "Simple countdown timer"
date: "2019-04-24"
path: "/simple-count-downtimer"
type: "blog"
---

I was recently trying to make a simple countdown timer which counts from a specific time-interval and “finishes” itself.

I just found it amazing that a few lines of code could bring in such a thing!
the code just uses a state called “minutes” which gets initialized with the total number of seconds for which the timer stays.

The component accepts minutes till which it must stay alive, converts that into seconds, runs the countdown and then clears the internal logic.

```javascript
<Timer classNames="time-text" minutes={Number(10)} />
```

And here’s the entire code.

```jsx
import React, { Fragment, useState, useEffect } from "react";

const Timer = ({ minutes, classNames }) => {
  if (!minutes) return null;

  const [seconds, setSeconds] = useState(minutes * 60);

  useEffect(() => {
    let timeout = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);

    if (seconds < 0) {
      clearTimeout(timeout);
    }

    return () => {
      clearInterval(timeout);
    };
  }, [seconds]);

  const showMins = Math.floor(seconds / 60);
  const showSeconds = seconds % 60;

  const PadString = ({ number }) => String(number).padStart(2, "0");

  if ((!showMins && !showSeconds) || showMins < 0)
    return <span className={classNames}>Complete!</span>;

  return (
    <Fragment>
      <span className={classNames}>
        <PadString number={showMins} />:<PadString number={showSeconds} />
      </span>{" "}
      remaining
    </Fragment>
  );
};

export default Timer;
```

![count-down-timer](/blog/simple-count-downtimer/count-down-timer.gif)

And below's a codepen link:

https://codepen.io/dixitk13/pen/WNQPKye
