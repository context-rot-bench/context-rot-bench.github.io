# ContextRotBench project page

Project website for **ContextRotBench: Measuring Long-Horizon Degradation in Coding Agents** by Dylan Lu, Surya Gunukula, Saaket Agashe, Tengxiao Liu, and Xin Eric Wang.

- Website: https://context-rot-bench.github.io/
- Paper: https://openreview.net/forum?id=DiZ67nkfay

This repository contains the static project website, paper figures, poster, and a transcription of the manuscript's results table. The benchmark implementation and dataset are not included; public release links will be added when available.

## Preview locally

From this directory, run `python3 -m http.server 8000`, then open `http://localhost:8000`.

The site is plain HTML, CSS, and JavaScript and needs no build step. Edit `index.html`, `static/css/site.css`, and `static/js/site.js` directly.

## Publish with GitHub Pages

In **Settings → Pages**, select **Deploy from a branch**, choose **main** and **/ (root)**, and save. The repository must support GitHub Pages under its visibility and account plan. `.nojekyll` serves the static files without a Jekyll build.

## Results

`static/data/results.csv` contains all 40 model/metric/condition combinations in the paper's results table, including missing entries. Scores and changes from baseline are in percentage points. Status values are:

- `reported`: result reported without an incomplete-run marker.
- `partial_asterisk`: incomplete evaluation affected by side-task refusal or no-action traces.
- `missing`: missing run, shown as an em dash.

The website retains the manuscript's highlighting: red for a drop greater than 3 points and bold dark red for a drop greater than 6 points. These are descriptive thresholds, not significance tests.

## Design attribution

The layout follows [EnactToM](https://enact-tom.github.io/), whose design credits the [Academic Project Page Template](https://github.com/eliahuhorwitz/Academic-project-page-template) and [Nerfies](https://nerfies.github.io/). This page uses ContextRotBench's own research text and figures.
