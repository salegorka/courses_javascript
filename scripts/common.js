// Задание шахматная доска

function chess () {

    const ColArr = ["A", "B", "C", "D", "E", "F", "G", "H"];

    let chessEl = document.createElement("div");

    let stringHtml = "";

    stringHtml += "<table>";

    stringHtml += "<caption> Шахматная доска </caption>";

    // Первая строка

    stringHtml += "<tr>";

    for (let i = 0; i <= 8; i++) {
        if ( i == 0) {
            stringHtml += "<td> </td>";
        }
        else {
            stringHtml += `<td> ${ColArr[i - 1]} </td>`;
        }
    }

    stringHtml += "</tr>";

    // Восемь строк 

    for (let i = 1; i <= 8; i++) {

        stringHtml += "<tr>";

        for (let j = 0; j <= 8; j++) {

            if (j == 0) {
                stringHtml += `<td> ${i} </td>`;
            }
            else {
                if ( (i + j) % 2 == 0) {
                    stringHtml += "<td class=\"black\"> </td>";
                }
                else {
                    stringHtml += "<td class=\"white\"> </td>";
                }
            }

        }

        stringHtml += "</tr>";
    }

    stringHtml += "</table>" 

    chessEl.innerHTML += stringHtml;

    document.querySelector("body").appendChild(chessEl);
}