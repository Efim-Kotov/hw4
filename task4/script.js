const text = document.querySelector ('#text');

text.addEventListener ('click', function(event) {
    event.preventDefault();
    userText = prompt('Введите текст, на который вы бы хотели изменить ссылку');
    text.textContent = userText;
})