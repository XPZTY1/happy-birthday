function createBalloons() {
      const colors = ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#DB7093'];
      const container = document.getElementById('balloons-container');
      for (let i = 0; i < 20; i++) {
        const balloon = document.createElement('div');
        balloon.className = 'balloon';
        balloon.style.left = `${Math.random() * 100}vw`;
        balloon.style.animationDelay = `${Math.random() * 10}s`;
        balloon.style.setProperty('--random', Math.random() * 2 - 1);
        const color = colors[Math.floor(Math.random() * colors.length)];
        balloon.innerHTML = `
          <svg viewBox="0 0 50 60">
            <path d="M25,5 C15,5 5,15 5,30 C5,45 15,50 25,50 C35,50 45,45 45,30 C45,15 35,5 25,5 Z" fill="${color}" />
            <path d="M25,50 L25,60" stroke="#FFC0CB" stroke-width="2" />
          </svg>
        `;
        container.appendChild(balloon);
      }
    }

    function createConfetti() {
      const colors = ['#FF69B4', '#FFB6C1', '#FFC0CB', '#FF1493', '#DB7093', '#FFA07A', '#FFFF00'];
      const container = document.getElementById('confetti-container');
      container.innerHTML = '';
      for (let i = 0; i < 80; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'confetti';
        confetti.style.left = `${Math.random() * 100}vw`;
        confetti.style.animationDelay = `${Math.random() * 5}s`;
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        if (Math.random() > 0.5) {
          confetti.style.borderRadius = '50%';
        } else {
          confetti.style.width = `${5 + Math.random() * 10}px`;
          confetti.style.height = `${5 + Math.random() * 10}px`;
          confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
        }
        container.appendChild(confetti);
      }
    }

    window.onload = () => {
      createBalloons();
      createConfetti();
    };