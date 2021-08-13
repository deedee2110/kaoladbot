const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const command = require('./commands/index');
const help = require('./commands/help');
const kick = require('./moderator/kick');
const ban = require('./moderator/ban');
const clear = require('./moderator/delete');
const rules = require('./commands/rules');
const rulesth = require('./commands/rulesth');
const announcement = require('./commands/announc');
const poll = require('./commands/poll');
const reaction = require('./commands/reaction');
const info = require('./commands/info');
const role = require('./commands/role')
const welcome = require('./moderator/welcome')
const political = require('./commands/political')
const donate = require('./commands/donate')
const badw = require('./moderator/badword')
//const joke = require('./command/joke')
const pword = require('./moderator/politicalword')
const mute = require('./moderator/mute')
const unmute = require('./moderator/unmute')
const poll2 = require('./moderator/poll')
const afk = require('./commands/afk')

client.on('ready', async () => {
    console.log('The client is ready!')
    client.user.setActivity("!help", { type: "PLAYING"});
    //client.channels.cache.get('867654057912958976').send('📢<@867031115373215795> is now online to see command use **!help**✨');
    command(client)
    help(client)
    kick(client)
    ban(client)
    clear(client)
    rules(client)
    rulesth(client)
    announcement(client)
    poll(client)
    reaction(client)
    info(client)
    role(client)
    welcome(client)  
    political(client)  
    donate(client)
    badw(client)
    //joke(client)
    pword(client)
    mute(client)
    unmute(client)
    poll2(client)
    afk(client)
  })
  

client.login(config.token);