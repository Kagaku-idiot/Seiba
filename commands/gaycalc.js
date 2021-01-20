const Discord = require("discord.js");
const { getMember, formatDate} = require("../functions.js");
const { stripIndents } = require("common-tags");

function randomizer(length, letter) {
    var randomizer = '';
    if (letter.indexOf('0') > -1) randomizer += '0123456789';
    var results = '';
    for (var i = length; i > 0; --i)
    {
    results += randomizer[Math.floor(Math.random() * randomizer.length)];
    }
    return results;
    }
module.exports.run = async (bot, message, args) => {
    const member = getMember(message, args.join(" "));
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setTitle(`The Percentages Of ${member.displayName} To Be Gay Is`)
    .setDescription(randomizer(2,'0') + '%')
    .setTimestamp()
    .setFooter("g a y")
    message.channel.send(embed)
    
}
module.exports.command = {
    name: "gaycalc",
}
