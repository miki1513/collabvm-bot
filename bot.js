//var latestMessage,latestSender,cooldown,random,adminEnabled,pass,special,latestChat,vm;
adminEnabled = false;
special = new Array();
var prefix = "!";

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

//other shit
vm = document.querySelector("canvas");

//startup
changeUsername("bot " + prefix + "help"); //why the fuck no work
send("Bot started, do " + prefix + "help"); that was kind of annoying lol
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
    send("https://raw.githubusercontent.com/miki1513/collabvm-bot/main/commands.txt");
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
  if (latestMessage.includes(prefix + "say ")) {
    send(latestMessage.replace(prefix + 'say ',''));
  }
  if (latestMessage == prefix + "endturn") {
    document.getElementById("end-turn-btn").click();
    send("Ended turn");
  }
  if (latestMessage.includes(prefix + "lowercase ")) {
    send(latestMessage.replace(prefix + 'lowercase ','').toLowerCase());
  }
  if (latestMessage.includes(prefix + "uppercase ")) {
    send(latestMessage.replace(prefix + 'uppercase ','').toUpperCase());
  }
  if (latestMessage == prefix + "updateinfo") {
    send("added vmname command");
  }
  if (latestMessage.includes(prefix + "summon ")) {
    changeUsername(latestMessage.replace(prefix + 'summon ',''));
    if (latestMessage.replace(prefix + 'summon ','') == "jjjj") {
      send("I LOVE JJJJ! NOW!");
    } else {
      send("Object summoned");
    }
    changeUsername("CollabVM Bot " + prefix + "help");
  }
  if (latestMessage == prefix + "vmname") {
    send(vmName);
  }
  //autotype
  if (latestMessage.includes(prefix + "autotype ")) {
    autotypeText = latestMessage.replace(prefix + 'autotype ','');
    send("Autotyping: " + autotypeText);
    document.getElementById("turn-btn").click();
    if (document.getElementsByClassName("has-turn")[0].innerHTML == "CollabVM Bot " + prefix + "help") {
      send("Autotype only works when no one is taking turn hehe");
      document.getElementById("end-turn-btn").click();
    } else {
      for (autotypeIndex = 0; autotypeIndex < autotypeText.length; autotypeIndex++) {
        autotypeEvent = document.createEvent("KeyboardEvent");
        autotypeEventTwo = document.createEvent("KeyboardEvent");
        autotypeEvent[initMethod]("keydown", {
          'bubbles' : true,
          'cancelable' : true,
          'char' : autotypeText.charAt(autotypeIndex),
          'key' : autotypeText.charAt(autotypeIndex),
          'shiftKey' : false,
          'keyCode' : autotypeText.charCodeAt(autotypeIndex)
        });
        autotypeEventTwo[initMethod]("keyup", {
          'bubbles' : true,
          'cancelable' : true,
          'char' : autotypeText.charAt(autotypeIndex),
          'key' : autotypeText.charAt(autotypeIndex),
          'shiftKey' : false,
          'keyCode' : autotypeText.charCodeAt(autotypeIndex)
        });
        vm.focus();
        autotypeEvent.preventDefault();
        vm.dispatchEvent(autotypeEvent);
        vm.focus();
        autotypeEventTwo.preventDefault();
        vm.dispatchEvent(autotypeEventTwo);
      }
    }
  }
}
