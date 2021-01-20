const Discord = require("discord.js");
const randompuppy = require("random-puppy")


module.exports.run = async (bot, message, args) => {
    const subreddits = [
        "Art"
      ] ;
    const random = subreddits[Math.floor(Math.random() * subreddits.length)];

    const img = await randompuppy(random);
    const embed = new Discord.MessageEmbed()
    .setColor("#4cfab8")
    .setImage(img)
    .setFooter(`From /r/${random}`)
    .setURL(`https://reddit.com/r/${random}`)
    .setTimestamp()
    message.channel.send(embed)
    
}
module.exports.command = {
    name: "art",
}