const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');

module.exports = async (message, args) => {
  const filter = "anime%20shrug"
  const test = await axios("https://g.tenor.com/v1/random?q=" + filter + "&key=21LZCVTMTC7I&limit=1")
  const filter2 = await test.data.results[0]['media']
  const data = await filter2[0]['gif']

  if (message.mentions.users.first()) {
    
    const Embed1 = new MessageEmbed()
	  .setColor('RANDOM')
	  .setTitle(message.author.username + " no le importa o no sabe lo que dice " + message.mentions.users.first().username)
	  .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    

    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
  } else {
    
    const Embed2 = new MessageEmbed()
    .setColor('RANDOM')
	  .setTitle(message.author.username + " no sabe o no le importa.")
    .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
};
}
