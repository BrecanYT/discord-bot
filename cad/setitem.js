
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
        .setDescription('Ingresa una Nombre Valido \n Formato : &set {type} {true/false} {name}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
    }

    ifarg("sword")
    ifarg("armor")
    ifarg("food")

    function ifarg(namevar){
        if(args[0] = namevar){
            if(args[1] === 'true'){
                items.set(name + "." + namevar, 'true')
                messagesend(args[0], args[1], args[2])
            }
            if(args[1] === 'false'){
                items.set(name + "." + namevar, 'false')
                messagesend(args[0], args[1], args[2])}
        }
    }

    function messagesend(type, bool, name){

        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Set')
        .setDescription('Has establecido en ' + bool + ' la funcion ' + type + ' del objeto ' + name)
        
        message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
    }
}