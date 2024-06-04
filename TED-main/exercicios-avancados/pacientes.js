
export interface paciente {
    Nome: String,
    Idade: number,
    Especialista: String,
    Prioridade: String,
}

export const cliente: paciente[] = [
    {
        Nome: 'Paciente1',
        Idade: 23,
        Especialista: 'ortopedia',
        Prioridade: 'emergencia',
    },
    {
        Nome: 'Paciente2',
        Idade: 69,
        Especialista: 'cardiologia',
        Prioridade: 'preferencial',
    },
    {
        Nome: 'Paciente3',
        Idade: 9,
        Especialista: 'clinico geral',
        Prioridade: 'urgente',
    },
    {
        Nome: 'Paciente4',
        Idade: 12,
        Especialista: 'ortopedia',
        Prioridade: 'comum',
    },
    {
        Nome: 'Paciente5',
        Idade: 52,
        Especialista: 'cardiologia',
        Prioridade: 'urgente',
    },
    {
        Nome: 'Paciente6',
        Idade: 19,
        Especialista: 'clinico geral',
        Prioridade: 'emergencia',
    },
];























// EXERCÍCIOS AVANÇADOS

// 2. Imagine que você está em um consultório médico
// e precisa controlar o fluxo de pacientes que chegam e para onde eles vão.

// Quando um paciente chega, ele escolhe que médico deseja consultar.
// - Clínico Geral
// - Ortopedista
// - Cardiologista

// Selecionado o setor do médico, o paciente é encaminhado para a fila de triagem
// Onde TODOS os pacientes aguardam a sua vez para receberem um diagnóstico preliminar podendo ser:
// - comum
// - preferencial
// - urgente
// - emergência
// Sendo que a ordem de atendimento é:
// - emergência
// - urgente
// - preferencial/cu
// - comum

// Então se temos uma fila de triagem com pacientes com:
// [preferencial, comum, comum]
// E chega um paciente com "comum", ele vai para trás da fila em ordem de prioridade
// [preferencial, urgente, comum, comum]

// Chegando a vez do paciente, ele é encaminhado para a sala de consulta
// Onde espera o médico chamar

// O médico então faz a consulta e dá o diagnóstico final



// Crie um sistema que simule esse fluxo de pacientes
