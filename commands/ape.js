const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`${member.displayName} You Are An Autistic Ape`)
    .setImage("https://i.imgur.com/HcF1S2L.jpg")
    .setTimestamp()
    .setFooter("APE")
    message.channel.send(embed)
    
}
module.exports.command = {
    name: "ape",
}