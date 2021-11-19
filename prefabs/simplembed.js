const base64 = require('base-64')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")

function GenEmbed(title, description, color, footer, image, author, message, url) {
    const embed = new MessageEmbed()
        .setTitle(title)
        .setAuthor(author)
        .setDescription(description)
        .setColor(color)
        .setFooter(`Pedido por ${message.author.username}`)
        .setImage(image)
        //.setFooter(`Pedido por ${message.author.username}`)
        .setURL(url)
        message.channel.send({ "channel_id": message.channel_id, embeds: [embed] })
    
}

function ErrorEmbed(erroname, correction, message){
    const embed = new MessageEmbed()
    .setTitle(`${erroname} ERROR`)
    .setDescription(`Uso incorrecto \n Uso correcto : ${correction}`)
    .setColor('RED')
    message.channel.send({ "channel_id": message.channel_id, embeds: [embed] })

}

function simple(title, description, message, img){
        const embed = new MessageEmbed()
        .setTitle(title)
        .setDescription(description)
        .setColor('RANDOM')
        .setFooter(`Pedido por ${message.author.username}`)
        .setImage(img)
        message.channel.send({ "channel_id": message.channel_id, embeds: [embed] })
        
}


function img(title, img, message){
    const embed = new MessageEmbed()
    .setTitle(title)
    .setColor('RANDOM')
    .setFooter(`Pedido por ${message.author.username}`)
    .setImage(img)
    message.channel.send({ "channel_id": message.channel_id, embeds: [embed] })
    
}


function errorperm(){
    const embed = new MessageEmbed()
    .setTitle('Error')
    .setDescription('No tienes permisos')
    .setColor('RED')
    message.channel.send({ "channel_id": message.channel_id, embeds: [embed] })
    
}

/*
    Usage : const embedplus = require('../prefabs/simplembed')
    embedplus.GenEmbed("Title", "Description", "Color", "Footer", "Image", "Author", "Message", "URL")
    embedplus.ErrorEmbed("ErrorName", "Correction", "Message")
    embedplus.simplebed("Title", "Description", "Message", "Image")
*/


module.exports = {
    GenEmbed,
    ErrorEmbed,
    simple,
    errorperm,
    img
};

client.login(decode)
  