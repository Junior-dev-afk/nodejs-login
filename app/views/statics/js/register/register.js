async function register () {

    const div_user = document.getElementById("user")
    const div_senha = document.getElementById("senha")
    const div_senha_confirmar = document.getElementById("confirmar-senha")

    if ( !div_user.value.length > 0 || !div_senha.value.length > 0 || !div_senha_confirmar.value.length >0 ) {
        return notify.erro("Todos os campos tem que estar prenchidos")
    }

    if ( div_senha.value.length < 8 ) {
        return notify.erro("Sua senha deve ter pelo menos 8 digitos")
    }

    if ( div_senha.value != div_senha_confirmar.value ) {
        return notify.erro("As senhas não são compativeis")
    }

    mandarRequisicaoDeRegistro(div_user.value, div_senha.value)

}

async function mandarRequisicaoDeRegistro(user, senha){

    const response = await fetch("/register", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({user : user, senha : senha})
    })

    if ( !response.ok ) {
        throw new Error ("Erro ao mandar requisicao de registro")
    }

    const data = await response.json()

    if ( !data.response ) {
        return notify.erro("Conta já existe")
    }

    return notify.sucess("Conta criada com sucesso")

}