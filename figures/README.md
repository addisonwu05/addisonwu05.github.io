# Paper teaser figures

Drop a figure in this folder using the exact filename below and it shows up
automatically next to that paper on both `index.html` and `publications.html`.
Any file that isn't here yet is hidden (the entry just renders as plain text),
so you can add them one at a time.

| Filename | Paper |
| --- | --- |
| `segregation.png` | Large Language Models Develop Novel Social Biases Through Adaptive Exploration |
| `ads.png` | Ads in AI Chatbots? An Analysis of How LLMs Navigate Conflicts of Interest |
| `motives.png` | Are Large Language Models Sensitive to the Motives Behind Communication? |
| `mind_your_step.png` | Mind Your Step (by Step) |
| `infrasound.png` | Toward a Neural Network-Based Approach for Improved Atmospheric Infrasound Source Localization |
| `polysemy.png` | Where did the ambiguity go? |
| `rlvr.png` | Quantifying Empirical Compute-Supervision Tradeoffs in RLVR |
| `occludebench.png` | OccludeBench: Can VLMs See the Hint? |
| `query_timing.png` | Query Timing Produces Opposite Positional Biases Between LLMs and Humans |
| `unified_model.png` | Guess the Unified Model |

Notes:

- `.png` is what the HTML points at. To use a `.jpg` instead, change the `src`
  on that entry's `<img>` in both `index.html` and `publications.html`.
- Thumbnails render in a fixed 240x90 box (130x60 on phones, 105x48 on small
  ones) so every entry lines up. Images are scaled to fit, never cropped, so a
  wide-ish crop of the paper's main figure looks best.
- Clicking a thumbnail opens `figures/full/<name>.png` in a new tab. Add a new
  paper's figure to BOTH `figures/` (thumbnail) and `figures/full/`.
- Three sizes per figure: `figures/` is served on the page (≤700px wide),
  `figures/full/` is the click-through (≤1600px wide), and
  `figures/originals/` keeps the untouched export (git-ignored, local only).
- Export around 500–700px wide — enough for retina screens without bloating the
  page. Keep each file well under ~300KB.
