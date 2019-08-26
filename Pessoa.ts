class Pessoa {
    private nome: String;
    idade: Number;

    constructor(nome: String) {
        this.nome = nome;
    }

    public get _nome(): String {
        return this.nome;
    }
    // public get _idade() Number {
    //     return this.idade;
    // }

    public set _nome(nome: String) {
        this.nome = nome;
    }

    // Number = 0 => seta 0 como default
    alterarIdade(idade: Number = 0): void {
        this.idade = idade;
    }
}

class Segurado extends Pessoa {
    constructor(nome: String) {
        super(nome);
    }

    alterarIdade(idade: Number = 15) {
        console.log("Idade: " + idade);
        super.alterarIdade(18);
    }
}

