"use strict";
class Pessoa {
    constructor(nome, renda) {
        this.nome = nome;
        this.renda = renda;
    }
    dizOla() {
        return `${this.nome} diz oi`;
    }
}
class ContaBancaria {
    constructor(numeroConta) {
        this.saldo = 0;
        this.numeroConta = numeroConta;
    }
    getSaldo() {
        return this.saldo;
    }
    depositar(valor) {
        this.saldo += valor;
    }
    static retornaNumeroBanco() {
        return 125;
    }
}
class ContaPF extends ContaBancaria {
    depositar(valor) {
        this.saldo = valor * 2;
    }
}
const contaPedro = new ContaPF(123456);
