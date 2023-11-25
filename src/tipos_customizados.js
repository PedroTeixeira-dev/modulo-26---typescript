"use strict";
const alunos = [
    {
        nome: "Carlos",
        curso: ["Front-end", "UX/UI"],
        idade: 27,
    },
    {
        nome: "Ana",
        curso: ["Front-end", "Python"],
        idade: 23
    }
];
alunos.push({
    nome: "julia",
    curso: ["Arqutetura"],
    idade: 29
});
const novoAluno = {
    nome: 'Pedro',
    idade: 25,
};
function exibeAluno(aluno) {
    console.log(aluno.nome);
}
exibeAluno(alunos[1]);
