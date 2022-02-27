//help iexist has me hostage
var WebSocketClient = require('websocket').client;
var ws = new WebSocketClient();
var vm = 'darkok.xyz:3037/cvmws'; //ziad87 vm

function connect(){
  ws.on('connect', function(f){
    function send(string){
      f.sendUTF(encodeCommand(['chat', string]));
    }
    function username(string){
      f.sendUTF('6.rename,' + string.length + '.' + string + ';');
    }
    username("CollabVM Bot c!help");
    f.on('message',function(message){
      var cmd = decodeCommand(message.utf8Data);
      var username = cmd[1];
      var command = cmd[2];
      var prefix = "c!";
      var args = command.slice(prefix.length).split(' ');
      
      //now here is the fun part
      if (command == prefix + "test"){
        send("hello world")
      }
    }
  }
}
