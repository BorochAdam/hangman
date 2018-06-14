var password = "Practice makes perfect";
password=password.toUpperCase();

var passwordHidden  = password;

function show_password(){
    document.getElementById("board").innerHTML=password;
}

window.onload=show_password;