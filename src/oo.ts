class Pessoa {
    nome: string;
    renda?: number;

    constructor(nome: string, renda?: number) {
        this.nome = nome;
        this.renda = renda;
    }

    dizOla(): string
    {
        return `${this.nome} diz oi`
    }
}

class ContaBancaria {
    protected saldo: number = 0
    public numeroConta: number;

    constructor(numeroConta: number) {
        this.numeroConta = numeroConta
    }

    getSaldo() {
        return this.saldo
    }

    depositar(valor: number) {
        this.saldo += valor
    }

    static retornaNumeroBanco() {
        return 125
    }
}

class ContaPF extends ContaBancaria {
    depositar(valor: number): void {
        this.saldo = valor *2
    }
}

const contaPedro = new ContaPF(123456)

