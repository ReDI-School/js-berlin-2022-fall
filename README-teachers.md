# Overview

* We're using https://revealjs.com/#/ for slides and Markdown for simplicity. If you'd like to use any other tool, please let us know in advance.
* Markdown cheat sheet: https://guides.github.com/pdfs/markdown-cheatsheet-online.pdf
* Don't start lines with `Note:` as those are interpreted as speaker notes and won't show on the slide.
* Pages are served via GitHub pages, which is using Jekyll. Make sure your page doesn't contain tags that confuse Jekyll, e.g. three dashes on top of the markdown file

# How to add a new lesson

* If you have nodejs installed, run `node utils/newLesson.js`.
* Upload the lesson as GitHub pull request
  * Note: It's perfectly ok to not be an expert in git / GitHub. You can also send your lesson to another teacher for uploading. Also check the "GitHub cheat sheet" below.

# How to test your lesson on your computer

## With node

Run a local http server in this directory, e.g.:

```sh
npx serve
```

Then open http://localhost:5000 in your favorite browser.

## With python3

Run the following python command:

```sh
python3 -m http.server
```

Then open http://localhost:8000 in your favorite browser.

# Other contributions

We're always happy for contributions. Here are some samples:

* Quiz questions (and solution)
  * On kahoot.com as a warmup quiz
  * Or single good questions that we can add to the slides
* Exercises
  * Should be easy enough for the level of the students, not too complex and must be solveable with the amount of JavaScript that was already taught.
  * Should contain a few bonus tasks for keeping advanced students busy
* Homework
  * Should be solveable at the current student level in about 1h
  * Should contain bonuses for the more advanced students
* Host recap sessions
  * Plan the first 15-20 minutes of the course for repeating previous topics
* Host homework solution session
  * Plan 10-15 minutes for solving the homework step by step, explaining your thoughts on every step
  * OR: Let a student present their homework solution and walk it step by step, asking questions and involving the other students (e.g. Why did student X write it that way? What does this line do? Does someone have another solution?)

# GitHub cheat sheet

The easiest way to interact with GitHub is via their CLI at https://cli.github.com

1. Install the CLI following the GitHub instructions.
1. Download the source code. This step you need to do only once:

```sh
gh repo clone ReDI-School/js-berlin-2021-fall
```

1. Make sure you have the latest version:

```sh
git switch main
git pull
```

1. Before creating a pull request, create a new branch, e.g.:

```sh
git checkout -b lesson42
```

1. Make all your modifications. When you're done, commit your changes:

```sh
git add lesson42.md
git commit -a -m 'Add lesson 42'
```

1. Now create a pull request on GitHub so the other teachers can review your changes:

```sh
gh pr create
```
