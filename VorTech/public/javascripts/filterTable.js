// Ocorrências
function filterOcorrências() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterOcorrencias");
    filter = input.value.toUpperCase();
    table = document.getElementById("ocorrencias");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

  function filterSelectOcorrências() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterEstadoOcorrencias");
    filter = input.value.toUpperCase();
    table = document.getElementById("ocorrencias");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

// Aulas
function filterAulas() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterAulas");
    filter = input.value.toUpperCase();
    table = document.getElementById("aula");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

function filterProfessor() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterProfessor");
    filter = input.value.toUpperCase();
    table = document.getElementById("aula");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

function filterAulaSala() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterAulaSala");
    filter = input.value.toUpperCase();
    table = document.getElementById("aula");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

// Evento

function filterEvento() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterEvento");
    filter = input.value.toUpperCase();
    table = document.getElementById("evento");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

function filterLocal() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterLocal");
    filter = input.value.toUpperCase();
    table = document.getElementById("evento");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

// Salas

function filterSala() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterSala");
    filter = input.value.toUpperCase();
    table = document.getElementById("sala");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

function filterSelectSalas() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterSelectSalas");
    filter = input.value.toUpperCase();
    table = document.getElementById("sala");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

function filterBloco() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterBloco");
    filter = input.value.toUpperCase();
    table = document.getElementById("sala");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

// Materiais

function filterMaterial() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterMaterial");
    filter = input.value.toUpperCase();
    table = document.getElementById("material");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

function filterSelectMaterial() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterSelectMaterial");
    filter = input.value.toUpperCase();
    table = document.getElementById("material");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

// Artigos Perdidos

function filterArtigo() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterArtigo");
    filter = input.value.toUpperCase();
    table = document.getElementById("artigoPerdido");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }

function filterSelectArtigo() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("filterSelectArtigo");
    filter = input.value.toUpperCase();
    table = document.getElementById("artigoPerdido");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
