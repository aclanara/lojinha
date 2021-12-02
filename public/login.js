function login(){
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(!email || !(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email))){
        document.getElementById("email").classList.add("input-err")
    }

    if(!senha){
        document.getElementById("senha").classList.add("input-err")
    }

    if(email && senha){
        window.location="./home.html"
        document.getElementById("formLogin").reset()
    }
 }