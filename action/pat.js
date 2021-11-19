const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {
  const filter = "anime%20pat"
  const test = await axios("https://g.tenor.com/v1/random?q=" + filter + "&key=21LZCVTMTC7I&limit=1")
  const filter2 = await test.data.results[0]['media']
  const data = await filter2[0]['gif']

  if (message.mentions.users.first()) {

    verify(message.mentions.users.first().id + '.pats', 0)
    function verify(get, set){
        if(global.get(get) === undefined){
            global.set(get, set)
        }
    
        if(global.get(get) === null){
            global.set(get, set)
        }
    }
    const cxp = global.get(message.mentions.users.first().id + '.pats')
    const added = cxp + 1
    const Embed1 = new MessageEmbed()
	  .setColor('RANDOM')
	  .setTitle(message.author.username + " ah acariciado a " + message.mentions.users.first().username)
      .setDescription(message.mentions.users.first().username + " Ah recibido unas " + added + " caricias")
	  .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    

    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
    global.set(message.mentions.users.first().id + '.pats', added)

  } else {
    
    const Embed2 = new MessageEmbed()
    .setColor('RANDOM')
	.setTitle("Error")
    .setDescription("Ingresa un usuario")
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
};
}
