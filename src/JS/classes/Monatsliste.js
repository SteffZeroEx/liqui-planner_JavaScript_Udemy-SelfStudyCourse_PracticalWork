export default class Monatsliste {
  constructor(jahr, monat) {
    this._jahr = jahr;
    this._monat = monat;
    this._eintraege = [];
    this._bilanz = 0;
    this._html = this._html_generieren();
  }

  monat() {
    return this._monat;
  }
  jahr() {
    return this._jahr;
  }

  html() {
    return this._html;
  }

  eintrag_hinzufuegen(eintrag) {
    this._eintraege.push(eintrag);
    this._aktualisieren();
  }

  _eintraege_sortieren() {
    this._eintraege.sort((eintrag_a, eintrag_b) => {
      if (eintrag_a.datum() > eintrag_b.datum()) {
        return -1;
      } else if (eintrag_a.datum() < eintrag_b.datum()) {
        return 1;
      } else {
        if (eintrag_a.timestamp() > eintrag_b.timestamp()) {
          return -1;
        } else {
          return 1;
        }
      }
    });
  }

  _bilanzieren() {
    let monatsbilanz = 0;
    this._eintraege.forEach((eintrag) => {
      if (eintrag.typ() === "einnahme") {
        monatsbilanz += eintrag.betrag();
      } else {
        monatsbilanz -= eintrag.betrag();
      }
    });
    this._bilanz = monatsbilanz;
  }

  _html_generieren() {
    let monatsliste = document.createElement("article");
    monatsliste.setAttribute("class", "monatsliste");

    let ueberschrift = document.createElement("h2");

    let span_monat_jahr = document.createElement("span");
    span_monat_jahr.setAttribute("class", "monat-jahr");
    span_monat_jahr.textContent = `${new Date(this._jahr, this._monat - 1).toLocaleString("de-DE", {
      month: "long",
      year: "numeric",
    })}`;
    ueberschrift.insertAdjacentElement("afterbegin", span_monat_jahr);

    let span_monatsbilanz = document.createElement("span");
    span_monatsbilanz.setAttribute("class", "monatsbilanz");
    if (this._bilanz >= 0) {
      span_monatsbilanz.setAttribute("class", "monatsbilanz positiv");
    } else {
      span_monatsbilanz.setAttribute("class", "monatsbilanz negativ");
    }
    span_monatsbilanz.textContent = `${(this._bilanz / 100).toFixed(2).replace(/\./, ",")} €`;
    ueberschrift.insertAdjacentElement("beforeend", span_monatsbilanz);
    monatsliste.insertAdjacentElement("afterbegin", ueberschrift);

    let eintragsliste = document.createElement("ul");
    this._eintraege.forEach((eintrag) => {
      eintragsliste.insertAdjacentElement("beforeend", eintrag.html());
    });
    monatsliste.insertAdjacentElement("beforeend", eintragsliste);
    return monatsliste;
  }
  _aktualisieren() {
    this._eintraege_sortieren();
    this._bilanzieren();
    this._html = this._html_generieren();
  }
}
