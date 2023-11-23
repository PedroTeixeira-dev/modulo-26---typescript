type aluno = {
    nome: string;
    curso?: string[];
    idade: number;
}

const alunos: aluno[] = [
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
]

alunos.push({
    nome: "julia",
    curso: ["Arqutetura"],
    idade: 29
})

const novoAluno: aluno = {
    nome: 'Pedro',
    idade: 25,
}

function exibeAluno(aluno: aluno) {
    console.log(aluno.nome)
}