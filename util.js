const request = import('node-fetch');
const db = require('quick.db');
const global = new db.table('global')
const axios = require('axios')
const {
    URL,
    URLSearchParams
} = require('url');
const {
    chat
} = require('./misc/config.json');
const mainURL = new URL(chat.url);
const urlOptions = {
    bid: chat.brainID,
    key: chat.key,
    uid: null,
    msg: null
};
const handleStatus = (client, status) => {
    client.user.setStatus(status.state);
    client.user.setActivity(status.name, {
        type: status.type
    });
};

const handleTalk = async (msg) => {

    const channelid = await global.get(msg.guild.id + '.ia')
    msg.content = msg.content.replace(/^<@!?[0-9]{1,20}> ?/i, '');
    if (msg.content.length < 2 || (!isNaN(channelid) && channelid != msg.channel.id)) return;
    msg.channel.sendTyping();
    urlOptions.uid = msg.author.id;
    urlOptions.msg = msg.content;
    const { data } = await axios("http://api.brainshop.ai/get?bid=160927&key=dRn0v76H6UwlFGkj&uid=" + urlOptions.uid + "&msg=" + urlOptions.msg)
    //console.log(data.cnt)
    try {
        if (data) {
            msg.reply({
                content: data.cnt,
                allowedMentions: {
                    repliedUser: false
                }
            })
        }
    } catch (e) {
        //console.log(e.stack);
    }
};

module.exports = {
    handleStatus,
    handleTalk
};
