
const axios = require('axios')
const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const { MessageEmbed } = require('discord.js');
const base64 = require('base-64')
const utf8 = require('utf8')
const db = require('quick.db');
var economy = new db.table('economy')


const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")
//console.log(decode)

client.on('messageCreate', async (message) => 
{
    if(message.channel.id == "886574939879137320") { //message.reply('e') 
    return }//886574939879137320
    
    if(message.author.bot) return;
    author = message.author.id

    verify(author + '.' + message.guild.id + '.level', 1)
    verify(author + '.' + message.guild.id + '.xp', 0)
    verify(author + '.' + message.guild.id + '.rexp', 25)

    function verify(get, set){
        if(economy.get(get) === undefined){
            economy.set(get, set)
        }
    
        if(economy.get(get) === null){
            economy.set(get, set)
        }
    }
    const randomp = Math.floor(Math.random() * 3);
    const level = economy.get(author + '.' + message.guild.id + '.level')
    const nlevel = level + 1
    const cxp = economy.get(author + '.' + message.guild.id + '.xp')
    const requ = (level * 25) * level
    const added = cxp + randomp  
    economy.set(author + '.' + message.guild.id + '.username', message.author.username)
    economy.set(author + '.' + message.guild.id + '.rexp', requ)
    economy.set(author + '.' + message.guild.id + '.xp', added)
    if(added >= requ){
        economy.set(author + '.' + message.guild.id + '.level', nlevel)
        const Embed1 = new MessageEmbed()
	  .setColor('RANDOM')
	  .setTitle(message.author.username + " ha subido al nivel " + nlevel)
    

    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
    }
})


client.login(decode)