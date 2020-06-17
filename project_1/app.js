console.log('App is connected');

const testURL = "https://gateway.marvel.com:443/v1/public/characters?apikey=ff411374090a15671c59a2fe9af6fe8c"



const baseURL = "https://gateway.marvel.com:443/v1/public/characters?"
const pubKey = "apikey=ff411374090a15671c59a2fe9af6fe8c"
const ts = "ts=1"
const hash = "hash=5382342d81bb0e9ef84742f7d29632fa"
let queryURL = baseURL + ts + '&' + pubKey + '&' + hash
console.log(testURL);
console.log(queryURL);