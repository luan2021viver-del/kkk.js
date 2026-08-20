import java.util.Scanner;

public class Exerciciosjava  {

    public static void main(String[] args) {

        Scanner tc = new Scanner(System.in);

        int A, B;
        int nascimento;
        int idade;
        int num;
        int antecessor;
        int sucessor;
        double media;

        System.out.print("Qual o primeiro numero? ");
        A = tc.nextInt();

        System.out.print("Qual o segundo numero? ");
        B = tc.nextInt();

        if (A > B) {
            System.out.println("A é o maior numero.");
        } else if (B > A) {
            System.out.println("B é o maior numero.");
        } else {
            System.out.println("Os números são iguais.");
        }

        media = (A + B) / 2.0;
        System.out.println("A média entre eles é: " + media);

        System.out.print("Qual o seu ano de nascimento? ");
        nascimento = tc.nextInt();

        idade = 2026 - nascimento;
        System.out.println("A sua idade é: " + idade);

        System.out.print("Escolha um numero: ");
        num = tc.nextInt();

        antecessor = num - 1;
        sucessor = num + 1;

        System.out.println("O antecessor de " + num + " é: " + antecessor);
        System.out.println("O sucessor de " + num + " é: " + sucessor);

        if (num % 2 == 0) {
            System.out.println("O número " + num + " é PAR.");
        } else {
            System.out.println("O número " + num + " é ÍMPAR.");
        }
    
    }
}
