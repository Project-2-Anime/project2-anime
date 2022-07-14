//PSEUDO CODE
//Make our Name Space Object
//Create our init Method to call our functions that need to run on page load
//Call our init at the bottom of our page


// Make a call to the anime-facts api 
// on page load, have anime names populated into dropdown menu

//Create a click eventlistener on our dropdown menu form
// take the user choice and loop through the array and extract the appropriate data through a conditional statement

// remove the previous image, gif, and fact displayed 

// display the img and the facts of the anime selected by user into an empty html container

//make second api call to the giphy api at the same time user selects name from dropdown menu
//have a gif display into empty html container from what user selected




fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/')
    .then(function (resp) {
        return resp.json();
    })
    .then(function (result) {
        const newArray = result.data[0].anime_img;
        console.log(newArray)
    })



// store API key in our app object for easy access later on !
const key = "t8X2oWyUsOd7Av7mL68TZYYSycOpELUs";

// Create a method in our app object to hold our Ajax call and Then method -> see init() definition to CALL our getImages method

// ADD a parameter to our getImage method so that when we call it, we can pass an argument ()
const url = new URL('https://api.giphy.com/v1/gifs/search');

// target the "search" property of this object
// we will define the parameters we want as an object with the new URLSearchParams syntax
url.search = new URLSearchParams({
    api_key: key,
    q: 'bleach',  // q: `${userAnimeSelection} anime`,
    limit: 10,
    format: 'json'
});
// now our url variable contains those 4 params as a query string
fetch(url).then(function (result) {
    return (result.json())
})
    .then(function (result) {
        console.log(result.data)
    })