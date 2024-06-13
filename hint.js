let hintBtn = document.querySelector('.hint_btn');
let hintBox = document.querySelector('.hint');

hintBtn.addEventListener('click', () => {
    hintBox.classList.toggle('show');
});