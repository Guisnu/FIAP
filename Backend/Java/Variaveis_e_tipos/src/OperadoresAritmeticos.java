public class OperadoresAritmeticos {
    public static void main (String[] args){
        int a = 10;
        int b = 3;

        int soma = a + b; // 10 + 3 = 13
        int subtracao = a - b; // 10 - 3 = 7
        int multiplicacao = a * b; // 10 * 3 = 30
        int divisao = a / b; // 10 / 3 = 3 (a divisão de intreiros(int) descarta as casas decimais)
        float divisaof = a / b; // 10 / 3 = 3.0
        int modulo = a % b; // 10 % 3 = 1 (resto da divisão)

        System.out.println("Soma: " + soma);
        System.out.println("Subtração: " + subtracao);
        System.out.println("Multiplicação: " + multiplicacao);
        System.out.println("Divisão: " + divisao);
        System.out.println("Divisão Float: " + divisaof);
        System.out.println("Modulo : " + modulo);
    }
}
