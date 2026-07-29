const { globSync } = require('glob');
const fs = require('fs');
const path = require('path');
const { mdToPdf } = require('md-to-pdf');

async function buildPdf() {
  const docsDir = path.resolve(__dirname, 'docs');

  // 1. Alle .md Dateien finden
  const files = globSync('**/*.md', { cwd: docsDir });
  
  // Sortieren (README/index zuerst)
  files.sort((a, b) => {
    if (a.toLowerCase().includes('readme') || a.toLowerCase().includes('index')) return -1;
    if (b.toLowerCase().includes('readme') || b.toLowerCase().includes('index')) return 1;
    return a.localeCompare(b);
  });

  console.log(`Füge ${files.length} Markdown-Dateien sauber zusammen...`);

  let combinedMarkdown = '';

  for (const file of files) {
    const filePath = path.join(docsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Entferne Frontmatter (--- ... ---) falls vorhanden
    content = content.replace(/^---[\s\S]*?---/, '');

    // Füge Seitenumbruch für jede neue Datei ein
    combinedMarkdown += `\n\n<div style="page-break-before: always;"></div>\n\n`;
    combinedMarkdown += content.trim() + '\n\n';
  }

  console.log('Rendere A4 PDF mit md-to-pdf API...');

  // CSS zur Vermeidung von Syntax-Fehlern & Kaputtgerissenen Blöcken
  const customCss = `
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; font-size: 11pt; line-height: 1.6; }
    pre, code { font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, monospace; }
    pre { background: #f6f8fa; padding: 12px; border-radius: 6px; page-break-inside: avoid; }
    table { border-collapse: collapse; width: 100%; page-break-inside: avoid; margin: 15px 0; }
    th, td { border: 1px solid #d0d7de; padding: 6px 13px; }
    th { background-color: #f6f8fa; }
    h1, h2, h3 { page-break-after: avoid; }
  `;

  try {
    // Direktes Rendern aus dem String ohne Shell-Exec!
    const pdf = await mdToPdf(
      { content: combinedMarkdown },
      {
        pdf_options: {
          format: 'A4',
          margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
          printBackground: true,
        },
        css: customCss,
      }
    );

    if (pdf) {
      const finalPdfPath = path.join(__dirname, 'dokumentation-A4.pdf');
      fs.writeFileSync(finalPdfPath, pdf.content);
      console.log(`✅ Fertig! Sauberes A4-PDF wurde erstellt: ${finalPdfPath}`);
    }
  } catch (err) {
    console.error('❌ Fehler bei der Konvertierung:', err);
  }
}

buildPdf();