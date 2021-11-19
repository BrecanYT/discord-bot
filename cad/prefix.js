const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {
    if(message.author.id != 903705870750326804){
        return;
    }
    if(args[0] === undefined){
        return;
    }
    

        arg0 = args[0]
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Prefix')
        .setDescription('Prefix Set ' + arg0)
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        global.set('prefix', arg0)
}