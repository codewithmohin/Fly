import java.util.Scanner;

public class CRC {

    private static String modulo2Division(String dividend, String divisor) {   
        char[] remainder = dividend.toCharArray();
        int divisorLength = divisor.length();

        for (int i = 0; i <= remainder.length - divisorLength; i++) {
            if (remainder[i] == '1') {
                for (int j = 0; j < divisorLength; j++) {
                    remainder[i + j] = (remainder[i + j] == divisor.charAt(j)) ? '0' : '1';
                }
            }
        }

        return new String(remainder).substring(remainder.length - divisorLength + 1);
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        try {
            System.out.print("Enter dataword (binary): ");
            String data = sc.nextLine().trim();
            if (!data.matches("[01]+")) {
                System.out.println("Invalid input. Only binary digits (0/1) allowed.");
                return;
            }

            System.out.print("Enter generator polynomial (binary): ");
            String generator = sc.nextLine().trim();
            if (!generator.matches("[01]+") || generator.charAt(0) != '1') {
                System.out.println("Invalid generator. Must be binary and start with 1.");
                return;
            }

            String appendedData = data + "0".repeat(generator.length() - 1);
            String crc = modulo2Division(appendedData, generator);
            String transmittedData = data + crc;

            System.out.println("CRC bits: " + crc);
            System.out.println("Transmitted frame: " + transmittedData);

            String remainder = modulo2Division(transmittedData, generator);
            if (remainder.equals("0".repeat(generator.length() - 1))) {
                System.out.println("No error detected in received data.");
            } else {
                System.out.println("Error detected in received data!");
            }

        } catch (Exception e) {
            System.out.println("An error occurred: " + e.getMessage());
        } finally {
            sc.close();
        }
    }
}