var latestMessage;
var latestSender;

//change username
document.getElementById("username-btn").click();
document.getElementById("username-box").value = "cvmbot";
document.getElementById("username-ok-btn").click();

function send(string) {
  document.getElementById("chat-input").value = string; //inputs string to input box
  document.getElementById("chat-send-btn").click(); //clicks send button
}

//checks for latest message
while (true) {
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
    send("!selfdestruct - kills bot");
  }
  if (latestMessage == "!about") {
    send("CollabVM-Bot Beta");
  }
  if (latestMessage == "!mtgen") {
    send(latestSender + ", no");
  }
  /*if (latestMessage.includes("!say")) {
    send(latestMessage.replace('!say ',''));
  }*/
  if (latestMessage == "!selfdestruct") {
    if (latestSender == "killer") {
      send("goodbye world");
      location.reload();
    } else {
      send("no");
    }
  }
}
