
const db = require('quick.db');
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const intents = new Discord.Intents(32767)
const base64 = require('base-64')
const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")
const client = new Discord.Client({ intents })
var global = new db.table('global')

module.exports = async (message, args) => {

    if(message.author.id == 903705870750326804) {
    } else if(message.member.permissions.has("MANAGE_MESSAGES")) {} else {let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('No tienes permisos')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return}
        let prefix = await global.get('prefix') + 'say '
        const desc = await message.content.slice(prefix.length).trim()

        if (!desc) { message.channel.send("Debes ingresar un texto! >.<")
         return; }


    message.channel.send(desc)
    

}
client.login(decode)