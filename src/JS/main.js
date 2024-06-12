'use strict';

// Eingabedaten holen
let titel_1 = prompt('Titel: (z.B. Einkaufen, Gehalt)');
console.log(`Titel: ${titel_1}`);
let typ_1 = prompt('Typ: (Einnahme oder Ausgabe)');
console.log(`Typ: ${typ_1}`);
let betrag_1 = parseInt(prompt('Betrag: (in Cent)'));
console.log(betrag_1);
// z.B. 2064,56€ -> 206456 Cent
console.log(`Betrag: ${betrag_1} ct`);
let datum_1 = prompt('Datum (jjjj-mm-tt):');
console.log(`Datum: ${datum_1}`);

// Eingabedaten 2 holen
let titel_2 = prompt("Titel: (z.B. Einkaufen, Gehalt)");
console.log(`Titel: ${titel_2}`);
let typ_2 = prompt("Typ: (Einnahme oder Ausgabe)");
console.log(`Typ: ${typ_2}`);
let betrag_2 = parseInt(prompt("Betrag: (in Cent)")); // parseInt = Methode -> verwandelt einen String in einen Integer/Number
console.log(betrag_2);
console.log(`Betrag: ${betrag_2} ct`);
let datum_2 = prompt("Datum: (jjjj-mm-tt");
console.log(`Datum: ${datum_2}`);


// Gesambilanz
let einnahmen;
let ausgaben;
let bilanz = betrag_1 + betrag_2;
console.log(`Bilanz: ${bilanz}`);

let positiv = bilanz >= 0;
console.log(`Bilanz ist positiv: ${positiv}`);