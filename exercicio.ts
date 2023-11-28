function multiplicador(a: number, b: number): number {
    return a * b
}

function saudacao(nome: string): string {
    return `ola ${nome}`
}

const resultadoMutiplicacao = multiplicador(4, 3)

console.log(resultadoMutiplicacao)

const mensagemOla = saudacao("Pedro")

console.log(mensagemOla)