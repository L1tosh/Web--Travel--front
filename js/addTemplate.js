fetch('template/header.html')
    .then(response => response.text())
    .then(data => {
        // Тут ви маєте змогу вставити зміст з header.html на головну сторінку.
        // Наприклад, можна використовувати innerHTML для вставки в div з певним ідентифікатором.
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Помилка завантаження header.html:', error));

fetch('template/footer.html')
    .then(response => response.text())
    .then(data => {
        // Тут ви маєте змогу вставити зміст з header.html на головну сторінку.
        // Наприклад, можна використовувати innerHTML для вставки в div з певним ідентифікатором.
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Помилка завантаження header.html:', error));