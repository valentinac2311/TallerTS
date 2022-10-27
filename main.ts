import { Serie } from "./serie.js";
import { series } from "./data.js";
let seriesTbody: HTMLElement = document.getElementById('series')!;
let avgSeas: HTMLElement = document.getElementById("average-seasons")!;
let divE: HTMLElement = document.getElementById("carded")!;
renderSeriesInTable(series);
avgSeas.innerHTML = `${getAverageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML =  `<td class="font-weight-bold">${c.id}</td>
                            <td style= "color:rgb(0, 150, 255)">${c. name}</td>
                            <td>${c. channel}</td>
                            <td>${c. seasons}</td>`;
    seriesTbody.appendChild(trElement);
    trElement.onclick= () => crearCard(c);
  });
}
function getAverageSeasons(seriee: Serie[]): string {
    let totalSeason: number = 0;
    let seas: number= series.length;
    seriee.forEach(serie => { totalSeason = totalSeason + serie.seasons; });
    return "Seasons Average: " + totalSeason/seas;
}

function crearCard(c: Serie) {
    divE.innerHTML =`<div class="card" style="width: 18rem;">
    <div class="card-body">
    <img src=${c. foto} class="card-img-top" alt="...">
    <h5 class="card-title">${c. name}</h5>
    <p class="card-text">${c. descripcion}</p>
    <a href="${c. link}" class="card-link">${c. link}</a>
    </div>`;
}
