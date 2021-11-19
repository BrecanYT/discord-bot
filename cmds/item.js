const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var item = new db.table('items')

module.exports = async (message, args) => {
    const name = await args[0]
    if(name === undefined) {        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Nombre Valido \n Formato : &item {Item}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return}

    if(item.get(name) === undefined) {
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Nombre Valido \n Formato : &item {Item}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
    }

    if(item.get(name) === null) {
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription('Ingresa una Nombre Valido \n Formato : &item {Item}')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
    }

    const desc = item.get(name + '.desc')
    const sword = item.get(name + '.sword')
    const armor = item.get(name + '.armor')
    const food = item.get(name + '.food')
    const emoji = item.get(name + '.emoji')
    const minat = item.get(name + '.minat')
    const maxat = item.get(name + '.maxat')
    const value = item.get(name + '.val')
    let Embed = new MessageEmbed()
    .setColor('RANDOM')
    .setAuthor(name + emoji)
    .setDescription('Descripcion : ' + desc + '\n Sword : ' + sword + '\n Attack : ' + minat + ' - ' + maxat + '\n Armor : ' + armor + '\n Food : ' + food + '\n Costo : ' + value)
    
    await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })

}
