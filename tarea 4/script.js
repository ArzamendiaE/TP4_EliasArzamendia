document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    const namePrompt = document.getElementById('name-prompt');
    const personalWelcome = document.getElementById('personal-welcome');
    const nameForm = document.getElementById('name-form');
    const nameInput = document.getElementById('name-input');
    const userNameSpan = document.getElementById('user-name');
    const buttons = document.querySelectorAll('.button');

    setTimeout(() => {
        welcomeMessage.classList.add('hidden');
        namePrompt.classList.remove('hidden');
        namePrompt.classList.add('fade-in');
    }, 2000);

    nameForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const userName = nameInput.value.trim();
        if (userName) {
            namePrompt.classList.add('hidden');
            personalWelcome.classList.remove('hidden');
            personalWelcome.classList.add('fade-in');
            userNameSpan.textContent = userName;

            buttons.forEach((button, index) => {
                setTimeout(() => {
                    button.style.opacity = '1';
                    button.style.transform = 'translateY(0)';
                }, index * 200);
            });
        }
    });

    buttons.forEach(button => {
        button.style.opacity = '0';
        button.style.transform = 'translateY(20px)';
        button.style.transition = 'opacity 0.5s, transform 0.5s';
    });
});