def preencher_contato(c: dict) -> None:
    print("PREENCHENDO CONTATO")
    c['nome'] = input("Digite seu nome...: ")
    c['celular'] = input("Digite seu contato...: ")

def exibe_contato(c: dict) -> None:
    print("PREENCHENDO CONTATO")
    print(f"Nome......: {c['nome']}")
    print(f"contato...: {c['celular']}")

#----------- Programa Principal
contato = dict()

preencher_contato(contato)
exibe_contato(contato)