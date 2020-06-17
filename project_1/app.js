console.log('App is connected');




const baseURL = "https://gateway.marvel.com:443/v1/public/characters?"
const pubKey = "apikey=ff411374090a15671c59a2fe9af6fe8c"
const ts = "ts=1592423954"
const hash = "hash=cffe958a285936c219aa88249b47aab1"
const queryType = "name="
let nameQuery = "Spider-Man"
let queryURL = baseURL + queryType 

$(()=> {
const getCharacter = () => {
    $.ajax({
        url: queryURL + nameQuery + '&' + ts + '&' + pubKey + '&' + hash
    }).then((characterData) => {
        $('#character-container').html(`
        <div id="name"> ${characterData.data.results[0].name}</div>
        <div id="bio"> ${characterData.data.results[0].description}</div>
        `)
        console.log(characterData.data.results[0].name)
    }, (error) =>{
        console.log('error')
    })
}

$('form').on('submit', (event) => {
    event.preventDefault()
    nameQuery = $('input[type=text]').val()
    console.log(nameQuery)
    getCharacter()
})
})