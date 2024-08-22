class Sessao {

    constructor () {}

    async verifySession () {

        const user = sessionStorage.getItem("user")
        const senha = sessionStorage.getItem("senha")

        if ( !user || !senha ) {

            if (`${window.location}` == `${window.location.origin}/login` || window.location.href == `${window.location.origin}/register`) {
                return 
            }

            console.log("passou");

            return window.location.href = `${window.location.origin}/login`
        }

        const response = await fetch("/verifyLogin", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({user : user, senha : senha})
        })
    
        if ( !response.ok ) {

            if (`${window.location}` == `${window.location.origin}/login` || window.location.href == `${window.location.origin}/register`) {
                return 
            }

            return window.location.href = `${window.location.origin}/login`
        }
    
        const data = await response.json()
    
        if (data.response.length <= 0) {

            if (`${window.location}` == `${window.location.origin}/login` || window.location.href == `${window.location.origin}/register`) {
                return 
            }

            console.log(3);

            return window.location.href = `${window.location.origin}/login`
        } 

        if ( `${window.location}` == `${window.location.origin}/home` ){
            return
        }

        return window.location.href = `${window.location.origin}/home`

    }

    setSession (user, senha) {

        sessionStorage.setItem("user", user)
        sessionStorage.setItem("senha", senha)

    }

    removeSession () {

        sessionStorage.setItem("user", false)
        sessionStorage.setItem("senha", false)

    }

}

const sessao = new Sessao()


window.onload = () => {
    sessao.verifySession()
}
