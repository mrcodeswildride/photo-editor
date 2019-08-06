var image = document.getElementById("image");

var width100Button = document.getElementById("width100");
var width200Button = document.getElementById("width200");
var width300Button = document.getElementById("width300");
var width400Button = document.getElementById("width400");

var opacity25Button = document.getElementById("opacity25");
var opacity50Button = document.getElementById("opacity50");
var opacity75Button = document.getElementById("opacity75");
var opacity100Button = document.getElementById("opacity100");

var rotation0Button = document.getElementById("rotation0");
var rotation90Button = document.getElementById("rotation90");
var rotation180Button = document.getElementById("rotation180");
var rotation270Button = document.getElementById("rotation270");

width100Button.addEventListener("click", setWidth100);
width200Button.addEventListener("click", setWidth200);
width300Button.addEventListener("click", setWidth300);
width400Button.addEventListener("click", setWidth400);

opacity25Button.addEventListener("click", setOpacity25);
opacity50Button.addEventListener("click", setOpacity50);
opacity75Button.addEventListener("click", setOpacity75);
opacity100Button.addEventListener("click", setOpacity100);

rotation0Button.addEventListener("click", setRotation0);
rotation90Button.addEventListener("click", setRotation90);
rotation180Button.addEventListener("click", setRotation180);
rotation270Button.addEventListener("click", setRotation270);

function setWidth100() {
    image.style.width = "100px";
}

function setWidth200() {
    image.style.width = "200px";
}

function setWidth300() {
    image.style.width = "300px";
}

function setWidth400() {
    image.style.width = "400px";
}

function setOpacity25() {
    image.style.opacity = 0.25;
}

function setOpacity50() {
    image.style.opacity = 0.5;
}

function setOpacity75() {
    image.style.opacity = 0.75;
}

function setOpacity100() {
    image.style.opacity = 1;
}

function setRotation0() {
    image.style.transform = "rotate(0deg)";
}

function setRotation90() {
    image.style.transform = "rotate(90deg)";
}

function setRotation180() {
    image.style.transform = "rotate(180deg)";
}

function setRotation270() {
    image.style.transform = "rotate(270deg)";
}
