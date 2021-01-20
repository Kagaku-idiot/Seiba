const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`${member.displayName} is disgusting.`)
    .setImage("https://media1.tenor.com/images/6493bee2be7ae168a5ef7a68cf751868/tenor.gif?itemid=17298755")
    .setTimestamp()
    .setFooter("Ugh disgusting")
    message.channel.send(embed)
    message.channel.send("https://hanime.tv")
    
}
module.exports.command = {
    name: "horny",
}