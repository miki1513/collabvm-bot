//help iexist has me hostage
var WebSocketClient = require('websocket').client;
var ws = new WebSocketClient();
var vm = 'darkok.xyz:3037/cvmws'; //ziad87 vm

function connect(){
  ws.on('connect', function(f){
    function send(string){
      f.sendUTF(encodeCommand(['chat', string]));
    }
    function changeUsername(string){
      f.sendUTF('6.rename,' + string.length + '.' + string + ';');
    }
    f.on('message',function(message){
      var cmd = decodeCommand(message.utf8Data);
      changeUsername("CollabVM Bot c!help");
      var username = cmd[1];
      var command = cmd[2];
      var prefix = "c!";
      
      //now here is the fun part
      if (command == prefix + "test"){
        send("hello world");
      }
      if (command == prefix + "help"){
        send("https://raw.githubusercontent.com/imightexist/collabvm-bot/main/commands-nodejs.txt");
      }
    })
  })
  ws.connect('ws://' + vm, 'guacamole');
}
function decodeCommand(cypher) {
	var sections = [];
	var bump = 0;
	while (sections.length <= 50 && cypher.length >= bump) {
		var current = cypher.substring(bump);
		var length = parseInt(current.substring(current.search(/\./) - 2));
		var paramater = current.substring(length.toString().length + 1, Math.floor(length / 10) + 2 + length);
		sections[sections.length] = paramater;
		bump += Math.floor(length / 10) + 3 + length;
	}
	sections[sections.length - 1] = sections[sections.length - 1].substring(0, sections[sections.length - 1].length - 1);
	return sections;
}
function encodeCommand(cypher) {
	var command = "";
	for (var i = 0; i < cypher.length; i++) {
		var current = cypher[i];
		command += current.length + "." + current;
		command += (i < cypher.length - 1 ? "," : ";");
	}
	return command;
}
connect();
