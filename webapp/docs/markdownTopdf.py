import os
import markdown
from weasyprint import HTML

def merge_md_to_single_pdf(input_folder, output_pdf_path):
    all_html_content = []
    
    # CSS für das Gesamt-Layout definieren
    css_style = """
    @page { 
        size: A4; 
        margin: 20mm; 
    }
    body { 
        font-family: Arial, sans-serif; 
        line-height: 1.6; 
        color: #333; 
    }
    h1, h2 { color: #2c3e50; }
    pre { background: #f8f9fa; padding: 10px; border-radius: 5px; }
    
    /* Sorgt dafür, dass jede Markdown-Datei auf einer neuen Seite beginnt */
    .md-section { page-break-before: always; }
    .md-section:first-child { page-break-before: avoid; }
    """
    
    print("Suche nach Markdown-Dateien...")
    # Ordnerstruktur rekursiv durchlaufen
    for root, dirs, files in os.walk(input_folder):
        # sortiert die Dateien alphabetisch pro Ordner
        for file in sorted(files):
            if file.endswith('.md'):
                full_md_path = os.path.join(root, file)
                print(f"Lese ein: {full_md_path}")
                
                with open(full_md_path, 'r', encoding='utf-8') as f:
                    text = f.read()
                    # Markdown in HTML-Schnipsel umwandeln
                    html_snippet = markdown.markdown(text, extensions=['extra', 'codehilite'])
                
                # Datei in einen Bereich verpacken
                all_html_content.append(f'<div class="md-section">{html_snippet}</div>')
    
    if not all_html_content:
        print("Keine .md Dateien im angegebenen Ordner gefunden.")
        return

    # Alles zu einem großen HTML-Dokument zusammenfügen
    full_html_string = f"""
    <html>
    <head>
        <meta charset="UTF-8">
        <style>{css_style}</style>
    </head>
    <body>
        {"".join(all_html_content)}
    </body>
    </html>
    """
    
    # Das fertige, einzelne PDF-Dokument erstellen
    print("Generiere finale PDF-Datei...")
    HTML(string=full_html_string).write_pdf(output_pdf_path)
    print(f"Erfolgreich erstellt unter: {output_pdf_path}")

# HIER ANPASSEN:
# 1. Parameter: Der Hauptordner mit deinen Unterordnern und Markdowns
# 2. Parameter: Wo das finale PDF gespeichert werden soll
merge_md_to_single_pdf('./', './pdf/typedocs.pdf')