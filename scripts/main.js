document.querySelectorAll('.button-container').forEach(container => {
    container.addEventListener('click', toggleHeart);
    container.addEventListener('touchend', toggleHeart);

    function toggleHeart(event) {
        if (event.target.closest('.heart-button')) {
            // Toggle the 'clicked' class on the heart button
            const heartButton = event.target.closest('.heart-button');
            heartButton.classList.toggle('clicked');
        }
    }
});

const button = document.getElementById('colorButton');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Toggle the 'clicked' class on the button
    button.classList.toggle('clicked');
});