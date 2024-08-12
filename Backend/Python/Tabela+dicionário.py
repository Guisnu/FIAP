def preenche_registro(t: list, reg: dict) -> None:
    print("PREENCHIMENTO DO REGISTRO")
    reg['nome'] = input("Nome.....: ")
    reg['celular'] = input("Celular.....: ")
    t.append(reg.copy())

def exibe_tabela(t: list) -> None:
    qtd_registros = len(t)# conta a quantidade de registros
    for indice in range (qtd_registros):
        exibe_registros(t,indice)

def exibe_registros(t: list, i:int) -> None:
    print(f"REGISTRO {i}:")
    print(f"Nome.....: {t[i]['nome']}")
    print(f"celular..: {t[i]['celular']}")

# ------------- PROGRAMA PRINCIPAL
tabela = list()
contato = dict()

while True:
    print('''
    0 - Fim
    1 - Preencher Registro
    2 - Exibir registros
''')
    
    opcao = int(input("Digite a opção desejada: "))
    match opcao:
        case 0:
            break
        case 1:
            preenche_registro(tabela, contato)# Prenche registro
        case 2:
            exibe_tabela(tabela)# Exibe registros
        case _:
            print("opção inválida")