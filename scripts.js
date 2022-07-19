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


// 1.Name space Object
const app = {};

// 2.Init Method
app.init = () => {
    //3. testing to see if it works
    console.log('Readyyyy!');
    // testing to see if our ajax calls work, will be placing this somewhere else
    app.image();
    app.getGiphy();
    app.facts();
    app.events();
}

// // Global for loop that we will use to select our images from the drop down.
// const number = () => {
//     for (let step = 0; step < 5; step++) {
//         console.log(step);
//     }
// }

// 5. storing giphy url & key and endpoints in a variable
app.key = "t8X2oWyUsOd7Av7mL68TZYYSycOpELUs";
app.url =  "https://api.giphy.com/v1/gifs/search";
//8. Create a function that will queryselector the user input option, and pass it into a variable
app.nameSelected = ""
// variable for option drop down to be appended to select

//6.  Create a method to hold our AJAX Call for images
app.image = () => {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/')
    .then(function (resp) {
        return resp.json();
    })
        .then(function (result) {
            const newArray = result.data[1].anime_img;
            // console.log(newArray);

            // START A NEW ARRAY to display ONLY our images
            const imgArray = [];

            result.data.forEach((item) => {
                imgArray.push(item.anime_img)
            })
            console.log(imgArray);
            // END our new array

            // Displaying our images onto the empty div
            document.querySelector('.flexImg').innerHTML = `<img src=${newArray}>`
            
            // displaying our array names and id onto our select options.
            const option = document.querySelector('select');
            const dropDown = result.data.map((result) => {
                return `<option value="${result.anime_id}">${result.anime_name}</option>`;
            }) 
            option.innerHTML = dropDown; 
        })
}

// POSSIBLE TO NEED THIS SECTION LATER 
// app.displayPicture = function(pic){

//     console.log(pic);
//     // display our image onto the empty div container
//     const img = document.createElement('img');
//     img.src = newArray.anime_img;
//     // img.alt = 
    
//     const imgParent = document.querySelector('#animePicture');
    
//     imgParent.appendChild(img);
// }



// 7. Create a method to hold our AJAX call with a different endpoint (facts)
app.facts = () => {
    fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${app.nameSelected}`)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (result) {
            const newArray = result.data;
            console.log(newArray)
            // append this to our empty div
        })
}

//9. Create a method to hold our AJAX call for Giphy
app.getGiphy = () => {
    // 10. ADD a parameter so that when we call it, we can pass an argument ()
    const url = new URL(app.url);

    //11.  target the "search" property of this object
    url.search = new URLSearchParams({
        api_key: app.key,
        q: 'bleach',  // q: `${userAnimeSelection} anime`,
        limit: 10,
        format: 'json'
    });
    
    fetch(url).then(function (result) {
        return (result.json())
    })
        .then(function (result) {
            console.log(result.data)
            // append to our empty div
        })
}

// 10. Creating an event listener for our button to call the image function and append to our empty div
app.events = function(){
    document.querySelector('button').addEventListener('submit', function(){
        console.log(this);
    })
}



// 4. Calling out Init function
app.init();