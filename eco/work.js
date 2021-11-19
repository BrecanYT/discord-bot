
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
//const mongoeconomy = require("discord-mongo-economy");
//mongoeconomy.connectDatabase("mongodb+srv://arncon123:arncon123@cluster0.jmxb9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });
const db = require('quick.db');
var economy = new db.table('economy')


const talkedRecently = new Set();
module.exports = async (message, args) => {
    var server = message.guild.id;
    const author = message.author.id;
    var items = ['Doctor', 'Carpintero', 'Programador', 'Cocinero', 'Dentista', "Arquitecto", 'Albañil', 'Cientifico', 'Astronauta', 'Profesor'];
    var nums = [100, 150, 200, 220, 90, 70, 130, 240, 300, 310, 90, 80, 70];
    var randomi = items[Math.floor(Math.random() * items.length)]
        var randomp = nums[Math.floor(Math.random() * nums.length)]


    if (talkedRecently.has(message.author.id)) {
      message.channel.send("Espera 1 minuto antes de escribir el comando. - " + message.author.username) 
      return
} else {
  talkedRecently.add(message.author.id);
  setTimeout(() => {
    // Removes the user from the set after a minute
    talkedRecently.delete(message.author.id);
  }, 60000);
}
    if(economy.get(author) === null){
      economy.set(author + '.balance', 0)
    }
    if(economy.get(author) === undefined){
      economy.set(author + '.balance', 0)
    }

    
    if(economy.get(author + '.balance') === null){
      economy.set(author + '.balance', 0)
    }
    if(economy.get(author + '.balance') === undefined){
      economy.set(author + '.balance', 0)
    }

    const added = await economy.get(author + '.balance') + randomp
    let setbal = await economy.set(author + '.balance', added)

    
    const Embed1 = new MessageEmbed()
	  .setColor('RANDOM')
	  .setTitle(message.author.username + " a trabajado como " + randomi + " y a ganado " + randomp + "$")
    .setDescription('Tu nuevo balance es : ' + added)
    

    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed1] })

    //const member = await mongoeconomy.createMember(message.author.id, server);
    //let membercurr = await mongoeconomy.getBank(message.author.id, server)
    //let member2 = await mongoeconomy.addMoney(message.author.id, server, randomp);

}