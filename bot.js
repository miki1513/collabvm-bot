var latestMessage;
var latestSender;
var cooldown;
var random;
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
send("Bot started");

//checks for latest message
const interval = setInterval(function() {check()}, 3000);
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
    send("-help2 - shows second list of commands (bcuz chat cooldown)");
    //send("!selfdestruct - kills bot");
  }
  if (latestMessage == prefix + "help2") {
    send("-say - says whatever is after it");
    send("-whoami - your username");
    send("-help3 - shows third list");
  }
  if (latestMessage == prefix + "help3") {
    send("-about - about bot");
    send("-flipcoin - flips a coin");
    send("-help4 - shows fourth list");
  }
  if (latestMessage == prefix + "help4") {
    send("-dog - dog pic from imgur");
    send("-github - gives github link");
  }
  if (latestMessage == prefix + "github") {
    send("https://github.com/imightexist/collabvm-bot");
  }
  if (latestMessage == prefix + "dog") {
    random = Math.floor(Math.random() * 3);
    if (random == 1) {
      send("https://imgur.com/t/dogs/kRbjSea");
    } else if (random == 2) {
      send("https://imgur.com/t/dogs/NK9mpuo");
    } else if (random == 3) {
      send("https://imgur.com/t/dogs/rlut8AX");
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
    send("hello i am bot beep boop");
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
  if (latestMessage == "-selfdestruct") {
    if (latestSender == "CollabVM Bot -help") {
      changeUsername("guest" + Math.floor(Math.random() * 98999));
      send("Bot stopped");
      location.reload();
    } else {
      send("no");
    }
  }
}
