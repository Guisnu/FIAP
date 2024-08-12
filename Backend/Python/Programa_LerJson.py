import json

with open("Manipulacao_de_txt/arquivo.json","r+") as file:
    pessoas_json = file.read()
    print(pessoas_json) # Forma como o arquivo está salvo
    pessoas_json = json.loads(pessoas_json)
    print(pessoas_json) # Imprime da forma Bruta do arquivo
    
for k, v in pessoas_json.items():
    print(f"{k}..........:")
    for k1, v1 in v.items():
        print("\t" + k1 + ":" + str(v1)) 