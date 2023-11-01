let salarioCartaProposta = parseFloat(prompt("Digite o salário do colaborador apresentado na carta proposta: " + "\n *Apresente a víngula como ponto(.)"))

let quebraSessenta = salarioCartaProposta / 1.4

let quebraQuarenta = (quebraSessenta.toFixed(2)) * 0.40

// // Converte a variável quebraSessenta para um número
// quebraSessenta += 0.01;

const quebraSessentaNumero = parseFloat(quebraSessenta);
const quebraQuarentaNumero = parseFloat(quebraQuarenta);

const quebraSessentaFormatada = quebraSessentaNumero.toFixed(2);
const quebraQuarentaFormatada = quebraQuarentaNumero.toFixed(2);

// // Soma as quebras formatadas
const resultadoSoma = (quebraSessentaNumero + quebraQuarentaNumero).toFixed(2);

console.log("Quebra Sessenta: " + quebraSessentaFormatada);
console.log("Quebra Quarenta: " + quebraQuarentaFormatada);
console.log("Soma das Quebras: " + resultadoSoma);
