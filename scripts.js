document.getElementById('noButton').addEventListener('mouseover', function() {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    
    // Get the parent container of the buttons
    var buttonsContainer = document.querySelector('.buttons');
    
    // Swap the buttons' positions
    buttonsContainer.insertBefore(noButton, yesButton);
});
