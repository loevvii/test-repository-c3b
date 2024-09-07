
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function applyRandomColors() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.backgroundColor = getRandomColor();
    });
}


function addReadMoreEventListeners() {
    const buttons = document.querySelectorAll('.btn-outline-secondary');
    buttons.forEach(button => {
        button.addEventListener('click', applyRandomColors);
    });
}


document.addEventListener('DOMContentLoaded', () => {
    addReadMoreEventListeners();
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    var emailInput = document.getElementById('exampleInputEmail1').value;
    var feedbackInput = document.getElementById('inputFeedback').value;
    var emailError = document.getElementById('emailError');
    var feedbackError = document.getElementById('feedbackError');

    emailError.style.display = 'none';
    feedbackError.style.display = 'none';
    document.getElementById('exampleInputEmail1').classList.remove('is-invalid');
    document.getElementById('inputFeedback').classList.remove('is-invalid');

    var hasError = false;


    if (!emailInput.includes('@')) {
        emailError.style.display = 'block';
        document.getElementById('exampleInputEmail1').classList.add('is-invalid');
        hasError = true;
    }


    if (feedbackInput.trim() === '') {
        feedbackError.style.display = 'block';
        document.getElementById('inputFeedback').classList.add('is-invalid');
        hasError = true;
    }


    if (!hasError) {
        alert('Form submitted! Thank you for your feedback!');
    } else {
        event.preventDefault(); 
    }
});