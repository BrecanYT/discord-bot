
const db = require('quick.db');
var global = new db.table('global')


module.exports = {
	name: 'ticket',
	category: 'Ticket',
	description: 'Creates a new ticket.',
	aliases: ['new'],
	usage: 'new',
	userperms: [],
	botperms: [],
	run: async (client, message, args, prefix) => {
		if(message.guild.channels.cache.find(channel => channel.name === `ticket-${message.author.username}`)) {
			return message.reply('Ya tienes un ticket, Cierra el ticket anterior para abrir uno nuevo!');
		}

		message.guild.channels.create(`ticket-${message.author.username}`, {
			permissionOverwrites: [
				{
					id: message.author.id,
					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
				},
				{
					id: message.guild.roles.everyone,
					deny: ['VIEW_CHANNEL'],
				},
			],
			type: 'text',
			// parent: 'category id',
		}).then(async channel => {
			message.reply(`Se a creado tu ticket! Cliquea en ${channel} para ver tu ticket.`);
			channel.send(`Hola ${message.author}, bienvenido a tu ticket! Se paciente tu ticket sera atendido proximamente, si quieres cerrar el ticket usa ${prefix}close`);
			const logchannel = await global.get(message.guild.id + '.log');
			if(logchannel) {
				logchannel.send(`El ticket ${message.author.username} se a creado. click para verlo <#${channel.id}>`);
			}
		});
	},
};

// to add a custom role copy this and paste it as explained in the video and replace role-id with the role ya want :D
// {
//					id: message.guild.roles.cache.get("role-id"),
//					allow: ['SEND_MESSAGES', 'VIEW_CHANNEL'],
//				}
