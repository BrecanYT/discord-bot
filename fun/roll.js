const Discord = require("discord.js")
const Canvas = require('canvas')

const embedplus = require('../prefabs/simplembed')

module.exports = async (message, args) => {
    if(isNaN(args[0])) return message.channel.send(`🎲 **|** El número debe ser un número entero.`)

    const random = Math.floor(Math.random() * args[0]) + 1;
    embedplus.GenEmbed(
        ``, 
        `Y la suerte dice... \n Te salio el numero ${random} del cubo de 🎲 ${args[0]} caras`, 
        `#0099ff`, 
        `Luck for you`, 
        ``, 
        `${message.author.username}`, 
        message, ``)

}
