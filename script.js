var load = document.getElementById("loading");
var front = document.getElementById("front");
var btnn = document.getElementById("btnn");

function start(){
    load.style.display = "flex"; 
    
    setTimeout(() => {
        btnn.style.display = "none";    
    }, 1000);
    setTimeout(() => {
        front.style.display = "none";
    }, 3000);
}

var ele1 = document.getElementById("ele1");
var ele2 = document.getElementById("ele2");
var ele3 = document.getElementById("ele3");
var ele4 = document.getElementById("ele4");

function fun1(){
    ele1.style.transform = "translateX(-50px) translateY(-30px) rotateZ(-30deg)";
    setTimeout(() => {
        ele1.style.transform = "translateX(0) translateY(0) rotateZ(0)";
    }, 1500);
}

function fun2(){
    ele2.style.transform = "rotateZ(360deg)";
    setTimeout(() => {
        ele2.style.transform = "rotateZ(0deg)";
    }, 1500);
}

function fun3(){
    ele3.style.transform = "scalex(2) scaley(2) translatex(25%) translatey(-25%)";
    setTimeout(() => {
        ele3.style.transform = "scalex(1) scaley(1) translatex(0) translatey(0)";
    }, 1500);
}

function fun4(){
    ele4.style.transform = "translatex(50px) rotatex(180deg)";
    setTimeout(() => {
        ele4.style.transform = "translatex(0) rotatex(0deg)";
    }, 1500);
}