
const axios = require('axios')
const embedplus = require('../prefabs/simplembed')

module.exports = async (message, args) => {
	let subreddits = [
		"dankhispano",
		"SpanishMeme",
		"memes",
		"funny"
	  ];
	let subreddit = subreddits[Math.floor(Math.random()*(subreddits.length))];
	const test = await axios("https://meme-api.herokuapp.com/gimme/" + subreddit)
	const data = await test.data.url
	const title = await test.data.title
	const author = await test.data.author
	const ups = await test.data.ups
	const postlink = await test.data.postLink
	

    embedplus.GenEmbed(title, ``, `RANDOM`, `⬆️ + ${ups}`, data, author, message, postlink)

}