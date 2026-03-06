import java.util.Random;

public class Guess {
    public static void main(String[] args) {

        Random r=new Random();
        int secret=r.nextInt(100);

        int guess=50;

        if(guess==secret)
            System.out.println("Correct");
        else
            System.out.println("Try again");
    }
}