#Sintaxe
#<objeto_python> = open(<arquivo_fisico>, <modo de abertura>)

arq = open("Manipulacao_de_txt/arquivo.txt", "w") # w = write

arq.write("Estamos na fase de leitura e gravacao\n")
arq.write("Nesta turma da FIAP\n")
arq.write("Todos os alunos voam!\n")

arq.close()

arq = open("Manipulacao_de_txt/arquivo.txt", "r") # r = read (leitura)
print(arq.read())

arq.close()