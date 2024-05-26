document.querySelectorAll('.button-container').forEach(container => {
    container.addEventListener('click', event => {
        if (event.target.closest('.heart-button')) {
            // Toggle the 'clicked' class on the heart button
            event.target.closest('.heart-button').classList.toggle('clicked');
        }
    });

    container.addEventListener('touchend', event => {
        if (event.target.closest('.heart-button')) {
            // Toggle the 'clicked' class on the heart button
            event.target.closest('.heart-button').classList.toggle('clicked');
        }
    });
});