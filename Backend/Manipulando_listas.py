# ----- SUBALGORITMOS
# Preenchendo a lista até que seja digitado .
def preenche_lista(l: list) -> None:
    # Solicita ao usuário a digitação de algo
    algo = input("Digite algo: ")
    # Verifica se não digitou ponto
    while algo != '.':
        # Adiciona o elemento na lista
        l.append(algo)
        # Solicita ao usuário uma nova digitação
        algo = input("Digite algo: ")

# Exibindo a lista da forma clássica
def exibe_lista_forma1(l: list) -> None:
    for elem in range(0, len(l), 1):
        print(l[elem])

# Exibindo a lista decom recursos do Python
def exibe_lista_forma2(l: list) -> None:
    for elem in l:
        print(elem)

# ----- PROGRAMA PRINCIPAL
# inicia a lista vazia
lista = list()
# Preenche a lista até que seja digitado '.'
preenche_lista(lista)
# Exibe a lista Bruta
print(lista)
# Exibe a lista da forma 1
print("Forma 1:")
exibe_lista_forma1(lista)
# Exibe a lista da forma 2
print("Forma 2:")
exibe_lista_forma2(lista)