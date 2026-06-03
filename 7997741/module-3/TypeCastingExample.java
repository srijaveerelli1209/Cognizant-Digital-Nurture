public class TypeCastingExample {
    public static void main(String[] args) {

        // Double to int
        double decimalValue = 25.75;
        int intValue = (int) decimalValue;

        // Int to double
        int number = 50;
        double doubleValue = (double) number;

        // Display results
        System.out.println("Original double value: " + decimalValue);
        System.out.println("After casting to int: " + intValue);

        System.out.println("Original int value: " + number);
        System.out.println("After casting to double: " + doubleValue);
    }
}