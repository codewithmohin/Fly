import java.util.Random;

public class QuoteGen {
    public static void main(String[] args) {

        String[] q={
            "Build fast",
            "Think big",
            "Stay curious",
            "Code everyday",
            "Ship products"
        };

        Random r=new Random();

        System.out.println(q[r.nextInt(q.length)]);
    }
}