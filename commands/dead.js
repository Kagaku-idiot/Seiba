const Discord = require("discord.js");



module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`DEAD CHAT`)
    .setFooter("Dead chat pls revive")
    .setImage("https://media1.tenor.com/images/579d9d042eb52a79a0f6759b5634f516/tenor.gif?itemid=3571124")
    message.channel.send(embed)
    message.channel.send("❗❗❗DEAD CHAT❗❗❗")
    message.channel.send("❗❗❗DEAD CHAT❗❗❗")
    message.channel.send("❗❗❗DEAD CHAT❗❗❗")
}

module.exports.command = {
    name: "deadchat",
}