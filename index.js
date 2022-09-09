let Discord = require('discord.js');
let bot = require('chatbotapi');
bot.chatbotsetup(process.env.KEY, process.env.ID);
const client = new Discord.Client({ intents:["GUILDS","GUILD_MESSAGES"] });
client.on('ready', () => {
  console.log(client.user.username+' ready!')
})
client.on('message', message => {
  if (message.content && message.author.id !== client.user.id) {
    let sendMsg = async (message) => {
      let msg = await bot.sendmsg(message.content, message.author.id).then((res) => {
        message.reply(res);
      }).catch((err) => {
        console.log(err);
      }); 
    }
    sendMsg(message);
  }
})
client.login(process.env.TOKEN);
