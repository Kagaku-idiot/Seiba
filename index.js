const config = require("./config.json")
const Discord = require("discord.js");


const bot = new Discord.Client({disableEveryone: true});



const fs =require("fs");
bot.commands = new Discord.Collection();
bot.aliases = new Discord.Collection();

fs.readdir("./commands/", (err, files) =>{

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.lenght <= 0) {
        return console.log("[LOGS] Couldn't Find Commands!");
    }
    
    jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        bot.commands.set(props.command.name, props);
    })
});


bot.on("ready", async () =>{
    console.log("                _______ __   __  _____  _______  ")
    console.log("                |______   |_|   |_____] |_____|   ")
    console.log("                ______|    |    |       |     |   ")
    console.log("               Welcome [Discord user], Seiba! online!")
})

bot.on("message", async message =>{
    //if(message.author.bot || message.channel.type === "dm") return;
    if (!message.content.startsWith(config.prefix)) return;
    let prefix = config.prefix;
    let args = message.content.slice(prefix.length).split(/ +/g);
    let cmd = args.shift().toLowerCase();
    bot.user.setActivity("se!help",{type: "PLAYING"}).catch(console.error);

    
    let commandfile = bot.commands.get(cmd) || bot.commands.get(bot.aliases.get(cmd));
    if(commandfile) commandfile.run(bot,message,args)
    
    if(cmd === `${prefix}hello`){
        return message.channel.send("hello")
    }
})


bot.login(config.token);

