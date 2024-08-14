public class PilhaInt {
    public final int N = 8;
    int[] dados = new int[N];  // Cria um array com 8 posições

    // Método para preencher e imprimir o array
    public void printArray() {
        // Inicializando o array com alguns valores para demonstração
        for (int i = 0; i < dados.length; i++) {
            dados[i] = i * 2;  // Preenche o array com valores de exemplo
        }

        // Imprimindo os valores do array
        for (int i = 0; i < dados.length; i++) {
            System.out.println("dados[" + i + "] = " + dados[i]);
        }
    }

    public static void main(String[] args) {
        PilhaInt pilha = new PilhaInt();
        pilha.printArray();  // Chama o método para imprimir os valores do array
    }
}
