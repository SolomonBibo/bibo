(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);
/*
// Get all book buttons on the page
var bookButtons = document.querySelectorAll(".book-button");

// Get the cart count element
var cartCountElement = document.querySelector(".cart-count");

// Get the cart items element
var cartItemsElement = document.querySelector(".cart-items");

// Get the total element
var totalElement = document.querySelector(".cart-total");

// Set initial state of cart items and total to hidden
cartItemsElement.style.display = "none";
totalElement.style.display = "none";

// Add click event listener to each book button
bookButtons.forEach(function (bookButton) {
    bookButton.addEventListener("click", function () {
      // Get the selected trip type
      var selectedTripType = document.querySelector('input[name="tripType"]:checked');
  
      if (selectedTripType) {
        // Change button text and style
        if (!this.classList.contains("added")) {
          this.textContent = "Added";
          this.classList.add("added");
          this.setAttribute("disabled", "disabled");
          this.style.cursor = "not-allowed";
  
          // Get the place details
          var placeName = this.parentElement.querySelector(".place-name").textContent;
          var placePrice = selectedTripType.nextElementSibling.textContent;
  
          // Add the selected trip type to the place name
          placeName ;
  
          // Add the place to the travel plan cart
          addToCart(placeName, placePrice, this);
        }
      } else {
        // Display an error message as a pop-up when no trip type is selected
console.log("Please select a trip type");

// Show the modal with the error message
var modal = document.getElementById("myModal");
var closeBtn = document.getElementsByClassName("close")[0];
var errorMessageElement = document.getElementById("errorMessage");
errorMessageElement.textContent = "Please select a trip type";
modal.style.display = "block";

// Close the modal when the close button is clicked
closeBtn.onclick = function() {
  modal.style.display = "none";
}
      }
    });
  });
  
  // Rest of the code remains the same...
  
// Function to add item to the cart
function addToCart(placeName, placePrice, bookButton) {
    // Create a new list item for the added item
    var listItem = document.createElement("li");
    listItem.textContent = placeName + " - " + placePrice;
  
    // Create a delete button for the item
    var deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function () {
      // Remove the item from the cart
      listItem.remove();
  
      // Update the cart count
      var currentCount = parseInt(cartCountElement.textContent);
      var newCount = currentCount - 1;
      cartCountElement.textContent = newCount;
  
      // Revert book button to default settings
      bookButton.textContent = "Book Now";
      bookButton.classList.remove("added");
      bookButton.removeAttribute("disabled");
      bookButton.style.cursor = "pointer";
  
      // Update the total
      updateTotal();
    });
  
    // Append the delete button to the list item
    listItem.appendChild(deleteButton);
  
    // Append the new item to the cart items list
    var cartItemsList = cartItemsElement.querySelector("ul");
    cartItemsList.appendChild(listItem);
  
    // Update the cart count
    var currentCount = parseInt(cartCountElement.textContent);
    var newCount = currentCount + 1;
    cartCountElement.textContent = newCount;
  
   
  }
  
 
  

// Get the cart element
var cartElement = document.querySelector(".cart");

// Get the products section element
var productsSection = document.querySelector(".text-uppercase");

// Calculate the offset top of the products section
var productsSectionOffsetTop = productsSection.offsetTop;

// Function to handle scroll event
function handleScroll() {
  // Get the current scroll position
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  // Toggle the visibility of the cart based on scroll position
  if (scrollPosition >= productsSectionOffsetTop) {
    cartElement.style.display = "block";
  } else {
    cartElement.style.display = "none";
  }
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);


var cartToggle = document.querySelector(".cart-toggle");
var iconOpen = cartToggle.querySelector(".icon-open");
var iconClose = cartToggle.querySelector(".icon-close");
var cartItemsElement = document.querySelector(".cart-items");

// Add click event listener to the cart toggle button
cartToggle.addEventListener("click", function () {
  // Toggle the visibility of the cart items and update the icon
  if (cartItemsElement.style.display === "none") {
    cartItemsElement.style.display = "block";
    iconOpen.style.display = "none";
    iconClose.style.display = "inline";
  } else {
    cartItemsElement.style.display = "none";
    iconOpen.style.display = "inline";
    iconClose.style.display = "none";
  }
});

// Get the cart count element and the book button
const bookButton = document.querySelector('.book');

// Function to check if the cart is empty and show/hide the book button
function checkCartStatus() {
  const cartCount = parseInt(cartCountElement.textContent);
  if (cartCount > 0) {
    bookButton.style.display = 'block';
  }
   else {
    bookButton.style.display = 'block';
  }
}

// Initial check on page load
document.addEventListener('DOMContentLoaded', checkCartStatus);

*/
// Get all book buttons on the page
var bookButtons = document.querySelectorAll(".book-button");

// Add click event listener to each book button
bookButtons.forEach(function (bookButton) {
  bookButton.addEventListener("click", function () {
    // Get the selected trip type
    var selectedTripType = document.querySelector('input[name="tripType"]:checked');

    if (selectedTripType) {
      // Change button text and style
      if (!this.classList.contains("added")) {
       

        // Get the place details
        var placeName = this.parentElement.querySelector(".place-name").textContent;
        var placePrice = selectedTripType.nextElementSibling.textContent;

        // Add the selected trip type to the place name
        placeName += " - " + selectedTripType.value;

      
        
      }
    } else {
      // Display an error message as a pop-up when no trip type is selected
      console.log("Please select a trip type");

      // Show the modal with the error message
      var modal = document.getElementById("myModal");
      var closeBtn = document.getElementsByClassName("close")[0];
      var errorMessageElement = document.getElementById("errorMessage");
      errorMessageElement.textContent = "Please select a trip type";
      modal.style.display = "block";

      // Close the modal when the close button is clicked
      closeBtn.onclick = function() {
        modal.style.display = "none";
      }
    }
  });
});

// Function to open the booking modal with booking summary
function openBookingModal(placeName, placePrice) {
  // Show the booking modal
  var modal = document.getElementById("bookingModal");
  modal.style.display = "block";

  // Update the booking summary
  var bookingSummary = document.getElementById("bookingSummary");
  var ticketInput = document.getElementById("ticket"); // Get the ticket input element
  
  // Generate a random ticket number
  var ticket = generateTicketNumber();

  // Set the respective values to the input fields
  document.getElementById("tripType").value = placeName;
  ticketInput.value = ticket;

  // Get the number of people input, additional service checkbox, and the total element
  var numberOfPeopleInput = document.getElementById('numberOfPeople');
  var additionalServiceCheckbox = document.querySelector('input[name="additionalService"]');
  var totalElement = document.getElementById('total');

  // Add event listener to the number of people input
  numberOfPeopleInput.addEventListener('input', updateTotalPrice);

  // Add event listener to the additional service checkbox
  additionalServiceCheckbox.addEventListener('change', updateTotalPrice);

  // Function to update the total price
  function updateTotalPrice() {
    var numberOfPeople = parseInt(numberOfPeopleInput.value);
    var totalPrice = parseFloat(placePrice) * numberOfPeople;

    if (additionalServiceCheckbox.checked) {
      totalPrice += 150.00;
    }

    totalElement.innerHTML = `<p><strong>Total Price:</strong> $${totalPrice.toFixed(2)}</p>`;
  }
  
  // ... Rest of the code


    function generateTicketNumber() {
        var ticketLength = 10; // Length of the ticket number
        var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Characters to include in the ticket number
        var ticket = "";
      
        for (var i = 0; i < ticketLength; i++) {
          var randomIndex = Math.floor(Math.random() * characters.length);
          ticket += characters.charAt(randomIndex);
        }
      
        return ticket;
      }
      bookingSummary.innerHTML = `
  <p><strong>Tour Package:</strong> ${placeName}</p>
  <p><strong>Price per head:</strong> $${placePrice}</p>
  <p><strong>Booking Ticket:</strong> ${ticket}</p>
`;
       // Get the close button element
var closeButton = document.getElementById("closeButton");

// Add click event listener to the close button
closeButton.addEventListener("click", function() {
  // Hide the modal
  var bookingModal = document.getElementById("bookingModal");
  bookingModal.style.display = "none";
});


var additionalServiceCheckbox = document.querySelector('input[name="additionalService"]');

  function handleCheckboxChange() {
    var label = document.querySelector('.additional-services label');
    if (additionalServiceCheckbox.checked) {
      label.classList.add('selected-label');
      console.log("Checkbox checked");
    } else {
      label.classList.remove('selected-label');
      console.log("Checkbox unchecked");
    }
  }

  additionalServiceCheckbox.addEventListener('change', handleCheckboxChange);

// Get all payment option radio buttons
var paymentOptions = document.querySelectorAll('input[name="paymentOption"]');

// Get the corresponding sections for payment options
var cardDetailsSection = document.getElementById("cardDetailsSection");
var mobileMoneyDetailsSection = document.getElementById("mobileMoneyDetailsSection");
var airtelMoneyDetailsSection = document.getElementById("airtelMoneyDetailsSection");

// Hide all payment option sections on page load
cardDetailsSection.style.display = "none";
mobileMoneyDetailsSection.style.display = "none";
airtelMoneyDetailsSection.style.display = "none";

// Add event listener to each payment option
paymentOptions.forEach(function (option) {
  option.addEventListener("change", function () {
    // Disable other payment options
   

    // Show/hide corresponding sections based on the selected option
    if (option.value === "mobileMoney") {
      cardDetailsSection.style.display = "none";
      mobileMoneyDetailsSection.style.display = "block";
      airtelMoneyDetailsSection.style.display = "none";
    } else if (option.value === "airtelMoney") {
      cardDetailsSection.style.display = "none";
      mobileMoneyDetailsSection.style.display = "none";
      airtelMoneyDetailsSection.style.display = "block";
    } else if (option.value === "banktransfer") {
      cardDetailsSection.style.display = "block";
      mobileMoneyDetailsSection.style.display = "none";
      airtelMoneyDetailsSection.style.display = "none";
    }
  });
});

var radioButtons = document.querySelectorAll('input[name="paymentOption"]');

  function handleRadioButtonChange(event) {
    var labels = document.querySelectorAll('.payment-label');
    labels.forEach(function(label) {
      label.classList.remove('selected-label');
    });

    var selectedRadioButton = event.target;
    if (selectedRadioButton.checked) {
      var selectedLabel = selectedRadioButton.parentNode.querySelector('.payment-label');
      selectedLabel.classList.add('selected-label');
    }
  }

  radioButtons.forEach(function(radioButton) {
    radioButton.addEventListener('change', handleRadioButtonChange);
  });

  
    // Close the booking modal when the close button is clicked
    var closeBtn = document.getElementsByClassName("close")[1];
    closeBtn.onclick = function() {
      modal.style.display = "none";
    }
  }
  

  
  // Add click event listener to each book button
  bookButtons.forEach(function (bookButton) {
    bookButton.addEventListener("click", function () {
      // Get the selected trip type and place details
      var selectedTripType = document.querySelector('input[name="tripType"]:checked');
      var placeName = this.parentElement.querySelector(".place-name").textContent;
      var placePrice = selectedTripType.nextElementSibling.textContent;
  
      if (selectedTripType) {
        // Change button text and style (existing code)
  
        // Add the selected trip type to the place name
        placeName += " - " + selectedTripType.value;
  
        // Add the place details to the booking modal
        openBookingModal(placeName, placePrice);
  
        
      } else {
        // Display an error message as a pop-up when no trip type is selected
        console.log("Please select a trip type");
  
        // Show the modal with the error message
        var modal = document.getElementById("myModal");
        var closeBtn = document.getElementsByClassName("close")[0];
        var errorMessageElement = document.getElementById("errorMessage");
        errorMessageElement.textContent = "Please select a trip type";
        modal.style.display = "block";
         
      }
    });
  });
  
  

$(document).ready(function() {
    // Handle click event on menu items for section 1
    $(".tour-details-menu li[data-section]").on("click", function() {
      // Remove active class from all menu items
      $(".tour-details-menu li[data-section]").removeClass("active");
  
      // Add active class to the clicked menu item
      $(this).addClass("active");
  
      // Get the data-section value of the clicked menu item
      var sectionId = $(this).data("section");
  
      // Hide all sections for section 1
      $(".tour-details-content .section").hide();
  
      // Show the corresponding section for section 1
      $("#" + sectionId + "-section").show();
    });
  
    // Handle click event on menu items for section 2
    $(".tour-details-menu li[data-section2]").on("click", function() {
      // Remove active class from all menu items
      $(".tour-details-menu li[data-section2]").removeClass("active");
  
      // Add active class to the clicked menu item
      $(this).addClass("active");
  
      // Get the data-section2 value of the clicked menu item
      var sectionId = $(this).data("section2");
  
      // Hide all sections for section 2
      $(".tour-details-content .section2").hide();
  
      // Show the corresponding section for section 2
      $("#" + sectionId + "-section2").show();
    });
  
    // Show the initial sections (Overview for section 1)
    $("#overview-section").show();
    
    // Show the initial sections (Overview for section 2)
    $("#overview-section2").show();
  });
  
  
  // Main JavaScript File

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js')
    .then(registration => {
      console.log('Service Worker registered successfully:', registration);
    })
    .catch(error => {
      console.log('Service Worker registration failed:', error);
    });
}


