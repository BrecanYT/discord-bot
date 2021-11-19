const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {
    //console.log(args)
    const quan = Object.keys(args).length

    if(quan === 0) {
        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Error")
        .setDescription('Ingresa Titulo')
        
        message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
        return
        }
    if(quan === 1) {
    let Embed = new MessageEmbed()
    .setColor('RANDOM')
	.setTitle("Error")
    .setDescription('Ingresa Opciones')
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
    return
    }
    if(quan === 2) {
    let Embed = new MessageEmbed()
    .setColor('RANDOM')
	.setTitle("Error")
    .setDescription('Ingresa Opciones')
    
    message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
    return
    }
    if(quan === 3) {
    let Embed = new MessageEmbed()
    .setColor('RANDOM')
	.setTitle("Poll " + args[0])
    .setDescription('Opciones : \n :one: ' + args[1] + '\n :two: ' + args[2])
    
    const msg = await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
	Promise.all([
    msg.react('1️⃣'),
    msg.react('2️⃣'),
    ])
    }
    
    if(quan === 4) {
        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle("Poll " + args[0])
        .setDescription('Opciones : \n :one: ' + args[1] + '\n :two: ' + args[2] + '\n :three: ' + args[3])
        
        const msg = await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
        Promise.all([
        msg.react('1️⃣'),
        msg.react('2️⃣'),
        msg.react('3️⃣'),
        ])
        }
        if(quan === 5) {
            let Embed = new MessageEmbed()
            .setColor('RANDOM')
            .setTitle("Poll " + args[0])
            .setDescription('Opciones : \n :one: ' + args[1] + '\n :two: ' + args[2] + '\n :three: ' + args[3] + '\n :four: ' + args[4])
            
            const msg = await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
            Promise.all([
            msg.react('1️⃣'),
            msg.react('2️⃣'),
            msg.react('3️⃣'),
            msg.react('4️⃣'),
            ])
            }if(quan === 6) {
                let Embed = new MessageEmbed()
                .setColor('RANDOM')
                .setTitle("Poll " + args[0])
                .setDescription('Opciones : \n :one: ' + args[1] + '\n :two: ' + args[2] + '\n :three: ' + args[3] + '\n :four: ' + args[4] + '\n :five: ' + args[5])
                
                const msg = await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })
                Promise.all([
                msg.react('1️⃣'),
                msg.react('2️⃣'),
                msg.react('3️⃣'),
                msg.react('4️⃣'),
                msg.react('5️⃣'),
                ])
                }
}