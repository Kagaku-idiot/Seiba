const canva = require('canvacord');
const Discord = require('discord.js')

module.exports = {
    description: "Trigegr yourself",


    async run (bot, message, args) {

        let member = message.mentions.users.first() || message.author

        let avatar = member.displayAvatarURL({dynamic: true, format: "png", size: 1024});

        let image = await canva.Canvas.wasted(avatar);

        let triggered = new Discord.MessageAttachment(image, "triggered.gif")

        message.channel.send(triggered);
    }

}

module.exports.command = {
    name: 'wasted',
}