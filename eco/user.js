const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var economy = new db.table('economy')

module.exports = async (message, args) => {

    const member = await message.mentions.members.first() || message.author;

  await verify(member.id + '.age', '0')
  await verify(member.id + '.balance', 0)
  await verify(member.id + '.' + message.guild.id + '.warns.cuan', '0')
  await verify(member.id + '.' + message.guild.id + '.level', '1')
  await verify(member.id + '.' + message.guild.id + '.xp', '0')
  await verify(member.id + '.' + message.guild.id + '.rexp', '25')

  function verify(get, set){
      if(economy.get(get) === undefined){
        economy.set(get, set)
      }
  
      if(economy.get(get) === null){
        economy.set(get, set)
      }
  }
    const culevel = await economy.get(member.id + '.' + message.guild.id + '.level')
    const cuxp = await economy.get(member.id + '.' + message.guild.id + '.xp')
    const rexp = await economy.get(member.id + '.' + message.guild.id + '.rexp')
    const memberbalance = await economy.get(member.id + '.balance');
    const memberage = await economy.get(member.id + '.age');
    const cwarns = await economy.get(member.id + '.' + message.guild.id + '.warns.cuan')
  if (message.mentions.users.first()) {
    
    const Embed1 = await new MessageEmbed()
	  .setColor('RANDOM')
	  .setTitle("Usuario " + message.mentions.users.first().username)
      
	    .addFields(
	    	{ name: 'Dinero', value: memberbalance + "$" },
	    	{ name: 'Edad', value: memberage + " Años" },
	    	{ name: 'Warns', value: cwarns + " Avisos" },
	    	{ name: 'Nivel', value:"Lvl : " + culevel},
	    	{ name: 'Experiencia', value:"Xp : " + cuxp + " / " + rexp},
	    )
      .setAuthor(message.mentions.users.first().username, message.mentions.users.first().avatarURL({ dynamic:true }))
      

    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
  } else {
    
    const Embed2 = await new MessageEmbed()
    .setColor('RANDOM')
	  .setTitle("Usuario " + message.author.username)
      .setAuthor(message.author.username, message.author.avatarURL({ dynamic:true }))
      .addFields(
        { name: 'Dinero', value: memberbalance + "$" },
	    	{ name: 'Edad', value: memberage + " Años" },
	    	{ name: 'Warns', value: cwarns + " Avisos" },
	    	{ name: 'Nivel', value:"Lvl : " + culevel},
	    	{ name: 'Experiencia', value:"Xp : " + cuxp + " / " + rexp},
      )
    
    await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
};
}
