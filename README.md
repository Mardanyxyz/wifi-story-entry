# Tell a Whole Story in 32 Characters

[![make.fun bounty](https://img.shields.io/badge/make.fun-bounty-blue)](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978)

Entry for the [make.fun bounty "Tell a Whole Story in 32 Characters"](https://make.fun/c/u-xvader-tell-a-whole-story-in-32-characters-f86dd978).

## The name

> "Dad Installed WiFi, Then Left" — 29 characters

A dad set up the home Wi-Fi, then walked out. The network outlived the man
who installed it. One line in a phone's network list, and a passer-by gets
the joke first — then the whole sad-funny family story behind it: the
router still blinking in the corner, the dad long gone.

## How it works

`main.ts` writes the single Wi-Fi network name to `/output/entry.txt` and
prints it to stdout. It refuses to run if the name ever exceeds the
32-character limit. Pure Node, no dependencies.

## Run

```sh
node main.ts
```
