var latestMessage;
var latestSender;
var prefix = "!";

//send message
function send(string) {
  document.getElementById("chat-input").value = string; //inputs string to input box
  document.getElementById("chat-send-btn").click(); //clicks send button
}

//change username
function changeUsername(string) {
  document.getElementById("username-box").value = string;
  document.getElementById("username-ok-btn").click();
}

send("Hello World!"); //startup message

const interval = setInterval(function() {check()}, 100);
latestMessage = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[1];
latestSender = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[0];
function check() {
  latestMessage = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[1]; //gets everything after ▸ aka the message itself
  latestSender = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[0]; //gets everything before ▸ aka the sender
  //detect command
  if (latestMessage == prefix + "helloworld") {
    send("Hello World!"); //response
  }
}
