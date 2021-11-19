const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
const embedplus = require('../prefabs/simplembed')

var global = new db.table('global')

module.exports = async (message, args) => {


    if(message.author.id == 867764393772318730){
    }
    else {embedplus.ErrorEmbed("Evaluate", "You do not have permission to use this command.", message)	
            return}

    
    let prefix = await global.get('prefix') + 'evaluate '
    const desc = await message.content.slice(prefix.length).trim()

    
    try {
        // Evaluate (execute) our input
        const evaled = eval(desc);
        // Make our input pretty so we can see it
        const clean = await require('util').inspect(evaled, { depth: 0 });
        // Send the output in a code block
        const embed = new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Evaluate GOOD')
        .setDescription(`\`\`\`js\n${evaled}\n\`\`\``)
        .setFooter(`Evaluated by ${message.author.tag}`)
        .setTimestamp()
        await message.channel.send({ "channel_id": message.channel_id, embeds: [embed] })
    } catch(err) {
        // If there is an error log it in a code block
        const embed = new MessageEmbed()
        .setColor('RED')
        .setTitle('Evaluate ERROR')
        .setDescription(`\`\`\`js\n${err}\n\`\`\``)
        .setFooter(`Evaluated by ${message.author.tag}`)
        .setTimestamp()
        await message.channel.send({ "channel_id": message.channel_id, embeds: [embed] })
    }
}