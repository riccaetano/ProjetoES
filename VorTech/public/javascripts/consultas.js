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
$.get("./getAulas", function (data) {
    console.log(data);
    data.forEach(result => {
        document.getElementById("aulas").appendChild(criarTabela(
            [result.startDate, result.endDate, result.studentClass, result.employee]
            ));
        });
    });
}); 

$(() => {
    $.get("./getEventos", function (data) {
        console.log(data);
        data.forEach(result => {
            document.getElementById("eventos").appendChild(criarTabela(
                [result.name, result.local, result.startDate, result.endDate, result.employee]
                ));
            });
        });
    }); 

    $(() => {
        $.get("./getSalas", function (data) {
            console.log(data);
            data.forEach(result => {
                document.getElementById("salas").appendChild(criarTabela(
                    [result.name, result.section, result.floor, result.status, result.material]
                    ));
                });
            });
        }); 

        $(() => {
            $.get("./getMateriais", function (data) {
                console.log(data);
                data.forEach(result => {
                    document.getElementById("materiais").appendChild(criarTabela(
                        [result.materialId, result.name, result.status, result.description]
                        ));
                    });
                });
            });     
