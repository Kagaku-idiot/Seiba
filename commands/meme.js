const Discord = require("discord.js");
const randompuppy = require("random-puppy")


module.exports.run = async (bot, message, args) => {
    const subreddits = [
        "meme",
        "animemes",
        "MemesOfAnime",
        "animememes",
        "AnimeFunny",
        "dankmemes",
        "dankmeme",
        "wholesomememes",
        "MemeEconomy",
        "techsupportanimals",
        "meirl",
        "me_irl",
        "2meirl4meirl",
        "AdviceAnimals"
      ] ;
    const random = subreddits[Math.floor(Math.random() * subreddits.length)];

    const img = await randompuppy(random);
    const embed = new Discord.MessageEmbed()
    .setColor("#FFFF00")
    .setImage(img)
    .setFooter(`From /r/${random}`)
    .setURL(`https://reddit.com/r/${subreddits}`)
    .setTimestamp()
    message.channel.send(embed)
    
}
module.exports.command = {
    name: "meme",
}
