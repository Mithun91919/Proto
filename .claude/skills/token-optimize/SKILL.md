---
name: token-optimize
description: Operational habits for working lean in this portfolio repo — batching tool calls, avoiding redundant reads/re-verification, and keeping exploration terse. Use this on every task in this project, not just ones the user flags as "big" — it shapes how you work throughout, from the first file read to the final check, not a one-time step you do at the start or end.
---

# Working lean in this repo

This project is small (a Next.js portfolio site) and most tasks touch a handful of files. The biggest token cost on tasks like this usually isn't the work itself — it's re-reading things you already know, verifying more often than the change warrants, or reaching for a subagent when a direct tool call would do. None of that improves the result; it just spends budget. The habits below keep that spend proportional to the task.

## Batch independent tool calls

If two or more tool calls don't depend on each other's output, issue them in the same turn instead of one-at-a-time. Reading three files to understand a feature, or running `tsc` and `eslint` together, are classic cases — there's no reason to wait for the first result before starting the second. Only go sequential when a later call genuinely needs a value the earlier one produced (e.g., read a file, then edit based on what's in it).

## Don't re-read what you just wrote

After `Edit` or `Write` succeeds, the tool result confirms the change went through — the harness already diffed it. Reading the file back afterward "to check" tells you nothing the success response didn't. Re-read only when something *else* changed the file since (a build step, a formatter, the user), or when you need to see surrounding context you didn't already have in hand.

## Reach for the smallest tool that answers the question

- Need a symbol, a string, or "which files mention X" → `Grep`, not `Bash` with `grep`/`find`/`cat`. It's built for this and doesn't dump irrelevant output.
- Need one section of a large file → `Read` with `offset`/`limit`, not the whole file. You already know roughly where the relevant code lives from the `Grep` hit that led you there.
- Need a filename pattern → `Glob`, not a shell walk.

The point isn't the tool choice for its own sake — it's that the dedicated tools return exactly what you asked for, so you're not paying to read past it.

## Verify at the end of a unit of work, not after every line

Running `tsc --noEmit` / `eslint` / `next build` after *each* small edit adds up fast when a task is naturally a sequence of related edits (e.g., fixing four lint errors in one file, or wiring a prop through three files). Make the related edits, then verify once. Reserve an extra check for a point where you're genuinely unsure an edit landed correctly — not as a reflex after every `Edit` call.

## Don't spawn a subagent for what a few direct calls can answer

Subagents cost a fresh context load — real value when a task is genuinely open-ended (broad exploration, something that would otherwise flood your own context with search noise), wasted when the task is "find this one thing" or "make this one change." If you can answer it with 1-3 targeted `Grep`/`Read`/`Glob` calls, do that instead of delegating.

## Keep exploration terse in your responses

While investigating, you don't need to narrate every file you opened or paste full contents back into your response — that's for your own working context, not the user's. Summarize what you found and why it matters; quote the specific lines only when the user needs to see the exact code (e.g., to approve a change or understand a bug).

## The test: would a careful engineer do this?

None of the above is a hard rule to apply mechanically — it's what a careful engineer already does by instinct: batch what can be batched, trust what you just verified, use the right-sized tool, and don't gold-plate the verification step. If a task genuinely needs more reads, more checks, or a subagent to do well, do that — this skill is about cutting waste, not cutting corners.
