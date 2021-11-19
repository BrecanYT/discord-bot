const {
    Client,
    Intents
} = require('discord.js');
const client = new Client({
    intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGE_TYPING, Intents.FLAGS.GUILD_MESSAGES]
});
const db = require('quick.db');
const global = new db.table('global')

const base64 = require('base-64')
const utf8 = require('utf8')

const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")
//console.log(decode)
client.util = require('./util');

client.on('warn', err => console.warn('[WARNING]', err));

client.on('error', err => console.error('[ERROR]', err));

client.on('disconnect', () => {
    console.warn('Disconnected!')
    process.exit(0);
});

client.on('uncaughtException', (err) => {
    //console.log('Uncaught Exception: ' + err)
    process.exit(1)
});

client.on('messageCreate', (msg) => {
    const channelid = global.get(msg.guild.id + '.ia')
    if (msg.author.bot) return;
    if (msg.guild) {
        if (msg.content.startsWith(``) || msg.content.startsWith(``)) {
            if(msg.channel.id != channelid) {return}
            client.util.handleTalk(msg);
        }
    }
});


process.on('unhandledRejection', (reason, promise) => {
    //console.log('[FATAL] Possibly Unhandled Rejection at: Promise ', promise, ' reason: ', reason.message);
});

client.login(decode);