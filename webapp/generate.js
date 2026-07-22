const { execSync } = require('child_process');
const fs = require('fs');
const { mdToPdf } = require('md-to-pdf');

async function main() {
  try {
    console.log('1. Generiere Markdown-Dateien via TypeDoc...');
    execSync('npm run doc:md', { stdio: 'inherit' });

    console.log('2. Füge alle Markdown-Dateien intelligent zusammen...');
    execSync('npx concat-md --toc docs > temp_gesamt.md', { stdio: 'inherit' });

    console.log('3. Konvertiere zu PDF (Timeout deaktiviert für große Dokumente)...');
    
    await mdToPdf(
      { path: 'temp_gesamt.md' },
      {
        output_path: 'docs/api-dokumentation.pdf',
        // Hier deaktivieren wir das 30-Sekunden-Limit für den Browser komplett:
        launch_options: { timeout: 0 } 
      }
    );

    console.log('🎉 Fertig! PDF erfolgreich erstellt unter: docs/api-dokumentation.pdf');

  } catch (error) {
    console.error('Fehler bei der Generierung:', error);
  } finally {
    // Aufräumen
    if (fs.existsSync('temp_gesamt.md')) {
      fs.unlinkSync('temp_gesamt.md');
    }
  }
}

main();