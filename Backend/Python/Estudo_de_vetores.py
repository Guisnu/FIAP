#inicializando um vetor
vetor = [34, 67, 43, 44, 12]

#chamando vetor
print(vetor)

#chamando vetor apartir do indice
print(vetor[4])

#Prenchendo um vetor
for i in range (5):
    vetor[i] = input("Digite um valor: ")
print(vetor)

# Mostrando o vetor
for i in range(5):
    print(f"Posição [{i}] = {vetor[i]}")