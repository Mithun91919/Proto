---
name: transcript-synthesis
description: Turns an interview recording transcript into structured research data. Splits it by speaker, flags any speaker or passage it cannot place, writes the session to a Confluence page, assigns verbatim quotes to the study's themes, and recalculates the theme counts across all sessions. Use when a new interview or session transcript is shared, or when the user asks to add a session to the research, update theme counts, or refresh the readout data.
---

# Transcript synthesis

Keeps a research repository current as sessions come in, so the raw transcript
never has to be filed by hand.

## Inputs

- The transcript text of one session (from a meeting recording, with or without
  speaker labels and timestamps).
- The study's list of themes, each with an id and a short description.
- The destination: a Confluence page or space for the session notes.
- The store where theme counts live (a file in the repo, or a Confluence page).

If the theme list or destination is missing, ask for it. Do not invent themes.

## Steps

### 1. Identify the speakers

- Read the labels, names, timestamps and turn-taking to work out how many
  people spoke.
- Report the number of speakers and how you decided.
- Separate the interviewer(s) from the participant(s).

### 2. Split the transcript by speaker

- Produce one entry per speaker, in order, each with its timestamp or position.
- Keep the wording exactly as transcribed. Do not tidy, paraphrase or correct it.

### 3. Flag what you could not place

Never guess. List separately, with the line or timestamp:

- passages with no speaker label,
- overlapping speech,
- turns that could belong to more than one person,
- names or labels that look wrong or inconsistent.

Leave these unassigned until the user resolves them.

### 4. Write the session to Confluence

- Create or update one page for the session: speakers, the split transcript and
  the flagged passages in their own section.
- Use the user's configured Confluence tool. If it is unavailable, write the same
  content to a local file and say so.
- Do not publish the page anywhere wider than where the user asked.

### 5. Assign quotes to themes

- For each participant statement that bears on a theme, copy the quote verbatim
  and record the theme id, the speaker, and a confidence of high, medium or low.
- A quote may belong to more than one theme. Do not force a statement into a
  theme it does not support. Leave it uncategorised instead.
- Never invent, merge or shorten quotes.

### 6. Recalculate the counts

- For each theme, count the unique participants who raised it, across all
  sessions held so far. Recompute from the stored data every time, rather than
  adding one, so a re-run cannot double-count.
- Update the store and show what changed: the old and new count for each theme.
- Report the total number of sessions and participants.

## Output

Return a short summary: speakers found, passages flagged, quotes assigned per
theme, and the counts that changed. Put any low-confidence assignments last, so
the user can look at those first.

## Privacy

- Treat transcripts and participant names as confidential.
- Do not include names, job titles or identifying details in anything meant for
  a wider audience. Refer to participants by an id.
- Do not copy transcript text anywhere other than the destinations the user named.
