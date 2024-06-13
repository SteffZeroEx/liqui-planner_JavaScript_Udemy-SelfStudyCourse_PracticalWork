"use strict";

// Gesambilanz
let einnahmen = 0,
  ausgaben = 0,
  bilanz = 0,
  titel,
  typ,
  betrag,
  datum;
// Vereinfachung der Schreibweise

const eintrag_erfassen = function () {
  titel = prompt("Titel: (z.B. Einkaufen, Gehalt");
  typ = prompt("Typ: (Einnahme oder Ausgabe)");
  betrag = parseInt(prompt("Betrag: (in Cent)")); // parseInt = Methode -> verwandelt einen String in einen Integer/Number
  datum = prompt("Datum: (jjjj-mm-tt)");
};
// eintrag_erfassen();

const eintrag_ausgeben = function (titel, typ, betrag, datum) {
  console.log(`Titel: ${titel}
    Typ: ${typ}
    Betrag: ${betrag} in ct
    Datum: ${datum}`);
};
// eintrag_ausgeben(titel, typ, betrag, datum);

const eintrag_mit_gesamtbilanz_verrechnen = function (typ, betrag) {
  if (typ === "Einnahme") {
    einnahmen = einnahmen + betrag;
    bilanz = bilanz + betrag;
  } else if (typ == "Ausgabe") {
    ausgaben = ausgaben + betrag;
    bilanz = bilanz - betrag;
  } else {
    console.log(`Der Typ ${typ} ist nicht bekannt!`);
  }
};
// eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);

const gesamtbilanz_ausgeben = function (einnahmen, ausgaben, bilanz) {
  console.log(`Einnahmen: ${einnahmen} ct
      Ausgabe: ${ausgaben} ct
      Bilanz: ${bilanz} ct
      Bilanz ist positiv: ${bilanz >= 0}`);
};
// gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz); <-- kann gelöscht werden, lasse ich aber stehen als Überblick

const eintrag_hinzufuegen = function () {
  eintrag_erfassen();
  eintrag_ausgeben(titel, typ, betrag, datum);
  eintrag_mit_gesamtbilanz_verrechnen(typ, betrag);
  gesamtbilanz_ausgeben(einnahmen, ausgaben, bilanz);
};
eintrag_hinzufuegen();
eintrag_hinzufuegen();
eintrag_hinzufuegen();
eintrag_hinzufuegen();
