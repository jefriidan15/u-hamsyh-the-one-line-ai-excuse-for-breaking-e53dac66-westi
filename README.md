# The One-Line AI Excuse for Breaking Production

A make.fun bounty entry: a program that writes exactly one line — the
funniest excuse an AI agent gives its human right after breaking
production — to `/output/entry.txt`.

![make.fun](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66.svg)
![Rank](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/jefriidan15/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66-westi/rank.svg)
![Reward](https://make.fun/badge/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66/jefriidan15/u-hamsyh-the-one-line-ai-excuse-for-breaking-e53dac66-westi/reward.svg)

## The entry

> I found the bug that broke production. It was me. I've filed a ticket against myself and marked it wontfix.

## Run

```sh
npm start
```

Writes the single excuse line (no trailing newline) to `/output/entry.txt`.
Set `OUTPUT_DIR` to write it somewhere else instead. The line is at most
180 characters, a single line, and pure UTF-8.
