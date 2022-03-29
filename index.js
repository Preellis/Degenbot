const Discord = require("discord.js")
require("dotenv").config()

const client = new Discord.Client({
  intents:[
    "GUILDS",
    "GUILD_MESSAGES",
    "GUILD_MEMBERS"
  ]
})

let bot = {
  client,
  prefix: "d.",
  owners: ["242140657571856385"]
}

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot,reload)=> require("./handlers/events")(bot,reload)
client.loadCommands = (bot,reload) => require("./handlers/commands")(bot,reload)
client.loadEvents(bot,false)
client.loadCommands(bot,false)
module.exports = bot

// client.on("messageCreate", (message)=>{
//   if (message.content=="hi"){
//     message.reply("<@Prest>")
//   }
// })
client.login(process.env.TOKEN)