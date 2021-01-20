const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
const embed = new Discord.MessageEmbed()
.setColor("#FF0000")
.setTitle(`Catgirl has arrived!`)
.setImage("https://media1.tenor.com/images/976ef8fcf3ea274e8d5705a05eb30ec3/tenor.gif?itemid=15501230")
.setTimestamp()
.setFooter("Cute, don't lewd")
message.channel.send(embed)
}

module.exports.command = {
    name: "catgirl",
}
