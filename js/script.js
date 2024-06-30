var testimonials = [];
var currentTestimonial = 0;
var time = 3000;

// Fetch testimonial elements by their IDs
testimonials[0] = document.getElementById('testimonial1');
testimonials[1] = document.getElementById('testimonial2');
testimonials[2] = document.getElementById('testimonial3');

function changeTestimonial() {
    testimonials[currentTestimonial].style.display = 'none'; // Hide current testimonial

    currentTestimonial = (currentTestimonial + 1) % testimonials.length; // Move to the next testimonial

    testimonials[currentTestimonial].style.display = 'block'; // Show next testimonial

    setTimeout(changeTestimonial, time);
}

window.onload = changeTestimonial; // Start slideshow when the window loads