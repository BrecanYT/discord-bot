
const prefix = require('prefix-parser');
const db = require('quick.db');
var global = new db.table('global')
const embedplus = require('../prefabs/simplembed')

module.exports = async (message, args) => {
  const channel_id = message.channel.id;
  const guild_id = message.guild.id;
  const member = message.mentions.users.first();
  const content = message.content;
    const muteRoleId = await global.get(`mute_role_${guild_id}`);

    if(!message.mentions.users.first()) {
      embedplus.ErrorEmbed("Moderation", "Necesitas mencionar alguien a quien desmutear", message)
    }
    else {
      try{
      const member = message.mentions.users.first();
      message.mentions.users.first().roles.remove(muteRoleId); // Add the role to the member
      embedplus.simplembed("Moderation", `Has desmuteado a el usuario: ${member.username}`, message)
      return
      } catch(e){
        embedplus.ErrorEmbed("Moderation", "No se pudo desmutear al usuario \n " + e, message)
      }

    }
}