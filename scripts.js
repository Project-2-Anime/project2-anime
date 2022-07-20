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
//7.  Created a new array to hold our images
app.imgArray = [];
// 18. create a new array to hold the image ID for alt tags 
app.altArray = [];
// 6. variable to hold our DOM selected element
app.animePicture = document.querySelector('#animePicture')

// variable to hold the DOM selected li .flexFacts
app.animeFacts = document.querySelector('.flexFact div')

// WHERE WE LEFT OUT, TRYING TO TARGET OUR FACTS
// 17. Create a variable to target the user selection value from our options that only look at the string



// 2.Init Method
app.init = () => {
    //4. testing to see if init works
    app.getImage();
    app.events();
    app.facts();
}

// START OUR FACTS AJAX CALL

// 16. Create a method to hold our AJAX call with a different endpoint (facts)
app.facts = (userValue) => {
    //21. passed a parameter into our API as the endpoint 
    fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${userValue}`)
        .then(function (resp) {
            return resp.json();
        })
        .then(function (result) {
            const factArray = result.data[0].fact;
            // console.log(factArray);
            // append this to our empty div

            app.displayFacts(factArray)
        })

}

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
                // 19. pushed our anime_name into our new array app.altArray
                app.altArray.push(item.anime_name)
            })
        })
}

// 9. Created a method to display our images and append to the empty div.
app.displayImage = function (imgSelected,altSource) {
//   10. Made a variable that hold our created img element
    const img = document.createElement('img');
    img.src = imgSelected;
    img.alt = altSource;
    app.animePicture.appendChild(img);
}
// 23. Created a method to display our anime facts and append to the div
app.displayFacts = function(factSelected){
    // made a varible to hold our created p element
    const factEl = document.createElement('p');
    factEl.innerText = factSelected;
    app.animeFacts.append(factEl);
}

// 11. Created an event listener of change onto our select dropdown
app.events = function () {
    document.querySelector('#anime').addEventListener('change', function () {
        // 12.created a variable to targeted the user selection value from our options that only looks at the number value
        const userSelection = parseInt(this.value);
        // 13. created a variable to hold the selected value from our newly created array
        const userPicture = app.imgArray[userSelection];
        // 20. created a variable to hold the user selected value from the app.altArray array 
        const userAlt = app.altArray[userSelection];

        // WHERE WE LEFT OUT, TRYING TO TARGET OUR FACTS
        // 17. Create a variable to target the user selection value from our options that only look at the string
        const valueOne = document.querySelector('#anime').value.split(',')[1];


        // 14. make sure our empty div is cleared before each call
        app.animePicture.innerHTML = '';
        // 15.called our method that displays the image and pass our user selection into it. 
        app.displayImage(userPicture,userAlt);
        // 22.called the facts API and passed the valueOne as the argument 
        app.animeFacts.innerHTML = '';
        app.facts(valueOne);


    })
}
// 3. Called our init method
app.init();







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