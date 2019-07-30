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
$.get("./getArtigos", function (data) {
    console.log(data);
    data.forEach(result => {
        document.getElementById("tbody").appendChild(criarTabela(
            [result.type, result.description, result.dueDate, result.person, result.status, result.owner, result.deleveryDate]
            ));
        });
    });
}); 


document.addEventListener('DOMContentLoaded',function(){
    if(getCookie("role")==3){
            document.getElementById('registarArtigo').style.display = "none";
            document.getElementById('registarMenu').style.display = "none";
            document.getElementById('relatorios').style.display = "none";
            document.getElementById('levantarArtigo').style.display = "none";
            document.getElementById('eliminarArtigo').style.display = "none";
    };
    if(getCookie("role")==4){
        document.getElementById('registarArtigo').style.display = "none";
};
if(getCookie("role")==2){
    document.getElementById('registarArtigo').style.display = "none";
};
if(getCookie("role")==""){
    document.getElementById('registarArtigo').style.display = "none";
}
if(getCookie("role")==""){

    document.getElementById('registarMenu').style.display = "none";
    document.getElementById('definicoes').style.display = "none";
    document.getElementById('relatorios').style.display = "none";
    document.getElementById('ocorrencias').style.display = "none";
    document.getElementById('artigos').style.display = "none";
    document.getElementById('entradas').style.display = "none";
    
  }
    
  });
