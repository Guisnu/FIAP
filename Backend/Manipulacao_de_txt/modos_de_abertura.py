arq = open("Manipulacao_de_txt/arquivo.txt", "w+") # a = append (adicionar)
arq.writelines(
    [
        "linha1\n"
        "linha2\n"
        "linha3\n"
    ]
)
arq.seek(0)
print(arq.read())
arq.close()