
document.getElementById("FormularioLogin").addEventListener("submit", function(event){
    event.preventDefault();
    
    let email = document.getElementById('email').value;
    let senha = document.getElementById('senha').value;

    if(email === "unknow@outlook.com" && senha === "1234"){
        window.location.href = "calculadora.html";
    } else {
        document.getElementById('incorreto').style.display = 'block';

    }



});

document.getElementById('incorreto').style.display = "none";






