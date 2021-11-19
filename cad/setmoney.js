
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var economy = new db.table('economy')

var global = new db.table('global')

module.exports = async (message, args) => {


    if(message.author.id == 903705870750326804){
    }
    else {const ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Economy Error')
        .setDescription('No tienes permisos')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return}

    var server = message.guild.id;
    if (!args[0]){
    const ErrorEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor('Economy Error')
	.setDescription('Ingresa un usuario Valido')
    
    await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return
    }
    if (!args[1]){
    const ErrorEmbed2 = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor('Economy Error')
	.setDescription('Ingresa una cantidad validad')
    
    await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed2] })
        return
    }
    const arg1 = await args[1];
    const member = await message.mentions.members.first() || message.author;
    let set = await economy.set(member.id + '.balance', arg1)

    const exampleEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor('Pay')
	.setDescription('Has establecido en ' + arg1 + '$ la cuenta de ' + member.username)
    

   await message.channel.send({ "channel_id": message.channel_id, embeds: [exampleEmbed] })
}