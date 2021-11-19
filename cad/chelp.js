
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var items = new db.table('items')
var global = new db.table('global')

module.exports = async (message, args) => {

    if(message.member.permissions.has("ADMINISTRATOR")){
    } else {let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('No tienes permisos')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return}

        if(!args[0]){
            let ErrorEmbed = new MessageEmbed()
            .setColor('RANDOM')
            .setAuthor('Global Error')
            .setDescription('Ingresa un Titulo Valido \n Formato : &chelp {Title} {imgurl} {desc}')
            
            await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
                return }

    if(!args[1]){
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa un Titulo Valido \n Formato : &chelp {Title} {imgurl} {desc}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return }

    const type = await args[0]
    const name = await args[1]
    let prefix = await global.get('prefix') + 'chelp ' + type + ' ' + name
    const desc = await message.content.slice(prefix.length).trim()
    const avart = await message.author.avatarURL({ dynamic:true }) + "?size=1024"

    if (message.attachments.size !== 0) {
        const eim = message.attachments.first().url
        const Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.username, avart)
        .setTitle(name)
        .setDescription(desc)
        .setFooter(`Pedido por ${message.author.username}`)
        .setImage(eim)
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
        global.set('chelp.' + type + '.Author', message.author.username)
        global.set('chelp.' + type + '.AuthorIMG', avart)
        global.set('chelp.' + type + '.Title', name)
        global.set('chelp.' + type + '.Description', desc)
        global.set('chelp.' + type + '.Image', eim)
    } else {     const Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor(message.author.username, avart)
        .setTitle(name)
        .setDescription(desc)
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] }) 
        global.set('chelp.' + type + '.Author', message.author.username)
        global.set('chelp.' + type + '.AuthorIMG', avart)
        global.set('chelp.' + type + '.Title', name)
        global.set('chelp.' + type + '.Description', desc) }

    

}