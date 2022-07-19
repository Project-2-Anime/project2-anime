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


<<<<<<< HEAD
=======

>>>>>>> my-feature-branch-Eli
// 1.Name space Object
const app = {};
//7.  Created a new array to hold our images
app.imgArray = [];
// 6. variable to hold our DOM selected element
app.animePicture = document.querySelector('#animePicture')
// 2.Init Method
app.init = () => {
    //4. testing to see if init works
    app.getImage();
    app.events();
<<<<<<< HEAD
}

// Global for loop that we will use to select our images from the drop down.
const number = () => {
    for (let step = 0; step < 5; step++) {
        console.log(step);
    }
}

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
=======
    app.facts();
>>>>>>> my-feature-branch-Eli
}

// START OUR FACTS AJAX CALL

<<<<<<< HEAD

// 7. Create a method to hold our AJAX call with a different endpoint (facts)
=======
// 16. Create a method to hold our AJAX call with a different endpoint (facts)
>>>>>>> my-feature-branch-Eli
app.facts = () => {
    fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1`)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (result) {
            const newArray = result.data;
            // console.log(newArray)
        
            // append this to our empty div
        })
}

<<<<<<< HEAD
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
=======
// END OUR FACTS AJAX CALL


// 5. Creating a method to hold our AJAX call for images
app.getImage = function () {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
        .then(function (api) {
            return api.json();
        })
        // 8. pushed our image urls into our new array
        .then(function (jsonData) {
            jsonData.data.forEach(item => {
                app.imgArray.push(item.anime_img)
            })
        })
}

// 9. Created a method to display our images and append to the empty div.
app.displayImage = function (imgSelected) {
//   10. Made a variable that hold our created img element
    const img = document.createElement('img');
    img.src = imgSelected;
    app.animePicture.appendChild(img);
}

// 11. Created an event listener of change onto our select dropdown
app.events = function () {
    document.querySelector('#anime').addEventListener('change', function () {
        // 12.created a variable to targeted the user selection value from our options that only looks at the number value
        const userSelection = parseInt(this.value);
        // 13. created a variable to hold the selected value from our newly created array
        const userPicture = app.imgArray[userSelection];

        // WHERE WE LEFT OUT, TRYING TO TARGET OUR FACTS
        // 17. Create a variable to target the user selection value from our options that only look at the string

        const valueOne = document.querySelector('#anime').value.split(',')[1];
        console.log(valueOne)

        // const userFact = contains(this.value);
        // console.log(userFact)



        // 14. make sure our empty div is cleared before each call
        app.animePicture.innerHTML = '';
        // 15.called our method that displays the image and pass our user selection into it. 
        app.displayImage(userPicture);
>>>>>>> my-feature-branch-Eli
    })
}
// 3. Called our init method
app.init();



<<<<<<< HEAD
=======


>>>>>>> my-feature-branch-Eli


// START OUR GIPHY AJAX CALL 

// 16. storing giphy url & key and endpoints in a variable
// app.key = "t8X2oWyUsOd7Av7mL68TZYYSycOpELUs";
// app.url = "https://api.giphy.com/v1/gifs/search";

// //9. Create a method to hold our AJAX call for Giphy
// app.getGiphy = () => {
//     // 10. ADD a parameter so that when we call it, we can pass an argument ()
//     const url = new URL(app.url);

//     //11.  target the "search" property of this object
//     url.search = new URLSearchParams({
//         api_key: app.key,
//         q: 'bleach',  // q: `${userAnimeSelection} anime`,
//         limit: 10,
//         format: 'json'
//     });

//     fetch(url).then(function (result) {
//         return (result.json())
//     })
//         .then(function (result) {
//             console.log(result.data)
//             // append to our empty div
//         })
// }
// END OUR GIPHY AJAX CALL