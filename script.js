var css= document.querySelector("h3");
var c1= document.querySelector(".color1");
var c2 = document.querySelector(".color2");
var body= document.getElementById("gradient");
var rc= document.getElementById("random");

var c1c= c1.getAttribute("value");
var c2c= c2.getAttribute("value");

body.style.background= "linear-gradient(to right, " + c1c + "," + c2c + ")";
css.textContent= body.style.background ;

function givecolor(){
		body.style.background="linear-gradient( to right, "+ c1.value+" , "+ c2.value+")";
		css.textContent= body.style.background +";";
};



function randomColor(){	
		var rc1= Math.floor((Math.random() * 1000000) + 1);
		var rc2= Math.floor((Math.random() * 1000000) + 1);
		body.style.background="linear-gradient( to right, "+ "#"+rc1+", "+ "#"+rc2+")";
		css.textContent= body.style.background +";";
};

rc.addEventListener("click", randomColor);


c1.addEventListener("input", givecolor);

c2.addEventListener("input", givecolor);




