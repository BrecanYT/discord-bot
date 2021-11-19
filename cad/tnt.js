
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {
    if(message.member.permissions.has("ADMINISTRATOR")
    ){
    }  else {let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('No tienes permisos')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return}


    if(args[0] > 100){let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Deben ser menos de 100 mensajes')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
    }
    const filter = "tnt%20explode"
    const test = await axios("https://g.tenor.com/v1/random?q=" + filter + "&key=21LZCVTMTC7I&limit=1")
    const filter2 = await test.data.results[0]['media']
    const data = await filter2[0]['gif']

    arg0 = args[0]

    if(arg0 === undefined){
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Debes ingresar un numero')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return;
    }

    if(isNaN(arg0)){
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Debes ingresar un numero')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return;
    }
    const amount = await args[0]
    const channel = await message.channel
    const messages = await channel.messages.fetch()
    channel.bulkDelete(amount, true)


  let Embed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle('TNT')
	.setDescription('Se han explotado ' + amount + ' mensajes')
	.setAuthor('Arn-Connect')
    .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
	

   await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
}