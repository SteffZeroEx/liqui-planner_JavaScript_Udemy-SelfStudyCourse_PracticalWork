"use strict";

// Gesamtbilanz

const haushaltsbuch = {
  gesamtbilanz: new Map(),
  eintraege: [],
  fehler: [],

  eintrag_erfassen() {
    let neuer_eintrag = new Map();
    neuer_eintrag.set(
      "titel",
      this.titel_verarbeiten(prompt("Titel: (z.B. Einkaufen, Gehalt"))
    );
    neuer_eintrag.set(
      "typ",
      this.typ_verarbeiten(prompt("Typ: (Einnahme oder Ausgabe)"))
    );
    neuer_eintrag.set(
      "betrag",
      this.betrag_verarbeiten(prompt("Betrag: (in Euro, ohne €-Zeichen)"))
    );
    neuer_eintrag.set(
      "datum",
      this.datum_verarbeiten(prompt("Datum: (jjjj-mm-tt)"))
    );
    neuer_eintrag.set("timestamp", Date.now());
    if (this.fehler.length === 0) {
      this.eintraege.push(neuer_eintrag);
    } else {
      console.log("Folgende Fehler wurden gefunden:");
      this.fehler.forEach(function (fehler) {
        console.log(fehler);
      });
    }
    
  },

  titel_verarbeiten(titel) {
    titel = titel.trim();
    if (this.betrag_validieren(titel)) {
      return titel;
    } else {
       this.fehler.push(`Kein Titel angegeben.`);
     
    }
  },
  titel_validieren(titel) {
    if (titel !== "") {
      return true;
    } else {
      return false;
    }
  },

  typ_verarbeiten(typ) {
    typ = typ.trim().toLowerCase();
    if (this.betrag_validieren(typ)) {
      return typ;
    } else {
      this.fehler.push(`Ungültiger Eintragstyp: "${typ}".`);
      
    }
  },
  typ_validieren(typ) {
    if (typ.match(/^(?:einnahme|ausgabe)$/i) !== null) {
      return true;
    } else {
      return false;
    }
  },

  betrag_verarbeiten(betrag) {
    betrag = betrag.trim();
    if (this.betrag_validieren(betrag)) {
      return parseFloat(betrag.replace(",", ".")) * 100;
    } else {
      this.fehler.push(`Ungültiger Betrag: ${betrag} €`);
      
    }
  },
  betrag_validieren(betrag) {
    if (betrag.match(/^\d+(?:(?:,|\.)\d\d?)?$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  datum_verarbeiten(datum) {
    datum = datum.trim();
    if (this.datum_validieren(datum)) {
      return new Date(`${datum} 00:00:00`);
    } else {
      this.fehler.push(`Ungültiges Datumsformat: "${datum}".`);
      
    }
  },
  datum_validieren(datum) {
    if (datum.match(/^\d{4}-\d{2}-\d{2}$/) !== null) {
      return true;
    } else {
      return false;
    }
  },

  eintraege_sortieren() {
    this.eintraege.sort(function (eintrag_a, eintrag_b) {
      if (eintrag_a.get("datum") > eintrag_b.get("datum")) {
        return -1;
      } else if (eintrag_a.get("datum") < eintrag_b.get("datum")) {
        return 1;
      } else {
      }
    });
  },

  eintraege_ausgeben() {
    console.clear();
    this.eintraege.forEach(function (eintrag) {
      console.log(
        `Titel: ${eintrag.get("titel")}\n` +
          `Typ: ${eintrag.get("typ")}\n` +
          `Betrag: ${(eintrag.get("betrag") / 100).toFixed(2)} €\n` +
          `Datum: ${eintrag.get("datum").toLocalDateString("de-DE", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
          })}` +
          `Timestamp: ${eintrag.get("timestamp")}\n`
      );
    });
  },

  gesamtbilanz_erstellen() {
    let neue_gesamtbilanz = new Map();
    neue_gesamtbilanz.set("einnahmen", 0);
    neue_gesamtbilanz.set("ausgabe", 0);
    neue_gesamtbilanz.set("bilanz", 0);
    this.eintraege.forEach(function (eintrag) {
      switch (eintrag.get("typ")) {
        case "einnahme":
          neue_gesamtbilanz.set(
            "einnahmen",
            neue_gesamtbilanz.get("einnahmen") + eintrag.get("betrag")
          );
          neue_gesamtbilanz.set(
            "bilanz",
            neue_gesamtbilanz.get("bilanz") + eintrag.get("betrag")
          );
          break;
        case "ausgabe":
          neue_gesamtbilanz.set(
            "ausgaben",
            neue_gesamtbilanz.get("ausgaben") + eintrag.get("betrag")
          );
          neue_gesamtbilanz.set(
            "bilanz",
            neue_gesamtbilanz.get("bilanz") - eintrag.get("betrag")
          );
          break;
        default:
          console.log(`Der Typ ${eintrag.get("typ")} ist nicht bekannt!`);
          break;
      }
    });
    this.gesamtbilanz = neue_gesamtbilanz;
  },

  gesamtbilanz_ausgeben() {
    console.log(
      `Einnahmen: ${(this.gesamtbilanz.get("einnahmen") / 100).toFixed(
        2
      )} €\n` +
        `Ausgabe: ${(this.gesamtbilanz.get("ausgaben") / 100).toFixed(2)} €\n` +
        `Bilanz: ${(this.gesamtbilanz.get("bilanz") / 100).toFixed(2)} €\n` +
        `Bilanz ist positiv: ${this.gesamtbilanz.get("bilanz") / 100 >= 0}\n`
    );
  },

  eintrag_hinzufuegen() {
    let weiterer_eintrag = true;

    while (weiterer_eintrag) {
      this.eintrag_erfassen();
      if (this.fehler.length === 0) {
        this.eintraege_sortieren();
        this.eintraege_ausgeben();
        this.gesamtbilanz_erstellen();
        this.gesamtbilanz_ausgeben();
      } else {
        this.fehler = [];
      }
      weiterer_eintrag = confirm("Weiteren Eintrag hinzufügen?");
    }
  },
};

haushaltsbuch.eintrag_hinzufuegen();

console.log(haushaltsbuch);
