#Solicitando dados do usuario
temp_fumante = float(input("Tempo como fumante (em anos).....: "))
Valor_d_maco = float(input("valor do maço.....: "))
quantid_d_maco_por_dia = float(input("Quantidade de maços por dia.....: "))

#Calculando o montante
montante_gasto = temp_fumante * 360 * quantid_d_maco_por_dia * Valor_d_maco

#Exibindo o resultado de acordo com 
if montante_gasto < 20000:
    print(f"Com o valor R$ {montante_gasto: .2f}, você poderia ter dado entrada em um carro.")

elif montante_gasto >= 20000 and montante_gasto <= 50000:
    print(f"Com o valor R$ {montante_gasto: .2f}, você poderia ter comprado um carro popular usado.")

else:
    print(f"Com o valor R$ {montante_gasto: .2f}, você poderia ter comprado um carro zero.")
