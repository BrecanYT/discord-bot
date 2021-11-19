const imageSearch = require('image-search-google');

const key = 'AIzaSyDe4pbfw1xySVcp_zrusw75p-275mLFykI'
const engine = 'ac31a3a4d73c4f457'

const client = new imageSearch(engine, key);
const embedplus = require('../prefabs/simplembed')

const random1 = Math.floor(Math.random() * 8) + 1;
const random2 = Math.floor(Math.random() * 7) + 1;

const options = {page:random1};
const db = require('quick.db')
const global = new db.table('global')

module.exports = async (message, args) => {
    
  if (message.mentions.users.first()) {
    return message.channel.send('No puedes buscar imagenes de un usuario')
  }

    let prefix = await global.get('prefix') + 'imgsearch '
    const filter = await message.content.slice(prefix.length).trim()

          client.search(filter, options)
          .then(images => {
            const url = images[random2]['url'];
            embedplus.GenEmbed(filter, ``, `RANDOM`, ``, url, ``, message, ``)
          })

}