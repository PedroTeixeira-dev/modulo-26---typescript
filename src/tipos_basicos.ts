let estaChovendo: boolean = false

estaChovendo = true

let idade: number = 25

let altura: number = 1.75

const nacionalidade: string = 'brasileiro'

const colegas: string[] = ['lucas', 'fernanda']

const tecnologias: Array<string> = ['js', 'html', 'css']

const notas: ReadonlyArray<number> = [7,9,5,8]

// isso aqui e um tuple. Nele podemos criar arrays com tipos de dados diferentes
const lista: [nome: string, estaEstudando: boolean, idade: number] = ['Pedro', true, 25]

let idadeDaAna: number | string = 25
idadeDaAna = '25 anos'

// cuidado  ao usar o any. Nao use muitas vezes se nao for necessario
let dadosApi: any

dadosApi = 10
dadosApi = true
dadosApi = [1,2,3]
dadosApi = 'string'

// tipagem implicita
let curso = 'front-end'



