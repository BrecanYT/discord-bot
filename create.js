const Discord = require("discord.js")
const fs = require('fs')
var path = require('path');

const base64 = require('base-64')
const utf8 = require('utf8')

const intents = new Discord.Intents(32767)
const { readdirSync } = require('fs')

const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")
var glob = require("glob")
const client = new Discord.Client({ intents })
const db = require('quick.db');
var global = new db.table('global')
const prefix = global.get('prefix')

client.on("ready", () => {
    client.user.setActivity(`Comando ` + global.get('prefix') + `help`, {type: 'PLAYING'});

})
    verify('prefix', '&')
    verify('manarole', '904495173982101524')
    savestring('./action', 'action')
    savestring('./fun', 'fun')
    savestring('./reaction', 'reaction')
    savestring('./anime', 'anime')
    savestring('./nsfw', 'nsfw')
    savestring('./eco', 'economy')
    savestring('./cad', 'admin')
    savestring('./mc', 'mc')

    function verify(get, set){
        if(global.get(get) === undefined){
            global.set(get, set)
        }
    
        if(global.get(get) === null){
            global.set(get, set)
        }
    }


client.on('messageCreate', async (message) => {

    if(message.channel.type === 'dm') return;
    if(message.author.bot) return;
    if(!message.content.startsWith(prefix)) return;

    client.user.setActivity(`Comando ` + global.get('prefix') + `help`, {type: 'PLAYING'});
    const args = message.content.slice(prefix.length).trim().split(/ +/g)
    const command = args.shift().toLowerCase()

    //Essentials
    const cmd = readdirSync('./cmds').find(file => file.startsWith(command))
    if(cmd) await require(`./cmds/${cmd}`)(message, args)
    //action
    const cmd1 = readdirSync('./action').find(file => file.startsWith(command))
    if(cmd1) await require(`./action/${cmd1}`)(message, args)
    //reaction
    const cmd2 = readdirSync('./reaction').find(file => file.startsWith(command))
    if(cmd2) await require(`./reaction/${cmd2}`)(message, args)
    //anime
    const cmd3 = readdirSync('./anime').find(file => file.startsWith(command))
    if(cmd3) await require(`./anime/${cmd3}`)(message, args)
    //fun
    const cmd4 = readdirSync('./fun').find(file => file.startsWith(command))
    if(cmd4) await require(`./fun/${cmd4}`)(message, args)
    //others
    const cmd5 = readdirSync('./nsfw').find(file => file.startsWith(command))
    if(cmd5) await require(`./nsfw/${cmd5}`)(message, args)
    //economy
    const cmd6 = readdirSync('./eco').find(file => file.startsWith(command))
    if(cmd6) await require(`./eco/${cmd6}`)(message, args)
    //mc
    const cmd7 = readdirSync('./mc').find(file => file.startsWith(command))
    if(cmd7) await require(`./mc/${cmd7}`)(message, args)
})

function savestring(DIR, name) {
    
    function fileList(dir) {
        return fs.readdirSync(dir).reduce(function(list, file) {
          var name = path.join(dir, file);
          var isDir = fs.statSync(name).isDirectory();
          return list.concat(isDir ? fileList(name) : [name]);
        }, []);
      }

    fileList(DIR);
    fileList(DIR).map((file) => file.split(path.sep).slice(-1)[0]);
    str = fileList(DIR).map((file) => file.split(path.sep).slice(-1)[0])
    str1 = str.toString()
    str2 = str1.replace(/,/g, '         ')
    str3 = str2.replace(/.js/g, '')

    global.set(name, str3)
}

client.login(decode)
