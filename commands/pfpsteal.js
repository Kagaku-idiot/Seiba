
const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");
const canva = require('canvacord')


module.exports.run = async (bot, message, args) => {
    let member = message.mentions.users.first() || message.author

    let avatar = member.displayAvatarURL({dynamic: true, format: "png", size: 1024});

    let embed = new Discord.MessageEmbed()
    .setColor("#f95d1a")
    .setTitle(`${member.displayName}'s Avatar Is`)
    .setImage(avatar)
    .setTimestamp()
    .setFooter("Pfp")
    message.channel.send(avatar)
    message.delete();
};

module.exports.command = {
    name: "avatar",
}
