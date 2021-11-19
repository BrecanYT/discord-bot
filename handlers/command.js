const { readdirSync } = require('fs');

module.exports = (client) => {
	readdirSync('./tcmds/').forEach(dir => {
		const commands = readdirSync(`./tcmds/${dir}/`).filter(file => file.endsWith('.js'));

		commands.forEach((file) => {
			const pull = require(`../tcmds/${dir}/${file}`);
			client.commands.set(pull.name, pull);

			pull.aliases.forEach(alias => {
				client.aliases.set(alias, pull.name);
			});
		});
	});
	console.log('Loading commands...');
	console.log(`Successfully loaded ${client.commands.size} commands!`);
};