const fetch = require("node-fetch");

const wikiURL = 'https://en.wikipedia.org/w/api.php?action=query&generator=random&grnnamespace=0&prop=pageimages|extracts|info&format=json&inprop=url&explaintext&exchars=130'

exports.wikiData = async () => {
  try{
    const resp = await fetch(wikiURL);
    const Data = await resp.json();
    return Data;
  }
  catch(err) {
    console.log(`There is an error ${err}`);
  }
}
