
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (client) => {
	const BOT_PREFIX = await global.get('prefix');
	const botStatus = [
		`BlackKnight683 on yt`,
		`${client.users.cache.size} Users`,
		`${client.guilds.cache.size} Servers`,
	];

	setInterval(function() {
		const status = botStatus[Math.floor(Math.random() * botStatus.length)];
		client.user.setActivity(`${BOT_PREFIX}help | ${status}`, { type: 'Watching' });
	}, 30000);

	console.log(`Logged in as ${client.user.tag}`);
	console.log('Prefix:', global.get('prefix'));
};