'use strict';

// Eingabedaten holen
let titel_1 = prompt('Titel:', 'z.B. Einkaufen, Gehalt');
console.log(titel_1);
let typ = prompt('Typ:', 'Einnahme oder Ausgabe');
console.log(typ_1);
let betrag_1 = prompt('Betrag (in Cent):', 'z.B. 2544');
// z.B. 2064,56€ -> 206456 Cent
console.log(betrag_1);
let datum = prompt('Datum (jjjj-mm-tt):');
console.log(datum);

// Gesambilanz
let einnahmen;
let ausgaben;
let bilanz;