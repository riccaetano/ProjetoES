// DIV Consultas
function consultarSalas() {
    document.getElementById('consultas').style.display = "none"
    document.getElementById('consultarSalas').style.display="block"
   }
 
     function consultarMateriais(){
       document.getElementById('consultas').style.display = "none"
       document.getElementById('consultarMateriais').style.display="block"
     }
       
     function consultarAulas(){
       document.getElementById('consultas').style.display = "none"
       document.getElementById('consultarAulas').style.display="block"
       document.getElementById('consultas').innerHTML =  document.getElementById('consultarAulas').innerHTML 
     }
 
     function consultarEventos(){
       document.getElementById('consultas').style.display = "none"
       document.getElementById('consultarEventos').style.display="block"
     }

    
     function registarArtigosPerdidos(){
        document.getElementById('ArtigosPerdidos').style.display = "none"
        document.getElementById('registarArtigosPerdidos').style.display="block"
        }
        function levantarArtigosPerdidos(){
        document.getElementById('ArtigosPerdidos').style.display = "none"
        document.getElementById('levantarArtigosPerdidos').style.display="block"
        }

        function goBack() {
            document.getElementById('ArtigosPerdidos').style.display = "block"
        }

// Search
     function searchSalas() {
           var input, filter, table, tr, td, i, txtValue;
           input = document.getElementById("search");
           filter = input.value.toUpperCase();
           table = document.getElementById("tableSalas");
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

       function searchMaterial() {
           var input, filter, table, tr, td, i, txtValue;
           input = document.getElementById("searchMaterial");
           filter = input.value.toUpperCase();
           table = document.getElementById("tableMateriais");
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

   function searchMaterial() {
           var input, filter, table, tr, td, i, txtValue;
           input = document.getElementById("searchMaterial");
           filter = input.value.toUpperCase();
           table = document.getElementById("tableMateriais");
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

//    function searchOcorrencia() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchOcorrencia");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("tableOcorrencia");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[1];
//         if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             tr[i].style.display = "";
//         } else {
//             tr[i].style.display = "none";
//         }
//         }       
//     }   
// }

   function searchArtigo() {
        var input, filter, table, tr, td, i, txtValue;
        input = document.getElementById("searchArtigo");
        filter = input.value.toUpperCase();
        table = document.getElementById("tableArtigosPerdidos");
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


// function searchAula() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchAulasAula");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("tableAulas");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[0];
//         if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             tr[i].style.display = "";
//         } else {
//             tr[i].style.display = "none";
//         }
//         }       
//     }   
// }

// function searchProfessor() {
//     var input, filter, table, tr, td, i, txtValue;
//     input = document.getElementById("searchAulaProfessor");
//     filter = input.value.toUpperCase();
//     table = document.getElementById("tableAulas");
//     tr = table.getElementsByTagName("tr");
//     for (i = 0; i < tr.length; i++) {
//         td = tr[i].getElementsByTagName("td")[2];
//         if (td) {
//         txtValue = td.textContent || td.innerText;
//         if (txtValue.toUpperCase().indexOf(filter) > -1) {
//             tr[i].style.display = "";
//         } else {
//             tr[i].style.display = "none";
//         }
//         }       
//     }   
// }


// Filtro Estado

function estadoFiltro() {
    var input, filter, table, tr, td, i;
    input = document.getElementById("estado");
    filter = input.value.toUpperCase();
    table = document.getElementById("tableSalas");
    tr = table.getElementsByTagName("tr");
        for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = "";
            } else {
            tr[i].style.display = "none";
            }
        }       
        }
    }