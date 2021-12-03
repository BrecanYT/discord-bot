const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const ms = require('ms');
const db = require('quick.db');
var item = new db.table('items')
var eco = new db.table('eco')
const talkedRecently = new Set();

module.exports = async (message, args) => {
    const author = message.author.id;
    const cub = await eco.get(message.author.id + '.balance')
    if(cub > 250) {
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('No tienes dinero suficiente \n Debes tener 250$ para pagar')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
            return
    }



    let topemojis = [':grapes: :grapes: :grapes:', ':apple: :apple: :apple:']
    let top = topemojis[Math.floor(Math.random() * topemojis.length)]
    let midemojis = [':grapes: :apple: :grapes:', ':grapes: :grapes: :apple:', ':apple: :grapes: :apple:', ':apple: :apple: :grapes:']
    let mid = midemojis[Math.floor(Math.random() * midemojis.length)]
    let bottomemojis = [':tangerine: :grapes: :apple:', ':tangerine: :apple: :grapes:', ':apple: :grapes: :tangerine:', ':grapes: :apple: :tangerine:',  ':grapes: :tangerine: :apple:',  ':apple: :grapes: :tangerine:']
    let bottom = bottomemojis[Math.floor(Math.random() * bottomemojis.length)]

    if (talkedRecently.has(message.author.id)) {
        msg.channel.send("Espera 1 hora antes de escribir el comando. - " + msg.author.username);
  } else {        let emojis;
    let color;
    let ans;
    let amount = Math.floor(Math.random() * 2000) - 1000
    if (amount > 500) emojis = top
    if (amount < 501 && amount > 0) emojis = mid
    if (amount < 1) emojis = bottom
    if (amount < 0){
    color = "RED"
    amount = 0
    ans = "Has perdido "}
    if (amount > 0) {
    color = "GREEN" 
    ans = "Has ganado "}

    let Embed = new MessageEmbed()
    .setTitle("Slots Machine")
    .setColor(color)
    .setDescription(ans + amount + '$' + '\n \n \n Tu Loteria : ' + '\n' + bottom + '\n' + emojis + '\n' + bottom)
    await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
    
    added = eco.get(author + '.balance') + amount
    //console.log(added)
    eco.set(author + '.balance', added)
    talkedRecently.add(msg.author.id);
    setTimeout(() => {
      // Removes the user from the set after a minute
      talkedRecently.delete(msg.author.id);
    }, 3600000);
  }
}
