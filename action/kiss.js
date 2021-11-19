const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {
  const filter = "anime%20kiss"
  const test = await axios("https://g.tenor.com/v1/random?q=" + filter + "&key=21LZCVTMTC7I&limit=1")
  const filter2 = await test.data.results[0]['media']
  const data = await filter2[0]['gif']

  if (message.mentions.users.first()) {
    let set = global.add(message.mentions.users.first().id + '.' + message.author.id + '.kiss', 1)
    let set2 = global.add(message.author.id + '.' + message.mentions.users.first().id + '.kiss', 1)
    const kisses = global.get(message.mentions.users.first().id + '.' + message.author.id + '.kiss')
    if(kisses === undefined){
      kisses = global.get(message.author.id + '.' + message.mentions.users.first().id + '.kiss')
      const Embed1 = new MessageEmbed()
      .setColor('RANDOM')
      .setTitle(message.author.username + " esta besando a " + message.mentions.users.first().username)
      .setDescription(`${message.author.username} a besado a ${message.mentions.users.first().username} \n ${kisses} veces`)
      .setFooter(`Pedido por ${message.author.username}`)
          .setImage(data.url)
      
  
      message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
      return
    }
    const Embed1 = new MessageEmbed()
	  .setColor('RANDOM')
	  .setTitle(message.author.username + " esta besando a " + message.mentions.users.first().username)
    .setDescription(`${message.author.username} a besado a ${message.mentions.users.first().username} \n ${kisses} veces`)
	  .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    

    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
    return
  } else {
    
    const Embed2 = new MessageEmbed()
    .setColor('RANDOM')
	  .setTitle(message.author.username + " a besado a su novia imaginaria :cry: ")
    .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
};
}
