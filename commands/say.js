const { MessageFlags } = require("discord.js");

module.exports = {
    desciption: "say command",

    async run (bot, message, args) {
        let msg;
        let textChannel = message.mentions.channels.first()
        message.delete()

        if(textChannel) {
            msg = args.slice(1).join(" ");
            textChannel.send(msg)
        } else {
            msg = args.join(" ");
            message.channel.send(msg)
        }
    }
}

module.exports.command = {
    name: "say",
}