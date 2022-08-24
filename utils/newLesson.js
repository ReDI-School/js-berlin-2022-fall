#!/usr/bin/env node

// This little script can be used to create a new skeleton lesson

const fs = require('fs');

function getMaxLesson() {
    return fs.readdirSync('.').reduce((maxLesson, file) => {
        const match = file.match(/lesson(\d+).md/);
        if (match === null) {
            return maxLesson;
        }
        return Math.max(maxLesson, parseInt(match[1]));
    }, 0);
}

function getNextDate() {
    const date = new Date();
    if (date.getDay() === 3 || date.getDay() === 4) {
        date.setDate(date.getDate() + 4 - date.getDay());
    } else {
        date.setDate(date.getDate() + (2 + 7 - date.getDay()) % 7);
    }
    return date;
}

const nextLesson = getMaxLesson() + 1;
const nextLessonPadded = nextLesson.toString().padStart(2, '0');
const nextDate = getNextDate();
const template =
`<!-- .slide: id="lesson${nextLesson}" -->

# Basic Frontend - Fall 2022

Lesson ${nextLesson}, ${nextDate.getDay() == 2 ? "Tuesday" : "Thursday"}, ${nextDate.getFullYear()}-${(nextDate.getMonth() + 1).toString().padStart(2, '0')}-${nextDate.getDate().toString().padStart(2, '0')}

---
`;
fs.writeFileSync(`lesson${nextLessonPadded}.md`, template);

function patchTableOfContents() {
    let toc = fs.readFileSync("toc.md", { encoding: 'utf8' });
    toc = toc.replace(/^(Direct link to lessons:.*)$/mg, `$1 [${nextLesson}](#lesson${nextLesson})`);
    fs.writeFileSync("toc.md", toc);
}
patchTableOfContents();

function patchIndexHtml() {
    let index = fs.readFileSync("index.html", { encoding: "utf-8" });
    index = index.replace(
        /^(.*NEW_SECTION_HERE.*)$/mg,
        `          <section data-markdown="lesson${nextLessonPadded}.md" data-charset="utf-8"></section>\n$1`
    );
    fs.writeFileSync("index.html", index);
}
patchIndexHtml();
