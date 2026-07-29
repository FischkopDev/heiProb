import os
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
import seaborn as sns

# 1. Erfassung der demografischen Daten & technischen Vorkenntnisse (Teil 2: Pre-Test Fragebogen)
# Wir definieren für die 5 Probanden die Antworten basierend auf den vorgegebenen Antwortmöglichkeiten.
raw_pretest_data = {
    "Proband": ["Proband 1", "Proband 2", "Proband 3", "Proband 4", "Proband 5"],
    "Alter": [20, 29, 35, 21, 27],
    "Beruf_Studiengang": ["Informatik-Student", "Projektmanager", "Systemadministrator", "Design-Student", "Marketing-Manager"],
    "IT_Affiniteit": ["Sehr hoch", "Mittel", "Sehr hoch", "Gering", "Mittel"],
    "PM_CRM_Nutzung": ["Nein, nie", "Ja, täglich", "Selten", "Nein, nie", "Ja, wöchentlich"],
    "Betriebssystem": ["Windows", "MacOS", "Linux (jegliche Distributionen)", "MacOS", "Windows"],
    "Browser": ["Google Chrome/Firefox", "Safari", "Google Chrome/Firefox", "Safari", "Edge"]
}

df_pretest = pd.DataFrame(raw_pretest_data)

# Textbasierte Kontrollausgabe im Terminal
print("\n=== STAMMDATEN DER PROBANDEN (PRE-TEST) ===")
print(df_pretest[["Proband", "Alter", "Beruf_Studiengang"]])
print("===========================================\n")

# 2. Visualisierung vorbereiten (2x2 Subplot-Raster für die Kategorien des Fragebogens)
sns.set_theme(style="whitegrid")
fig, axes = plt.subplots(2, 2, figsize=(14, 10))
fig.suptitle("Pre-Test Nutzerprofil der Probanden (n = 5)", fontsize=16, weight="bold", y=0.98)

# Farbpalette für die Diagramme (Professionelles Blau-Grau-Thema)
color_palette = sns.color_palette("Blues_r", 4)

# --- 1. IT-Affinität ---
it_order = ["Sehr gering", "Gering", "Mittel", "Sehr hoch"]
# Zählen und sicherstellen, dass alle Kategorien der Skala vertreten sind (auch wenn 0 Nennungen)
it_counts = df_pretest["IT_Affiniteit"].value_counts().reindex(it_order, fill_value=0)

sns.barplot(x=it_counts.values, y=it_counts.index, ax=axes[0, 0], palette="Blues_d", hue=it_counts.index, legend=False)
axes[0, 0].set_title("Eigene IT-Affinität", fontsize=12, weight="bold")
axes[0, 0].set_xlabel("Anzahl Probanden")
axes[0, 0].set_xlim(0, 5)
axes[0, 0].xaxis.get_major_locator().set_params(integer=True)

# --- 2. Nutzung von PM / CRM-Anwendungen ---
pm_order = ["Ja, täglich", "Ja, wöchentlich", "Selten", "Nein, nie"]
pm_counts = df_pretest["PM_CRM_Nutzung"].value_counts().reindex(pm_order, fill_value=0)

sns.barplot(x=pm_counts.values, y=pm_counts.index, ax=axes[0, 1], palette="Purples_d", hue=pm_counts.index, legend=False)
axes[0, 1].set_title("Nutzung von PM- oder CRM-Software", fontsize=12, weight="bold")
axes[0, 1].set_xlabel("Anzahl Probanden")
axes[0, 1].set_xlim(0, 5)
axes[0, 1].xaxis.get_major_locator().set_params(integer=True)

# --- 3. Betriebssystem ---
os_categories = ["Windows", "MacOS", "Linux (jegliche Distributionen)", "Andere"]
os_counts = df_pretest["Betriebssystem"].value_counts().reindex(os_categories, fill_value=0)

sns.barplot(x=os_counts.values, y=os_counts.index, ax=axes[1, 0], palette="Greens_d", hue=os_counts.index, legend=False)
axes[1, 0].set_title("Genutztes Betriebssystem", fontsize=12, weight="bold")
axes[1, 0].set_xlabel("Anzahl Probanden")
axes[1, 0].set_xlim(0, 5)
axes[1, 0].xaxis.get_major_locator().set_params(integer=True)

# --- 4. Internetbrowser ---
browser_categories = ["Google Chrome/Firefox", "Edge", "Safari", "Andere"]
browser_counts = df_pretest["Browser"].value_counts().reindex(browser_categories, fill_value=0)

sns.barplot(x=browser_counts.values, y=browser_counts.index, ax=axes[1, 1], palette="Oranges_d", hue=browser_counts.index, legend=False)
axes[1, 1].set_title("Verwendeter Internetbrowser", fontsize=12, weight="bold")
axes[1, 1].set_xlabel("Anzahl Probanden")
axes[1, 1].set_xlim(0, 5)
axes[1, 1].xaxis.get_major_locator().set_params(integer=True)

# Absolute Werte direkt in die Balken schreiben
for ax in axes.flat:
    for rect in ax.patches:
        width = rect.get_width()
        y = rect.get_y()
        height = rect.get_height()
        if width > 0: # Nur beschriften, wenn mindestens 1 Proband in der Kategorie ist
            ax.annotate(
                f"{int(width)}",
                (width - 0.25, y + height/2),
                ha="center",
                va="center",
                color="white",
                weight="bold",
                fontsize=10
            )

plt.tight_layout()

# 3. DIAGRAMM ALS PNG SPEICHERN
output_filename = "pretest_nutzerprofil.png"
plt.savefig(output_filename, dpi=300, bbox_inches="tight")
plt.close()

print(f"--> Die Auswertung des Pre-Tests wurde erfolgreich als '{output_filename}' gespeichert!")