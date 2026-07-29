import os
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

# 1. Erfassung des Erfolgsstatus pro Proband für alle 6 Szenarien (aus Teil 6 / Tabelle 2)
# Wir definieren für die 5 Probanden die erreichten Status-Werte:
# "Erfolgreich", "Mit Hilfe", "Abgebrochen"
raw_data = {
    "Proband": ["Proband 1", "Proband 2", "Proband 3", "Proband 4", "Proband 5"],
    "Szenario 1": ["Erfolgreich", "Erfolgreich", "Erfolgreich", "Mit Hilfe", "Erfolgreich"],
    "Szenario 2": ["Erfolgreich", "Erfolgreich", "Abgebrochen", "Erfolgreich", "Erfolgreich"],
    "Szenario 3": ["Erfolgreich", "Erfolgreich", "Erfolgreich", "Erfolgreich", "Mit Hilfe"],
    "Szenario 4": ["Mit Hilfe", "Abgebrochen", "Mit Hilfe", "Erfolgreich", "Erfolgreich"],
    "Szenario 5": ["Mit Hilfe", "Abgebrochen", "Erfolgreich", "Erfolgreich", "Erfolgreich"],
    "Szenario 6": ["Erfolgreich", "Erfolgreich", "Erfolgreich", "Erfolgreich", "Erfolgreich"]
}

df_raw = pd.DataFrame(raw_data)

# Liste aller Szenarien generieren
scenarios = [f"Szenario {i}" for i in range(1, 7)]

# 2. Daten transformieren, um die Häufigkeiten der Status-Klassen pro Szenario zu zählen
status_counts = []
for scenario in scenarios:
    counts = df_raw[scenario].value_counts()
    status_counts.append({
        "Szenario": scenario,
        "Erfolgreich": counts.get("Erfolgreich", 0),
        "Mit Hilfe": counts.get("Mit Hilfe", 0),
        "Abgebrochen": counts.get("Abgebrochen", 0)
    })

df_plot = pd.DataFrame(status_counts).set_index("Szenario")

# Textbasierte Kontrollausgabe im Terminal
print("\n=== ERFOLGSSTATUS DER SZENARIEN (TABELLE 2) ===")
print(df_plot)
print(f"================================================\n")

# 3. Plot generieren (Gestapeltes Balkendiagramm)
sns.set_theme(style="whitegrid")
fig, ax = plt.subplots(figsize=(12, 7))

# Farbpalette passend zum Thema Usability-Erfolg (Grün = Erfolg, Gelb = Mit Hilfe, Rot = Abgebrochen)
colors = ["#2F855A", "#ECC94B", "#C53030"]

# Plotten der gestapelten horizontalen Balken
df_plot.plot(
    kind="barh",
    stacked=True,
    color=colors,
    ax=ax,
    width=0.6
)

# absolute Werte direkt in die Balkensegmente schreiben (für bessere Lesbarkeit)
for rect in ax.patches:
    width, height = rect.get_width(), rect.get_height()
    x, y = rect.get_xy()
    if width > 0: # Nur beschriften, wenn das Segment existiert
        ax.annotate(
            f"{int(width)}",
            (x + width/2, y + height/2),
            ha="center",
            va="center",
            color="white" if rect.get_facecolor() != (0.9254901960784314, 0.788235294117647, 0.29411764705882354, 1.0) else "black", # Textlesbarkeit sichern
            weight="bold",
            fontsize=11
        )

# Achsenbeschriftungen & Layout-Design
ax.set_title(
    "Erfolgsstatus der szenariobasierten Testaufgaben (n = 5 Probanden)",
    fontsize=14,
    pad=20,
    weight="bold",
)
ax.set_xlabel("Anzahl der Probanden", fontsize=12, labelpad=10)
ax.set_ylabel("Szenario", fontsize=12, labelpad=10)

# Begrenzung der X-Achse auf die maximale Probandenzahl (5)
ax.set_xlim(0, 5)
ax.xaxis.get_major_locator().set_params(integer=True) # Nur ganze Zahlen anzeigen

# Legende ordentlich formatieren
ax.legend(
    title="Erfolgsstatus", 
    loc="upper center", 
    bbox_to_anchor=(0.5, -0.12), 
    ncol=3, 
    frameon=True
)

# Reihenfolge der Y-Achse umkehren, damit Szenario 1 oben steht
ax.invert_yaxis()

plt.tight_layout()

# 4. DIAGRAMM ALS PNG SPEICHERN
output_filename = "usability_erfolgsstatus.png"
plt.savefig(output_filename, dpi=300, bbox_inches="tight")
plt.close()

print(f"--> Das neue Diagramm wurde erfolgreich als '{output_filename}' gespeichert!")