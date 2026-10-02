# 🇹🇼 Taiwan CAP Exam Hub & Dual-Booklet Prep Handouts (Years 111–115)

<div align="center">

[![Online Website](https://img.shields.io/badge/Live%20Website-GitHub%20Pages-2563eb?style=for-the-badge&logo=githubpages&logoColor=white)](https://flin1009.github.io/scjh/)
[![License: CC BY-NC-SA 4.0](https://img.shields.io/badge/License-CC%20BY--NC--SA%204.0-34d399?style=for-the-badge)](https://creativecommons.org/licenses/by-nc-sa/4.0/)
[![Exam Years](https://img.shields.io/badge/Years%20Covered-111--115%20(5%20Cohorts)-f59e0b?style=for-the-badge)](#)
[![Format](https://img.shields.io/badge/Layout-A4%20Dual--Booklet%20System-8b5cf6?style=for-the-badge)](#)
[![Data Source](https://img.shields.io/badge/Official%20Data-RCPET%20Psychometrics-ef4444?style=for-the-badge)](https://cap.rcpet.edu.tw/)

<p align="center">
  <b>An open-source digital repository and printing-optimized exam prep system for Taiwan's Comprehensive Assessment Program (CAP) for Junior High School Students.<br>Featuring an innovative "Dual-Booklet Detachable Architecture" (Clean Mock Test Booklets ✕ Rapid-Grading Expert Solution Manuals).</b>
</p>

[🇹🇼 繁體中文說明 (Traditional Chinese)](README.md) • [🌐 Live Demo](https://flin1009.github.io/scjh/) • [📚 Exam Archives](https://flin1009.github.io/scjh/exams/index.html) • [🖨️ Printing SOP](#-a4-printing-best-practices) • [❓ FAQ](#-frequently-asked-questions-faq)

</div>

---

## 📌 Project Overview

The **Comprehensive Assessment Program (CAP / 國中教育會考)** is Taiwan's nationwide standardized examination administered annually to over 180,000 ninth-grade students to assess junior high school learning outcomes and determine high school placement.

Unlike commercial test banks that merely print questions and answers side by side, this project provides a **zero-dependency, modern educational web platform and publishing-grade printable curriculum**. It integrates official psychometric data from the **Research Center for Psychological and Educational Testing (RCPET / 心測中心)** at National Taiwan Normal University, transforming raw past papers into targeted, actionable study handouts designed to propel students from baseline competence (**Level B**) to mastery (**Level A / A++**).

---

## 🌟 Core Innovations & Architecture

### 1. ✂️ The Dual-Booklet Detachable System
Traditional handouts place questions on the left page and answers on the right, which frequently leads students to inadvertently glance at answers during practice. This system separates content cleanly into two sequential halves:
* **Booklet 1 (The Exam Paper / 試題本)**:
  * 100% free of answers or hints.
  * Preserves full-resolution exam diagrams, geometric figures, and generous scratchpad workspace.
  * Equipped with student identification fields (Class / Seat / Name / Score) and official timed conditions for realistic mock tests.
  * Independent pagination: `Test Booklet · Page X`.
* **Booklet 2 (The Expert Solution Manual / 詳解本)**:
  * Opens with a dedicated **⚡ Quick Answer Key** table (grouped in 10-question blocks) allowing students to self-grade within 60 seconds.
  * Includes core mathematical open-ended solution summaries and grade cutoff benchmarks (A/B/C).
  * Structured 3-step remediation method: `Fast Grading ➜ Keyword Spotting ➜ Cognitive Trap Deconstruction`.
  * Independent pagination: `Solution Booklet · Page Y`.
* **Physical Binding Separation**:
  * Utilizes CSS `page-break-before: always; break-before: page;` at the midpoint divider page.
  * When duplex-printed on A4 paper, teachers and students can physically slice or staple the document along the midpoint into two separate booklets.

### 2. 📊 Psychometric Big Data Integration
Each question incorporates official statistical metrics published by RCPET:
* **Pass Rate ($P$-value)**: Indicates empirical difficulty across 180,000+ test takers.
* **Discrimination Index ($D$-value)**: Highlights high-yield questions separating Level A students from Level B students.
* **Strategic Difficulty Matrix**:
  * ★☆☆☆ **Foundational Ground ($P \ge 75\%$)**: Fundamental concepts; 100% accuracy required.
  * ★★☆☆ **Core Intermediate ($60\% \le P < 75\%$)**: Single-concept and standard formula application.
  * ★★★☆ **Level-A Battleground ($45\% \le P < 60\%$)**: Multi-step reasoning and cross-unit synthesis; the decisive battleground for jumping from B to A.
  * ★★★★ **High-Discrimination Challenges ($P < 45\%$)**: Complex literacy scenarios and deep inference.

### 3. 🖨️ Zero-Dependency Print-Optimized CSS Engine
* Built with pure semantic HTML5 and vanilla CSS3. No heavy frameworks, no bloated JavaScript runtime.
* Precision print layout using `@media print` and `@page { size: A4 portrait; margin: 10mm; }`.
* Perfect typographic alignment for complex multi-column layouts, tabular data, and $\LaTeX$ mathematical formulas rendered via MathJax.

---

## 📚 Scope of Coverage (30 Complete Handouts)

The platform provides complete coverage across **5 consecutive examination cohorts (111–115 / 2022–2026)** and **all 6 tested subjects**:

| Subject | Question Format | Annual Cohorts | Questions / Paper | Booklet 1 (Test) | Booklet 2 (Solution) | Total Pages | Pedagogical Strategy |
| :--- | :--- | :---: | :---: | :---: | :---: | :---: | :--- |
| **Chinese (國文)** | 4-Option Multiple Choice & Reading Groups | 111–115 | 42 Qs | 13 pages | 13 pages | **26 pages** | Classical text keyword spotting, informational literacy, diagram text comparison |
| **English (英語)** | Reading Comprehension & Cloze Tests | 111–115 | 43 Qs | 13 pages | 13 pages | **26 pages** | Contextual inference, discourse markers, long-form passage information synthesis |
| **Math (數學)** | 25 Multiple Choice + 2 Open-Ended Constructive | 111–115 | 27 Qs | 12 pages | 12 pages | **24 pages** | MathJax $\LaTeX$ rendering, substitution elimination, step-by-step 3-point rubric |
| **Natural Science (自然)** | Integrated Physics, Chemistry, Biology, Earth Sci | 111–115 | 50 Qs | 15 pages | 15 pages | **30 pages** | Experimental variable analysis, apparatus diagrams, multi-step data interpretation |
| **Social Studies (社會)** | Integrated History, Geography, Civics | 111–115 | 54 Qs | 16 pages | 16 pages | **32 pages** | Topographic contour maps, constitutional legal hierarchies, civic data charts |
| **Writing (寫作測驗)** | Guided Writing & Infographic Tasks | 111–115 | 1 Prompt | 2 pages | 2 pages | **4 pages** | Prompt mission deconstruction, structure outlining, official 4–6 score benchmarks |

---

## 📂 Repository Structure

```text
scjh/
├── index.html                     # Portal homepage (countdown, quick entry, cutoff tables)
├── schedule.html                  # 9th-grade 21-week weekly quiz and mock exam schedule
├── sitemap.xml                    # Complete crawler sitemap (38 indexed URLs)
├── robots.txt                     # Search engine crawler policies
├── README.md                      # Traditional Chinese documentation
├── README.en.md                   # English architecture documentation
│
├── assets/                        # Frontend static assets
│   ├── css/
│   │   ├── style.css              # Core typography, color system & reset
│   │   ├── exams.css              # Exam cards, cutoff matrices & responsive tables
│   │   └── schedule.css           # Timeline & weekly quiz calendar styles
│   ├── js/
│   │   ├── exam-renderer.js       # Dynamic data-driven exam matrix loader
│   │   └── schedule.js            # Calendar filtering and schedule logic
│   └── img/                       # High-resolution social preview and vector badges
│
├── data/
│   └── exams.json                 # Comprehensive JSON database (111–115 exams, links, cutoffs)
│
└── exams/                         # Exam archives & printable handouts
    ├── index.html                 # Past papers catalog overview
    └── [111-115]/                 # Yearly hubs (111, 112, 113, 114, 115)
        ├── index.html             # Annual subject navigation
        ├── 11xP_*.pdf             # Official RCPET past exam PDFs & answer keys
        └── handouts/              # High-definition dual-booklet printable handouts
            ├── chinese.html       # Chinese language & literature handout
            ├── english.html       # English reading handout
            ├── math.html          # Mathematics handout (with open-ended rubrics)
            ├── nature.html        # Natural science handout
            ├── society.html       # Social studies handout
            ├── writing.html       # Writing assessment handout
            └── images/            # High-resolution vector and raster exam figures
```

---

## 🚀 Quick Start & Local Execution

Because the project is engineered entirely with vanilla Web standards, no build pipelines (`npm`, `webpack`, `vite`) or backend servers (`node`, `python`, `php`) are required.

### Method 1: Direct Browser Launch
Simply double-click `index.html` or any handout file (e.g., `exams/115/handouts/math.html`) in Google Chrome, Microsoft Edge, Safari, or Mozilla Firefox.

### Method 2: Local HTTP Server
```bash
# Clone the repository
git clone https://github.com/flin1009/scjh.git
cd scjh

# Launch local server using Python 3
python -m http.server 8000
```
Open `http://localhost:8000` in your web browser.

---

## 🖨️ A4 Printing Best Practices

All 30 subject handouts are pre-configured with print styles. To produce physical paper test booklets:
1. Open any handout in your browser (e.g., `exams/115/handouts/chinese.html`).
2. Press `Ctrl + P` (or `Cmd + P` on macOS).
3. **Mandatory Print Settings**:
   * **Destination**: Select physical printer or `Save as PDF`.
   * **Paper Size**: `A4`.
   * **Layout**: `Portrait`.
   * **Margins**: Set to `None` or `Minimum` (each page has built-in 10mm padding).
   * **Options**: **Check "Background graphics"** (ensures color badges, score boxes, and warning borders print correctly).
4. **Assembly**: After duplex printing, separate the document at the midpoint title page to obtain two clean, standalone booklets.

---

## ❓ Frequently Asked Questions (FAQ)

### Q1: What is the source of the examination papers and statistical metrics?
All original exam questions, official answer keys, difficulty pass rates ($P$), and discrimination indices ($D$) are synchronized directly with publications from the **Research Center for Psychological and Educational Testing (RCPET / 心測中心)** at National Taiwan Normal University.

### Q2: Is this platform suitable for mobile devices?
Yes. The platform is responsive. While handouts are designed with an A4 print layout in mind, they scale fluidly on smartphones and tablets, featuring smooth sticky navigation buttons to jump instantly between Booklet 1 and Booklet 2.

### Q3: Can educators reuse these materials for non-commercial teaching?
Yes. All original pedagogical analyses, keyword guides, trap warnings, and print templates are licensed under **Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International (CC BY-NC-SA 4.0)**. Free educational and non-commercial reuse is actively encouraged.

---

## 👨‍💻 Project Maintainer

* **Author**: [flin1009](https://github.com/flin1009)
* **Mission**: Empowering students and teachers across Taiwan by eliminating educational resource disparities through high-quality, open-source test preparation tools.
* **Contributions**: Feedback, issue reports, and pull requests from educators, developers, and students are warmly welcomed!

---

## ⚖️ Attribution & Legal Notice

1. **Official Exam Materials**:
   - The copyright of the Comprehensive Assessment Program examination questions, official answer keys, and statistical analysis reports belongs to the **Ministry of Education, Taiwan (R.O.C.)** and **RCPET, National Taiwan Normal University**.
   - Official portal: [RCPET Examination Portal](https://cap.rcpet.edu.tw/).
2. **Proprietary Handout Analysis & System**:
   - The dual-booklet architecture, keyword analysis, cognitive trap advisories, and print engine are licensed under [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/). Commercial sale or unauthorized redistribution is strictly prohibited.

---

<div align="center">
  <b>🎓 "Every step counts. Wishing every student success in mastering the CAP exam!"</b>
</div>
