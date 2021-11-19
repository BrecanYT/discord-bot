
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {
	const prefix = await global.get('prefix')
	const commands = await global.get('commands')
  const exampleEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('Comandos y mas')
	.setAuthor('Arn-Connect')
	//.setDescription('Some description here')
	//.setThumbnail('https://i.imgur.com/AfFp7pu.png')
	.setDescription("Commandos \n" + prefix + commands)
    
  //  https://discordjs.guide/popular-topics/embeds.html#using-the-embed-constructor

   await message.channel.send({ "channel_id": message.channel_id, embeds: [exampleEmbed] })
   //console.log(message.channel.id)
}