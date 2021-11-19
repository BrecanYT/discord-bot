
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const Canvas = require('canvas')

module.exports = async (message, args) => {

    const love = Math.floor(Math.random() * 99) + 1;
    const health = Math.floor(Math.random() * 99) + 1;
    const luck = Math.floor(Math.random() * 99) + 1;
    const money = Math.floor(Math.random() * 99) + 1;

    const embed = new Discord.MessageEmbed()
    .setAuthor(message.author.username, message.author.avatarURL())
    .setColor('#0099ff')
    .setTitle('🎉 Lucky 🎉')
    .setDescription(`🍪 Tu galleta de la suerte dice: \n La rueda de la fortuna te favorecerá y estarás rodeado de prosperidad. \n Tus pronósticos son: \n ❤️ Amor: ${love} % \n 💉 Salud: ${health} % \n 🍀 Suerte: ${luck} % \n 💸 Dinero: ${money} %`)
    .setFooter('Luck for you')
    await message.channel.send({ "channel_id": message.channel_id, embeds: [embed] })

}
