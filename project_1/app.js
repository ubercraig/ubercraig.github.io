console.log('App is connected');


const baseURL = "https://gateway.marvel.com:443/v1/public/characters?"
const pubKey = "apikey=ff411374090a15671c59a2fe9af6fe8c"
const ts = "ts=1592423954"
const hash = "hash=cffe958a285936c219aa88249b47aab1"
const queryType = "name="
let nameQuery = ""
let queryURL = baseURL + queryType 
let featuredImage = ""


$(()=> {
//// Modal functionality - adapted from class example
const $modal = $('#modal')
const $modalButton = $('#close')
const openModal = () => {
    $modal.css('display', 'block')
}
const closeModal = () => {
    $modal.css('display', 'none');
}
$modalButton.on('click', closeModal)
setTimeout(openModal, 2000)

const getCharacter = () => {
    // ajax functionality modified from class example
    
    $.ajax({
        url: queryURL + nameQuery + '&' + ts + '&' + pubKey + '&' + hash
    }).then((characterData) => {
        $('#info-container').html(`
        <div id="name"> ${characterData.data.results[0].name}</div>
        <div id="bio"> ${characterData.data.results[0].description}</div>
        `)
        featuredImage = $('<img class="thumbnail">').attr('src',characterData.data.results[0].thumbnail.path+'.jpg')
        $('#character-container').prepend(featuredImage)
    
        // add to team button functionality
        $('#team-button').on('click', () => {
            let $image = $('#character-container .thumbnail').attr('src',characterData.data.results[0].thumbnail.path+'.jpg')
            $($image).clone().appendTo('#my-team')
           
        })

        //series button functionality
        $('.series').on('click', () => {
            $('.series-results').remove()
            // console.log(characterData.data.results[0].name)  /// for debug
            for (i=0; i <20; i++) {
            let series = $('<div>').addClass('series-results').text(characterData.data.results[0].series.items[i].name)
            // console.log(characterData.data.results[0].series.items[i].name)  /// for debug
            $('#series-container').append(series)
            }
        })
        
        // events button functionality
        $('.events').on('click', () => {
            $('.events-results').remove()
            console.log(characterData.data.results[0].events.items.length)
            let eventsLength = characterData.data.results[0].events.items.length
            for (i=0; i < eventsLength; i++) {
            let events = $('<div>').addClass('events-results').text(characterData.data.results[0].events.items[i].name)
            $('#events-container').append(events)
            }
        })

        
        
    }, (error) =>{
        console.log('error')
    })
   
}
// Suggest Button Alert functionality. Alert Syntax help from https://stackoverflow.com/questions/9340223/mulit-line-alert-in-javascript
$('#suggest').on('click', () => {
    alert('Need help getting started? Try one of these characters' + '\n' + 'Thanos' + '\n' + 'Iron Man' + '\n' + 'Captain America' + '\n' + 'Hulk' + '\n' + 'Spider-Man' + '\n' + 'Thor' + '\n' + 'Wolverine') 
 })

// Get Name of character from input box
$('form').on('submit', (event) => {
    $('.thumbnail').remove()
    $('.events-results').remove()
    $('.series-results').remove()
    $('.series').show()
    $('.events').show()
    $('footer').show()
    $('#team-button').show()
    event.preventDefault()
    nameQuery = $('input[type=text]').val()
    // console.log(nameQuery)
    getCharacter()
    
})

})