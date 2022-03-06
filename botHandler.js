const { wikiData } = require("./wikipedia");

const articleData = (chatId, wikiJson, bot) => {
  const data = wikiJson.query.pages;
  const pageId = Object.keys(data)[0];
  const title = data[pageId].title;
  const extract = data[pageId].extract;

  const text = `${ title } \n\n ${ extract }`;

  bot.sendMessage(chatId, text)
}

exports.botHandler = ( bot ) => {
  bot.on('message', async (msg) => {
    const chatId = msg.chat.id;

    if(msg.text == "start"){
      const wikiJson = await wikiData()
      articleData(chatId, wikiJson, bot)
    }
  })
}
