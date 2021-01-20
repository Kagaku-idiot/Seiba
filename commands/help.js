const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
   var embed = new Discord.MessageEmbed()
  .setColor('#FFFF00')
  .setTitle('Seiba! Command Help')
  .setThumbnail('https://cdn.discordapp.com/avatars/216204476539863040/b4070a7401bfb9d5eb1ab70df6920fa2.png?size=256')
  .setDescription("All Command That This Bot can offer")
  //.addField('**Commands For Moderation**', 'mod', false)
  .addField('**Command for Love**', 'love(@person)', false)
  .addField('**Command for Gay Calculation**', 'gaycalc(@person)', false)
  .addField('**Command for Cute Calculation**', 'cutecalc(@person)', false)
  .addField('**Command for Kill**', 'kill(@person)', false)
  .addField('**Command for Memes**', 'meme', false)
  .addField('**Command for Ping**', 'ping', false)
  .addField('**Command for Server Info**', 'serverinfo', false)
  .addField('**Command for Insulting Someone**', 'ape(@person)', false)
  .addField('**Command for Slapping Someone**', 'slap(@person)', false)
  .addField('**Command for Telling Someone They are Stupid**', 'bruh(@person)', false)
  .addField('**Command for Poggers Moment**', 'poggers(@person)', false)
  .addField('**Command for CatGirl**', 'catgirl', false)
  .addField('**Command for directly waking up someone**', 'directwakeup(@person)', false)
  .addField('**Command for Exploding Someone**', 'explode(@person)', false)
  .addField('**Command for Calculations**', 'calculate', false)
  .addField('**Command for Hitler**', 'hitler', false)
  .addField('**Command for Avatar Stealing**', 'avatar(@person)', false)
  .addField('**Command for Triggering**', 'trigger(@person)', false)
  .addField('**Command for Simping**', 'simp(@person)', false)
  .addField('**Command for User Info**', 'userinfo(@person)', false)
  .addField('**Command for Slapping Someone**', 'slap(@person)', false)
  .addField('**Command for Mass Deleting**', 'clear(how much you want )', false)
  .addField('**Command for Opinions**', 'changemymind(whatever you want to say)', false)
  .addField('**Command for Ascii**', 'ascii(whatever you want to say)', false)
   
   var embed2 = new Discord.MessageEmbed()
  .setColor('#FFFF00')
  .setTitle('Seiba! Command Help 2')
  .addField('**Command for Covid Tracking**', 'covidtrack(Country)', false)
  .addField('**Command for Weather**', 'weather(location)', false)
  .addField('**Command for Playing Music**', 'play(music)', false)
  .addField('**Command for Leaving Music**', 'leave', false)
  .setTimestamp()
  .setFooter("Seiba! Bot Help")
  message.channel.send(embed)
  message.channel.send(embed2)
  
}
module.exports.command = {
    name: "help",
}
