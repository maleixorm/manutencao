// Definindo a data de término da manutenção
const endDate = new Date("Jul 30, 2024 15:00:00").getTime();

// Atualizando o contador a cada segundo
const countdownInterval = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        document.querySelector(".content").innerHTML = "<h1>Estamos de volta!</h1><p>Obrigado por sua paciência.</p>";
    }
}, 1000);