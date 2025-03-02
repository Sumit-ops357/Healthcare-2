// Chat Widget Functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatToggle = document.getElementById('chatToggle');
    const chatWidget = document.getElementById('chatWidget');
    const minimizeChat = document.getElementById('minimizeChat');
    const chatInput = document.getElementById('chatInput');
    const sendMessage = document.getElementById('sendMessage');
    const chatMessages = document.getElementById('chatMessages');

    // Toggle chat widget
    chatToggle.addEventListener('click', function() {
        chatWidget.classList.toggle('active');
        chatToggle.style.display = chatWidget.classList.contains('active') ? 'none' : 'flex';
    });

    // Minimize chat widget
    minimizeChat.addEventListener('click', function() {
        chatWidget.classList.remove('active');
        chatToggle.style.display = 'flex';
    });

    // Send message functionality
    function sendChatMessage() {
        const message = chatInput.value.trim();
        if (message) {
            // Add user message
            const userMessage = `
                <div class="message user-message">
                    <div class="message-content">
                        ${message}
                    </div>
                    <div class="message-avatar">
                        <i class="fas fa-user"></i>
                    </div>
                </div>
            `;
            chatMessages.insertAdjacentHTML('beforeend', userMessage);

            // Clear input
            chatInput.value = '';

            // Simulate bot response after a short delay
            setTimeout(() => {
                const botResponse = `
                    <div class="message bot-message">
                        <div class="message-avatar">
                            <i class="fas fa-robot"></i>
                        </div>
                        <div class="message-content">
                            Thanks for your message! Our team will get back to you shortly.
                        </div>
                    </div>
                `;
                chatMessages.insertAdjacentHTML('beforeend', botResponse);
                
                // Scroll to bottom
                chatMessages.scrollTop = chatMessages.scrollHeight;
            }, 1000);
        }
    }

    // Send message on button click
    sendMessage.addEventListener('click', sendChatMessage);

    // Send message on Enter key
    chatInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            sendChatMessage();
        }
    });

    // Auto-scroll chat to bottom when new messages are added
    const observer = new MutationObserver(() => {
        chatMessages.scrollTop = chatMessages.scrollHeight;
    });

    observer.observe(chatMessages, {
        childList: true,
        subtree: true
    });
});

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
}); 