const changeColorDelay = 1000;
let seInter = null;

const queBtn = {
    btnStart: document.querySelector('button[data-start]'),
    btnStop: document.querySelector('button[data-stop]'),
    body: document.querySelector('body'),
}

queBtn.btnStop.disabled = true;
queBtn.btnStart.addEventListener('click', opnbtnStartChangeColor);
queBtn.btnStop.addEventListener('click', opnbtnStopChangeColor);

function opnbtnStartChangeColor() {
queBtn.btnStart.disabled = true;
queBtn.btnStop.disabled = false;

seInter = setInterval (() => {
    queBtn.body.style.backgroundColor = getRandomHexColor()
}, changeColorDelay);
}

function opnbtnStopChangeColor() {
    queBtn.btnStart.disabled = false;
    queBtn.btnStop.disabled = true;

    clearInterval(seInter);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }