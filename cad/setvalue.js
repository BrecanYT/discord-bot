
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
    const name = await args[1]
    if(items.get(name) === undefined) {
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Nombre Valido \n Formato : &setvalue {costo} {name}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
    }

    if(isNaN(args[0])){let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Numero Valido \n Formato : &setvalue {costo} {name}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return}

    items.set(name + '.val', args[0])
    items.set(name + '.bal', args[0])
    const val = args[0]


        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Set')
        .setDescription('Has establecido el costo del objeto en : ' + val)
        
        message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
    
}