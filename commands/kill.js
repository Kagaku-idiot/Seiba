const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`${member.displayName} has been killed`)
    .setImage("https://media1.tenor.com/images/eb7fc71c616347e556ab2b4c813700d1/tenor.gif?itemid=5840101")
    .setTimestamp()
    .setFooter("d i e")
    message.channel.send(embed)
    
}
module.exports.command = {
    name: "kill",
}