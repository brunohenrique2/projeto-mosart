var btn_play = document.getElementById("play")
var btn_treino = document.getElementById("training")
var btn_options = document.getElementById("options")
var btn_credits = document.getElementById("credits")

btn_play.addEventListener('click', playRedirect)

function playRedirect(){
    btn_play.href = "ingame.html"
    location.href = btn_play.href
}