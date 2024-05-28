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
    noButton.addEventListener('mouseenter', function() {
        swapButtons();
        noButton.style.backgroundColor = getRandomColor();
    });

    yesButton.addEventListener('mouseenter', function() {
        swapButtons();
        yesButton.style.backgroundColor = getRandomColor();
    });

    // Add event listener for clicking the "Yes" button
    yesButton.addEventListener('click', function() {
        // Display a message when the "Yes" button is clicked
        messageContainer.innerText = 'Thank you so much dear';
    });

    // Function to generate random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
