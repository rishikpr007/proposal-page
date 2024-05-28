document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.getElementById('yesButton');
    var messageContainer = document.querySelector('.message-container');

    // Function to swap buttons' text and colors
    function swapButtons() {
        // Swap the buttons' text and colors
        noButton.innerText = 'Yes';
        noButton.style.backgroundColor = 'green';
        yesButton.innerText = 'No';
        yesButton.style.backgroundColor = 'red';
    }

    // Add event listeners for mouse enter and leave events
    noButton.addEventListener('mouseenter', swapButtons);
    yesButton.addEventListener('mouseenter', swapButtons);

    // Function to reset buttons' text and colors
    function resetButtons() {
        // Reset the buttons' text and colors
        yesButton.innerText = 'Yes';
        yesButton.style.backgroundColor = 'green';
        noButton.innerText = 'No';
        noButton.style.backgroundColor = 'red';
    }

    // Add event listeners for mouse leave events to reset buttons
    noButton.addEventListener('mouseleave', resetButtons);
    yesButton.addEventListener('mouseleave', resetButtons);

    // Add event listener for clicking the "Yes" button
    yesButton.addEventListener('click', function() {
        // Display a message when the "Yes" button is clicked
        messageContainer.innerText = 'Thank you so much dear';
    });
});
