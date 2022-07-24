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
app.animePicture = document.querySelector('#animePicture');

//6b. variable to hold the DOM selected li .flexFacts
app.animeFacts = document.querySelector('#factDisplay');

// 29. variable to hold our selected element
app.animeGif = document.querySelector('#giphyImage');

// 24. storing giphy url & key and endpoints in a variable
app.key = "t8X2oWyUsOd7Av7mL68TZYYSycOpELUs";
app.url = "https://api.giphy.com/v1/gifs/search";

// 2.Init Method
app.init = () => {
    //4. testing to see if init works
    app.getImage();
    app.events();
}

// START OUR FACTS AJAX CALL

// 16. Create a method to hold our AJAX call with a different endpoint (facts)
app.facts = (userValue) => {
    //21. passed a parameter into our API as the endpoint 
    fetch(`https://anime-facts-rest-api.herokuapp.com/api/v1/${userValue}`)
        .then(function (resp) {
            if (resp.ok){
                return resp.json();
            } else {
                throw new Error (resp.statusText)
            }
        })
        .then(function (result) {
            const factArray = result.data[0].fact;
            // append this to our empty div
            app.displayFacts(factArray)
        })
        .catch(function(error){
            if (error.message === "Not Found"){
                alert("Sorry the API doesn't have this fact at the moment");
            } else {
                alert("Something went wrong, out of our control, sorry!");
            }
        })
}
// END Facts AJAX CALL

// START OUR IMAGES AJAX CALL

// 5. Creating a method to hold our AJAX call for images
app.getImage = function () {
    fetch('https://anime-facts-rest-api.herokuapp.com/api/v1')
        .then(function (api) {
            if(api.ok){
                return api.json();
            } else {
                throw new Error(api.statusText)
            } 
        })
        // 8. pushed our image urls into our new array
        .then(function (jsonData) {
            jsonData.data.forEach(item => {
                app.imgArray.push(item.anime_img)
                // 19. pushed our anime_name into our new array app.altArray
                app.altArray.push(item.anime_name)
            })
        })
        .catch(function(err){
            if(err.message === "Not Found"){
                alert("Sorry the API doesn't have the image at the moment")
            } else {
                alert("Something went wrong and we have no idea")
            }
        })
}
// END OUR IMAGES AJAX CALL

// START OUR GIPHY AJAX CALL

//25. Create a method to hold our AJAX call for Giphy
app.getGiphy = (userGiphy) => {
    //27. ADD a parameter so that when we call it, we can pass an argument ()
    const url = new URL(app.url);
    //26.  target the "search" property of this object
    url.search = new URLSearchParams({
        api_key: app.key,
        // 28. Pass our parameter as an argument into our q
        q: `${userGiphy} anime`,
        limit: 2,
        format: 'json'
    });

    fetch(url).then(function (result) {
        if(result.ok){
            return (result.json())
        } else {
            throw new Error(result.statusText)
        }
    })
        .then(function (result) {
            app.displayGiphy(result.data);
            // console.log(result.data)
            // append to our empty div
        })

        .catch(function(err){
            if(err.message === "Not Found"){
                alert("Sorry the API doesn't have the Gifs at the moment")
            } else {
                alert("Something went wrong and we have no idea")
            }
        })
}
// END GIPHY AJAX CALL

// 30. create a method to display our giphy images onto the empty div.
app.displayGiphy = function (gifSelected) {
    gifSelected.forEach((singleGiphy) => {
        //   31. Made a variable that hold our created img element
        const gif = document.createElement('img');
        gif.src = singleGiphy.images.original.url;
        gif.alt = singleGiphy.title;
        app.animeGif.appendChild(gif);
    });
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
    // const factEl = document.createElement('p');
    app.animeFacts.innerText = factSelected;
    // app.animeFacts.append(factEl);
}

// START EVENT LISTENER FOR MAIN PAGE
// 11. Created an event listener of change onto our select dropdown
app.events = function () {
    document.querySelector('#anime').addEventListener('change', function () {
        // 12.created a variable to targeted the user selection value from our options that only looks at the number value
        const userSelection = parseInt(this.value);
        // 13. created a variable to hold the selected value from our newly created array
        const userPicture = app.imgArray[userSelection];
        // 20. created a variable to hold the user selected value from the app.altArray array 
        const userAlt = app.altArray[userSelection];
        // 17. Create a variable to target the user selection value from our options that only look at the string
        const valueOne = document.querySelector('#anime').value.split(',')[1];
        // 14. make sure our empty div is cleared before each call
        app.animePicture.innerText = '';
        // 15.called our method that displays the image and pass our user selection into it. 
        app.displayImage(userPicture,userAlt);
        // 22.called the facts API and passed the valueOne as the argument 
        app.animeFacts.innerHTML = '';
        app.facts(valueOne);
        // 32. create a variable to hold our selected value that we want our giphy to target
        const animeGiphy = document.querySelector('#anime').value.split(',')[2];
        // 33. Clear our our div every time a new gif is selected
        app.animeGif.innerHTML = '';
        // 34. call our giphy and pass it the variable we created
        app.getGiphy(animeGiphy);
    });
}
// END EVENT LISTENER FOR MAIN PAGE

// 3. Called our init method
app.init();