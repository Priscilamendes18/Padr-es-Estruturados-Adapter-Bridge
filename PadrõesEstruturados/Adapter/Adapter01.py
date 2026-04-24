# Interface do Cliente
class Target:
    def request(self):
        pass

# Cliente
class Cliente:
    def __init__(self, target):
        self.target = target

    def criarRequest(self):
        print("Cliente fazendo uma requisição")
        self.target.request()

# Serviço Existente:
class Adaptee:
    def requestEspecifico(self):
        print("Requisição Específica do Adaptee")

# Adaptador
class Adapter:
    def __init__(self, adaptee):
        self.adaptee = adaptee

    def request(self):
        self.adaptee.requestEspecifico()

# Utilização do Adaptador:
adaptee = Adaptee()
adapter = Adapter(adaptee)
cliente = Cliente(adapter)

cliente.criarRequest()