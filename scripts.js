document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('bookingModal');
    const openModalButton = document.getElementById('openModal');
    const closeModalButton = document.getElementById('closeModal');

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
    });

    closeModalButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    document.getElementById('bookingForm').addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Your booking request has been submitted!');
        modal.style.display = 'none';
        document.getElementById('bookingForm').reset();
    });
});
