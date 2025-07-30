const laptopImg = document.getElementById('laptop');
const button = document.getElementById('hover-button');

button.addEventListener('mouseenter', () => {
    laptopImg.src = 'on_laptop.png';
});

button.addEventListener('mouseleave', () => {
    laptopImg.src = 'off_laptop.png';
});

const lampImg = document.getElementById('lamp');
const lampButton = document.getElementById('lamp-button');
const blackImg = document.getElementById('black');
const blackButton = document.getElementById('black-button');
let lampOn = false;
let blackLampOn = false;

function turnOnLamp(){
    blackImg.style.display = 'none';
    lampImg.src = 'on_lamp.png';
}

function turnOffLamp(){
    blackImg.style.display = 'block';
    lampImg.src = 'off_lamp.png';
}

lampButton.addEventListener('click', turnOffLamp);
blackButton.addEventListener('click', turnOnLamp);