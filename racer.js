var body = document.querySelector('body');
var move1 = function() {
var gameHasBegun = false;
}

document.addEventListener("click", "move1()")
var theNames = [];
var createPlayerOne = function() {
	window.onload = function() {}
	var name1 = prompt("Player 1, What's your name?");
	theNames.push(name1);
	if (name1 == "usain bolt")
	{	
		var x = document.createElement("IMG");
			x.setAttribute("src", "usain-bolt.jpg");
			x.setAttribute("height", "72px");
			x.setAttribute("padding", "10px");
			x.setAttribute("left", "10px")
		pOne.appendChild(x);
		alert("You will use the Q key to move your runner")
	}
	else if (name1 == "") 
	{
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}	
	else {
		var x = document.createElement("IMG");
			x.setAttribute("src", "runner.png");
			x.setAttribute("height", "36px");
			x.setAttribute("padding", "10px");
			x.setAttribute("left", "10px")
		pOne.appendChild(x);
		x.setAttribute("height", "81vh");
		alert("You will use the Q key to move your runner")
	}
}

var createPlayerTwo = function() {
	var name2 = prompt("Player 2, What's your name?");
	theNames.push(name2);
	if (name2 == "usain bolt") {
		var x = document.createElement("IMG");
			x.setAttribute("src", "usain-bolt.jpg");
			x.setAttribute("height", "72px");
			x.setAttribute("padding", "10px");
		pTwo.appendChild(x);
		alert("You will use the SHIFT key to move your runner")
}
	else if (name2 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
{
	var x = document.createElement("IMG");
			x.setAttribute("src", "runner.png");
			x.setAttribute("height", "36px");
			x.setAttribute("padding", "10px");
		pTwo.appendChild(x);
		x.setAttribute("height", "81vh");
		alert("You will use the SHIFT key to move your runner")
	}
}
var createPlayerThree = function() {
	var name3 = prompt("Player 3, What's your name? No caps please");
	theNames.push(name3);
	if (name3 == "usain bolt") {
		var x = document.createElement("IMG");
			x.setAttribute("src", "usain-bolt.jpg");
			x.setAttribute("height", "72px");
			x.setAttribute("padding", "10px");
		pThree.appendChild(x);
			alert("You will use the F key to move your runner")
}
	else if (name3 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
{	var x = document.createElement("IMG");
		x.setAttribute("src", "runner.png");
		x.setAttribute("height", "40px");
		x.setAttribute("padding", "10px");
	pThree.appendChild(x);
	x.setAttribute("height", "81vh");
	alert("You will use the F key to move your runner")
	}
}

var createPlayerFour = function() {
var name4 = prompt("Player 4, What's your name? No caps please");
theNames.push(name4);
	if (name4 == "usain bolt") {
		var x = document.createElement("IMG");
			x.setAttribute("src", "usain-bolt.jpg");
			x.setAttribute("height", "72px");
			x.setAttribute("padding", "10px");
		pFour.appendChild(x);
		alert("You will use the 8 key to move your runner")
}
	else if (name4 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
	{
	var x = document.createElement("IMG");
		x.setAttribute("src", "runner.png");
		x.setAttribute("height", "40px");
		x.setAttribute("padding", "10px");
	pFour.appendChild(x);
	x.setAttribute("height", "81vh");
	alert("You will use the 8 key to move your runner")
	}
}

var createPlayerFive = function() {
	var name5 = prompt("Player 5, What's your name? No caps please");
	theNames.push(name5);
	if (name5 == "usain bolt") {
		var x = document.createElement("IMG");
			x.setAttribute("src", "usain-bolt.jpg");
			x.setAttribute("height", "72px");
			x.setAttribute("padding", "10px");
		pFive.appendChild(x);
		alert("You will use the J key to move your runner")
}
	else if (name5 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
{
	var x = document.createElement("IMG");
		x.setAttribute("src", "runner.png");
		x.setAttribute("height", "40px");
		x.setAttribute("padding", "10px");
	pFive.appendChild(x);
	x.setAttribute("height", "81vh");
	alert("You will use the J key to move your runner")
	}
}

var createPlayerSix = function() {
	theNames.push(name6);
var name6 = prompt("Player 6, What's your name? No caps please");
	if (name6 == "usain bolt") {
		var x = document.createElement("IMG");
			x.setAttribute("src", "usain-bolt.jpg");
			x.setAttribute("height", "72px");
			x.setAttribute("padding", "10px");
		pSix.appendChild(x);
		alert("You will use the / key to move your runner")
}
	else if (name6 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
{
	var x = document.createElement("IMG");
		x.setAttribute("src", "runner.png");
		x.setAttribute("height", "40px");
		x.setAttribute("padding", "10px");
	pSix.appendChild(x);
	x.setAttribute("height", "81vh");
	alert("You will use the / key to move your runner")
	}
}

var keysPressed = [false,false,false,false,false,false]
window.onkeydown = keyDownHandler; 
window.onkeyup = keyUpHandler;

function keyDownHandler(e) {
	if (e.keyCode == 81) {
		keysPressed[0] = true;
	}
	else if (e.keyCode == 16){
		keysPressed[1] = true;
	}
	else if (e.keyCode == 70) {
		keysPressed[2] = true;
	}
	else if (e.keyCode == 56) {
		keysPressed[3] = true;
	}
	else if (e.keyCode == 74) {
		keysPressed[4] = true;
	}
	else if (e.keyCode == 191) {
		keysPressed[5] = true;
	}
}
function keyUpHandler(e) {
	if (e.keyCode == 81) {
		keysPressed[0] = false;
	}
	else if (e.keyCode == 16) {
		keysPressed[1] = false;
	}
	else if (e.keyCode == 70) {
		keysPressed[2] = false;
	}
	else if (e.keyCode == 56) {
		keysPressed[3] = false;
	}
	else if (e.keyCode == 74) {
		keysPressed[4] = false;
	}
	else if (e.keyCode == 191) {
		keysPressed[5] = false;
	}
}
var left0 = 0
var left1 = 0
var left2 = 0
var left3 = 0
var left4 = 0
var left5 = 0
var speed = 1
var boltSpeed = 50

function updateKeys1() {

	if (keysPressed[0] && theNames[0] == "usain bolt") {
		left0 += boltSpeed;
		document.getElementById("pOne").style.left = left0 + "px";
	}
	if (keysPressed[0]) {
		left0 += speed;
		document.getElementById("pOne").style.left = left0 + "px";
	}

	if (keysPressed[1] && theNames[1] == "usain bolt") {
		left1 += boltSpeed;
		document.getElementById("pTwo").style.left = left1 + "px";
	}
	if (keysPressed[1]) {
		left1 += speed;
		document.getElementById("pTwo").style.left = left1 + "px";
	}

	if (keysPressed[2] && theNames[2] == "usain bolt") {
		left2 += boltSpeed;
		document.getElementById("pThree").style.left = left2 + "px";
	}
	if (keysPressed[2]) {
		left2 += speed;
		document.getElementById("pThree").style.left = left2 + "px";
	}

	if (keysPressed[3] && theNames[3] == "usain bolt") {
		left3 += boltSpeed;
		document.getElementById("pFour").style.left = left3 + "px";
	}
	if (keysPressed[3]) {
		left3 += speed;
		document.getElementById("pFour").style.left = left3 + "px";
	}

	if (keysPressed[4] && theNames[4] == "usain bolt") {
		left4 += boltSpeed;
		document.getElementById("pFive").style.left = left4 + "px";
	}
	if (keysPressed[4]) {
		left4 += speed;
		document.getElementById("pFive").style.left = left4 + "px";
	}

	if (keysPressed[5] && theNames[5] == "usain bolt") {
		left5 += boltSpeed;
		document.getElementById("pSix").style.left = left5 + "px";
	}
	if (keysPressed[5]) {
		left5 += speed;
		document.getElementById("pSix").style.left = left5 + "px";
	}
	whoWins();	
}
var letsPlay = function() {
	var x = document.createElement("Audio");
	x.setAttribute("src", "chariots.ogg");
	x.setAttribute("autoplay", "autoplay");
	x.setAttribute("id", "audio");
	document.body.appendChild(x);

}

var whoWins = function() {
	if (document.getElementById('pOne').style.left == "867px") {
			if (theNames[0] == "usain bolt") {
			// var x = document.createElement("img");
			// x.setAttribute("src","/Users/tobyzitsman/desktop/bolt1.jpg")
			// document.body.appendChild(x);
			alert("Usain Bolt Doesn't Lose")
			document.getElementById('pOne').style.left = "1000px";
			document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
			}
			else {
			alert(theNames[0] + " is the winner");
			document.getElementById('pOne').style.left = "1000px";
			document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
		}
	}
		else if (document.getElementById("pTwo").style.left == '867px') {
			if (theNames[1] == "usain bolt") {
			alert("Usain Bolt Doesn't Lose")
			document.getElementById('pTwo').style.left = "1000px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
			}
			else {
			alert(theNames[1] + " is the winner");
			document.getElementById('pTwo').style.left = "1000px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
	}
}
		else if (document.getElementById("pThree").style.left == '867px') {
			if (theNames[2] == "usain bolt") {
			alert("Usain Bolt Doesn't Lose")
			document.getElementById('pThree').style.left = "1000px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
			}
			else {
			alert(theNames[2] + " is the winner");
			document.getElementById('pThree').style.left = "1000px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
	}
}
		else if (document.getElementById("pFour").style.left == '867px') {
			if (theNames[3] == "usain bolt") {
				alert("Usain Bolt Doesn't Lose");
				document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "1000px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
			}
			else {
			alert(theNames[3] + " is the winner");
			document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "1000px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
	}
}
		else if (document.getElementById("pFive").style.left == '867px') {
			if (theNames[4] == "usain bolt") {
				alert("Usain Bolt Doesn't Lose")
			document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "1000px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
			}
			else {
			alert(theNames[4] + " is the winner");
			document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "1000px";
			document.getElementById('pSix').style.left = "100px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
	}
}
		else if (document.getElementById("pSix").style.left == '867px') {
			if (theNames[5] == "usain bolt") {
				alert("Usain Bolt Doesn't Lose")
			document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "1000px";
			var x = document.createElement("img");
			x.setAttribute("src","/users/tobyzitsman/desktop/bolt1.pjg")
			body.appendChild(x);
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
			}
			else {
			alert(theNames[5] + " is the winner");
			document.getElementById('pTwo').style.left = "100px";
			document.getElementById('pOne').style.left = "100px";
			document.getElementById('pThree').style.left = "100px";
			document.getElementById('pFour').style.left = "100px";
			document.getElementById('pFive').style.left = "100px";
			document.getElementById('pSix').style.left = "1000px";
			keysPressed[0] = false;
			keysPressed[1] = false;
			keysPressed[2] = false;
			keysPressed[3] = false;
			keysPressed[4] = false;
			keysPressed[5] = false;
	}
}
}
setInterval(updateKeys1, 1);