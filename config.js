module.exports = {
  "body_class": "markdown-body",
  "marked_options": {
    "headerIds": false,
    "smartypants": true,
  },
  "css": `
    .markdown-body {
      font-size: 11px;
      line-height: 1.5;
      word-wrap: break-word;
    }
    a {
      color: #0969da;
    }
    strong a {
      text-decoration: none;
      font-size: 12px;
    }
    p {
      margin-bottom: 0.6em !important;
    }
  `,
  "pdf_options": {
    "format": "A4",
    "margin": "15mm 20mm"
  },
  "stylesheet_encoding": "utf-8"
}
