
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const dotenv = require('dotenv')
const db = require('quick.db');
var economy = new db.table('economy')
var global = new db.table('global')
let date_ob = new Date();

module.exports = async (message) => {
    if(message.member.permissions.has("ADMINISTRATOR")){
    } else {return}
let date = ("0" + date_ob.getDate()).slice(-2);

let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);

let year = date_ob.getFullYear();
const today = year + "-" + month + "-" + date;
    const member = message.mentions.members.first() || message.author;
    const author = message.author.id;
    function error() {
        const ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Error')
        .setDescription('Ingresa un Usuario')
        
        message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return
    }
    if(member.id === author){error();return;}
    let prefix = global.get('prefix') + 'warn' + '<@!' + member.id + '>' + '>'
    const username = '<@!' + member.id + '>'
    const reason = message.content.slice(prefix.length).trim()

    if(economy.get(member.id + '.' + message.guild.id + '.warns.cuan') === undefined){
        economy.set(member.id + '.' + message.guild.id + '.warns.cuan', 0)
        //console.log('Se a creado una data de Warns a ' + member.id)
    }
    
    if(economy.get(member.id + '.' + message.guild.id + '.warns.cuan') === null){
        economy.set(member.id + '.' + message.guild.id + '.warns.cuan', 0)
        //console.log('Se a creado una data de Warns a ' + member.id)
    }

    const cwarns = economy.get(member.id + '.' + message.guild.id + '.warns.cuan')
    const wplus = cwarns + 1
       economy.set(member.id + '.' + message.guild.id + '.warns.cuan', wplus)
       economy.set(member.id + '.warns.' + wplus + '.reason', reason)
       economy.set(member.id + '.warns.' + wplus + '.author', message.author.username)
       economy.set(member.id + '.warns.' + wplus + '.day', today)

       const Embed = new MessageEmbed()
       .setColor('RANDOM')
       .setAuthor('Warn')
       .setDescription('Has avisado a ' + username + ' \n Razon :' + reason + '\n Warns :' + wplus)
       
       await message.channel.send({ "channel_id": message.channel_id, embeds: [Embed] })

   
}
