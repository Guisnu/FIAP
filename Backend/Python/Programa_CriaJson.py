import json

# Criando o dicionário de nome 'pessoas'
pessoas = {
    'pessoa1':{
        'nome': 'Guilherme',
        'idade': 19,
        'email': 'guilherme.nunes@fiap.com.br'
    },
    'pessoa2':{
        'nome': 'Jose',
        'idade': 23,
        'email': 'jose@fiap.com.br'
    },
    'pessoa3': {
        'nome': 'Maria',
        'idade': 29,
        'email': 'maria@fiap.com.br'
    },
}

pessoas_json = json.dumps(pessoas, indent=4) 
# Exibindo as estruturas
print("Exibição do dicionário: ")
print(pessoas)
print("\nExibição do objeto JSON: ")
print(pessoas_json)

with open("Manipulacao_de_txt/arquivo.json","w") as file:
    file.write(pessoas_json)