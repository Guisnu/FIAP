
def prencher_vetor(v) -> None:
    
    for i in range (5):
        v[i] = int(input("Digite um valor: "))
    print(v)

def exibir_vetor(v) -> None:
    for i in range(5):
        print(f"Posição [{i}] = {vetor[i]}")

def somar_vetor (v) -> int:
    #somando valores
    soma = 0
    for i in range (5):
        soma += v[i]
    return soma

#---- PROGRAMA RPINCIPAL
vetor = [34, 67, 43, 44, 12]

prencher_vetor(vetor)
exibir_vetor(vetor)
print(somar_vetor(vetor))