---
title: "Covid Visualization"
date: "2020-04-01"
link: "http://covid-visual.herokuapp.com/"
tags: 
  - nodeJS
  - react
  - redis
  - scheduler
  - heroku
images:
  - nodeJS
  - react
  - redis
---

A project demonstrating covid visualization with worldometer data and react-map-gl. The entire project is hosted on heroku dynos using Redis & Heroku Scheduler.
Co-authored w/ [@bansalrachita](https://github.com/bansalrachita)

Express routes serve data which is updated via Heroku Scheduler every hour using a scrapper.

Redis serves as our source of data and there's a bunch of 
