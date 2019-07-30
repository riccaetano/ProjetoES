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



document.addEventListener('DOMContentLoaded',function(){
    if(getCookie("role")==1){
            document.getElementById('registarOcorrencia').style.display = "none";
    }
    if(getCookie("role")==3){
        document.getElementById('registarOcorrencia').style.display = "none";
        document.getElementById('alterarOcorrencia').style.display = "none";
        document.getElementById('registarMenu').style.display = "none";
        document.getElementById('relatorios').style.display = "none";
            

}

if(getCookie("role")==2){
    document.getElementById('registarOcorrencia').style.display = "none";
}
if(getCookie("role")==4){
    document.getElementById('alterarOcorrencia').style.display = "none";

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

