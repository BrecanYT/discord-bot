require('dotenv').config();
const keepAlive = require('./server');
const Discord = require("discord.js")
const { Collection } = require('discord.js');
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const base64 = require('base-64')
const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")


client.commands = new Collection();
client.aliases = new Collection();

['command', 'event'].forEach(handler => {
	require(`./handlers/${handler}`)(client);
});

keepAlive();
client.login(decode);