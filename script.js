document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            button.style.backgroundColor = 'green';
            button.style.borderColor = 'green';
            button.textContent = 'Added to Cart';
        });
    });
});