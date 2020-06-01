---
title: "One liner chats?"
date: "2019-01-10"
path: "/one-liner-chats"
type: "blog"
tags: ["communication", "chat"]
---

The entire world is hooked on messaging and being connected digitally.
Our world revolves around notifications and checking them or needing to check them due to on-call duties or maybe you are just the kind of person who replies to chats instantly.

The notification sound of iMessage is just iconic or has become iconic. But do multiple notifications irritate you?

Do you get irritated by 5 notifications grouped under the same application by a single friend of yours?

## Scenario 1

```default
[10:15 AM] John Parker: Hi Dixit
[10:15 AM] John Parker: About that PR
[10:16 AM] John Parker: Did you get a chance to look at it
[10:16 AM] John Parker: ?
[10:17 AM] John Parker: Its just a small change from the ticket TKT-123
[10:17 AM] John Parker: Here's a link for the same
[10:18 AM] John Parker: https://github.com/TKT/pulls/321
[10:20 AM] Dixit Patel: Nope, totally forgot. Lemme do it right away!
[10:25 AM] John Parker: Also, that PR doesn't fix 123 completely,
[10:25 AM] John Parker: its a sub-task
[10:25 AM] John Parker: jira stuff you know ...
[10:26 AM] John Parker: but boss signed off
[10:26 AM] John Parker: gotta ship it
[10:30 AM] Dixit Patel: Right, on it.
```

# I do! There, I said it! 🙈

Most of people in this world might have used one or another form of chat/messaging
like iMessage, Jabber, Slack, Teams, etc. Today, at most workplaces messaging is an essential part of communication for most people working w/ each other.

Software engineers all have a habit of writing code and
using the most popular version control to manage their code called GIT.

Can you follow that with your chats? - Absolutely!

Here's what I do, or rather how my pings look like:

```
[10:15 AM] Dixit: Hi John, about that PR, did you get a
chance to look at it? Its just a small change from the
ticket TKT-123. Here's a link for the same:
https://github.com/TKT/pulls/321
```

Further on if John wants to say "He's looking at it", he either reacts with
an "ACK" reaction/emoji on the same message or says in a straight one liner,
and the conversation could maybe be something like:

## Scenario 2

```
[10:15 AM] Dixit Patel: Hi John, about that PR, did you get a
chance to look at it? Its just a small change from the
ticket TKT-123. Here's a link for the same:
https://github.com/TKT/pulls/321 <👌>

[10:16 AM] John Parker: Nah, I didn't get a chance mate.
Lemme do that right away.

[10:17 AM] Dixit Patel: Also, that PR doesn't completely fix TKT-123, but
attempts a sub-task for it. Boss says ship it and complete the TKT-123
later in the day.

[10:18 AM] John Parker: Right, on it. Also The TKT-331 kinda
needs some priority. Seems to me like its breaking on
Chrome 83 due to downloads being blocked in iframe,
before customers report. Should be a small fix.
```

Now one would ask, what does this benefit me with?

Well, I'll say why maintain commit history with 52th word mark and wrap the rest of the commit message at 72th word mark?

# 📜 HISTORY 📜

Its's a powerful thing. Commit history is a very important thing!
It helps understand the how the code has been developing and what churn has
been happening in the codebase, etc etc.

To me scenario 1 looks like a commit history which is shown below:

```
* 5d53d5a - complete
* 3b97cf3 - wip
* 8c2e4b8 - pull from master
* 4407227 - boss called wip
* 70cdc42 - typo
* 329f368 - fix padding/margin
* 18007ad - #ABC321 in progress
```

Where as the scenario 2 looks like:

```
* 6e53924 - Fix TKT-333 bug found via review w/ @jparker
* 844b34c - Fix TKT-331 chrome 83 iframe download
* 57152ff - Feat TKT-322 allowing i18n for only the menus
```

Which one do you like more? Retrospection is the key, scroll two pages up and
you'll have conversations which kinda helps remember the status of things.

Use threads.
Threads will let you condense/group those conversations into singular items.

Together we can make "chat-history-great"!🍻
