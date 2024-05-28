document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.getElementById('yesButton');
    var messageContainer = document.querySelector('.message-container');

    noButton.addEventListener('mouseenter', function() {
        // Swap the buttons' text and colors
        noButton.innerText = 'Yes';
        noButton.style.backgroundColor = 'green';
        yesButton.innerText = 'No';
        yesButton.style.backgroundColor = 'red';
    });

    yesButton.addEventListener('click', function() {
        // Display a message when the "Yes" button is clicked
        messageContainer.innerText = 'Thank you so much dear';
    });
});
