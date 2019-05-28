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
    $.get("./artigos/getArtigos", function (data) {
        console.log(data);
        data.forEach(result => {
            document.getElementById("tbody").appendChild(criarTabela(
            [result.type, result.description, result.dueDate, result.person, result.deliveryDate, result.status, result.owner, result.description]
                ));
        });
    });
}); 