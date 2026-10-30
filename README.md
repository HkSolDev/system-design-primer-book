# The Reading Library · System Design, AI Engineering & Tools 🚀

> An interactive, distraction-free reading edition of Donne Martin's legendary **[System Design Primer](https://github.com/donnemartin/system-design-primer)** — enriched with in-page playable video lectures, curated seminal engineering whitepapers, and 5 full interview case studies.

[![X Follow](https://img.shields.io/badge/Follow-@HKsoldev-black?style=flat&logo=x)](https://x.com/HKsoldev)
[![GitHub](https://img.shields.io/badge/GitHub-HkSolDev-181717?style=flat&logo=github)](https://github.com/HkSolDev)
[![YouTube](https://img.shields.io/badge/YouTube-@MrDevGhost-red?style=flat&logo=youtube)](https://www.youtube.com/@MrDevGhost)
[![Instagram](https://img.shields.io/badge/Instagram-@mr.devghost-purple?style=flat&logo=instagram)](https://www.instagram.com/mr.devghost/)

---

## 🌟 What is this?

The **System Design Primer** (originally compiled by **Donne Martin** and hundreds of open-source contributors) is the gold standard for learning large-scale system architecture and preparing for technical interviews.

This **Interactive Reading Edition** transforms the primer into a unified, high-yield study hub:

* 🎥 **26 In-Page Playable Video Lectures:** High-yield video lessons from top educators (ByteByteGo, Hussein Nasser, Arpit Bhayani, Martin Kleppmann, David J. Malan / Harvard, Gil Tene, AWS re:Invent, Tushar Roy, Gaurav Sen) embedded with a click-to-play facade so you can watch directly without leaving the book.
* 📖 **Seminal Engineering Deep Dives:** Handpicked articles and whitepapers from Netflix, Uber, Cloudflare, Figma, Stripe (Rate Limiting & Idempotency Keys by Brandur Leach), and landmark computer science papers (ACM, USENIX NSDI).
* 🏗️ **5 Complete Interview Case Studies (Part V):**
  1. *URL Shortener (TinyURL / Pastebin)* — Base62 encoding, Key Generation Service (KGS), 301 vs 302, Redis caching.
  2. *Twitter Timeline & News Feed* — Fan-out on write vs read, celebrity hotspot handling, Redis timeline caches, Lucene search.
  3. *Distributed Web Crawler* — URL Frontier queue pipeline, SimHash duplicate detection, Bloom filters, async DNS cache.
  4. *Real-Time Chat System (WhatsApp / Slack)* — Stateful WebSockets, Session Registry, Cassandra message store, presence heartbeats.
  5. *Scaling AWS to 10 Million Users* — 7-stage architectural evolution from single EC2 box to global multi-region scale.
* 🐧 **Linux, CLI & Git for the Job (Part VI):** Six hands-on chapters for the terminal skills every backend / DevOps / SRE interview assumes: the job bar and a phased plan, Linux CLI essentials, networking + SSH + troubleshooting, Bash scripting, the Git CLI (branching, conflicts, undo and recovery, PRs from the terminal), and labs, portfolio projects and interview drills. 54 verified videos and 55 articles, all playable or linked in-page.
* 🔍 **Instant Full-Text Search:** Client-side search indexing across all 30 chapters, video metadata, and article summaries.
* 🖍️ **Local Highlighting:** Select any passage to drop a persistent highlight saved automatically in your browser.
* 🌓 **Dark & Light Mode:** Tailored typography (Source Serif 4, IBM Plex Sans, IBM Plex Mono) with smooth contrast.
* 🧰 **Internet Hidden Toolbox (`toolbox.html`):** An interactive, searchable directory of 51 high-yield web tools, academic research engines (Unpaywall, Elicit, Consensus, Connected Papers), developer terminal tools (Phind, Regex101, ExplainShell, Carbon), privacy shields (VirusTotal, Privnote, Temp-Mail), and cognitive focus audio (Radio Garden, Music For Programming) &mdash; complete with practical use cases, pro tips, instant search, and one-click browser bookmark export.

* 🧭 **AI / ML Engineer Roadmap (`ai-engineer-roadmap.html`):** A free, link-verified path from **Phase 0 to job-ready** in 12 phases: setup and maths, data (NumPy/pandas/SQL), classical ML shipped as an API, evaluation and Kaggle, deep learning with PyTorch, transformers, advanced RAG, agents, fine-tuning and serving, MLOps, LLMOps/evals/security, and system design plus the job hunt. **A project in every phase** (with acceptance criteria), 106 in-page videos, ~275 courses/articles/repos sorted into *Start here / Core / Deep dive* tiers, six flagship résumé projects, 30 interview questions with hints, what real postings ask for, job boards, and 12-week, 24-week and full-path (~16 months at 7 h/week) plans. Search, type filters, dark/light mode and tick-off progress saved in your browser.

* 🧱 **CS Foundations for AI Engineers (`cs-foundations.html`):** A six-level, project-connected computer science route for practicing full-stack AI developers. It adapts the nine-subject [Teach Yourself CS](https://teachyourselfcs.com/) curriculum into a practical order: algorithms, systems, reliable data, networks, AI maths, then compilers and deep learning. Each level now pairs its reading with a verified lecture route—from Skiena and Berkeley through Stanford and MIT—plus a 90-minute study loop, evidence-based milestones and a 12-week starting plan.

---

## 👨‍💻 Connect & Follow

This interactive study edition was curated and built by **HkSolDev** (`@MrDevGhost`). Connect with me for distributed systems, backend engineering, and architecture deep dives:

* **X (Twitter):** [@HKsoldev](https://x.com/HKsoldev)
* **GitHub:** [@HkSolDev](https://github.com/HkSolDev)
* **YouTube:** [@MrDevGhost](https://www.youtube.com/@MrDevGhost)
* **Instagram:** [@mr.devghost](https://www.instagram.com/mr.devghost/)

---

## 🗂️ What's in this folder

| File | What it is |
| :--- | :--- |
| `index.html` | **Library home**: one search across every chapter, video, article, course and tool, plus "continue where you left off". Contains a generated search index. |
| `systemdesignprimerbook.html` | The System Design Primer reading edition (30 chapters, 129 videos, 142 articles). |
| `ai-engineer-roadmap.html` | AI / ML Engineer Roadmap (12 phases). Data lives in the `STAGES` array (phases 0–3, 9 and 11 plus per-phase projects are defined just after `COMMUNITY`) near the top of its `<script>`. |
| `cs-foundations.html` | Six-level CS foundations guide for full-stack AI engineers, including the Teach Yourself CS route, selected university video lectures and a 12-week starter plan. |
| `toolbox.html` | Internet Hidden Toolbox (85 tools). Data lives in the `TOOLS` array. |
| `library.css` | Shared design tokens + polish for every page. `book.css` and `toolbox.css` hold page-specific styling. |
| `scripts/build-index.js` | Regenerates the home-page search index from the three content pages. |
| `wrangler.json`, `.assetsignore` | Cloudflare static-assets config and what not to upload. |

Everything is static: no build step to deploy, no server code, relative links only, so it works as-is on Cloudflare (Workers Static Assets / Pages) and GitHub Pages.

### After you change any content

```bash
node scripts/build-index.js   # refreshes the home-page search, then commit index.html
```

### Keeping links healthy

Links rot (three repos and several articles had already moved or vanished). Every URL and YouTube ID was verified on **2026-09-20**. To re-check, extract the URLs (`grep -oE 'https?://[^" ]+'`) and `curl -sI` them; a YouTube video is embeddable if `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>` returns 200. Sites behind bot protection (Cloudflare, Netflix, ACM) answer 403 to scripts but load fine in a browser. When you re-verify, update `CHECKED` in `scripts/build-index.js`.

---

## 🚀 Running Locally

Because YouTube embeds require an HTTP/HTTPS origin to initialize (opening directly via `file://` causes YouTube Error 153), run a lightweight local server:

```bash
# In this directory:
python3 -m http.server 8080
```

Then open your browser to:
```text
http://localhost:8080
```

---

## 🌐 Deploying to the Web (GitHub Pages / Cloudflare Pages)

### Option A: GitHub Pages
1. Push this repository to GitHub.
2. In your repo: Go to **Settings** &rarr; **Pages**.
3. Under **Branch**, select `main` and root `/`, then click **Save**.
4. Your site will be live at `https://<your-username>.github.io/<repo-name>/`.

### Option B: Cloudflare Pages (Fastest Global Edge)
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/) &rarr; **Workers & Pages**.
2. Connect your GitHub repository or drag-and-drop this folder.
3. Your site will be live on Cloudflare's edge network in seconds.

---

## 📜 Credits & Attribution

* **Original System Design Primer:** Created and maintained by [Donne Martin](https://github.com/donnemartin) and the open-source community at [donnemartin/system-design-primer](https://github.com/donnemartin/system-design-primer).
* **Interactive Edition:** Compiled, curated, and enhanced by **HkSolDev** ([@HKsoldev](https://x.com/HKsoldev)).
