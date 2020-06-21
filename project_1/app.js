console.log('App is connected');




const baseURL = "https://gateway.marvel.com:443/v1/public/characters?"
const pubKey = "apikey=ff411374090a15671c59a2fe9af6fe8c"
const ts = "ts=1592423954"
const hash = "hash=cffe958a285936c219aa88249b47aab1"
const queryType = "name="
let nameQuery = ""
let queryURL = baseURL + queryType 


$(()=> {
const getCharacter = () => {
    // ajax functionality modified from class example
    $.ajax({
        url: queryURL + nameQuery + '&' + ts + '&' + pubKey + '&' + hash
    }).then((characterData) => {
        $('#info-container').html(`
        <div id="name"> ${characterData.data.results[0].name}</div>
        <div id="bio"> ${characterData.data.results[0].description}</div>
        `)
        const $img = $('<img>').attr('src',characterData.data.results[0].thumbnail.path+'.jpg')
        $('#character-container').prepend($img)
       
        //series button functionality
        $('.series').on('click', (event) => {
            event.preventDefault()
            $('.series-results').remove()
            console.log(characterData.data.results[0].name)  /// for debug
            for (i=0; i <=20; i++) {
            let series = $('<div class="series-results">').text(characterData.data.results[0].series.items[i].name)
            console.log(characterData.data.results[0].series.items[i].name)
            $('#series-container').append(series)
            }
        })
        
        // events button functionality
        $('.events').on('click', (event) => {
            event.preventDefault()
            $('.events-results').remove()
            for (i=0; i <=20; i++) {
            events = $('<div class="events-results">').text(characterData.data.results[0].events.items[i].name)
            $('#events-container').append(events)
            }
        })
    }, (error) =>{
        console.log('error')
    })
}
// Get Name of character from input box
$('form').on('submit', (event) => {
    $('img').remove()
    $('.events-results').remove()
    $('.series-results').remove()
    $('.series').show()
    $('.events').show()
    $('footer').show()
    event.preventDefault()
    nameQuery = $('input[type=text]').val()
    console.log(nameQuery)
    getCharacter()
})

})