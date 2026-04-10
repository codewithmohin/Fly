import java.util.*;

class E implements Comparable<E> {
    int u, v, w;

    E(int u, int v, int w) {
        this.u = u;
        this.v = v;
        this.w = w;
    }

    public int compareTo(E o) {
        return Integer.compare(w, o.w);
    }
}

public class kruskal {
    static int[] p;

    static int f(int x) {
        return p[x] == x ? x : (p[x] = f(p[x]));
    }

    static void u(int x, int y) {
        p[f(x)] = f(y);
    }

    static void k(int n, List<E> e) {
        p = new int[n];
        for (int i = 0; i < n; i++)
            p[i] = i;

        Collections.sort(e);

        for (E x : e) {
            if (f(x.u) != f(x.v)) {
                System.out.println(x.u + "-" + x.v + ":" + x.w);
                u(x.u, x.v);
            }
        }
    }

    public static void main(String[] a) {
        List<E> e = Arrays.asList(
                new E(0, 1, 2),
                new E(0, 3, 6),
                new E(1, 2, 3),
                new E(1, 3, 8),
                new E(1, 4, 5),
                new E(2, 4, 7),
                new E(3, 4, 9)
        );
        k(5, e);
    }
}