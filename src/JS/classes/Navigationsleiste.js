
export default class Navigationsleiste {

    constructor(){
      this._html = this.html_generieren();
    }

    html_generieren(){
      let navigationsleiste = document.createElement("nav");
      navigationsleiste.setAttribute("id", "navigationsleiste");

      let anker = document.createElement("a");
      anker.setAttribute("href", "#");
    
      let markenname_span = document.createElement("span");
      markenname_span.setAttribute("id", "markenname");
      markenname_span.textContent = "Liqui-Planner";
      anker.insertAdjacentElement("afterbegin", markenname_span);
      navigationsleiste.insertAdjacentElement("afterbegin", anker);
      return navigationsleiste;
    }

    anzeigen(){
     let body = document.querySelector("body");
     if (body !== null) {
      body.insertAdjacentElement("afterbegin", this._html);
     }
    }
}
