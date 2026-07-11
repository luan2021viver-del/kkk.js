#include <stdio.h>

void exibirArray(int arr[], int tam);
void bubbleSort(int arr[], int tam);
int buscaBinaria(int arr[], int tam, int alvo);

int main() {
    int pedidos[] = {47, 12, 83, 5, 29, 61, 74, 38};
    int tam = 8;
    int alvo, buscas = 0;

    printf("=== Byte Burger ===\n");

    printf("Recebidos: ");
    exibirArray(pedidos, tam);

    // Ordena os pedidos para permitir a busca binaria
    bubbleSort(pedidos, tam);

    printf("Ordenados: ");
    exibirArray(pedidos, tam);

    // Loop para interacao  de busca do pedido com o usuario
    while (1) {
        printf("Pedido (0 = sair): ");
        scanf("%d", &alvo);
        // Verifica condicao de saida antes de contar a busca
        if (alvo == 0) {
            printf("Saindo do sistema Byte Burger...\n\n");
                  break;
        }
        
        
        
        
        buscas++;
        // Executa a busca no array/vetor ordenado ordenado
        int pos = buscaBinaria(pedidos, tam, alvo);
        if (pos != -1)
            printf("Pedido %d encontrado na posicao %d.\n", alvo, pos);
        else
            printf("Pedido %d nao encontrado.\n", alvo);
    }

    printf("%d busca(s) realizada(s).\n", buscas);

    return 0;
}

// Mostrar todos os elementos do array/vetor na tela
void exibirArray(int arr[], int tam) {
    for (int i = 0; i < tam; i++)
        printf("%d ", arr[i]);
    printf("\n");
}

void bubbleSort(int arr[], int tam) {
    int i, j, temp;

    for (i =0; i < tam -1;i++) {
        for (j =0; j< tam -1 -i;j++) {
            if (arr[j] > arr[j +1]) {
                 temp = arr[j];
                arr[j] = arr[j+  1];
                arr[j+ 1] = temp;
            }
        }
    }
}

// Realiza a busca dividindo o espaco de busca pela metade
int buscaBinaria(int arr[], int tam, int alvo) {
    int inicio =0, fim = tam   -1;

    while (inicio <= fim) {
        int meio = (inicio + fim)/2;
        if (arr[meio] == alvo)
             return meio;
             
             
        else if (arr[meio] < alvo)
            inicio = meio  +1;
         else
            fim = meio -1;
    }

    return -1;
}
