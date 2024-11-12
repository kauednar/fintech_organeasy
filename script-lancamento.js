// script-lancamento.js

// Seleciona os botões de "Entradas" e "Saídas"
const entradaButton = document.getElementById('entradaButton');
const saidaButton = document.getElementById('saidaButton');
const submitButton = document.querySelector('.submit-button');

// Alterna o estilo ativo entre os botões
entradaButton.addEventListener('click', () => {
    entradaButton.classList.add('active');
    saidaButton.classList.remove('active');
    submitButton.textContent = 'Adicionar entrada';
});

saidaButton.addEventListener('click', () => {
    saidaButton.classList.add('active');
    entradaButton.classList.remove('active');
    submitButton.textContent = 'Adicionar saída';
});
