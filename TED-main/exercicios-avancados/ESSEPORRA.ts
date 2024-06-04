import { cliente, paciente } from './cu.js';

const CG: paciente[] = []; // Clínico Geral
const CL: paciente[] = []; // Cardiologia
const OP: paciente[] = []; // Ortopedia

function prioridadeValor(prioridade: String): number {
    switch (prioridade.toLowerCase()) {
        case 'emergencia':
            return 1;
        case 'urgente':
            return 2;
        case 'preferencial':
            return 3;
        case 'comum':
            return 4;
        default:
            return 0; // Erro
    }
}

function adicionar_cliente() {
    let tamanho = cliente.length; // Tamanho da array cliente

    // Ordena o array de clientes com base na prioridade
    cliente.sort((a, b) => prioridadeValor(a.Prioridade) - prioridadeValor(b.Prioridade));

    for (let a = 0; a < tamanho; a++) {
        // Analiza a especialidade do paciente e adiciona ele em uma das arrays
        if (cliente[a].Especialista.toLowerCase() == 'clinico geral') {
            CG.push(cliente[a]);
        } else if (cliente[a].Especialista.toLowerCase() == 'cardiologia') {
            CL.push(cliente[a]);
        } else if (cliente[a].Especialista.toLowerCase() == 'ortopedia') {
            OP.push(cliente[a]);
        }
    }
}

// Chama a função adicionar_clientes
adicionar_cliente();

// Mostra os resultados
console.log('\nClínico Geral:', CG);
console.log('\nCardiologia:', CL);
console.log('\nOrtopedia:', OP);