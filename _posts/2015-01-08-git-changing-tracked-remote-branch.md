---
layout: post
title:  "Changing the Tracked Remote Branch"
date:   2015-01-08T12:05:31-04:00
categories: git
---

In another git adventure, a co-worker was having issues with the tracking number that is show when your branch is some commits ahead the one it is tracking.

It was because the remote branch tracked wasn’t the desired one. So I took a look on [urschei](http://stackoverflow.com/questions/4878249/how-do-i-change-the-remote-a-git-branch-is-tracking?answertab=votes#tab-top){:target="_blank"}’s answer.

And used this to solve the problem:

{% gist shadyueh/a91a6f029d0aa44a7661 %}
