function criarTabela(conteudo) {
    var tr = document.createElement('tr');
    for (var i = 0; i < conteudo.length; i++) {
        var td = document.createElement('td');
        td.textContent = conteudo[i];
        tr.appendChild(td);
    }
    return tr;
}

$(() => {
    $.get("./getOcorrencias", function (data) {
        console.log(data);
        data.forEach(result => {
            document.getElementById("tbody").appendChild(criarTabela(
                [result.incidentId, result.incidentDate, result.description, result.status,result.priority, result.local, result.user, result.incidentCreate]
            ));
        });
    });
}); 