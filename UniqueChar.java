import java.util.HashSet;

public class UniqueChar {
    public static void main(String[] args) {

        String s="developer";
        HashSet<Character> set=new HashSet<>();

        for(char c:s.toCharArray()){
            set.add(c);
        }

        System.out.println(set.size());
    }
}