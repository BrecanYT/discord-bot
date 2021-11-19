
const prefix = require('prefix-parser');
const db = require('quick.db');
var global = new db.table('global')

module.exports = async (message, args) => {

    const channel_id = message.channel.id;
    const guild_id = message.guild.id;
    const content = message.content;
    const roleCommand = "&rolmute"

    let [argsRole, infoOrErrorRole] = prefix(roleCommand, `Set the mute role for your server.`)
  .role('Role')
  .parse(content);

if (infoOrErrorRole) {
  return message.channel.send({
    channel_id,
    content: infoOrErrorRole,
  });
} else if (argsRole) {
  if(message.member.permissions.has("ADMINISTRATOR")){
    } else {return}
  const [role_id] = argsRole
  await global.set(`mute_role_${guild_id}`, role_id)
  await message.channel.send({
    channel_id,
    content: `Mute role is now <@&${role_id}>`,
  })
  return
}

    }

    
    