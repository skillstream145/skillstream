var testimonials = [];
var currentTestimonial = 0;
var time = 3000;

// Fetch testimonial elements by their IDs
testimonials[0] = document.getElementById('testimonial1');
testimonials[1] = document.getElementById('testimonial2');
testimonials[2] = document.getElementById('testimonial3');

// Hide all testimonials except the first one
for (var i = 1; i < testimonials.length; i++) {
    testimonials[i].style.display = 'none';
}

function changeTestimonial() {
    testimonials[currentTestimonial].style.display = 'none';

    currentTestimonial = (currentTestimonial + 1) % testimonials.length;

    testimonials[currentTestimonial].style.display = 'block';

    setTimeout(changeTestimonial, time);
}

window.onload = changeTestimonial;
