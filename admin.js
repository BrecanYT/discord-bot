const Discord = require("discord.js")
const fs = require('fs')
var path = require('path');

const base64 = require('base-64')
const utf8 = require('utf8')

const intents = new Discord.Intents(32767)
const { readdirSync } = require('fs')

const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")
var glob = require("glob")
const client = new Discord.Client({ intents })
const db = require('quick.db');
var global = new db.table('global')
const prefix = global.get('prefix')

client.on('messageCreate', async (message) => {

    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    client.user.setActivity(`Comando ` + global.get('prefix') + `help`, {type: 'PLAYING'});
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()
    const cmd = readdirSync('./cad').find(file => file.startsWith(command))
    if(cmd) await require(`./cad/${cmd}`)(message, args)
})

client.login(decode)
