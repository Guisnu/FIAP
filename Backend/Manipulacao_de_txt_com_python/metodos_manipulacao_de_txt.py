with open("Manipulacao_de_txt/arquivo.txt","w+") as arq:
    # Criando uma lista cujos itens serão linhas
    lista = ["Gravando\n", "varias\n", "linhas\n", "através de lista\n"]
    
    # Grava a lista no arquivo
    arq.writelines(lista)
    
    # Posicionando o cursor na posição zero do arquivo
    arq.seek(0)
    
    # Exibindo o arquivo
    print(arq.read())