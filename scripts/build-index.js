#!/usr/bin/env node
/**
 * Rebuilds the search index embedded in index.html (the library home page).
 *
 *   node scripts/build-index.js
 *
 * It reads the data straight out of the three content pages, so the home-page search
 * always matches what those pages actually contain:
 *   systemdesignprimerbook.html -> CHAPTERS (with videos + articles)
 *   ai-engineer-roadmap.html    -> STAGES (phases), PROJECTS, COMMUNITY, INTERVIEW
 *   toolbox.html                -> TOOLS, CATEGORIES
 * Run it after editing any of them, then commit index.html.
 *
 * CHECKED is the date you last re-verified the external links — update it when you do.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const CHECKED = '2026-09-20';
const read = f => fs.readFileSync(path.join(ROOT, f), 'utf8');
const strip = h => String(h).replace(/<[^>]+>/g, ' ').replace(/&[a-z]+;/g, ' ').replace(/\s+/g, ' ').trim();

/* ---- System Design book ---- */
const book = read('systemdesignprimerbook.html');
let a = book.indexOf('const CHAPTERS = ['); let b = book.indexOf('\n];\n', a);
const IMG = new Proxy({}, { get: () => 'IMG' });
const CHAPTERS = new Function('IMG', 'return ' + book.slice(a + 'const CHAPTERS = '.length, b + 2))(IMG);

/* ---- AI roadmap ---- */
const ai = read('ai-engineer-roadmap.html');
a = ai.indexOf('const V = '); b = ai.indexOf('/* =====', ai.indexOf('const COMMUNITY'));
const AI = new Function(ai.slice(a, b) + '\nreturn {STAGES, PROJECTS, COMMUNITY, INTERVIEW};')();

/* ---- Toolbox ---- */
const tb = read('toolbox.html');
a = tb.indexOf('const TOOLS = ['); b = tb.indexOf('\n    const ', a);
const TOOLS = new Function('return ' + tb.slice(a + 'const TOOLS = '.length, b).trim().replace(/;$/, ''))();

const entries = [];
const sdOrder = [];
CHAPTERS.forEach((c, i) => {
  const n = i + 1, u = 'systemdesignprimerbook.html#' + c.id;
  sdOrder.push({ id: c.id, title: c.title });
  entries.push({ t: c.title, k: 'Chapter', w: `Chapter ${n} · ${c.part}`, s: 'System Design', u, x: c.dek + ' ' + strip(c.html).slice(0, 1500) });
  (c.videos || []).forEach(v => entries.push({ t: v.title, k: 'Video', w: `Ch. ${n} ${c.title} · ${v.channel}`, s: 'System Design', u, ext: 'https://www.youtube.com/watch?v=' + v.id, x: v.why }));
  (c.articles || []).forEach(r => entries.push({ t: r.title, k: r.kind, w: `Ch. ${n} ${c.title} · ${r.source}`, s: 'System Design', u, ext: r.url, x: r.desc }));
});

const KIND = { video: 'Video', course: 'Course', read: 'Article', repo: 'Repo', docs: 'Docs' };
const aiOrder = [];
let aiVideos = 0, aiRes = 0;
AI.STAGES.forEach(s => {
  const u = 'ai-engineer-roadmap.html#' + s.id;
  entries.push({ t: `Phase ${s.n} · ${s.title}`, k: 'Phase', w: s.weeks, s: 'AI Roadmap', u, x: s.dek + ' ' + s.master.join(' ') });
  if (s.project) entries.push({ t: s.project.name, k: 'Project', w: `Phase ${s.n} project`, s: 'AI Roadmap', u, x: strip(s.project.build) + ' ' + s.project.stack.join(' ') });
  [...s.videos, ...s.items].forEach(r => {
    aiRes++; if (r.kind === 'video') aiVideos++;
    aiOrder.push({ key: r.key, title: r.title, stage: s.id });
    entries.push({ t: r.title, k: KIND[r.kind], w: `Phase ${s.n} ${s.title} · ${r.by || r.src}`, s: 'AI Roadmap', u, ext: r.url, x: strip(r.why) });
  });
});
AI.PROJECTS.forEach(p => entries.push({ t: p.title, k: 'Project', w: 'AI Roadmap · Portfolio projects', s: 'AI Roadmap', u: 'ai-engineer-roadmap.html#projects', x: p.what + ' ' + p.stack.join(' ') }));
AI.INTERVIEW.forEach(g => g.q.forEach(q => entries.push({ t: q[0], k: 'Question', w: `AI Roadmap · Interview · ${g.h}`, s: 'AI Roadmap', u: 'ai-engineer-roadmap.html#interviews', x: q[1] })));
AI.COMMUNITY.forEach(g => g.l.forEach(l => entries.push({ t: l[0], k: 'Community', w: `AI Roadmap · ${g.h}`, s: 'AI Roadmap', u: 'ai-engineer-roadmap.html#community', ext: l[1], x: l[2] })));

TOOLS.forEach(t => entries.push({ t: t.name, k: 'Tool', w: t.category, s: 'Tools', u: 'toolbox.html#' + t.id, ext: t.url, x: t.summary + ' ' + t.tags.join(' ') }));

const cats = new Set(TOOLS.map(t => t.category));
const data = {
  meta: {
    generated: new Date().toISOString().slice(0, 10), checked: CHECKED,
    sd: { chapters: CHAPTERS.length, videos: CHAPTERS.reduce((n, c) => n + (c.videos || []).length, 0), articles: CHAPTERS.reduce((n, c) => n + (c.articles || []).length, 0) },
    ai: { stages: AI.STAGES.length, videos: aiVideos, resources: aiRes },
    tools: { count: TOOLS.length, categories: cats.size, audio: TOOLS.filter(t => t.category.startsWith('Audio')).length }
  },
  sdOrder, aiOrder, entries
};

const file = path.join(ROOT, 'index.html');
let html = fs.readFileSync(file, 'utf8');
const s = html.indexOf('<!--INDEX-START-->'), e = html.indexOf('<!--INDEX-END-->');
if (s < 0 || e < 0) throw new Error('index.html is missing the INDEX markers');
const json = JSON.stringify(data).replace(/</g, '\\u003c');
html = html.slice(0, s) + '<!--INDEX-START-->\n<script type="application/json" id="lib-index">' + json + '</script>\n' + html.slice(e);
fs.writeFileSync(file, html);
console.log(`index.html updated: ${entries.length} searchable entries · ${(json.length / 1024).toFixed(0)} KB`);
console.log(JSON.stringify(data.meta));
