// JavaScript for Modal
document.getElementById('openModal').addEventListener('click', function() {
    document.getElementById('bookingModal').style.display = 'block';
});

document.getElementById('closeModal').addEventListener('click', function() {
    document.getElementById('bookingModal').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('bookingModal')) {
        document.getElementById('bookingModal').style.display = 'none';
    }
});

// JavaScript for Smooth Scroll to Footer
document.querySelector('a[href="#footer"]').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior

    // Get the footer element
    const footer = document.getElementById('footer');
    
    // Scroll to the footer with smooth behavior
    footer.scrollIntoView({ behavior: 'smooth' });
});
