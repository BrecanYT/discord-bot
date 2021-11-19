
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var items = new db.table('items')
var global = new db.table('global')

module.exports = async (message, args) => {


    if(message.author.id == 903705870750326804){
    }
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
        .setDescription('Ingresa un Nombre Valido \n Formato : &set-desc {Item} {Desc}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return

    }
    if(!args[1]){
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Descripcion Valido \n Formato : &set-desc {Item} {Desc}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return

    }

    const name = await args[0]
    let prefix = await global.get('prefix') + 'setdesc ' + name
    const desc = await message.content.slice(prefix.length).trim()

    
    if(items.get(name) === undefined) {
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Nombre Valido \n Formato : &set-desc {Item} {Desc}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
    }

    if(items.get(name) === null) {
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Nombre Valido \n Formato : &set-desc {Item} {Desc}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
    }
    items.set(name + '.desc', desc)
    let Embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Global Succes')
    .setDescription('Has configurado la Descripcion del item' + name)
    
    await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })

}