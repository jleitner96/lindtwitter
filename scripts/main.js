const buttons = document.querySelectorAll('.heart-button');

// Add a click event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Check if the button already has the 'clicked' class
        if (button.classList.contains('clicked')) {
            // If it does, remove the 'clicked' class
            button.classList.remove('clicked');
        } else {
            // If it doesn't, add the 'clicked' class
            button.classList.add('clicked');
        }
    });
});
