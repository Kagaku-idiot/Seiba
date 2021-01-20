const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`${member.displayName} EXPLODED!`)
    .setImage("https://media1.tenor.com/images/2eb91897ed939dcfed0a0f1705cdd9c7/tenor.gif?itemid=16089684")
    .setTimestamp()
    .setFooter("EXPLOUSION!")
    message.channel.send(embed)
    
}
module.exports.command = {
    name: "explode",
}