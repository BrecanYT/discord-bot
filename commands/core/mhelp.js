const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'mhelp',
    aliases: ['mh'],
    showHelp: false,
    utilisation: '{prefix}mhelp',

    execute(client, message, args) {
        const embed = new MessageEmbed();

        embed.setColor('RED');
        embed.setAuthor(client.user.username, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const commands = client.commands.filter(x => x.showHelp !== false);

        embed.addField(`Enabled - ${commands.size}`, commands.map(x => `\`${x.name}${x.aliases[0] ? ` (${x.aliases.map(y => y).join(', ')})\`` : '\`'}`).join(' | '));

        embed.setTimestamp();

        message.channel.send({ embeds: [embed] });
    },
};