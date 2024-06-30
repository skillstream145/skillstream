const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const errorElement = document.getElementById('error');

form.addEventListener('submit', (e) => {
    let notifications = [];

    if (!name.value) {
        notifications.push('Name is required');
    }

    if (!message.value) {
        notifications.push('Message is required');
    }

    if (!email.value) {
        notifications.push('Email is required');
    } else if (!validateEmail(email.value)) {
        notifications.push('Email is not valid');
    }

    if (notifications.length > 0) {
        e.preventDefault();
        if (errorElement) {
            errorElement.innerText = notifications.join(', ');
        } else {
            alert(notifications.join(', '));
        }
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
