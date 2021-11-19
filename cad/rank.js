const axios = require('axios')
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var economy = new db.table('economy')
const canvacord = require("canvacord");

module.exports = async (message, args) => {

const member = message.mentions.members.first() || message.author;
    if(economy.get(member.id + '.level') === undefined){
      economy.set(member.id + '.level', 1)
  }
  
  if(economy.get(member.id + '.level') === null){
      economy.set(member.id + '.level', 1)
  }
  if(economy.get(member.id + '.xp') === undefined){
      economy.set(member.id + '.xp', 0)
  }
  
  if(economy.get(member.id + '.xp') === null){
      economy.set(member.id + '.xp', 0)
  }
  
  if(economy.get(member.id + '.rexp') === undefined){
      economy.set(member.id + '.rexp', 25)
  }
  
  if(economy.get(member.id + '.rexp') === null){
      economy.set(member.id + '.rexp', 25)
  }
    const culevel = await economy.get(member.id + '.level')
    const cuxp = await economy.get(member.id + '.xp')
    const rexp = await economy.get(member.id + '.rexp')
  

    const rank = await new canvacord.Rank()
    .setAvatar(member.avatarURL)
    .setCurrentXP(cuxp)
    .setRequiredXP(rexp)
    .setLevel(culevel)
    .setStatus(member.presence.status)
    .setProgressBar("#FFFFFF", "COLOR")
    .setUsername(member.displayName)
    .setDiscriminator(member.discriminator);
    rank.build()
    .then(data => {
        const attachment = new Discord.MessageAttachment(data, 'rank.png');
        message.channel.send(attachment);
    });
}
