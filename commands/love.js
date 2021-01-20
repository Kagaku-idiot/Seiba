const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`I Love You ${member.displayName}`)
    .setImage("https://i.imgur.com/mjuxfiY.gif")
    .setTimestamp()
    .setFooter("Love you no homo")
    message.channel.send(embed)
    
}
module.exports.command = {
    name: "love",
}