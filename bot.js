var latestMessage;
var latestSender;

//change username
document.getElementById("username-box").value = "CollabVM Bot";
document.getElementById("username-ok-btn").click();

//sends message
function send(string) {
  document.getElementById("chat-input").value = string; //inputs string to input box
  document.getElementById("chat-send-btn").click(); //clicks send button
}

//checks for latest message
const interval = setInterval(function() {check()}, 100);
latestMessage = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[1];
latestSender = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[0];
function check() {
  latestMessage = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[1]; //gets everything after ▸ aka the message itself
  latestSender = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[0]; //gets everything before ▸ aka the sender
  if (latestMessage == "!test") {
    send("hi");
  }
  if (latestMessage == "!help") {
    send("!test - responds hi");
    send("!help - shows commands");
    send("!about - about bot");
    send("!mtgen - from general darian");
    //send("!say - says whatever is after it");
    //send("!selfdestruct - kills bot");
    send("!whoami - your username");
  }
  if (latestMessage == "!about") {
    send("CollabVM-Bot Beta by iexist");
  }
  if (latestMessage == "!mtgen") {
    send(latestSender + ", no");
  }
  /*if (latestMessage.includes("!say")) {
    send(latestMessage.replace('!say ',''));
  }*/
  /*if (latestMessage == "!selfdestruct") {
    if (latestSender == "killer") {
      send("goodbye world");
      location.reload();
    } else {
      send("no");
    }*/
  }
}
