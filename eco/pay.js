
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var economy = new db.table('economy')

module.exports = async (message, args) => {
    const author = message.author.id;
    if(economy.get(author) === null){
        economy.set(author + '.balance', 0)
      }
      if(economy.get(author) === undefined){
          economy.set(author + '.balance', 0)
        }
    const authorbalance = economy.get(author + '.balance');
    if (authorbalance < args[1]){
        const ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Economy Error')
        .setDescription('No tienes el dinero suficiente')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
        }
    if (!args[1]){
    const ErrorEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor('Economy Error')
	.setDescription('Ingresa una cantidad validad')
    
    await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return
    }
    if (!args[0]){
    const ErrorEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor('Economy Error')
	.setDescription('Ingresa un usuario Valido')
    
    await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return
    }
    const arg1 = args[1];
    const member = message.mentions.members.first() || message.author;

    if(economy.get(member.id) === null){
        economy.set(member.id + '.balance', 0)
      }
      if(economy.get(member.id) === undefined){
          economy.set(member.id + '.balance', 0)
        }
    let pay = await economy.add(member.id + '.balance', arg1)
    let steal = await economy.subtract(author + '.balance', arg1);

    const exampleEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setAuthor('Pay')
	.setDescription('Has pagado ' + arg1 + '$ a' + `<@${member.id}>`)
    

   await message.channel.send({ "channel_id": message.channel_id, embeds: [exampleEmbed] })
}