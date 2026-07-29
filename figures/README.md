# Paper teaser figures

Drop a figure in this folder using the exact filename below and it shows up
automatically next to that paper on both `index.html` and `publications.html`.
Any file that isn't here yet is hidden (the entry just renders as plain text),
so you can add them one at a time.

| Filename | Paper |
| --- | --- |
| `social-biases.png` | Large Language Models Develop Novel Social Biases Through Adaptive Exploration |
| `ads-chatbots.png` | Ads in AI Chatbots? An Analysis of How LLMs Navigate Conflicts of Interest |
| `motives.png` | Are Large Language Models Sensitive to the Motives Behind Communication? |
| `mind-your-step.png` | Mind Your Step (by Step) |
| `infrasound.png` | Toward a Neural Network-Based Approach for Improved Atmospheric Infrasound Source Localization |
| `polysemous.png` | Where did the ambiguity go? |
| `rlvr-tradeoffs.png` | Quantifying Empirical Compute-Supervision Tradeoffs in RLVR |
| `occludebench.png` | OccludeBench: Can VLMs See the Hint? |
| `positional-bias.png` | Query Timing Produces Opposite Positional Biases Between LLMs and Humans |
| `guess-unified-model.png` | Guess the Unified Model |

Notes:

- `.png` is what the HTML points at. To use a `.jpg` instead, change the `src`
  on that entry's `<img>` in both `index.html` and `publications.html`.
- Displayed at 170px wide (100px on phones), capped at 130px tall, aspect ratio
  preserved. A wide-ish crop of the paper's main figure looks best.
- Export around 500–700px wide — enough for retina screens without bloating the
  page. Keep each file well under ~300KB.
