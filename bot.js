var latestMessage;
var latestSender;
var cooldown;
var prefix = "-";

//change username
function changeUsername(string) {
  document.getElementById("username-box").value = "CollabVM Bot -help";
  document.getElementById("username-ok-btn").click();
}

//sends message
function send(string) {
  document.getElementById("chat-input").value = string; //inputs string to input box
  document.getElementById("chat-send-btn").click(); //clicks send button
}

//startup message
send("Bot started");

//checks for latest message
const interval = setInterval(function() {check()}, 5000);
latestMessage = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[1];
latestSender = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[0];
function check() {
  latestMessage = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[1]; //gets everything after ▸ aka the message itself
  latestSender = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[0]; //gets everything before ▸ aka the sender
  if (latestMessage == prefix + "test") {
    send("hi");
  }
  if (latestMessage == prefix + "help") {
    send("-test - responds hi");
    send("-help - shows commands");
    send("-about - about bot");
    //send("!mtgen - from general darian");
    send("!say - says whatever is after it");
    //send("!selfdestruct - kills bot");
    send("-whoami - your username");
  }
  if (latestMessage == prefix + "about") {
    send("CollabVM Bot by iexist");
  }
  /*if (latestMessage == prefix + "!mtgen") {
    send(latestSender + ", no");
  }*/
  if (latestMessage == prefix + "whoami") {
    send(latestSender);
  }
  if (latestMessage.includes("-say")) {
    send(latestMessage.replace('-say ',''));
  }
  if (latestMessage == "-selfdestruct") {
    if (latestSender == "CollabVM Bot -help") {
      send("goodbye world");
      changeUsername("bot is off");
    } else {
      send("no");
    }
  }
}
