function moveBtnPosition(elm){
    elm.style.position = 'absolute';
    elm.style.top = Math.random() * (window.innerHeight - elm.offsetHeight) + 'px';
    elm.style.left = Math.random() * (window.innerWidth - elm.offsetWidth) + 'px';
}

let btnSi = document.getElementById('btn_si');
let btnNo = document.getElementById('btn_no');
let divModoSexo = document.getElementsByClassName('modo_sexo')[0];
let video = document.getElementById('videoCartel');

btnNo.addEventListener('mouseenter', function(e) { moveBtnPosition(e.target)});

btnSi.addEventListener('click', function(e) {
    alert('Sabía que dirías que si. Casemonos ahora ya y tengamos hijos. TKM!!! ❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️');
    divModoSexo.style.display = 'block';
    video.style.display = 'none';
    const cancion = new Audio('img\\love-moment.mp3');
    cancion.play();
})