const luckMessages = [
    'A vida trará coisas boas se tiver paciência.',
    'Não compense na ira o que lhe falta na razão.',
    'Defeitos e virtudes são apenas dois lados da mesma moeda.',
    'A maior de todas as torres começa no solo.',
    'Uma bela flor é incompleta sem as suas folhas.',
    'O riso é a menor distância entre duas pessoas.',
    'Os defeitos são mais fortes quando o amor é fraco.',
    'A sorte favorece a mente bem preparada.',
    'Quem olha para fora sonha; quem olha para dentro acorda.',
    'Espere pelo mais sábio dos conselhos: o tempo.',
    'Deixe de lado as preocupações e seja feliz.',
    'A maior barreira para o sucesso é o medo do fracasso.',
    'A inspiração vem dos outros. A motivação vem de dentro de nós.',
    'Você sempre será a sua melhor companhia!',
];

let cookie = document.querySelector("#cookie")
let screen1 = document.querySelector(".screen1")
let screen2 = document.querySelector(".screen2")
let message = document.querySelector("#message p")
let newCokie = document.querySelector("#newCookie")

let randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)]

// eventos
cookie.addEventListener('click', handleOpenCookie)
newCokie.addEventListener('click', openNewCookie)
document.addEventListener('keypress', keypresEnter)

// fuctions
function toogleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function handleOpenCookie() {
    toogleScreen()
    message.innerText = `${randomMessage}`
}

function openNewCookie() {
    toogleScreen()
    randomMessage = luckMessages[Math.round(Math.random() * luckMessages.length)];
}

function keypresEnter(e) {
    if(e.key == "Enter" && screen1.classList.contains('hide')) {
      openNewCookie()
    }
}