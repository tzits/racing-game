var body = document.querySelector('body');
function Bolt() {
	this.winPosition= "1000px"
	this.losePosition= "100px"
}

Bolt.prototype.create = function(div) {
	var x = document.createElement("IMG");
	x.setAttribute("src", "usain-bolt.jpg");
	x.setAttribute("height", "72px");
	x.setAttribute("padding", "10px");
	x.setAttribute("left", "10px");
	div.appendChild(x);
}


function Player() {
	this.winPosition= "1000px"
	this.losePosition= "100px"
}

Player.prototype.create = function(div) {
    var x = document.createElement("IMG");
	x.setAttribute("src", "runner.png");
	x.setAttribute("height", "36px");
	x.setAttribute("padding", "10px");
	x.setAttribute("left", "10px");
	x.setAttribute("height", "81vh");
	div.appendChild(x);
}
var theNames = [null,null,null,null,null,null];
var createPlayerOne = function() {
	window.onload = function() {}
	var name1 = prompt("Player 1, What's your name?");
	theNames[0] = name1
	if (name1 == "usain bolt")
	{	
		var bolt1 = new Bolt();
		bolt1.create(pOne)
		alert("You will use the Q key to move your runner")
	}
	else if (name1 == "") 
	{
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}	
	else {
		var player1 = new Player();
		player1.create(pOne)
		alert("You will use the Q key to move your runner")
	}
}

var createPlayerTwo = function() {
	var name2 = prompt("Player 2, What's your name?");
	theNames[1] = name2
	if (name2 == "usain bolt") {
		var bolt2 = new Bolt();
		bolt2.create(pTwo)
		alert("You will use the SHIFT key to move your runner")
}
	else if (name2 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
{
	var x = document.createElement("IMG");
		var player2 = new Player();
		player2.create(pTwo)
		alert("You will use the SHIFT key to move your runner")
	}
}
var createPlayerThree = function() {
	var name3 = prompt("Player 3, What's your name?");
	theNames[2] = name3
	if (name3 == "usain bolt") {
		var bolt3 = new Bolt();
		bolt3.create(pThree)
		alert("You will use the F key to move your runner")
}
	else if (name3 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
{		var player3 = new Player();
		player3.create(pThree)
		alert("You will use the F key to move your runner")
	}
}

var createPlayerFour = function() {
var name4 = prompt("Player 4, What's your name?");
theNames[3] = name4
	if (name4 == "usain bolt") {
		var bolt4 = new Bolt();
		bolt4.create(pFour)
		alert("You will use the 8 key to move your runner")
}
	else if (name4 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
	{
	var player4 = new Player();
	player4.create(pFour)
	alert("You will use the 8 key to move your runner")
	}
}

var createPlayerFive = function() {
	var name5 = prompt("Player 5, What's your name?");
	theNames[4] = name5
	if (name5 == "usain bolt") {
		var bolt5 = new Bolt();
		bolt5.create(pFive)
		alert("You will use the J key to move your runner")
}
	else if (name5 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
{
	var player5 = new Player();
	player5.create(pFive)
	alert("You will use the J key to move your runner")
	}
}

var createPlayerSix = function() {
var name6 = prompt("Player 6, What's your name?");
	theNames[5] = name6
	if (name6 == "usain bolt") {
		var bolt6 = new Bolt();
		bolt6.create(pSix)
		alert("You will use the / key to move your runner")
}
	else if (name6 == "") {
		alert("IF YOU CLICK THE BUTTON ENTER A NAME! STOP JERKING ME AROUND")
	}
	else
{
	var player6 = new Player();
		player6.create(pSix)
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
