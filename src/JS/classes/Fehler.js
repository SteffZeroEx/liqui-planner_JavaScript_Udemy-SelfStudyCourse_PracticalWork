"use sctrict";

class Fehler {

    constructor(fehlertext, formularfehler){
        this._fehlertext = fehlertext;
        this._formularfehler = formularfehler;
        this._html = this._html_generieren();
    }
    _html_generieren(){
        let fehlerbox = document.createElement("div");
        fehlerbox.setAttribute("class", "fehlerbox");

        let fehlertext = document.createElement("span");
        fehlertext.textContent = this._fehlertext;
        fehlerbox.insertAdjacentElement("afterbegin", fehlertext);

        let fehlerliste = document.createElement("ul");
        this._formularfehler.forEach((fehler) => {
            let fehlerlistenpunkt = document.createElement("li");
            fehlerlistenpunkt.textContent = fehler;
            fehlerliste.insertAdjacentElement("beforeend", fehlerlistenpunkt);

        });
        fehlerbox.insertAdjacentElement("beforeend", fehlerliste);
        return fehlerbox;
    }

    _entfernen(){
        let bestehende_fehlerbox = document.querySelector(".fehlerbox");
        if (bestehende_fehlerbox !== null) {
          bestehende_fehlerbox.remove();
        }
    }

    anzeigen(){
        this._entfernen();
        let eingabeformular_container = document.querySelector("#eingabeformular-container");
        if (eingabeformular_container !== null) {
          eingabeformular_container.insertAdjacentElement(
            "afterbegin", this._html
          );
        }
    }
}