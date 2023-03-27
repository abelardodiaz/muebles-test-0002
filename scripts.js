document.addEventListener('DOMContentLoaded', function() {
    const muebles = document.querySelectorAll('.mueble');
    const galeriaModal = document.getElementById('galeria-modal');
    const closeModal = document.querySelector('.close');
    const modalImg1 = document.getElementById('modal-img1');
    const modalImg2 = document.getElementById('modal-img2');

    muebles.forEach(mueble => {
        mueble.addEventListener('click', () => {
            const img1 = mueble.dataset.img1;
            const img2 = mueble.dataset.img2;
            modalImg1.src = img1;
            modalImg2.src = img2;
            galeriaModal.style.display = 'block';
        });
    });

    closeModal.addEventListener('click', () => {
        galeriaModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === galeriaModal) {
            galeriaModal.style.display = 'none';
        }
    });
});


 