import { series } from "./data.js";
var seriesTbody = document.getElementById('series');
var avgSeas = document.getElementById("average-seasons");
var divE = document.getElementById("carded");
renderSeriesInTable(series);
avgSeas.innerHTML = "".concat(getAverageSeasons(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td class=\"font-weight-bold\">".concat(c.id, "</td>\n                            <td style= \"color:rgb(0, 150, 255)\">").concat(c.name, "</td>\n                            <td>").concat(c.channel, "</td>\n                            <td>").concat(c.seasons, "</td>");
        seriesTbody.appendChild(trElement);
        trElement.onclick = function () { return crearCard(c); };
    });
}
function getAverageSeasons(seriee) {
    var totalSeason = 0;
    var seas = series.length;
    seriee.forEach(function (serie) { totalSeason = totalSeason + serie.seasons; });
    return "Seasons Average: " + totalSeason / seas;
}
function crearCard(c) {
    divE.innerHTML = "<div class=\"card\" style=\"width: 18rem;\">\n    <div class=\"card-body\">\n    <img src=".concat(c.foto, " class=\"card-img-top\" alt=\"...\">\n    <h5 class=\"card-title\">").concat(c.name, "</h5>\n    <p class=\"card-text\">").concat(c.descripcion, "</p>\n    <a href=\"").concat(c.link, "\" class=\"card-link\">").concat(c.link, "</a>\n    </div>");
}
