const db = require('quick.db');
var global = new db.table('global')
const axios = require('axios')
const embedplus = require('../prefabs/simplembed')
const MinecraftAPI = require('minecraft-api');

module.exports = async (message, args) => {

    if(args[0] === 'ip'){
        if(!global.get((message.guild.id + '.ip'))) {embedplus.ErrorEmbed('Minecraft', 'El parametro no existe pidele al admin que lo agregue', message); return; }
        const ip = global.get((message.guild.id + '.ip'));
        
        const conjunt = ip.replace(':', ' ')
        const argstwo = conjunt.slice().trim().split(/ +/g)
        const ipfinal = argstwo[0]
        const port = argstwo[1]
        let url = `http://mcapi.us/server/status?ip=${ipfinal}&port=${port}`;
        let fetch = await axios(url)
        const replace = fetch.data.motd.replace(/§[0-9,a-z]/g,"");
        const newmtd = replace.replace(/ + /g, " \n ")

        if(fetch.data.online === true){ const emoji = '🟢 El servidor esta Online' 
        embedplus.simple('Minecraft', `${global.get(message.guild.id + '.ip')} \n Estado : ${emoji} \n Descripcion : \n ${newmtd} \n Jugadores : \n Online : ${fetch.data.players.now} \n Maximo : ${fetch.data.players.max} \n Version : ${fetch.data.server.name}`, message);
        return;
        } else { const emoji = '🔴 El servidor esta Offline'
        embedplus.simple('Minecraft', `${global.get(message.guild.id + '.ip')} \n Estado : ${emoji} \n Descripcion : Desconocida  \n Jugadores : \n Online : 0 \n Maximo : 999 \n Version : 0.0.0`, message);}
        return;
    } else if(args[0] === 'modpack'){
        if(!global.get((message.guild.id + '.modpack'))) {embedplus.ErrorEmbed('Minecraft', 'El parametro no existe pidele al admin que lo agregue', message); return; }
        embedplus.simple('Minecraft', global.get(message.guild.id + '.modpack'), message);
        return;
    } else if(args[0] === 'skin'){
        if(!args[1]){embedplus.ErrorEmbed('Minecraft', 'Debes ingresar una opcion \n &mc skin {username}', message); return;}
        const uuid = await MinecraftAPI.uuidForName(args[1]);
        const skin = `https://crafatar.com/renders/body/${uuid}.png`
        embedplus.img('Minecraft Skin', `${skin}`, message);
        return;
    } else if(args[0] === 'get'){
        if(!args[1]){embedplus.ErrorEmbed('Minecraft', 'Debes ingresar una opcion \n &mc get {titulo}', message); return;}
        const titulo = args[1] + '%20' + args[2] + '%20' + args[3] + '%20' + args[4] + '%20' + args[5] + '%20' + args[6] + '%20' + args[7] + '%20' + args[8] + '%20' + args[9];
        const replace = titulo.replace(/%20undefined/g, "")
        const random = Math.floor(Math.random(0, 19))
        const url = `https://mcgen.herokuapp.com/a.php?i=${random}&h=${replace}&?.png`
        embedplus.img('Minecraft Achivement', `${url}`, message);
        return;
    } else if (args[0] === 'colors'){
        embedplus.img('Minecraft Colors', 'https://i.imgur.com/BiQUiwO.png', message);
        return; }
    if(args[0] === undefined) {embedplus.ErrorEmbed('Minecraft', 'Debes ingresar una opcion \n &mc {ip/modpack/skin/get/color}', message)}

}
