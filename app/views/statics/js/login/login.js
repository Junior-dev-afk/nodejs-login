async function verifyLogin () {

    const user = document.getElementById("user").value
    const senha = document.getElementById("senha").value

    const response = await fetch("/verifyLogin", {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify({user : user, senha : senha})
    })

    if ( !response.ok ) {
        throw new Error("Erro ao verificar login")
    }

    const data = await response.json()

    if (data.response.length <= 0) {
        return notify.erro("Usuario ou senha incorretos")
    }

    sessao.setSession(user, senha)

    window.location.href = `${window.location.origin}/home`

}
