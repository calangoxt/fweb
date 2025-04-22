let chamber = [false, false, false, false, false, false]; // Inicializa todas as 6 câmaras como seguras
let currentShot = 0; // Representa o número do tiro atual
let balaFatal = Math.floor(Math.random() * 6); // Escolhe aleatoriamente qual câmara terá a bala fatal

// Função para simular a roleta russa
function darTiro() {
    const resultado = document.getElementById('resultado');
    const status = document.getElementById('status');

    // Simula o "tiro"
    if (currentShot < 6) {
        // Marca a câmara atual como a "bala fatal" no primeiro tiro
        chamber[balaFatal] = true;

        // Verifica se o tiro foi fatal
        if (currentShot === balaFatal) {
            resultado.textContent = "Bang! Você perdeu! (A bala saiu no tiro " + (currentShot + 1) + ")";
            resultado.style.color = "red";
            status.textContent = "Fim do jogo! Você perdeu após " + (currentShot + 1) + " tiros.";
            status.style.color = "red";
            currentShot = 6; // Fim do jogo
        } else {
            resultado.textContent = "Você sobreviveu ao tiro " + (currentShot + 1) + "! (Sem bala)";
            resultado.style.color = "green";
            status.textContent = "Prepare-se para o próximo tiro...";
            status.style.color = "black";
        }

        currentShot++; // Avança para o próximo tiro
    } else {
        resultado.textContent = "O jogo acabou! Você perdeu em todos os tiros.";
        resultado.style.color = "red";
        status.textContent = "Clique em 'Dar Tiro' para reiniciar.";
        status.style.color = "black";
        resetJogo(); // Reinicia o jogo
    }
}

// Função para resetar o jogo após todos os tiros
function resetJogo() {
    chamber = [false, false, false, false, false, false]; // Reinicia as câmaras
    currentShot = 0; // Reinicia o contador de tiros
    balaFatal = Math.floor(Math.random() * 6); // Escolhe aleatoriamente uma nova câmara para a bala fatal
}

