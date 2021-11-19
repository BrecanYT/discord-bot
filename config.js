
const base64 = require('base-64')
const utf8 = require('utf8')

const db = require('quick.db');
var global = new db.table('global')

const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")
//console.log(decode)

module.exports = {
    app: {
        px: global.get('prefix'),
        token: decode,
        playing: 'Comando ' + global.get('prefix')+ 'help'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};
