const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor("#FF0000")
    .setTitle(`❗❗❗WAKE UP❗❗❗`)
    .setFooter("Wake up pls I'm lonely")
    .setImage("https://media1.tenor.com/images/c996263f596eaef51f470b31b2bad9e0/tenor.gif?itemid=17011054")
    message.channel.send(embed)
    message.channel.send("❗❗❗WAKE UP❗❗❗")
    message.channel.send("❗❗❗WAKE UP❗❗❗")
    message.channel.send("❗❗❗WAKE UP❗❗❗")
    message.channel.send("@everyone")
    message.channel.send("@everyone")
    message.channel.send("@everyone")
    message.channel.send("@everyone")
    message.channel.send("@everyone")
    message.channel.send("@everyone")
    message.channel.send("@everyone")
    message.delete();
}

module.exports.command = {
    name: "initiatetripleprotocolfactorwakeup2.71828182846",
}