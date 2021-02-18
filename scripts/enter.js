function login(el){
    var name = document.getElementById("login").value;
    var password = document.getElementById("password").value;
    if (name == "Nikita" && password == "guardian"){
        document.location.href = "/Users/ddomingo/my_own_site/Alma/mainpage.html"
    }
    else{
        alert("Неверный пароль!");
    }
}

function send_mes(el){
    var message = document.getElementById("inp").value;
    if (message.indexOf("ривет")!==-1){
        document.getElementById("answer").innerHTML = "И снова привет! Что привело тебя в наше <p>прекрасное королевство?</p>"
        document.getElementById("inp").value = "";
    }
    else if(message.indexOf("шел к королеве")!==-1 || message.indexOf("Альма")!==-1){
        document.getElementById("answer").innerHTML = "Что бы попасть к нашей королеве, ты должен быть с ней знаком. <p>Поэтому тебе пока нельзя к ней.</p>"
        document.getElementById("inp").value = ""
    }
}

function openmap(el){

}