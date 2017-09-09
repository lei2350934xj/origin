import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Problem2 {
    static Scanner scanner;
    public static void main(String[] args) {
        scanner = new Scanner(System.in);
        int N = scanner.nextInt();
        for (int times = 0; times < N; times++) {
            boolean result = isOk();
            if (result) {
                System.out.println("Yes");
            } else {
                System.out.println("No");
            }
        }
        scanner.close();
    }

    public static boolean isOk() {
        int n = scanner.nextInt();
        int fourCount = 0;
        int towCount = 0;
        for (int i = 0; i < n; i++) {
            int a = scanner.nextInt();
            if (a % 4 == 0) {
                fourCount++;
            }
            if (a % 2 == 0 && a % 4 != 0) {
                towCount++;
            }
        }
        if(fourCount + towCount / 2 >= n / 2){
            return true;
        }

        return false;
    }

}