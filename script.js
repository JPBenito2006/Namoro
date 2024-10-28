document.getElementById('noButton').addEventListener('mouseover', function() {
    const x = Math.random() * (window.innerWidth - this.offsetWidth);
    const y = Math.random() * (window.innerHeight - this.offsetHeight);
    this.style.position = 'absolute';
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});

document.getElementById('yesButton').addEventListener('click', function() {
    const heartsContainer = document.getElementById('heartsContainer');
    const cuteMessage = document.getElementById('cuteMessage');
    
    // Exibe a mensagem fofa
    cuteMessage.classList.remove('hidden');
    
    setInterval(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.innerHTML = '❤️';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }, 300); // Cria um coração a cada 300 milissegundos
});
