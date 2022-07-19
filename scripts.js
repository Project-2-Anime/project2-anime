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
    app.getImage();
    app.events();
}

// Global for loop that we will use to select our images from the drop down.
// const number = () => {
//     for (let step = 0; step < 13; step++) {
//         console.log(step);
//     }
// }

// 5. storing giphy url & key and endpoints in a variable
app.key = "t8X2oWyUsOd7Av7mL68TZYYSycOpELUs";
app.url =  "https://api.giphy.com/v1/gifs/search";
//8. Create a function that will queryselector the user input option, and pass it into a variable

// variable for option drop down to be appended to select

//6.  Create a method to hold our AJAX Call for images
aapp.getImage = function () {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
        .then(function (api) {
            return api.json();
        })
        .then(function (jsonData) {
            // console.log(jsonData.data)


            jsonData.data.forEach(item => {

                app.imgArray.push(item.anime_img)
            })

            // console.log(imgArray)

            // document.querySelector('#animePicture').remove();


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
    document.querySelector('#dropdown').addEventListener('change', function(){
        const userSelection = (this.value);
        app.image(userSelection);
    })
}

// 2 functions inside our event listener. 
//1. look at the id / value that the user is selected on
//2. find the corresponding index of the url and append it to the page

//1b. create a new array that only hold the url of the images 



// 4. Calling out Init function
app.init();


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
app.imgArray = [];

app.animePicture = document.querySelector('#animePicture')
// 2.Init Method
app.init = () => {
    //3. testing to see if it works
    // testing to see if our ajax calls work, will be placing this somewhere else
    // app.image();
    // app.getGiphy();
    // app.facts();
    // app.events();
    // number();
    app.getImage();
    app.events();

}

app.getImage = function () {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
        .then(function (api) {
            return api.json();
        })
        .then(function (jsonData) {
            // console.log(jsonData.data)


            jsonData.data.forEach(item => {

                app.imgArray.push(item.anime_img)
            })

            // console.log(imgArray)

            // document.querySelector('#animePicture').remove();


        })
}

app.displayImage = function (imgSelected) {
    // console.log(arrayOfPics)
    // arrayOfPics.filter(function(arrayOfPics){
    //     // console.log(arrayOfPics) 
    //     return 
    // })

    // console.log(eachPic)
    const img = document.createElement('img');
    img.src = imgSelected;
    app.animePicture.appendChild(img);
}

app.events = function () {
    document.querySelector('#anime').addEventListener('change', function () {
        const userSelection = this.value;
        // console.log(userSelection)
        const userPicture = app.imgArray[userSelection];
        // console.log(userPicture)
        app.animePicture.innerHTML = '';
        app.displayImage(userPicture);
    })
}
app.init();