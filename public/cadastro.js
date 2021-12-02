var senhasDiferentes = document.getElementById("senhasDif");

senhasDiferentes.classList.add("hidden")

function cadastrar(){
    let nome = document.getElementById("nome").value;
    let cpf = document.getElementById("cpf").value;
    let celular = document.getElementById("celular").value;
    let email = document.getElementById("email").value;
    let uf = document.getElementById("uf").value;
    var cidade = document.getElementById("cidade").value;
    var endereco = document.getElementById("endereco").value;
    let senha = document.getElementById("senha").value;
    let confirmSenha = document.getElementById("confirmSenha").value;

    if(!nome){
        document.getElementById("nome").classList.add("input-err")
    }

    if(!cpf){
        document.getElementById("cpf").classList.add("input-err")
    }    

    if(!celular || !(/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/gm.test(celular))){
        document.getElementById("celular").classList.add("input-err")
    }

    if(!email || !(/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi.test(email))){
        document.getElementById("email").classList.add("input-err")
    }

    if(uf == "null"){
        document.getElementById("uf").classList.add("input-err")
    }

    if(!cidade){
        document.getElementById("cidade").classList.add("input-err")
    }   

    if(!endereco){
        document.getElementById("endereco").classList.add("input-err")
    }   

    if(!senha){
        document.getElementById("senha").classList.add("input-err")
    }

    if(!confirmSenha){
        document.getElementById("confirmSenha").classList.add("input-err")
    }

    if(confirmSenha !== senha){
        document.getElementById("confirmSenha").classList.add("input-err")
        senhasDiferentes.classList.remove("hidden")
    }

    if(nome && cpf && celular && email && uf != "null" && cidade && endereco && senha && confirmSenha){
        window.location="./home.html"
        document.getElementById("formCadastro").reset()
    }
}