try:
    n1 = float(input("digite um numero..: "))
    n2 = float(input("dgite um numero..: "))
    Divisão = n1 / n2

except ValueError:
    print("Voce não digitou um numero valido")

except ZeroDivisionError:
    print("Não é possivel dividir por zero")
except:
    print("Chame o responsavel pelo desenvolvimento do aplicativo")
else:
    print(Divisão)