console.log('App is connected')

const baseURl = "https://gateway.marvel.com:443/v1/public/characters?apikey=ff411374090a15671c59a2fe9af6fe8c";
const key = "apikey=ff411374090a15671c59a2fe9af6fe8c"
let testUrl = baseURl + key




let timestamp ="ts=1"
const hash = "hash=982b87adee39429590ab92ee9d7e0946"
let queryURL = baseURl + timestamp + "&" + key + "&" + hash
console.log(baseUrl)
console.log(queryURL)

