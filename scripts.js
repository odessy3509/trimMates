// JavaScript for handling the modal
document.addEventListener('DOMContentLoaded', function() {
    var modal = document.getElementById("bookingModal");
    var btn = document.getElementById("bookNowBtn");
    var span = document.getElementsByClassName("close")[0];
    var serviceSelect = document.getElementById("service");
    var customServiceInput = document.getElementById("customService");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    serviceSelect.addEventListener('change', function() {
        if (this.value === "custom") {
            customServiceInput.style.display = "block";
        } else {
            customServiceInput.style.display = "none";
        }
    });
});
