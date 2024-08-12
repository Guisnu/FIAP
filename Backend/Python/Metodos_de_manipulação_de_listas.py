lista = [34,"On", 45.8, False, 99]
print(lista)
# Operação com lista
#   append -> adiciona um item no final
lista.append("novo")
print(lista)
#   insert -> insere um elemento no meio da lista
lista.insert(2, "inserido")
print(lista)
#   pop    -> remove um elemento da lista
lista.pop(3)
print(lista)
#   clear  -> apaga os elementos da lista
lista.clear()
print(lista)
#   del    -> apaga a lista
del(lista)
# del pode também ser usado para remover parte de uma lista
lista_2 = [55,"On", 87.8, False, 65]
del(lista_2[2:5])
print(lista_2)