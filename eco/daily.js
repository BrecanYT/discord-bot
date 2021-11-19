
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
//const mongoeconomy = require("discord-mongo-economy");
//mongoeconomy.connectDatabase("mongodb+srv://arncon123:arncon123@cluster0.jmxb9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = require('quick.db');
var economy = new db.table('economy')


const talkedRecently = new Set();
var items = ['Doctor', 'Carpintero', 'Programador', 'Cocinero', 'Dentista', "Arquitecto", 'Albañil', 'Cientifico', 'Astronauta', 'Profesor'];
var nums = [100, 150, 200, 220, 90, 70, 130, 240, 300, 310];
var randomi = items[Math.floor(Math.random() * items.length)]
var randomp = nums[Math.floor(Math.random() * nums.length)]
module.exports = async (message, args) => {
    var server = message.guild.id;
    const author = message.author.id;

   if (talkedRecently.has(message.author.id)) {
    message.channel.send("Debes esperar 1 minuto para volver a trabajar. - " + `<@${message.author.id}>`);
    return;
    } else {
        if(economy.get(author) === null){
            economy.set(author + '.balance', 0)
          }
          if(economy.get(author) === undefined){
            economy.set(author + '.balance', 0)
          }
          added = economy.get(author + '.balance') + 1000
          //console.log(added)
          economy.set(author + '.balance', added)
      
          
          const Embed1 = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle(message.author.username + " a recibido su premio diario de 1000$")
        .setDescription('Tu nuevo balance es : ' + added)
        
      
          message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 864e5);
    }

}