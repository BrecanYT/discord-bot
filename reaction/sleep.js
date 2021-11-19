const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {
  const filter = "anime%20sleep"
  const test = await axios("https://g.tenor.com/v1/random?q=" + filter + "&key=21LZCVTMTC7I&limit=1")
  const filter2 = await test.data.results[0]['media']
  const data = await filter2[0]['gif']

  if (message.mentions.users.first()) {
    
    let Embed1 = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(message.author.username + " esta durmiendo con " + message.mentions.users.first().username)
    .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })

  } else {
    
    let Embed1 = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(message.author.username + " esta durmiedo")
    .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
};
}
