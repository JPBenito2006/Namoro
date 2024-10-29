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
    
    // Adiciona a classe 'blackout' para mudar o fundo para preto
    document.body.classList.add('blackout');
    
    let intervalTime = 500; // Aumente o tempo inicial entre corações
    const intervalDecrease = 20; // Quanto diminuir o intervalo a cada vez
    const minIntervalTime = 200; // Aumente o tempo mínimo entre corações

    const createHearts = () => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.innerHTML = '❤️';
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    };

    const increaseHeartFrequency = () => {
        createHearts();
        if (intervalTime > minIntervalTime) {
            intervalTime -= intervalDecrease;
        }
        setTimeout(increaseHeartFrequency, intervalTime);
    };

    increaseHeartFrequency();
});

document.getElementById('toggle').addEventListener('change', function() {
    document.body.classList.toggle('night-mode');
    document.getElementById('heartsContainer').classList.toggle('night-mode');
});
