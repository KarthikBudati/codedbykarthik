var prompt=require('prompt-sync')();
var b1=Buffer.alloc(30);
var player=prompt('enter player name:')
b1.write(player);
var b2=Buffer.alloc(30);
var team=prompt('enter team name:')
b2.write(team);
console.log("Buffers created.. Let's apply copy(), from(), concat() and slice()")
var b3=Buffer.from("IPL")
var b4=new Buffer(10);
b3.copy(b4);
console.log("PLAYER : "+b1.toString())
console.log("Player with team : "+Buffer.concat([b1,b2]).toString());
console.log("League:"+b4.toString())
var scores=new Buffer([20,34,53,75]);
for(var i=0;i<scores.length;i++){
	console.log('scored '+scores[i].toString()+" in "+(i+1)+"th match");
}
var bsl=Buffer.alloc(30);
bsl=b2.slice(8,11);
console.log("Slice :"+bsl);