avaliacoes = [0,0,0,0,0,0,0,0,0,0]

def notas_das_avalicoes(a) -> None:
    for i in range (0,10,1):
        a[i] = float(input(f"Avaliação {i + 1}..: "))
    print(f"A ultima nota do aluno foi {a[9]}")

def exibe_notas(a) -> None:
    for i in range(0,10,1):
        print(f"A avaliação numero {i + 1} =  {a[i]}")

def calculo_da_media(a) -> int:
    soma = 0
    for i in range (0,10,1):
        soma += a[i]
    media = soma / 10
    return media


#--------- Programa Principal
notas_das_avalicoes(avaliacoes)
exibe_notas(avaliacoes)
print(f"A media do aluno é: {calculo_da_media(avaliacoes)}")
