// Dados de entrada
// x = duração do vídeo (em minutos)
// y = número de visualizações
let duracao = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let visualizacoes = [100, 140, 180, 210, 250, 340, 300, 310, 320, 330, 270];

// Quantidade de pontos
let n = duracao.length;

// Variáveis auxiliares
let somaX = 0;
let somaY = 0;
let somaXY = 0;
let somaX2 = 0;

// 1. Somatórios
for (let i = 0; i < n; i++) {
    somaX += duracao[i];
    somaY += visualizacoes[i];
    somaXY += duracao[i] * visualizacoes[i];
    somaX2 += duracao[i] * duracao[i];
}

// 2. Cálculo da reta (a e b)
let a = (n * somaXY - somaX * somaY) / (n * somaX2 - somaX * somaX);
let b = (somaY - a * somaX) / n;

// 3. Cálculo do R²
let mediaY = somaY / n;

let sqTotal = 0;
let sqRes = 0;

for (let i = 0; i < n; i++) {
    let yEstimado = a * duracao[i] + b;

    sqTotal += Math.pow(visualizacoes[i] - mediaY, 2);
    sqRes += Math.pow(visualizacoes[i] - yEstimado, 2);
}

let r2 = 1 - (sqRes / sqTotal);

// 4. Resultado
console.log("Relação entre duração e visualizações:");
console.log("R² = " + r2.toFixed(4));