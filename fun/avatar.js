
const axios = require('axios')
const base64 = require('base-64')
const utf8 = require('utf8')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")
//console.log(decode)

module.exports = async (message, args) => {  
    if (message.mentions.users.first()) {
      
      const Embed1 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(message.author.username + " Pidio el Avatar de " + message.mentions.users.first().username)
        .setFooter(`Pedido por ${message.author.username}`)
        .setImage(message.mentions.users.first().avatarURL({ dynamic:true }) + "?size=1024")
      
  
      message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
    } else {
      
      const Embed2 = new MessageEmbed()
      .setColor('RANDOM')
        .setTitle(message.author.username + " toma tu Avatar Humano....")
        .setFooter(`Pedido por ${message.author.username}`)
        .setImage(message.author.avatarURL({ dynamic:true }) + "?size=1024")
      
      message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
  };
}
client.login(decode)
  