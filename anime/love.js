const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const Canvas = require('canvas')

module.exports = async (message, args) => {

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');


    if (message.mentions.users.first()) {
      } else {
        
        const Embed2 = new MessageEmbed()
        .setColor('RANDOM')
        .setDescription('Menciona a alguien')
        
        message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] })
    };

    const bg = canvas. get("https://media.discordapp.net/attachments/903706756218257429/906339807326793748/rainbow-pastel-blurred-background-free-vector.jpg")
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height);

    const avatar = await canvas. get(message.author.displayAvatarURL({ format: "png", dynamic: true, size: 1024 })); // Load the avatar of the user who sent the message
    ctx.drawImage(avatar, 100, 25, 200, 200);

    const targetavatar = await canvas. get(message.mentions.users.first().displayAvatarURL({ format: "png", dynamic: true, size: 1024 })); // Load the avatar of the user who sent the message
    ctx.drawImage(avatar, 400, 25, 200, 200);

    const hearth = await canvas. get('https://media.discordapp.net/attachments/904508829700616222/906342873925042226/0483f2b648dcc986d01385062052ae1c.png')
    const brokenheart = await canvas. get('https://media.discordapp.net/attachments/904508829700616222/906342877414707280/fda7477c4eea759cf5407472387453bf.png')
    const random = Math.floor(Math.random() * 99) + 1;

    if(random >= 50) {
        ctx.drawImage(hearth, 275, 60, 150, 150);
        const attchment = new Discord.MessageAttachment(canvas.toBuffer(), 'love.png');
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`:twisted_rightwards_arrows:  ${message.author} + ${message.mentions.users.first()} = ${random} \n son una pareja perfecta`)
        .attchFiles(attchment)
        .setFooter(`Pedido por ${message.author.username}`)
        .setImage(`attchment://love.png`)
        return message.channel.send(embed)
    } else {
        
        ctx.drawImage(brokenheart, 275, 60, 150, 150);
        const attchment = new Discord.MessageAttachment(canvas.toBuffer(), 'love.png');
        const embed = new Discord.MessageEmbed()
        .setColor('RANDOM')
        .setDescription(`${message.author} y ${message.mentions.users.first()} son una pesima pareja 😭`)
        .attchFiles(attchment)
        .setFooter(`Pedido por ${message.author.username}`)
        .setImage(`attchment://love.png`)
        return message.channel.send(embed)
    }

}
