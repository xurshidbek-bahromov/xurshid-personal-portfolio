const modeToggle = document.getElementById('mode-toggle');
const modeIcon = document.getElementById('mode-icon');
let isDayMode = true;

modeToggle.addEventListener('click', () => {
    isDayMode = !isDayMode;
    document.body.classList.toggle('dark-mode', !isDayMode);
    
    if (isDayMode) {
        modeIcon.classList.remove('fa-moon'); // Tun ikonkasi
        modeIcon.classList.add('fa-sun'); // Kun ikonkasi
        modeToggle.textContent = 'Kun Rejimi';
    } else {
        modeIcon.classList.remove('fa-sun'); // Kun ikonkasi
        modeIcon.classList.add('fa-moon'); // Tun ikonkasi
        modeToggle.textContent = 'Tun Rejimi';
    }
});