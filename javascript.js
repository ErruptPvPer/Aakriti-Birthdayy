document.addEventListener('DOMContentLoaded', () => {
    const targetDate = new Date('2026-08-21T00:00:00');

    const dayEl = document.getElementById('days');
    const hourEl = document.getElementById('hours');
    const minuteEl = document.getElementById('minutes');
    const secondEl = document.getElementById('seconds');

    const updateCountdown = () => {
        const now = new Date();
        const diff = targetDate - now;

        if (diff <= 0) {
            if (dayEl) dayEl.textContent = '00';
            if (hourEl) hourEl.textContent = '00';
            if (minuteEl) minuteEl.textContent = '00';
            if (secondEl) secondEl.textContent = '00';
            return;
        }

        const totalSeconds = Math.floor(diff / 1000);
        const days = Math.floor(totalSeconds / (60 * 60 * 24));
        const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
        const seconds = totalSeconds % 60;

        if (dayEl) dayEl.textContent = String(days).padStart(2, '0');
        if (hourEl) hourEl.textContent = String(hours).padStart(2, '0');
        if (minuteEl) minuteEl.textContent = String(minutes).padStart(2, '0');
        if (secondEl) secondEl.textContent = String(seconds).padStart(2, '0');
    };

    updateCountdown();
    setInterval(updateCountdown, 1000);

    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const answerText = document.getElementById('answerText');

    if (yesBtn && answerText) {
        yesBtn.addEventListener('click', () => {
            answerText.textContent = 'Yay! I knew it — forever starts with you. 💖';
            answerText.classList.add('happy');
        });
    }

    if (noBtn) {
        noBtn.addEventListener('mouseenter', () => moveNoButton(noBtn));
        noBtn.addEventListener('click', () => {
            answerText.textContent = 'No, no, no — not the correct answer. 😄';
            if (answerText) answerText.classList.add('happy');
            moveNoButton(noBtn);
        });
    }
});

function moveNoButton(button) {
    if (!button) return;

    const parent = button.parentElement;
    if (!parent) return;

    const maxX = Math.max(parent.clientWidth - button.offsetWidth, 0);
    const maxY = Math.max(parent.clientHeight - button.offsetHeight, 0);

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
}
