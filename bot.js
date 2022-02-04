var latestMessage;

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
  latestMessage = document.getElementById("chat-box").lastElementChild.lastElementChild.textContent.split('▸')[1]; //gets everything after ▸ from latest message on chatbox
  if (latestMessage == "!test") {
    send("hi");
  }
}
