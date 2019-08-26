interface Carro {
    readonly motor: String;
    portas: Number;
    combustivel: String;
    cor: String;
    airBag?: Boolean;
}

let fusca: Carro = { motor: "1300", portas: 2, combustivel: "Gasolima", cor: "Preto" }