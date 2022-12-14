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
