#trabalhando com matriz 2 x 3 (linha x colunas)
def sorteia_matriz(m) -> None:
    for l in range (2):
        for c in range (3):
            m[l][c] = random.randint(0,9)

def exibe_matriz(m) -> None:
    for l in range (2):
        for c in range (3):
            print(f"{m[l][c]}\t", end="" )
        print()



#-------------- Programa Principal
matriz = [
    [0,0,0],
    [0,0,0]
]

import random
sorteia_matriz(matriz)
exibe_matriz(matriz)
