// IMPLEMETAÇAO DE CORES -------------------------------------------
// Interface das Cores:
class Cor{
    constructor(cor){
        this.cor = cor;
    }

    obterCor(){
        return this.cor;
    }
}

// Concreta das Cores:
class CorVermelho extends Cor{
    constructor(){
        super("vermelho");
    }
}

class CorAzul extends Cor{
    constructor(){
        super("azul");
    }
}

class CorVerde extends Cor{
    constructor(){
        super("verde");
    }
}

// IMPLEMENTAÇÃO DE FORMAS -----------------------------------------
// Inteface de Formas:
class Formas{
    constructor(cor){
        this.cor = cor;
    }

    setCor(cor){
        this.cor = cor;
    }

    desenho(){
        throw new Error("Este metodos precisa ser implementado")
    }
}

// Abstração Refinada:
class Circulo extends Forma{
    desenho(){
        console.log(`Desenhando um circulo ${this.cor.obterCor()}`)
    }
}

class Quadrado extends Forma{
    desenho(){
        console.log(`Desenhando um quadrado ${this.cor.obterCor()}`)
    }
}

class Triangulo extends Forma{
    desenho(){
        con
    }
}

// CLIENTE ---------------------------------------------------------
const vermelho = new CorVermelho();
const azul = new CorAzul();
const verde = new CorVerde();

const estrutura1 = new Circulo(vermelho);
const estrutura2 = new Circulo(verde);
const estrutura3 = new Circulo(azul);
const estrutura4 = new Circulo(vermelho);
const estrutura5 = new Quadrado(verde);
const estrutura6 = new Triangulo(azul);

estrutura1.desenho();
estrutura2.desenho();
estrutura3.desenho();
estrutura4.desenho();
estrutura5.desenho();
estrutura6.desenho();