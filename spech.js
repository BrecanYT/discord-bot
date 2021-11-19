const { Client, Intents } = require("discord.js");
const { joinVoiceChannel } = require("@discordjs/voice");
const { addSpeechEvent } = require("discord-speech-recognition");
const axios = require('axios')
const discordTTS=require("discord-tts");
const base64 = require('base-64')
const {AudioPlayer, createAudioResource, StreamType, entersState, VoiceConnectionStatus, joinVoiceChannel} = require("@discordjs/voice");
const decode = base64.decode("T1RBek56RXhPVFl5TmpJME5UZzFOelk0LllYdzlXZy4wdnpwMkRpcGVWVkxGbEtnVFZoSXVUdVg1bmM=")


const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_VOICE_STATES,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MEMBERS,
  ],
});
addSpeechEvent(client);
let voiceConnection;
let audioPlayer=new AudioPlayer();

client.on("messageCreate", (msg) => {
  const voiceChannel = msg.member?.voice.channel;
  if (voiceChannel) {
    joinVoiceChannel({
      channelId: voiceChannel.id,
      guildId: voiceChannel.guild.id,
      adapterCreator: voiceChannel.guild.voiceAdapterCreator,
      selfDeaf: false,
    });
  }
});

client.on("speech", (msg) => {
  
    const data = axios(`http://api.brainshop.ai/get?bid=160927&key=dRn0v76H6UwlFGkj&uid=${msg.author.id}&msg=${msg.content}`)
    if(msg.author.bot) return;
    if(!msg.content) return;
    await msg.author.send(msg.content);



})
;

client.login(decode)