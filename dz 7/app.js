const showAnswerButtons = document.querySelectorAll('.show-answer-button');

showAnswerButtons.forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;

        answer.classList.toggle('hidden');

        if (button.textContent === 'Показать ответ') {
            button.textContent = 'Скрыть ответ';
        } else {
            button.textContent = 'Показать ответ';
        }
    });
});
