//colocar os simbolos do jogo e verificar vencedor 
let ordem = ["","","","","","","","",""]
let vez = 0
let simbolo = ["x","o"]
let game = false

function qual_o_quadrado(id){
    if(game){
        return
    }

    if(ordem[id] == "") {
        ordem[id] = simbolo[vez]

        game = vencedor()
// passar a vez para o proxímo jogador
        if (!game) {
            vez = (vez == 1) ? 0:1
        }
    }
    return game
}

function vencedor() {
    let estado_vito = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

        for (i = 0; i < estado_vito.length; i++) {
            let ab = estado_vito[i]
            let posi0 = ab[0]
            let posi1 = ab[1]
            let posi2 = ab[2]
            if (ordem[posi0] == ordem[posi1] &&
                ordem[posi0] == ordem[posi2] &&
                ordem[posi0] != ''){
                return true
            }
        }
        return false
}

// button resete

function resete() {
     vez = 0
     game = false
    let quadrado = document.querySelectorAll('.quadrado')


     for (let i = 0; i < quadrado.length; i++) {
        let e = quadrado[i]
        e.innerHTML = ''
        ordem[i] = ''
     }
}