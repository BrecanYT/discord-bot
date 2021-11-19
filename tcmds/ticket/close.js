/* eslint-disable no-unused-vars */
const url = 'https://hastebin.com/documents';
const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'close',
	category: 'Ticket',
	description: 'Closes the ticket.',
	aliases: [],
	usage: 'close',
	userperms: [],
	botperms: [],
	run: async (client, message, args) => {
		if(message.channel.name.includes('ticket-')) {
			const member = message.guild.members.cache.get(message.channel.name.split('ticket-').join(''));
			if(message.member.hasPermission('ADMINISTRATOR') || message.channel.name === `ticket-${message.author.id}`) {
				message.channel.messages.fetch().then(async (messages) => {
					try {
						message.channel.updateOverwrite(member.user, {
							VIEW_CHANNEL: false,
							SEND_MESSAGES: false,
							ATTACH_FILES: false,
							READ_MESSAGE_HISTORY: false,
						}).then(() => {
							message.channel.send(`Successfully closed ${message.channel}`);
						});
					}
					catch(e) {
						return message.channel.send('Un error ah ocurrido, Intentalo denuevo');
					}
			})
		}
		else {
			return message.reply('no puedes usar este comando aqui. porfavor usa este comando cuando quiera cerrar un ticket.');
		  }
	  }
  }
}
