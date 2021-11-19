
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var items = new db.table('items')
var global = new db.table('global')

module.exports = async (message, args) => {

    if(message.member.permissions.has("ADMINISTRATOR")){
    } else if(message.author.id == 903705870750326804){} 
    else {let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('No tienes permisos')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return}

    if(!args[0]){
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa un Titulo Valido \n Formato : &genembed {Title} {imgurl} {desc}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return }

    const name = await args[0]
    let prefix = await global.get('prefix') + 'genembed ' + name
    const desc = await message.content.slice(prefix.length).trim()
    if(desc == null){desc = '...'}

    if (message.attachments.size !== 0) {
        const eim = message.attachments.first().url
        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(name)
        .setDescription(desc)
        .setFooter(`Pedido por ${message.author.username}`)
        .setImage(eim)
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
    } else {     let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle(name)
        .setDescription(desc)
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] }) }

    

}