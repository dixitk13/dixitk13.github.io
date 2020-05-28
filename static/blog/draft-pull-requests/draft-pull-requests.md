---
title: "Draft pull requests"
date: "2020-05-10"
path: "/draft-pull-requests"
type: "blog"
tags: ["process", "github", "pull-requests"]
---

I believe in making small pull requests and they can be either of features, bug fixes, changes/updates and improvements.

I've always felt that need to entitle my PR's with:

- [DO-NOT-MERGE]:

  - When i need to show it to my folks and get opinions or ideas and not having to send it out in an email/slack message.
  - Or when I need to get it reviewed from other managers out there if the behavior is finally what they asked for.
  - Or I need a build out prod version of my code

- [NEEDS-TESTING]: when I've finished writing the code:
  - but its 12am
  - or maybe my codebase lacks e2e for all the other code surrounding mine.
    P.S: lets face it guys not everyone has strong e2e and pushes at 12 am, sets to auto-complete and sleeps the night.

[DRAFT] is my rescuer here where any teammate isn't going to click merge/approve and call it a day but is definately going to have a look to leave out comments to chime and continue the discussions

Ref: https://github.blog/2019-02-14-introducing-draft-pull-requests/

## What I follow as nomenclature for Pull Requests:

Most of my PR's follow a nomenclature for branch naming as well, call me victim of OCD but that's me!

- `<username>/hotfix/<branch-code-name>` : for hot-fixes of course
- `<username>/changes/<branch-code-name>` : for changes/improvements
- `<username>/feature/<branch-code-name>`: for feature updates

where branch code name is an at-most 3 letter word for what the branch is doing. I try not to name them like with prefix of an issue number since I am bad with numbers, but if you are that's the best way to do your nomenclature TBH.

I usually try to keep my commit messages short, so its readable in single line - about 50 or less should do it. If you'd like to write more text, after the 50 lines a new line should be added and rest of the text should be wrapped at 72 lines-ish.

A good read about how I adopted the above [here](https://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html)

Some argue making the commit message like a summary helps them the below for sending (nicely formatted emails)[https://thoughtbot.com/blog/send-a-patch-to-someone-using-git-format-patch], but meh - email's not going to live long hopefully.

```bash
git format-patch <branch> --stdout
```

Adopt **rebase**. It seems to keep the history clean, coming from the **merge** guy who used merge for several years now :)
