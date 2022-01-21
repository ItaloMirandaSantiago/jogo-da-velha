// interface do jogo
document.addEventListener('DOMContentLoaded', ()=>{
let quadrado = document.querySelectorAll('.quadrado')

    quadrado.forEach((e)=>{
        e.addEventListener('click', clicado)
    })

})
// mandar o quadrado clicado

 function clicado(e){
   if (qual_o_quadrado(e.target.id)){
       setTimeout(()=>{
        resete()
       }, 1000)
       jogador()
   }
    update(e)
}

// colocar imagem do quadrado
function update(e) {
    let quadrado = document.getElementById(e.target.id.toString())
    let simbo = ordem[e.target.id]
    quadrado.innerHTML = `<div class='${simbo}'></div>`
}

// button para resetar o jogo

let button = document.querySelector('#resete')

button.addEventListener('click', resete)

// função para decidir quem venceu
let x = 0
let o = 0
function jogador(){

    let jogador0 = document.querySelectorAll('#jogador0')[0]
    let jogador1 = document.querySelectorAll('#jogador1')[0]
    
    console.log(jogador0);
    if (vez == 0) {
        x++
        console.log(x)
        jogador0.innerHTML = `Vitorias do Segundo jogador: ${x}`
    }else{
        o++
        jogador1.innerHTML = `Vitorias do Segundo jogador: ${o}`
    }
}