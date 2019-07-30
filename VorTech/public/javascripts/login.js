
    if(getCookie("numIps")==""){
        document.getElementById("logoutButton").style.display="none";
        document.getElementById("loginButton").style.display="inline-block";
    }else{
        document.getElementById("logoutButton").style.display="inline-block";
        document.getElementById("loginButton").style.display="none";
        
    }

function deleteCookies(){
    setCookie("numIps","");
    setCookie("cc","");
    setCookie("username","");
    setCookie("role","");
    setCookie("password","");
    window.location.replace("index.html");
}


document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();
    fazerLogin();
});
function fazerLogin() {

    var nIPS = document.getElementById("numeroIPS").value;
    var password = document.getElementById("password").value;
    var json = { "nIPS": nIPS, "password": password };

    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("POST", document.location.origin + "/login", true);
    xhr.onload = function () {

        if (xhr.readyState == 4 && xhr.status == "200") {
            if (xhr.response.Message=="WrongCombination"){
                window.location.replace("loginError.html");
            }else if (xhr.response.Message=="SystemError"){
            }else if (xhr.response.Message=="Success"){
                document.cookie=
            setCookie("numIps",xhr.response.numIps,10);
            setCookie("cc",xhr.response.cc,10);
            setCookie("username",xhr.response.username,10);
            setCookie("role",xhr.response.role,10);
            setCookie("password",xhr.response.passsword,10);
            window.location.replace("index.html");
        }
            } else {
            console.error("erro consola");
            }
    }
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(json));
    //alert(nIPS+"-"+password);

};

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

  document.addEventListener('DOMContentLoaded',function(){

    if(getCookie("role")==3){

      document.getElementById('registarMenu').style.display = "none";
      document.getElementById('relatorios').style.display = "none";
      
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

