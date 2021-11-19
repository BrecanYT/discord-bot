const db = require('quick.db');
var global = new db.table('global')
const embedplus = require('../prefabs/simplembed')

module.exports = async (message, args) => {
    if(message.member.permissions.has("ADMINISTRATOR")){
    } else {embedplus.errorperm
    }
    if(args[0] === undefined){
        embedplus.ErrorEmbed('Minecraft', 'Debes ingresar una opcion \n &setmc {ip/modpack} {link}', message);
        return
    }
    if(args[1] === undefined){
        embedplus.ErrorEmbed('Minecraft', 'Debes ingresar una opcion \n &setmc {ip/modpack} {link}', message);
        return
    }

    if(args[0] == 'ip'){
    let ip = args[1]
    global.set(message.guild.id + '.ip', ip)
    embedplus.simple('Minecraft', 'IP actualizada : ' + ip , message)

    } else if(args[0] == 'modpack'){
    let modpack = args[1]
    global.set(message.guild.id + '.modpack', modpack)
    embedplus.simple('Minecraft', 'Modpack actualizado : ' + modpack , message)
    } else {embedplus.ErrorEmbed('Minecraft', 'Debes ingresar una opcion \n &setmc {ip/modpack} {link}', message)
return}
}