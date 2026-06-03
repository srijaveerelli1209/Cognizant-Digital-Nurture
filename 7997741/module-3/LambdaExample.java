import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class LambdaExample {
    public static void main(String[] args) {

        List<String> names = new ArrayList<>();

        names.add("Srija");
        names.add("Rahul");
        names.add("Priya");
        names.add("Ankit");
        names.add("Neha");

        // Sort using lambda expression
        Collections.sort(names, (a, b) -> a.compareTo(b));

        System.out.println("Sorted List:");

        for (String name : names) {
            System.out.println(name);
        }
    }
}