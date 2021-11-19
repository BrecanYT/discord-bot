const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')

module.exports = async (message, args) => {
        let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('InviteLink')
        .setDescription('https://discord.com/oauth2/authorize?client_id=903711962624585768&permissions=261992475766&scope=bot%20applications.commands')
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return;
}