// Factorial

public class FactorialTest {
    public static void main(String[] args) { // Needed so we can run our file
        System.out.println(factorial(-4));
        System.out.println(factorial(0));
    }

    public static int factorial(int n) {
        int product = 1;
        if (n == 0 || n < 0 ) {
            product = 0;
        }
        for (int i =1; i <= n; i++) {
            product *= i;
        }
        return product;
    }
}
