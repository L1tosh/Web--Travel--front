document.addEventListener('DOMContentLoaded', function () {
    const chatBox = document.getElementById('chat-area');
    const messageInput1 = document.getElementById('message-input-1');
    const messageInput2 = document.getElementById('message-input-2');
    const sendButton1 = document.getElementById('send-button-1');
    const sendButton2 = document.getElementById('send-button-2');

    sendButton1.addEventListener('click', sendMessage);
    sendButton2.addEventListener('click', sendMessage);

    function sendMessage() {
        const messageUser1 = messageInput1.value.trim();
        const messageUser2 = messageInput2.value.trim();
        if (messageUser1 !== '' || messageUser2 !== '') {
            const messageElement = document.createElement('div');
            const userName = document.createElement('div');
            const message = document.createElement('div');
            messageElement.classList.add('message');

            if (messageUser1 !== '') {
                messageElement.classList.add('left');
                userName.textContent = "User 1";
                message.textContent += messageUser1;
            } else {
                messageElement.classList.add('right');
                userName.textContent = "User 2";
                message.textContent += messageUser2;
            }

            messageElement.appendChild(userName);
            messageElement.appendChild(message);
            chatBox.appendChild(messageElement);

            messageInput1.value = '';
            messageInput2.value = '';
        }
    }
});