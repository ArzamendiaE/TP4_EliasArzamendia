document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    const agePrompt = document.getElementById('age-prompt');
    const ageMessage = document.getElementById('age-message');
    const ageForm = document.getElementById('age-form');
    const ageInput = document.getElementById('age-input');
    const imageContainers = document.querySelectorAll('.image-container');

    setTimeout(() => {
        welcomeMessage.classList.add('hidden');
        agePrompt.classList.remove('hidden');
    }, 2000);

    ageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const age = parseInt(ageInput.value);
        agePrompt.classList.add('hidden');
        ageMessage.classList.remove('hidden');
        
        if (age > 20) {
            ageMessage.textContent = '¡Eres mayor de 20 años! Disfruta de nuestra galería.';
        } else {
            ageMessage.textContent = 'Eres menor de 20 años. ¡Esperamos que disfrutes de nuestra galería!';
        }

        // Mostrar las imágenes con animaciones
        imageContainers.forEach((container, index) => {
            setTimeout(() => {
                container.querySelector('.gallery-image').style.opacity = '1';
            }, index * 200);
        });
    });

    // Cambiar imágenes al pasar el mouse
    imageContainers.forEach(container => {
        const mainImage = container.querySelector('.gallery-image');
        const altImage = container.querySelector('.gallery-image-alt');

        container.addEventListener('mouseenter', () => {
            mainImage.classList.add('hidden');
            altImage.classList.remove('hidden');
        });

        container.addEventListener('mouseleave', () => {
            mainImage.classList.remove('hidden');
            altImage.classList.add('hidden');
        });
    });
});