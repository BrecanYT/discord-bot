
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var economy = new db.table('economy')

module.exports = async (message, args) => {
    arg0 = args[0]

    if(isNaN(arg0)){
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Debes ingresar un numero')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return;
    }

    if(arg0 === undefined){
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Debes ingresar un numero')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return;
    }

    author = message.author.id
    economy.set(author + '.age', arg0)
    let mesEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Correcto')
        .setDescription('Has establecido tu edad a ' + arg0 + ' años')
        
    await message.channel.send({ "channel_id": message.channel_id, embeds: [mesEmbed] })
}