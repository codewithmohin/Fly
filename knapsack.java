import java.util.*;
class Item implements Comparable<Item> {
    int w, v;
    double r;
    Item(int w, int v) { this.w = w; this.v = v; r = (double)v/w; }
    public int compareTo(Item o) { return Double.compare(o.r, r); }
}

public class knapsack{
    public static void main(String[] args) {
        int W = 50;
        Item[] items = {new Item(10, 60), new Item(20, 100), new Item(30, 120)};
        Arrays.sort(items);
        int v = 0;
        for (Item i : items) {
            if (W >= i.w) { W -= i.w; v += i.v; }
            else { v += W * i.r; break; }
        }
        System.out.println("Max Value: " + v);
    }
}