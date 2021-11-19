
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var economy = new db.table('economy')
var global = new db.table('global')

module.exports = async (message, args) => {

    if(message.member.permissions.has("ADMINISTRATOR")
    ){
    }  else {let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Economy Error')
        .setDescription('No tienes permisos')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return}

    const str = await args[0]
    const str1 = await str.replace('<', '');
    const str2 = await str1.replace('@', '');
    const str3 = await str2.replace('&', '');
    const str4 = await str3.replace('>', '');
    //console.log(str)
    
    global.set(message.guild.id + '.manarole', str4)
    let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Set')
        .setDescription('Has establecido el rol de control a ' + str)
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
}