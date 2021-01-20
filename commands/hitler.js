
const canva = require('canvacord');
const Discord = require('discord.js');
const { getMember, formatDate} = require("../functions.js")


module.exports = {
    description: "Trigegr yourself",


    async run (bot, message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.avatarURL({format: "png"})

        let image = await canva.Canvas.hitler(avatar);

        let triggered = new Discord.MessageAttachment(image, "triggered.gif")

        message.channel.send(triggered);
    }
}

module.exports.command = {
    name: 'hitler',
}