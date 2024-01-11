# newlongtonscouts.com v3.x

by Alex Paterson

Copyright © 2024 1st New Longton Scouts

## Try the Pre-Release Build

The pre-release build is available at [https://dev.newlongtonscouts.com](https://dev.newlongtonscouts.com).

## Goals for v3.x
- Reduce running costs by moving to Github Pages (free, unless we use too many build jobs), from our old AWS Lightsail instance (~£3 - £5 per month). This could leave to a saving of about £48 a year - that's enough for an extra activity on camp!
- Port the website to [Jekyll](https://jekyllrb.com/). Jekyll's template system allows for easier editing (maybe even via phone when on the go), and GitHub pages allows for near-instant deployment.
- Add a Message Banner system that allows for custom messages to be displayed based on the date. This is also made possible by Jekyll via the post system.
- Improve the User Experience by making the website prettier and more responsive.
- Update the information, as some of the current (v2.x) site is out of date, as it was originally on the v1.x site when it went live in 2020.
- Fix the visual wonkiness. Images will be replaced with higher quality and more up to date ones where possible, and edited to all be the same size (see the Meet the Team page for why this needs to be done).
- Reduce webmaster workload, as SSL certs and server updates will be handled by GitHub.

## How to add a Banner

1. Log in to [GitHub](https://github.com). If you don't have an account, please create one.
2. Go to the project page at [https://github.com/newlongtonscouts/newlongtonscouts.github.io](https://github.com/newlongtonscouts/newlongtonscouts.github.io). Make sure you are registered as a member of New Longton Scouts on GitHub. You can check by seeing if there is an "Add File" button above the list of files. If you aren't, contact me, and I will add you.
3. Select the ```_posts``` folder in the main window.
4. Now, click "Add File" at the top left.
5. Then, select "Create New File".
6. Set your file in the format ```YYYY-MM-DD-title.md``` where ```YYYY-MM-DD``` is the day you want your banner to be visible and ```title``` is the title of the message with no spaces or capital letters. For example, a banner congratulating the winners of Dragon Quest 2023 would have a name like ```2023-10-15-dragonquestwinners.md```.
7. Copy and paste this template into your file:
```
---

layout: post
title:  "[REPLACE WITH YOUR TITLE]"

---

# [REPLACE WITH YOUR TITLE]

[REPLACE WITH YOUR MESSAGE]
```
8. Delete the []-ed text and replace it with what you would like on your banner.
9. Press the green "Commit Changes" button. The update should apply automatically. Banners can (and should) be added ahead of time, so it's best to get them done early.

## The Auto-Deploy System

Jekyll is a static site system, so the content for the banner is added to the page during the build process, rather than pulled in dynamically, like a database would. This leads to a problem where the banner doesn't update on a new day. Luckily, GitHub has come to our rescue with GitHub Actions, and I have added a build process located in ```.github/workflows``` to build a new version of the site at 00:01 every day. However, sometimes the build does not start at 00:01, and has to wait for sufficient resources to become available first. This can take up to an hour, but by morning, the latest banner should be available.
