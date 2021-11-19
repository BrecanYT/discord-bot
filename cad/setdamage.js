
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
    const name = await args[2]
    if(items.get(name) === undefined) {
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Nombre Valido \n Formato : &setdamage {min damage} {max damage} {name}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
    }

    if(isNaN(args[0])){let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Numero Valido \n Formato : &setdamage {min damage} {max damage} {name}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return}
    if(isNaN(args[1])){let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Numero Valido \n Formato : &setdamage {min damage} {max damage} {name}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return}

    items.set(name + '.minat', args[0])
    items.set(name + '.maxat', args[1])
    messagesend(args[0], args[1], args[2])


    function messagesend(min, max, name){

        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Set')
        .setDescription('Has establecido el ataque minimo en : ' + min + '\n Has establecido el ataque maximo en : ' + max + '\n Del Objeto : ' + name )
        
        message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
    }
}