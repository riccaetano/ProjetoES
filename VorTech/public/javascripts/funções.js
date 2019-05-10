// Mexer Meny
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
    document.getElementById("errorLogin").style.display = "none";
  }
  
  function closeLogin() {
    document.getElementById("login").style.display = "none";
  }

  function openRegistar() {
    document.getElementById("registarUser").style.display = "block";
    document.getElementById("login").style.display = "none";
    document.getElementById("recuperarPass").style.display = "none";
    document.getElementById("errorLogin").style.display = "none";
  }
  
  function closeRegistar() {
    document.getElementById("registarUser").style.display = "none";
  }

  function openRecuperar() {
    document.getElementById("registarUser").style.display = "none";
    document.getElementById("login").style.display = "none";
    document.getElementById("recuperarPass").style.display = "block";
    document.getElementById("errorLogin").style.display = "none";
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
  }
  
  function closeAdicionarSala() {
    document.getElementById("adicionarSala").style.display = "none";
  }
  

  function openAlterarSala() {
    document.getElementById("alterarSala").style.display = "block";
  }
  
  function closeAlterarSala() {
    document.getElementById("alterarSala").style.display = "none";
  }

  function openEliminarSala() {
    document.getElementById("eliminarSala").style.display = "block";
  }
  
  function closeEliminarSala() {
    document.getElementById("eliminarSala").style.display = "none";
  }

  function openAdicionarSalaMaterial() {
    document.getElementById("adicionarSalaMaterial").style.display = "block";
  }
  
  function closeAdicionarSalaMaterial() {
    document.getElementById("adicionarSalaMaterial").style.display = "none";
  }

  function openAdicionarMaterial() {
    document.getElementById("adicionarMaterial").style.display = "block";
  }
  
  function closeAdicionarMaterial() {
    document.getElementById("adicionarMaterial").style.display = "none";
  }
  

  function openAlterarMaterial() {
    document.getElementById("alterarMaterial").style.display = "block";
  }
  
  function closeAlterarMaterial() {
    document.getElementById("alterarMaterial").style.display = "none";
  }

  function openEliminarMaterial() {
    document.getElementById("eliminarMaterial").style.display = "block";
  }
  
  function closeEliminarMaterial() {
    document.getElementById("eliminarMaterial").style.display = "none";
  }

function openAlterarUser() {
    document.getElementById("alterarUser").style.display = "block";
}

function closeAlterarUser() {
    document.getElementById("alterarUser").style.display = "none";
}


function openEliminarUser() {
    document.getElementById("eliminarUser").style.display = "block";
}

function closeEliminarUser() {
    document.getElementById("eliminarUser").style.display = "none";
}

function openAlterarOcorrencia() {
  document.getElementById("alterarOcorrencia").style.display = "block";
  document.getElementById("eliminarOcorrencia").style.display = "none";
}

function closeAlterarOcorrencia() {
  document.getElementById("alterarOcorrencia").style.display = "none";
}

function openEliminarOcorrencia() {
  document.getElementById("eliminarOcorrencia").style.display = "block";
  document.getElementById("alterarOcorrencia").style.display = "none";
}

function closeEliminarOcorrencia() {
  document.getElementById("eliminarOcorrencia").style.display = "none";
}