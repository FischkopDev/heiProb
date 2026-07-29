import os
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

# 1. Daten der Probanden basierend auf dem SUS-Fragebogen (Tabelle 1)
data = {
    "Proband": ["Proband 1", "Proband 2", "Proband 3", "Proband 4", "Proband 5"],
    "Q1": [3, 3, 3, 3, 3],  # Häufig nutzen wollen
    "Q2": [1, 1, 1, 1, 2],  # Unnötig komplex
    "Q3": [3, 1, 2, 1, 1],  # Einfach zu nutzen
    "Q4": [1, 1, 1, 1, 2],  # Technische Unterstützung
    "Q5": [5, 5, 4, 5, 3],  # Gut integriert
    "Q6": [1, 2, 1, 3, 2],  # Zu viele Inkonsistenzen
    "Q7": [5, 5, 5, 5, 4],  # Schnell zu lernen
    "Q8": [5, 5, 4, 5, 4],  # Aufgeräumte Oberfläche
    "Q9": [5, 5, 4, 5, 4],  # Sicher gefühlt
    "Q10":[1, 1, 1, 1, 2],  # Vorwissen aneignen
}

df = pd.DataFrame(data)

# 2. Durchschnittswert für jede Frage (Q1-Q10) berechnen
questions = [f"Q{i}" for i in range(2, 11)]
mean_values = df[questions].mean()

# Erstellen eines neuen DataFrames für die Achsen-Zuordnung
df_means = pd.DataFrame({
    "Aussage": questions,
    "Durchschnittliche_Zustimmung": mean_values
})

# Textbasierte Kontrollausgabe im Terminal
print("\n=== DURCHSCHNITTLICHE ZUSTIMMUNG PRO AUSSAGE ===")
print(df_means.to_string(index=False))
print(f"================================================\n")

# 3. Plot generieren
sns.set_theme(style="whitegrid")
fig, ax = plt.subplots(figsize=(12, 6))

# Balkendiagramm erzeugen: X-Achse = Aussage, Y-Achse = Durchschnittliche Zustimmung
barplot = sns.barplot(
    x="Aussage",
    y="Durchschnittliche_Zustimmung",
    data=df_means,
    color="#2C5282",  # Einheitliches, professionelles Blau
    hue="Aussage",
    legend=False,
    ax=ax,
)

# Neutrale Mitte der Likert-Skala (Wert 3) als Orientierungslinie einzeichnen
ax.axhline(
    y=3.0,
    color="#DD6B20",
    linestyle="--",
    linewidth=1.5,
    label="Neutrale Mitte (Wert 3)",
)

# Exakte Werte als Zahlen über den jeweiligen Säulen platzieren
for p in barplot.patches:
    ax.annotate(
        format(p.get_height(), ".2f"),
        (p.get_x() + p.get_width() / 2.0, p.get_height()),
        ha="center",
        va="center",
        xytext=(0, 9),
        textcoords="offset points",
        weight="bold",
    )

# Achsenbeschriftungen & Layout-Design (Y-Achse wird fest auf 1 bis 5 limitiert)
ax.set_title(
    "Durchschnittliche Zustimmung pro Aussage",
    fontsize=14,
    pad=20,
    weight="bold",
)
ax.set_xlabel("Aussage aller Fragen im SUS inspirierten Fragebogen", fontsize=12, labelpad=10)
ax.set_ylabel("Ø Zustimmungswert (Skala 1 - 5)", fontsize=12, labelpad=10)

# Die Y-Achse bildet jetzt exakt das Antwortspektrum (1 bis 5) deiner Umfrage ab
ax.set_ylim(1, 5.5)  
ax.legend(loc="upper right")
plt.tight_layout()

# 4. DIAGRAMM ALS PNG SPEICHERN
output_filename = "sus_fragen_durchschnitt.png"
plt.savefig(output_filename, dpi=300)
plt.close()

print(f"--> Das Diagramm wurde erfolgreich als '{output_filename}' im Ordner gespeichert!")