document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.btn-primary');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Product added to cart!');
        });
    });
});
