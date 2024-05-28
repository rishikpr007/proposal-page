document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.getElementById('yesButton');
    var messageContainer = document.querySelector('.message-container');

    // Function to swap buttons' text and colors
    function swapButtons() {
        // Swap the buttons' text
        var tempText = noButton.innerText;
        noButton.innerText = yesButton.innerText;
        yesButton.innerText = tempText;

        // Swap the buttons' background colors
        var tempColor = noButton.style.backgroundColor;
        noButton.style.backgroundColor = yesButton.style.backgroundColor;
        yesButton.style.backgroundColor = tempColor;
    }

    // Add event listener for mouse enter events to swap buttons and colors
    noButton.addEventListener('mouseenter', swapButtons);
    yesButton.addEventListener('mouseenter', swapButtons);

    // Add event listener for clicking the "Yes" button
    yesButton.addEventListener('click', function() {
        // Display a message when the "Yes" button is clicked
        messageContainer.innerText = 'Thank you so much dear';
    });

    // Initialize the button colors
    yesButton.style.backgroundColor = 'green';
    noButton.style.backgroundColor = 'red';
});
