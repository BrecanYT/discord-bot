
const prefix = require('prefix-parser');
const db = require('quick.db');
var global = new db.table('global')
const embedplus = require('../prefabs/simplembed')

module.exports = async (message, args) => {
  const channel_id = message.channel.id;
  const guild_id = message.guild.id;
  const content = message.content;
  const member = message.mentions.users.first();
    const muteRoleId = await global.get(`mute_role_${guild_id}`);

    if(!message.mentions.users.first()) {
      embedplus.ErrorEmbed("Moderation", "Necesitas mencionar alguien a quien mutear", message)
    }
    else {
      const member = message.mentions.users.first();
      try{
        const member = message.mentions.users.first();
      member.roles.add(muteRoleId); // Add the role to the member
      embedplus.simplembed("Moderation", `Has muteado a el usuario: ${member.username}`, message)
      return
      } catch(e){
        embedplus.ErrorEmbed("Moderation", "No se pudo mutear al usuario \n " + e, message)
      }

    }
}