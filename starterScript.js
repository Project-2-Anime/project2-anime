//  STRETCH GOALS STARTER PAGE //

// 1.Create our name space Object
const starterApp = {};

// 2. create our init method
starterApp.init = () => {
    // 16. call our methods
    starterApp.eventStarter();
    starterApp.showSlides(starterApp.slideIndex);
}

// 4. put our slideIndex as a variable of the number 1
starterApp.slideIndex = 1;

// 5. created a method that will act as the change in slides and give it a parameter.
starterApp.plusSlides = function (n) {
    //11.  we call our for loop & if conditional function 
    starterApp.showSlides(starterApp.slideIndex += n);
}

// 6. create a method that will take a for loop and conditional statement to identify how the images change. 
starterApp.showSlides = function (n) {
    // 7. Target our slide show
    let slides = document.querySelectorAll(".slideShow");

    // 8. create a for loop that will look at the total amount of slides
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // 9. an if else conditional statement that will choose to show or not show the image
    if (n > slides.length) {
        starterApp.slideIndex = 1;
    }
    else if (n < 1) {
        starterApp.slideIndex = slides.length;
    }
    // 10. show our picture giving the targeted element a display of block
    slides[starterApp.slideIndex - 1].style.display = "block";
}

// START EVENT LISTENER FOR STARTER PAGE

//12.  Event listener on our buttons that call the function for change in slides.
starterApp.eventStarter = function () {
    // 13. target the element button we want to go next
    document.querySelector('.next').addEventListener('click', function () {
        starterApp.plusSlides(1);
    })
    // 14. target the element button we want to go previous
    document.querySelector('.prev').addEventListener('click', function () {
        starterApp.plusSlides(-1);
    })
};

// END EVENT LISTENER FOR STARTER PAGE

// 3. Call our init method
starterApp.init();