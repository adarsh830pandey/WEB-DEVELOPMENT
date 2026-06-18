document.addEventListener('DOMContentLoaded', () => {
  const message = document.getElementById('externalMessage');
  if (message) {
    message.textContent = 'This message was set by an external JavaScript file.';
  }
});
