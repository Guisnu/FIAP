public class ListaLinearEncadeada {
    //declaração do nó e dos atributos
    private static class NO {
        public int dado;
        public NO prox;
    }

public static void main(String[] args) {
    //inicia lista vazia atribuindo null ao ponteiro lista
    NO lista = null;
        System.out.println("Valor ponteito Lista = " + lista);

    //	um nó é alocado e é inserido na lista
    NO novo = new NO();
    novo.dado = 5;
    novo.prox = lista;
    lista = novo;

    System.out.println("Atribuidos do nó apontado por lista = " + lista.dado + " " + lista.prox);
    }

}