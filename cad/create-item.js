
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

    //console.log(args[0])

    if(!args[0]){
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa un Nombre Valido \n Formato : &create-item {Nombre} {Emoji}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return

    }
    if(!args[1]){
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa un Emoji Valido \n Formato : &create-item {Nombre} {Emoji}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return

    }

    const name = args[0]
    const emoji = args[1]

    items.push('itemlist', name)
    items.set(name + ".emoji", emoji)
    items.set(name + '.desc', ' ')
    items.set(name + '.sword', 'false')
    items.set(name + '.armor', 'false')
    items.set(name + '.food', 'false')
    items.set(name + '.maxat', '0')
    items.set(name + '.minat', '0')
    items.set(name + '.maxatR', '0')
    items.set(name + '.minatR', '0')
    items.set(name + '.val', '0')
    items.set(name + '.bal', 0)
    let Embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor('Global Succes')
    .setDescription('Has creado el item ' + name)
    
    await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })

}