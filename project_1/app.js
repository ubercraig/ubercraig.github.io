console.log('App is connected')

const baseURl = "https://gateway.marvel.com:443/v1/public/characters?";
let testUrl = baseURl + key
console.log(testUrl)


const key = "apikey=ff411374090a15671c59a2fe9af6fe8c"
let timestamp ="ts=1"
const hash = "hash=982b87adee39429590ab92ee9d7e0946"
let queryURL = baseURl + timestamp + "&" + key + "&" + hash

console.log(queryURL)

