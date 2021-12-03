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

  const data = await akaneko.nsfw.pussy();

  if (message.mentions.users.first()) {

    const Embed1 = new MessageEmbed()
	  .setColor('RANDOM')
	  .setTitle(message.author.username + " esta tocandole las partes intimas a " + message.mentions.users.first().username)
	  .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    

    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
    return
  } else {
    
    const Embed2 = new MessageEmbed()
    .setColor('RANDOM')
    .setTitle(message.author.username + " esta tocando una parte intima")
    .setFooter(`Pedido por ${message.author.username}`)
      .setImage(data.url)
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
};
}
