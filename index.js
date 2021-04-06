const Discord = require("discord.js")
const client = new Discord.Client()
client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`)
})
client.on("message", msg => {
  if (msg.content.split(" ")[0] === "!r") {
    hitos_roll(msg);
  }
})
client.login("NzIzMTMwMTk1NTM1NzI0NjQ2.XutJ6g.VlYXp-PkCKGzyraNYjtDSAuaN18")

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function hitos_roll(msg) {
  if (isNaN(parseInt(msg.content.split(" ")[1]))) {
       var bonus = 0;
    }
    else {
      var bonus = parseInt(msg.content.split(" ")[1]);
    }
    var roll = [getRandomInt(1,10),getRandomInt(1,10),getRandomInt(1,10)].sort(function(a, b){return a-b});
    var total = roll[1] + bonus;
    var message = '(' + roll[0]  + ',**' + roll[1] + '**,' + roll[2] + ') : ' + roll[1] + ' + ' + bonus + ' = ' + total;
    msg.reply(message)
}