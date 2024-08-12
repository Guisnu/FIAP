# tupla é uma lista que não pode ter seu valor modificado
tupla = (12, 56, "@", True)

lista = list(tupla)
#acessando
print(lista)
print(tupla)
lista[0] =  "modificado"
print(lista)
tupla = tuple(lista)
print(tupla)