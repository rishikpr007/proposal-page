document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.getElementById('yesButton');
    
    noButton.addEventListener('mouseover', function() {
        // Log to verify the event is triggered
        console.log('No button hovered');
        
        // Get the parent container of the buttons
        var buttonsContainer = document.querySelector('.buttons');
        
        // Log the current structure before swapping
        console.log('Before swapping:', buttonsContainer.innerHTML);
        
        // Swap the buttons' positions
        buttonsContainer.insertBefore(noButton, yesButton);
        
        // Log the structure after swapping
        console.log('After swapping:', buttonsContainer.innerHTML);
    });
});
