// Mexer Menu
function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
    }
    
    function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
    }
    
// Esconder Divs

function requisitarSalas() {
    document.getElementById('requisitarSalas').style.display = "block"
    document.getElementById('requisitarMateriais').style.display = "none"
    document.getElementById('registarEventos').style.display="none"
}
   
function requisitarMateriais() {
    document.getElementById('requisitarSalas').style.display = "none"
    document.getElementById('requisitarMateriais').style.display = "block"
    document.getElementById('registarEventos').style.display="none"
}

  function registarEventos(){
    document.getElementById('requisitarSalas').style.display = "none"
    document.getElementById('requisitarMateriais').style.display = "none"
    document.getElementById('registarEventos').style.display="block"
  }

function perfil() {
    document.getElementById('perfil').style.display = "block"
    document.getElementById('gerirUsers').style.display = "none"
    document.getElementById('gerirSalas').style.display="none"
    document.getElementById('gerirMateriais').style.display = "none"
}

function gerirUsers() {
    document.getElementById('perfil').style.display = "none"
    document.getElementById('gerirUsers').style.display = "block"
    document.getElementById('gerirSalas').style.display="none"
    document.getElementById('gerirMateriais').style.display = "none"
}
   

function gerirMateriais() {
    document.getElementById('perfil').style.display = "none"
    document.getElementById('gerirUsers').style.display = "none"
    document.getElementById('gerirSalas').style.display="none"
    document.getElementById('gerirMateriais').style.display = "block"
}


function gerirSalas() {
    document.getElementById('perfil').style.display = "none"
    document.getElementById('gerirUsers').style.display = "none"
    document.getElementById('gerirSalas').style.display="block"
    document.getElementById('gerirMateriais').style.display = "none"
}
   
function consultarArtigo() {
    document.getElementById('consultarArtigo').style.display = "block"
    document.getElementById('registarArtigo').style.display = "none"
    document.getElementById('levantarArtigo').style.display = "none"
}
   
function registarArtigo() {
    document.getElementById('consultarArtigo').style.display = "none"
    document.getElementById('registarArtigo').style.display = "block"
    document.getElementById('levantarArtigo').style.display = "none"
}

function levantarArtigo() {
    document.getElementById('consultarArtigo').style.display = "none"
    document.getElementById('registarArtigo').style.display = "none"
    document.getElementById('levantarArtigo').style.display = "block"
}

function consultarSalas() {
    document.getElementById('consultarSalas').style.display = "block"
    document.getElementById('consultarMateriais').style.display = "none"
    document.getElementById('consultarEventos').style.display="none"
    document.getElementById('consultarAulas').style.display="none"
}
   
function consultarMateriais() {
    document.getElementById('consultarSalas').style.display = "none"
    document.getElementById('consultarMateriais').style.display = "block"
    document.getElementById('consultarEventos').style.display="none"
    document.getElementById('consultarAulas').style.display="none"
}
function consultarEventos() {
    document.getElementById('consultarSalas').style.display = "none"
    document.getElementById('consultarMateriais').style.display = "none"
    document.getElementById('consultarEventos').style.display="block"
    document.getElementById('consultarAulas').style.display="none"
}
function consultarAulas() {
    document.getElementById('consultarSalas').style.display = "none"
    document.getElementById('consultarMateriais').style.display = "none"
    document.getElementById('consultarEventos').style.display="none"
    document.getElementById('consultarAulas').style.display="block"
}

function consultarOcorrencias() {
    document.getElementById('consultarOcorrencias').style.display = "block"
    document.getElementById('registarOcorrencias').style.display = "none"
}
   
function registarOcorrencias() {
    document.getElementById('consultarOcorrencias').style.display = "none"
    document.getElementById('registarOcorrencias').style.display = "block"
}

function registarEntrada() {
    document.getElementById('registarEntrada').style.display = "block"
    document.getElementById('registarSaida').style.display = "none"
}
   
function registarSaida() {
    document.getElementById('registarEntrada').style.display = "none"
    document.getElementById('registarSaida').style.display = "block"
}


// Login, Registar User e Recuperar Password
function openLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("registarUser").style.display = "none";
    document.getElementById("recuperarPass").style.display = "none";
  }

function closeLogin() {
    document.getElementById("login").style.display = "none";
  }

function openRegistar() {
    document.getElementById("registarUser").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("recuperarPass").style.display = "none";
  }
  
  function closeRegistar() {
    document.getElementById("registarUser").style.display = "none";
  }

  function openRecuperar() {
    document.getElementById("registarUser").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("recuperarPass").style.display = "block";
  }
  
  function closeRecuperar() {
    document.getElementById("recuperarPass").style.display = "none";
  }

  function openAlterarPass() {
    document.getElementById("alterarPass").style.display = "block";
  }
  
  function closeAlterarPass() {
    document.getElementById("alterarPass").style.display = "none";
  }

  function openAdicionarSala() {
    document.getElementById("adicionarSala").style.display = "block";
    document.getElementById("alterarSala").style.display = "none";
    document.getElementById("eliminarSala").style.display = "none";
    document.getElementById("adicionarSalaMaterial").style.display = "none";
  }
  
  function closeAdicionarSala() {
    document.getElementById("adicionarSala").style.display = "none";
  }
  

  function openAlterarSala() {
    document.getElementById("adicionarSala").style.display = "none";
    document.getElementById("alterarSala").style.display = "block";
    document.getElementById("eliminarSala").style.display = "none";
    document.getElementById("adicionarSalaMaterial").style.display = "none";
  }
  
  function closeAlterarSala() {
    document.getElementById("alterarSala").style.display = "none";
  }

  function openEliminarSala() {
    document.getElementById("adicionarSala").style.display = "none";
    document.getElementById("alterarSala").style.display = "none";
    document.getElementById("eliminarSala").style.display = "block";
    document.getElementById("adicionarSalaMaterial").style.display = "none";
  }
  
  function closeEliminarSala() {
    document.getElementById("eliminarSala").style.display = "none";
  }

  function openAdicionarSalaMaterial() {
    document.getElementById("adicionarSala").style.display = "none";
    document.getElementById("alterarSala").style.display = "none";
    document.getElementById("eliminarSala").style.display = "none";
    document.getElementById("adicionarSalaMaterial").style.display = "block";
  }
  
  function closeAdicionarSalaMaterial() {
    document.getElementById("adicionarSalaMaterial").style.display = "none";
  }

  function openAdicionarMaterial() {
    document.getElementById("adicionarMaterial").style.display = "block";
    document.getElementById("alterarMaterial").style.display = "none";
    document.getElementById("eliminarMaterial").style.display = "none";
  }
  
  function closeAdicionarMaterial() {
    document.getElementById("adicionarMaterial").style.display = "none";
  }
  

  function openAlterarMaterial() {
    document.getElementById("adicionarMaterial").style.display = "none";
    document.getElementById("alterarMaterial").style.display = "block";
    document.getElementById("eliminarMaterial").style.display = "none";
  }
  
  function closeAlterarMaterial() {
    document.getElementById("alterarMaterial").style.display = "none";
  }

  function openEliminarMaterial() {
    document.getElementById("adicionarMaterial").style.display = "none";
    document.getElementById("alterarMaterial").style.display = "none";
    document.getElementById("eliminarMaterial").style.display = "block";
  }
  
  function closeEliminarMaterial() {
    document.getElementById("eliminarMaterial").style.display = "none";
  }

function openAlterarUser() {
    document.getElementById("alterarUser").style.display = "block";
    document.getElementById("eliminarUser").style.display = "none";
}

function closeAlterarUser() {
    document.getElementById("alterarUser").style.display = "none";
}


function openEliminarUser() {
  document.getElementById("alterarUser").style.display = "none";
  document.getElementById("eliminarUser").style.display = "block";
}

function closeEliminarUser() {
    document.getElementById("eliminarUser").style.display = "none";
}

function openAlterarOcorrencia() {
  document.getElementById("alterarOcorrencia").style.display = "block";
  document.getElementById("eliminarOcorrencia").style.display = "none";
  document.getElementById("alterarEstadoOcorrencia").style.display = "none";
}

function closeAlterarOcorrencia() {
  document.getElementById("alterarOcorrencia").style.display = "none";
}

function openEliminarOcorrencia() {
  document.getElementById("eliminarOcorrencia").style.display = "block";
  document.getElementById("alterarOcorrencia").style.display = "none";
  document.getElementById("alterarEstadoOcorrencia").style.display = "none";
}

function closeEliminarOcorrencia() {
  document.getElementById("eliminarOcorrencia").style.display = "none";
}

function openEliminarArtigo() {
  document.getElementById("eliminarArtigo").style.display = "block";
}

function closeEliminarArtigo() {
  document.getElementById("eliminarArtigo").style.display = "none";
}


function openAlterarEstadoOcorrencia() {
  document.getElementById("alterarEstadoOcorrencia").style.display = "block";
  document.getElementById("eliminarOcorrencia").style.display = "none";
  document.getElementById("alterarOcorrencia").style.display = "none";
}

function closeAlterarEstadoOcorrencia() {
  document.getElementById("alterarEstadoOcorrencia").style.display = "none";
}

function openGerarRelatorio() {
  document.getElementById("gerarRelatorio").style.display = "block";
}

function closeGerarRelatorio() {
  document.getElementById("gerarRelatorio").style.display = "none";
}

function openAlterarEvento() {
  document.getElementById("alterarEvento").style.display = "block";
  document.getElementById("eliminarEvento").style.display = "none";
}

function closeAlterarEvento() {
  document.getElementById("alterarEvento").style.display = "none";
}

function openEliminarEvento() {
  document.getElementById("alterarEvento").style.display = "none";
  document.getElementById("eliminarEvento").style.display = "block";
}

function closeEliminarEvento() {
  document.getElementById("eliminarEvento").style.display = "none";
}


function goBack() {
  window.history.back();
}


function setStyleSheet(){
  var stylesheet = document.getElementById("temas").value;
  // var value = stylesheet;
  // var css = document.getElementById("temaCSS");
  // css.setAttribute('href', value);
  // console.log(value);
  console.log(stylesheet);
  // console.log(css);

  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
      if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
        a.disabled = true;
        console.log("1")
        document.get
      } else if(a.getAttribute("title") == title){
        a.disabled = false;
        console.log("2");
      } else {
        console.log("3");
      }
    }

}



function setActiveStyleSheet(title) {
  var i, a, main;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;
      if(a.getAttribute("title") == title) a.disabled = false;
    }
  }
}

function getActiveStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) return a.getAttribute("title");
  }
  return null;
}

function getPreferredStyleSheet() {
  var i, a;
  for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1
       && a.getAttribute("rel").indexOf("alt") == -1
       && a.getAttribute("title")
       ) return a.getAttribute("title");
  }
  return null;
}

function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}

window.onload = function(e) {
  var cookie = readCookie("style");
  var title = cookie ? cookie : getPreferredStyleSheet();
  setActiveStyleSheet(title);
}

window.onunload = function(e) {
  var title = getActiveStyleSheet();
  createCookie("style", title, 365);
}

var cookie = readCookie("style");
var title = cookie ? cookie : getPreferredStyleSheet();
setActiveStyleSheet(title);

function activeStyle() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("temas");
  for(i=0; (a= input[i]); i++) {
    if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
      a.disabled = true;}
      if(a.getAttribute("title") == title) {a.disabled = false;}
    }
}