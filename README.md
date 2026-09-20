# The Reading Library · System Design Primer, Internet Toolbox & AI Engineer Roadmap 🚀

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
* 🔍 **Instant Full-Text Search:** Client-side search indexing across all 24 chapters, video metadata, and article summaries.
* 🖍️ **Local Highlighting:** Select any passage to drop a persistent highlight saved automatically in your browser.
* 🌓 **Dark & Light Mode:** Tailored typography (Source Serif 4, IBM Plex Sans, IBM Plex Mono) with smooth contrast.
* 🧰 **Internet Hidden Toolbox (`toolbox.html`):** An interactive, searchable directory of 51 high-yield web tools, academic research engines (Unpaywall, Elicit, Consensus, Connected Papers), developer terminal tools (Phind, Regex101, ExplainShell, Carbon), privacy shields (VirusTotal, Privnote, Temp-Mail), and cognitive focus audio (Radio Garden, Music For Programming) &mdash; complete with practical use cases, pro tips, instant search, and one-click browser bookmark export.

* 🧭 **AI Engineer Roadmap (`ai-engineer-roadmap.html`):** A free, link-verified 6-stage path to a production-grade AI / LLM engineer role — foundations, LLM internals, advanced RAG, agents, fine-tuning & serving, and LLMOps/evals/security. 44 in-page playable videos, ~90 courses, articles, repos and docs sorted into *Start here / Core / Deep dive* tiers, per-stage checkpoints, 3 portfolio-project briefs, a 16-week plan, and a communities section (Discord, Slack, forums, newsletters). Search, type filters, dark/light mode, and tick-off progress saved in your browser.

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
| `index.html` | The System Design Primer reading edition (the site root). |
| `systemdesignprimerbook.html` | Identical copy of `index.html` kept for older links. **Edit `index.html` and copy it over.** |
| `toolbox.html` | Internet Hidden Toolbox directory. |
| `ai-engineer-roadmap.html` | AI Engineer Roadmap (data lives in the `STAGES` array near the top of its `<script>`). |
| `library.css` | Shared design tokens + polish loaded by all three pages (loaded *after* each page's own `<style>`). |
| `wrangler.json` | Cloudflare static-assets config (`assets.directory = "."`). |

Everything is static — no build step, no server code, relative links only — so it deploys as-is to Cloudflare (Workers Static Assets or Pages) and GitHub Pages.

**Keeping the roadmap fresh:** every URL and YouTube ID was checked on 2026-09-20. Re-check periodically (links rot, repos move — three already had). A quick loop: extract URLs with `grep -oE 'https?://[^" ]+' ai-engineer-roadmap.html` and `curl -sI` each one; YouTube IDs can be checked via `https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=<id>`.

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
