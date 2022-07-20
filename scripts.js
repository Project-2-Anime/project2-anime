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
        const userPicture = app.imgArray[userSelection];
        app.animePicture.innerHTML = '';
        app.displayImage(userPicture);
    })
}
app.init();