const Discord = require("discord.js")

module.exports.run = async (bot,  message, args) => {
    let sEmbed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle("Server Info")
    .setThumbnail(message.guild.iconURL)
    .setAuthor(`${message.guild.name} info`, message.guild.iconURL)
    .addField("**Server Name:**", `${message.guild.name}`, true)
    .addField("**Server Owner:**", `${message.guild.owner}`, true)
    .addField("**Member Count:**", `${message.guild.memberCount}`, true)
    .addField("**Role Count:**", `${message.guild.roles.size}`, true)
    .setTimestamp()
    .setFooter("Info")
    message.channel.send(sEmbed);
    
}

module.exports.command = {
    name: "serverinfo",
}
