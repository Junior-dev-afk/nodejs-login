class Notify {

    constructor(){
        this.container = false
        this.tempo = 7000
        this.quantidade = 0
        this.color_error = "rgb(214, 82, 82)"
        this.color_sucess = "rgb(78, 221, 73)"
        this.color_info = "rgb(73, 142, 221)"

        this.style_padrao = `
            width: 80%;
            height: auto;
            margin-right: 10px;
            opacity: 0;
            color:white;
            padding:20px;
            border-radius:5px;
            margin-block:10px;
        `

        this.__init()
    }

    __createNotify (msg, color) {

        this.quantidade++

        this.container.style.visibility = "visible"

        const notify = document.createElement("div")

        notify.style.cssText = this.style_padrao

        notify.innerHTML = msg

        notify.style.backgroundColor = color

        this.container.appendChild(notify)

        let opacity = 0

        const interval_opacity_on = setInterval(()=>{

            opacity = opacity + 0.01


            notify.style.opacity = opacity

            if (opacity >= 1) {
                clearInterval(interval_opacity_on)
                setTimeout(() => {
                    const interval_opacity_off = setInterval(()=>{

                        opacity = opacity - 0.01
            
                        notify.style.opacity = opacity
            
                        if (opacity <= 0) {
                            clearInterval(interval_opacity_off)
                            this.quantidade--
                            notify.remove()
                            if ( this.quantidade <= 0 ) {
                                this.container.style.visibility = "hidden"
                            }
                        }
            
                    }, 20)
                }, this.tempo)
            }

        }, 20)

    }

    erro (mensagem) {

        this.__createNotify(mensagem, this.color_error)

    }

    sucess (mensagem) {

        this.__createNotify(mensagem, this.color_sucess)

    }

    info (mensagem) {

        this.__createNotify(mensagem, this.color_info)

    }

    __init () {

        const div = document.createElement("div")

        div.style.cssText = `
            width: ${window.innerWidth/100 * 40}px;
            height: auto;
            position: absolute;
            right: 0px;
            top: ${window.innerHeight / 100 * 10}px;
            visibility: hidden;
            display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: end;
        `

        document.querySelector(".container").appendChild(div)

        this.container = div

    }

}

const notify = new Notify()
