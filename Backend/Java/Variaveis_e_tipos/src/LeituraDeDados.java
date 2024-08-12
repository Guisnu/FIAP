import java.util.Scanner;



public class LeituraDeDados {
    
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("Digite um número inteiro: ");
        int numeroInteiro = scanner.nextInt();
        System.out.print("Digite um número decimal: ");
        double numeroDecimal = scanner.nextDouble();

        System.out.println("Numero inteiro: " + numeroInteiro);
        System.out.println("Numero decimal: " + numeroDecimal);

        scanner.close();
    }
    
}
