const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var economy = new db.table('economy')

module.exports = async (message, args) => {
    if(message.member.permissions.has("ADMINISTRATOR")){
    } else {return}

    const target = await message.mentions.members.first() || message.author;
    if(!target) {
        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Debes mencionar a un usuario')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
        return;}
    else if(target.id === message.author.id){
        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Debes mencionar a un usuario')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
        return;} else if(!target.bannable) {
        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('No se puede banear a este usuario')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] 
         })
         return;}

    target.ban(args[1])
    let Embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Succes')
    .setDescription('Has baneado al usuario : ' + member.username)
    
    await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })

}
