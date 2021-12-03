
const axios = require('axios')
const Discord = require("discord.js")
const { MessageEmbed } = require('discord.js');
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {
	const prefix = await global.get('prefix')
    const type = await args[0]
	const commands = await global.get('commands')
	const author = await global.get('chelp.' + type + '.Author')
	const authorimg = await global.get('chelp.' + type + '.AuthorIMG')
	const title = await global.get('chelp.' + type + '.Title')
	const desc = await global.get('chelp.' + type + '.Description')
	const aimg = await global.get('chelp.' + type + '.Image')

	if(message.content.includes('nsfw')){
		if (message.channel.nsfw) {
			let Embed2 = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle("Comandos de Yeon Sil")
			.setDescription("**Nsfw** \n To search info of a command user &help {command} \n 📖 Comandos ```" + global.get('nsfw') + "```")
			
			message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] });
			return;
		} else {
		let Embed2 = new MessageEmbed()
		.setColor('RANDOM')
		  .setTitle("Este canal no es NSFW 🔞")
		
		message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] });
		return;
		}
	}
//`fff`

		
if(message.content.includes('action')){
	let Embed2 = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle("Comandos de Yeon Sil")
	.setDescription("**Acción** \n To search info of a command user &help {command} \n 📖 Comandos ```" + global.get('action') + "```")
	
	message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] });
	return;
	}
	
	if(message.content.includes('reaction')){
		let Embed2 = new MessageEmbed()
		.setColor('RANDOM')
		.setTitle("Comandos de Yeon Sil")
		.setDescription("**Reacción** \n To search info of a command user &help {command} \n 📖 Comandos ```" + global.get('reaction') + "```")
		
		message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] });
		return;
		}
	
		if(message.content.includes('anime')){
			let Embed2 = new MessageEmbed()
			.setColor('RANDOM')
			.setTitle("Comandos de Yeon Sil")
			.setDescription("**Anime** \n To search info of a command user &help {command} \n 📖 Comandos ```" + global.get('anime') + "```")
			
			message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] });
			return;
			}
			if(message.content.includes('fun')){
				let Embed2 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle("Comandos de Yeon Sil")
				.setDescription("**Fun** \n To search info of a command user &help {command} \n 📖 Comandos ```" + global.get('fun') + "```")
				
				message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] });
				return;
				}

			if(message.content.includes('eco')){
				let Embed2 = new MessageEmbed()
				.setColor('RANDOM')
				.setTitle("Comandos de Yeon Sil")
				.setDescription("**Economy** \n To search info of a command user &help {command} \n 📖 Comandos ```" + global.get('economy') + "```")
				
				message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] });
				return;
				}
				if(message.content.includes('admin')){
					let Embed2 = new MessageEmbed()
					.setColor('RANDOM')
					.setTitle("Comandos de Yeon Sil")
					.setDescription("**Admin** \n To search info of a command user &help {command} \n 📖 Comandos ```" + global.get('admin') + "```")
					
					message.channel.send({ "channel_id": message.channel_id, embeds: [Embed2] });
					return;
					}

	if(!title){
		let ErrorEmbed = new MessageEmbed()
		.setColor('RANDOM')
		.setAuthor('Global Error')
		.setDescription('Ingresa una opcion valida \n Ejemplo &help help')
		
		await message.channel.send({ "channel_id": message.channel_id, embeds: [ErrorEmbed] })
			return }
	if(!aimg) {
		const exampleEmbedx = new MessageEmbed()
		  .setColor('RANDOM')
		  .setTitle(title)
		  .setAuthor(author, authorimg)
		  .setDescription(desc)
		  //.setDescription("Commandos \n" + prefix + commands)
		  
	  
		 await message.channel.send({ "channel_id": message.channel_id, embeds: [exampleEmbedx] })

		 return

	}
  const exampleEmbed = new MessageEmbed()
	.setColor('RANDOM')
	.setTitle(title)
	.setAuthor(author, authorimg)
	.setDescription(desc)
	.setFooter(`Pedido por ${message.author.username}`)
        .setImage(aimg)
	//.setDescription("Commandos \n" + prefix + commands)
    

   await message.channel.send({ "channel_id": message.channel_id, embeds: [exampleEmbed] })

   return
}