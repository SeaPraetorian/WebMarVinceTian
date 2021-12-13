// this is for the quotes sliders

var n = 0; // the current quotes
var timerStop; // for the interval of the quotes
var quoteStrings = [
    '<h2>It takes 9 seconds for a combine to harvest enough wheat to make about 70 loaves of bread.</h2>',
    '<h2>Legend has it that whoever eats the last piece of bread has to kiss the cook.</h2>',
    '<h2>Scandinavian traditions hold that if a boy and girl eat from the same loaf, they are bound to fall in love.</h2>',
    '<h2>The “pocket” in pita bread is made by steam. The steam puffs up the dough and, as the bread cools and flattens, a pocket is left in the middle.</h2>',
    '<h2>An average slice of packaged bread contains only 1 gram of fat and 75 to 80 calories.</h2>',
    '<h2>Bread is a staple food prepared by baking a dough of flour and water. It is popular around the world and is one of the world’s oldest foods.</h2>'
];

/* get the quotes length
 * get the slides ID
 * and assign a variable */

 var stringLength = quoteStrings.length - 1;
 var quotesElement = $('#quotes');




// for the smooth scroll

    $(document).ready(function() {

        $('html, body').smoothScroll(3000);

        // show the first index of the quotes
        // when the page is loaded

        // $(quotesElement).slideUp();

        $(quotesElement).slideDown('slow');
        $(quotesElement).html(quoteStrings[n]);

        // every 10 seconds, the quotes will change
        stimerQuotes();

        // for the animations every scroll
        sal({
            once: false,
        });
    });




// for the toggle function in navigation bar

var navigation = $('.main-nav');
var toggleBurger = $('#js-navbar-toggle');

    // when the toggleBurger is clicked
    // it wil show the list of nav

    $(toggleBurger).click(function() {
        $(navigation).toggleClass('active');
    });


// every 2 seconds, the quotes will change
function nextQuote() {
    $(quotesElement).fadeOut();
    n += 1;

    if(n === stringLength + 1) 
        n = 0;
    
        $(quotesElement).html(quoteStrings[n]).fadeIn();
}

// stop the timer and go to the other quotes when clicked
$(quotesElement).click(function() {
    stopQuotes();

    nextQuote();
    stimerQuotes();
});

// will be called every 10 seconds for the quotes

function stimerQuotes() {
    timerStop = setInterval(function() {
        nextQuote();   
    }, 8000);
};



function stopQuotes() {
    clearInterval(timerStop);
};


// for the products click events
// when clicked they will go to other page

$('#product1').click(function() {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xU47nhruN-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
})

$('#product2').click(function() {
    window.location.href='./eggpie.html';
})

$('#product3').click(function() {
    window.location.href='./cashewtart.html';
})

$('#product4').click(function() {
    window.location.href='./chocotart.html';
})

$('#product5').click(function() {
    window.location.href='./driedmango.html';
})

$('#product6').click(function() {
    window.location.href='./jackfruit.html';
})

var checkout = document.querySelector("btnAbout");

window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target == modal) {
        modal.style.display = "none";
    }
});

checkout.addEventListener("click", () => {
    modal.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/xU47nhruN-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    modal.style.display = "block";
});