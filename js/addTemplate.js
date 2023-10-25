fetch('../templates/header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => console.error('Помилка завантаження header.html:', error));

fetch('../templates/footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footer').innerHTML = data;
    })
    .catch(error => console.error('Помилка завантаження footer.html:', error));
fetch('../pages/registration/table.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('table').innerHTML = data;
    })
    .catch(error => console.error('Помилка завантаження таблиці', error));
