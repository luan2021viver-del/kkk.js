import java.util.ArrayList;
import java.util.Scanner;

abstract class Professor {

    private static int totalProfessores = 0;

    private String matricula;
    private String nome;
    private int horasSemanais;
    private double salarioBase;

    public Professor(String matricula, String nome, int horasSemanais, double salarioBase) {
        this.matricula = matricula;
        this.nome = nome;
        this.horasSemanais = horasSemanais;
        this.salarioBase = salarioBase;
        totalProfessores++;
    }

    public String getMatricula() {
        return matricula;
    }

    public String getNome() {
        return nome;
    }

    public int getHorasSemanais() {
        return horasSemanais;
    }

    public double getSalarioBase() {
        return salarioBase;
    }

    public static int getTotalProfessores() {
        return totalProfessores;
    }

    public abstract boolean elegivelAfastamento();

    public abstract double calcularSalarioFinal();
}

class ProfessorTitular extends Professor {

    public ProfessorTitular(String matricula, String nome, int horas, double salario) {
        super(matricula, nome, horas, salario);
    }

    public boolean elegivelAfastamento() {
        return getHorasSemanais() >= 20;
    }

    public double calcularSalarioFinal() {
        return getSalarioBase() + 1200;
    }
}

class ProfessorSubstituto extends Professor {

    public ProfessorSubstituto(String matricula, String nome, int horas, double salario) {
        super(matricula, nome, horas, salario);
    }

    public boolean elegivelAfastamento() {
        return getHorasSemanais() > 35;
    }

    public double calcularSalarioFinal() {
        return getSalarioBase();
    }
}

class Universidade {

    private ArrayList<Professor> professores = new ArrayList<>();

    public void adicionarProfessor(Professor professor) {
        professores.add(professor);
    }

    public Professor buscarProfessor(String matricula) {
        for (Professor p : professores) {
            if (p.getMatricula().equals(matricula)) {
                return p;
            }
        }
        return null;
    }

    public boolean removerProfessor(String matricula) {
        Professor p = buscarProfessor(matricula);

        if (p != null) {
            professores.remove(p);
            return true;
        }

        return false;
    }

    public ArrayList<Professor> getProfessores() {
        return professores;
    }
}

public class Principal {

    public static void main(String[] args) {

        Scanner entrada = new Scanner(System.in);
        Universidade universidade = new Universidade();

        int opcao = 0;

        while (opcao != 6) {

            System.out.println("\n===== SISTEMA DE GESTAO ACADEMICA =====");
            System.out.println("1 - Cadastrar Professor");
            System.out.println("2 - Buscar Professor");
            System.out.println("3 - Remover Professor");
            System.out.println("4 - Listar Professores");
            System.out.println("5 - Estatisticas");
            System.out.println("6 - Sair");
            System.out.print("Opcao: ");

            opcao = entrada.nextInt();
            entrada.nextLine();

            if (opcao == 1) {

                System.out.println("\n1 - Professor Titular");
                System.out.println("2 - Professor Substituto");
                System.out.print("Tipo: ");
                int tipo = entrada.nextInt();
                entrada.nextLine();

                System.out.print("Matricula: ");
                String matricula = entrada.nextLine();

                System.out.print("Nome: ");
                String nome = entrada.nextLine();

                System.out.print("Horas semanais: ");
                int horas = entrada.nextInt();

                System.out.print("Salario base: ");
                double salario = entrada.nextDouble();
                entrada.nextLine();

                if (tipo == 1) {
                    universidade.adicionarProfessor(
                        new ProfessorTitular(matricula, nome, horas, salario)
                    );
                    System.out.println("Professor titular cadastrado.");

                } else if (tipo == 2) {
                    universidade.adicionarProfessor(
                        new ProfessorSubstituto(matricula, nome, horas, salario)
                    );
                    System.out.println("Professor substituto cadastrado.");

                } else {
                    System.out.println("Tipo invalido.");
                }

            } else if (opcao == 2) {

                System.out.print("Matricula: ");
                String matricula = entrada.nextLine();

                Professor p = universidade.buscarProfessor(matricula);

                if (p != null) {
                    System.out.println("\nNome: " + p.getNome());
                    System.out.println("Matricula: " + p.getMatricula());
                    System.out.println("Horas: " + p.getHorasSemanais());
                    System.out.println("Salario base: R$ " + p.getSalarioBase());
                    System.out.println("Salario final: R$ " + p.calcularSalarioFinal());
                    System.out.println("Elegivel para afastamento: "
                            + (p.elegivelAfastamento() ? "Sim" : "Nao"));
                } else {
                    System.out.println("Professor nao encontrado.");
                }

            } else if (opcao == 3) {

                System.out.print("Matricula: ");
                String matricula = entrada.nextLine();

                if (universidade.removerProfessor(matricula)) {
                    System.out.println("Professor removido.");
                } else {
                    System.out.println("Professor nao encontrado.");
                }

            } else if (opcao == 4) {

                if (universidade.getProfessores().isEmpty()) {
                    System.out.println("Nenhum professor cadastrado.");
                } else {

                    for (Professor p : universidade.getProfessores()) {
                        System.out.println("\nNome: " + p.getNome());
                        System.out.println("Matricula: " + p.getMatricula());
                        System.out.println("Horas: " + p.getHorasSemanais());
                        System.out.println("Salario final: R$ "
                                + p.calcularSalarioFinal());
                        System.out.println("Elegivel para afastamento: "
                                + (p.elegivelAfastamento() ? "Sim" : "Nao"));
                    }
                }

            } else if (opcao == 5) {

                System.out.println("\n===== ESTATISTICAS =====");
                System.out.println("Total de professores criados: "
                        + Professor.getTotalProfessores());
                System.out.println("Professores cadastrados: "
                        + universidade.getProfessores().size());

            } else if (opcao == 6) {

                System.out.println("Sistema encerrado.");

            } else {
                System.out.println("Opcao invalida.");
            }
        }

        entrada.close();
    }
}
