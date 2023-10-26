document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-area');
    const messageInput1 = document.getElementById('message-input-1');
    const messageInput2 = document.getElementById('message-input-2');
    const sendButton1 = document.getElementById('send-button-1');
    const sendButton2 = document.getElementById('send-button-2');

    sendButton1.addEventListener('click', function () {
        sendMessage(messageInput1, 'User 1', 'left')
    });
    sendButton2.addEventListener('click', function () {
        sendMessage(messageInput2, 'User 2', 'right')
    });

    function sendMessage(massage, user, position) {
        const massageValue = massage.value.trim();

        if (massageValue !== '') {
            const messageElement = document.createElement('div');
            const userName = document.createElement('div');
            const message = document.createElement('div');
            messageElement.classList.add('message');

            messageElement.classList.add(position);
            userName.textContent = user;
            message.textContent += massageValue;

            messageElement.appendChild(userName);
            messageElement.appendChild(message);
            chatBox.appendChild(messageElement);

            messageInput1.value = '';
            messageInput2.value = '';
        }
    }
});