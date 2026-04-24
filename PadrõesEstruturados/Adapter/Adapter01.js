// Interface do Cliente
class Taregt{
    
    request(){
    }
}

// Cliente
class Cliente{
    constructor(taregt){
        this.taregt = taregt;
    }

    criarRequest(){
        console.log("Cliente Fazendo Uma Requisição...")
    }
}

// Serviço Existente
class Adaptee{
    requestEspecifico(){
        console.log("Requisição Específica do Adaptee...")
    }
}

// Adaptador
class Adapter{
    constructor(adaptee){
        this.adaptee = adaptee;
    }

    request(){
        this.adaptee.requestEspecifico();
    }
}

// Uso do Adaptador:
const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);
const cliente = new Cliente(adapter);

cliente.criarRequest();