
const db = require('quick.db');
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const intents = new Discord.Intents(32767)
const base64 = require('base-64')
const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")
const client = new Discord.Client({ intents })
var global = new db.table('global')

module.exports = async (message, args) => {

    if(!message.content.includes('#')) {
        let ErrorEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Error')
            .setDescription('Ingresa un codigo de color valido')
            
            await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
                return
    }


    const string1 = args[0].toLowerCase();
    const string = args[0].toUpperCase();
    const hex = string1.split('#')
    const color = parseInt(hex[1], 16);

    
    let ErrorEmbed = new MessageEmbed()
    .setColor(color)
    .setAuthor("Color Bot")
    .setFooter(`Pedido por ${message.author.username}`)
        .setImage(`https://color-hex.org/colors/${hex[1]}.png`)
    await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
    

}
client.login(decode)