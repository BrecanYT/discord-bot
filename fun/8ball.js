
const axios = require('axios')
const embedplus = require('../prefabs/simplembed')
var items = ['Si', 'Talvez', 'No', 'Posiblemente', 'Indeterminado', "Es mejor que no lo sepas", 'Claro como el agua', 'Definitivamente No', 'Obiamente No', 'Probablemente no'];

module.exports = async (message, args) => {
    const random = items[Math.floor(Math.random() * items.length)]
    if(!args[0]){
        embedplus.ErrorEmbed('8ball', 'Debes ingresar una duda \n &8ball {duda}', message)
    }

const test = await axios("https://g.tenor.com/v1/random?q=" + "anime%20" + random  + "&key=21LZCVTMTC7I&limit=1")
const filter2 = await test.data.results[0]['media']
const data = await filter2[0]['gif']
embedplus.simple(`8Ball`, args[0] + '\n y la respuesta es : ' + random, message, data.url)
}