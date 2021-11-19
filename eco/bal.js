const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const mongoeconomy = require("discord-mongo-economy");
mongoeconomy.connectDatabase("mongodb+srv://arncon123:arncon123@cluster0.jmxb9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });


module.exports = async (message, args) => {
  const author = message.mentions.length
    ? message.mentions[0]
    : message.author;

    var server = message.guild.id;

    const member = message.mentions.members.first() || message.author;

    const account = await mongoeconomy.createMember(member.id, server);
    let membercurr = await mongoeconomy.fetchMember(member.id, server)
  if (message.mentions.users.first()) {
    
    const Embed1 = await new MessageEmbed()
	  .setColor('RANDOM')
	  .setTitle("Usuario " + message.mentions.users.first().username)
      
	    .addFields(
	    	{ name: 'Dinero', value: membercurr.money + "$" },
	    )
      .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL({ dynamic:true }))
      

    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
  } else {
    
    const Embed2 = await new MessageEmbed()
    .setColor('RANDOM')
	  .setTitle("Usuario " + message.author.username)
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
      .addFields(
          { name: 'Dinero', value: membercurr.money + "$" },
      )
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
};
}
