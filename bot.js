var latestMessage,latestSender,cooldown,random,adminEnabled,pass,special,latestChat;
adminEnabled = false;
special = new Array();
var prefix = "-";

//change username
function changeUsername(string) {
  document.getElementById("username-box").value = string;
  document.getElementById("username-ok-btn").click();
}

//sends message
function send(string) {
  document.getElementById("chat-input").value = string; //inputs string to input box
  document.getElementById("chat-send-btn").click(); //clicks send button
}

//startup
changeUsername("CollabVM Bot -help");
send("Bot started, do " + prefix + "help");
//no mod stuff added yet

//checks for latest message
const interval = setInterval(function() {check()}, 3000);
latestMessage = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[1];
latestSender = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[0];
latestChat = document.getElementById("chat-box").lastElementChild.lastElementChild;
function check() {
  latestMessage = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[1]; //gets everything after ▸ aka the message itself
  latestSender = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[0]; //gets everything before ▸ aka the sender
  latestChat = document.getElementById("chat-box").lastElementChild.lastElementChild;
  if (latestMessage == prefix + "test") {
    send("hi");
  }
  /*if (latestMessage.includes(prefix + "promote")) {
    if (latestChat.innerHTML.split("</span>")[0].split(">")[0].includes("username admin") && adminEnabled = true) {
      //that was a shitty idea but it works fine i think
      special.push(latestMessage.replace(prefix + 'promote ',''));
      send(latestMessage.replace(prefix + 'promote ','') + " got mod commands");
    } else {
      send("i may not have admin, or you don't");
    }
  }*/
  if (latestMessage == prefix + "help") {
    send("https://raw.githubusercontent.com/imightexist/collabvm-bot/main/commands.txt");
  }
  if (latestMessage == prefix + "github") {
    send("https://github.com/imightexist/collabvm-bot");
  }
  if (latestMessage == prefix + "rockpaperscissors") {
    random = Math.floor(Math.random() * 3);
    if (random == 1) {
      send("rock");
    } else if (random == 2) {
      send("paper");
    } else if (random == 3) {
      send("scissors");
    }
  }
  if (latestMessage == prefix + "flipcoin") {
    random = Math.floor(Math.random() * 2);
    if (random == 1) {
      send("heads");
    } else {
      send("tails");
    }
  }
  if (latestMessage == prefix + "about") {
    send("hello i am CollabVM bot");
    send("i check for bot commands every 4 seconds");
  }
  /*if (latestMessage == prefix + "!mtgen") {
    send(latestSender + ", no");
  }*/
  if (latestMessage == prefix + "whoami") {
    send(latestSender);
  }
  if (latestMessage.includes("-say ")) {
    send(latestMessage.replace('-say ',''));
  }
}
