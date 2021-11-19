
const axios = require('axios')
const Discord = require('discord.js')
const intents = new Discord.Intents(32767)
const client = new Discord.Client({ intents })
const base64 = require('base-64')
const utf8 = require('utf8')

const bot_name = "Seon-Yil" //Your bot name
const channel_id = "903727183720235018"

const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")
//console.log(decode)

client.on('messageCreate', async (message) => 
{
    if(message.author.bot) return;
    if(message.channel.id !== channel_id) return;

    const channel = client.channels.cache.get(channel_id);
    channel.messages.fetch({ limit: 1 }).then(messages => {
      //console.log(`Received ${messages.size} messages`);
      //Iterate through the messages here with the variable "messages".
      //messages.forEach(message => console.log(message.content))
    })


    //const messagex = await message.content.
    let data = await axios(`https://api.affiliateplus.xyz/api/chatbot?message=${encodeURIComponent(messagex)}&botname=${encodeURIComponent(bot_name)}&ownername=Arn-Studios&birthplace=Korea`)
      data = data ? data.data : false;
      if(!data || !data.message) return;

    //const translated = await translate(data.message, {to: 'en' });
    //const translated = await (data.message)
    //console.log("send" + data.message);
    //console.log("recive" + messagex);

    await message.channel.send({
    channel_id: message.channel.id,
    content: data.message,
    message_reference: {
        message_id: message.channel.id}})})


client.login(decode)