const Discord = require('discord.js');
const {getMember, formatDate} = require('../functions.js');
const { stripIndents } = require("common-tags");

module.exports.run = async(bot, message, args)=>
{
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setTitle(`${member.displayName} Is a poggers moment`)
    .setImage("https://media1.tenor.com/images/a5a2c6397c16dffb2c65b48a3fee7eea/tenor.gif?itemid=17875423")
    .setTimestamp()
    .setFooter("Epic Poggers Moment")
    message.channel.send(embed)
}

module.exports.command = {
    name: "poggers",
}


