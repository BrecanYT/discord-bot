const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var global = new db.table('global')
const akaneko = require('akaneko');

module.exports = async (message, args) => {
    if (message.channel.nsfw) {
    } else {
    let Embed2 = new MessageEmbed()
    .setColor('RANDOM')
      .setTitle("Este canal no es NSFW 🔞")
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] });
    return;
    }

  const filter = "anime%20fuck"
  const test = await axios("https://g.tenor.com/v1/random?q=" + filter + "&key=21LZCVTMTC7I&limit=1")
  const filter2 = await test.data.results[0]['media']
  const data = await filter2[0]['gif']

  if (message.mentions.users.first()) {
    let set = global.add(message.mentions.users.first().id + '.' + message.author.id + '.kiss', 1)
    const kisses = global.get(message.mentions.users.first().id + '.' + message.author.id + '.kiss')

    const Embed1 = new MessageEmbed()
	  .setColor('RANDOM')
	  .setTitle(message.author.username + " esta follando a " + message.mentions.users.first().username)
    .setDescription(`${message.author.username} a follando a ${message.mentions.users.first().username} \n ${times} veces`)
	  .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    

    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
    return
  } else {
    
    const Embed2 = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription("Debes mencionar a alguien")
    .setFooter(`Pedido por ${message.author.username}`)
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
};
}
