const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {
    if(message.member.permissions.has("ADMINISTRATOR")){
    } else {return}
    if(args[0] === undefined){
        return;
    }
    str1 = await args[1]
    str2 = await str1.replace('<', '')
    str3 = await str2.replace('>', '')
    str4 = await str3.replace('#', '')
    if(args[0] === 'ia'){
        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Succes')
        .setDescription('Se estable el canal de ia en : ' + args[1])
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
        global.set(message.guild.id + '.ia', str4) 
        return
    }
    if(args[0] === 'log'){
        let Embed1 = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Succes')
        .setDescription('Se estable el canal de logs en : ' + args[1])
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
        global.set(message.guild.id + '.log', str4)
        return
    }
    if(args[0] === 'confess'){
        let Embed2 = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Succes')
        .setDescription('Se estable el canal de confess en : ' + args[1])
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
        global.set(message.guild.id + '.confess', str4)
        return
    }
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Debes ingresar una variable \n formato: &setchannel {ia,....} {channel}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return;
}