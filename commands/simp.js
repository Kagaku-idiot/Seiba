const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`${member.displayName} Is a simp`)
    .setImage("https://i.kym-cdn.com/photos/images/original/001/709/184/73a.jpg")
    .setTimestamp()
    .setFooter("Yuck simp")
    message.channel.send(embed)
    
}
module.exports.command = {
    name: "simp",
}