"use strict";

// Gesambilanz

const haushaltsbuch = {
  gesamtbilanz: {
    einnahmen: 0,
    ausgaben: 0,
    bilanz: 0,
  },

  neuer_eintrag: {
    titel: null, // = "nichts" oder "",
    typ: null,
    betrag: null,
    datum: null,
  },

  eintrag_erfassen() {
    this.neuer_eintrag.titel = prompt("Titel: (z.B. Einkaufen, Gehalt");
    this.neuer_eintrag.typ = prompt("Typ: (Einnahme oder Ausgabe)");
    this.neuer_eintrag.betrag = parseInt(prompt("Betrag: (in Cent)")); // parseInt = Methode -> verwandelt einen String in einen Integer/Number
    this.neuer_eintrag.datum = prompt("Datum: (jjjj-mm-tt)");
  },

  eintrag_ausgeben() {
    console.log(`Titel: ${this.neuer_eintrag.titel}
    Typ: ${this.neuer_eintrag.typ}
    Betrag: ${this.neuer_eintrag.betrag} in ct
    Datum: ${this.neuer_eintrag.datum}`);
  },

  eintrag_mit_gesamtbilanz_verrechnen() {
    switch (this.neuer_eintrag.typ) {
      case "Einnahme":
        this.gesamtbilanz.einnahmen += this.neuer_eintrag.betrag;
        this.gesamtbilanz.bilanz += this.neuer_eintrag.betrag;
        break;
      case "Ausgabe":
        this.gesamtbilanz.ausgaben += this.neuer_eintrag.betrag;
        this.gesamtbilanz.bilanz -= this.neuer_eintrag.betrag;
        break;
      default:
        console.log(`Der Typ ${this.neuer_eintrag.typ} ist nicht bekannt!`);
        break;
    }
  },

  gesamtbilanz_ausgeben() {
    console.log(`Einnahmen: ${this.gesamtbilanz.einnahmen} ct
      Ausgabe: ${this.gesamtbilanz.ausgaben} ct
      Bilanz: ${this.gesamtbilanz.bilanz} ct
      Bilanz ist positiv: ${this.gesamtbilanz.bilanz >= 0}`);
  },

  eintrag_hinzufuegen() {
    this.eintrag_erfassen();
    this.eintrag_ausgeben(
      this.neuer_eintrag.titel,
      this.neuer_eintrag.typ,
      this.neuer_eintrag.betrag,
      this.neuer_eintrag.datum
    );
    this.eintrag_mit_gesamtbilanz_verrechnen(
      this.neuer_eintrag.typ,
      this.neuer_eintrag.betrag
    );
    this.gesamtbilanz_ausgeben(
      this.gesamtbilanz.einnahmen,
      this.gesamtbilanz.ausgaben,
      this.gesamtbilanz.bilanz
    );
  },
};
haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();
haushaltsbuch.eintrag_hinzufuegen();
