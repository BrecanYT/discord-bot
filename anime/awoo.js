
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const Tenor = require("tenorjs").client({
  "Key": "21LZCVTMTC7I", // https://tenor.com/developer/keyregistration
  "Filter": "off", // "off", "low", "medium", "high", not case sensitive
  "Locale": "en_US", // Your locale here, case-sensitivity depends on input
  "MediaFilter": "minimal", // either minimal or basic, not case sensitive
  "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly
});

module.exports = async (message, args) => {
  const filter = "anime%20neko"
  const test = await axios("https://g.tenor.com/v1/random?q=" + filter + "&key=21LZCVTMTC7I&limit=1")
  const filter2 = await test.data.results[0]['media']
  const data = await filter2[0]['gif']
    
    const Embed2 = new MessageEmbed()
    .setColor('RANDOM')
    .setDescription(`**${message.author.username}**, Awooo!`)
    .setFooter(`Pedido por ${message.author.username}`)
        .setImage(data.url)
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })

}