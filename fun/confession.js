const db = require('quick.db')
const global = new db.table('global')
const { MessageEmbed } = require('discord.js');

module.exports = async (message, args) => {
    if(global.get(message.guild.id + '.confess')) {
    } else  {let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription("Desbes establecer el canal con &setchannel confess #channel")
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return}

    if(message.author.id == 903705870750326804) {
    } else if(message.member.permissions.has("MANAGE_MESSAGES")) {} else {let ErrorEmbed = new MessageEmbed()
        .setColor('RANDOM')
        .setAuthor('Global Error')
        .setDescription("No tienes permisos o el bot no los tiene \n Permisos : ```MANAGE_MESSAGES```")
        
        await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
        return}
        let prefix = await global.get('prefix') + 'confession '
        const desc = await message.content.slice(prefix.length).trim()

        if (!desc) { message.channel.send("Debes ingresar un texto! >.<")
         return; }
        message.delete()

        let Embed = new MessageEmbed()
        .setColor('RANDOM')
        .setTitle('Confession')
        .setDescription(desc)
        .setFooter("This is secret")
        const channel = message.client.channels.cache.find(channel => channel.id === global.get(message.guild.id + ".confess"))
        channel.send({ "channel_id": global.get(message.guild.id + ".confess"), embeds: [Embed] })
    

}