const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`${member.displayName} Is a bruh moment`)
    .setImage("https://media.tenor.com/images/2f66994125c8a2c3c4667b3923e807a7/tenor.gif")
    .setTimestamp()
    .setFooter(`${member.displayName} Is so retarded`)
    message.channel.send(embed)
    
}
module.exports.command = {
    name: "bruh",
}       