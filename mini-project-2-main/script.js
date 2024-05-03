const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);


// Add to cart button link  //

// Wait for the document to fully load before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Add event listener to the "Add to Cart" button
    var addtocartbutton = document.getElementById('addtocartbutton');
    
    if (addtocartbutton) {
        addtocartbutton.addEventListener('click', function(event) {
            // Prevent the default behavior of the button (e.g., form submission)
            event.preventDefault();

            // Perform any necessary actions here (e.g., adding item to cart)

            // Redirect to the cart page after adding to cart
            window.location.href = 'cart.html'; // Specify the URL of the cart page
        });
    }
});





// negotiation scripts

document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the "Add to Cart" button
    var addToCartBtn = document.getElementById("addToCartBtn");

    if(addToCartBtn){
        addToCartBtn.addEventListener("click", function() {
            generateRandomPrices();
        });
    }
   
});

function generateRandomPrices() {
    // Get the price container
    var priceContainer = document.getElementById("priceContainer");
    
    // Display the price container
    // priceContainer.style.display = "block";
    
    // Generate 3 random prices
    var price1 = generateRandomPrice(1800 , 2300);
    var price2 = generateRandomPrice(1800 , 2300);
    var price3 = generateRandomPrice(1800 , 2300);
    
    // Assign the random prices to the buttons
    document.getElementById("price1").textContent = "Rs " + price1.toFixed(2);
    document.getElementById("price2").textContent = "Rs " + price2.toFixed(2);
    document.getElementById("price3").textContent = "Rs " + price3.toFixed(2);
}

function generateRandomPrice(min , max) {
    // Generate a random price between 10 and 100
    return Math.random() * (max - min + 1) + min;
}



// document.addEventListener('DOMContentLoaded', function() {
//     const price1 = document.getElementById('price1');
//     price1.addEventListener('click', function(event) {
//         event.preventDefault();
//         alert('Item added to cart!');
//     });
// });




// cart page local storage
document.addEventListener('DOMContentLoaded', function() {
    // Get references to all product buttons by their IDs
    const prices1 = document.getElementById('price1');
    const prices2 = document.getElementById('price2');
    const prices3 = document.getElementById('price3');


    // Add click event listeners to each product button
    if(prices1){
        prices1.addEventListener('click', function() {
            console.log(prices1.textContent)
            addToCart('prices1', (prices1.innerText));
        });
    }

    if(prices2){
        prices2.addEventListener('click', function() {
            addToCart('prices2' , prices2.textContent);
        });
    
    }
   

    if(prices3){
        prices3.addEventListener('click', function() {
            addToCart('prices3', prices3.textContent);
        });
    }
   
  

    // nikeShoeBtn.addEventListener('click', function() {
    //     addToCart('Men Nike Shoe', getPriceFromText(nikeShoeBtn.textContent));
    // });

    // Function to extract numeric price from button text content
    function getPriceFromText(buttonText) {
        // Use regular expression to extract the numeric value (e.g., "2344.54")
        // const priceMatch = buttonText.match(/RS (\d+\.\d+)/);
        if (1) {
            return buttonText; // Convert matched price to a floating-point number
        }
        return 0; // Default to 0 if price not found
    }

    // Function to add product to cart and store in localStorage
    function addToCart(productName, productPrice) {
        // Store product details in localStorage as JSON string
        localStorage.setItem('cartProduct',  productPrice);
        console.log("the value is :" + productPrice)
        // Redirect user to cart.html
        window.location.href = '/cart.html';
    }

   



});
