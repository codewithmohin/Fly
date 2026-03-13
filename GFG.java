import java.util.ArrayList;

public class GFG {

    public static ArrayList<ArrayList<Integer>> findInOutDegree(ArrayList<ArrayList<Integer>> adj) {

        int V = adj.size();
        int[] inDegree = new int[V];
        int[] outDegree = new int[V];

        for (int i = 0; i < V; i++) {

            outDegree[i] = adj.get(i).size();

            for (int v : adj.get(i)) {
                inDegree[v]++;
            }
        }

        ArrayList<ArrayList<Integer>> result = new ArrayList<>();

        for (int i = 0; i < V; i++) {
            ArrayList<Integer> temp = new ArrayList<>();
            temp.add(inDegree[i]);
            temp.add(outDegree[i]);
            result.add(temp);
        }

        return result;
    }

    public static void addEdge(ArrayList<ArrayList<Integer>> adj, int u, int v) {
        adj.get(u).add(v);
    }

    public static void main(String[] args) {

        int V = 7;

        ArrayList<ArrayList<Integer>> adj = new ArrayList<>();

        for (int i = 0; i < V; i++) {
            adj.add(new ArrayList<>());
        }

        addEdge(adj, 0, 1);
        addEdge(adj, 2, 1);
        addEdge(adj, 2, 6);
        addEdge(adj, 3, 2);
        addEdge(adj, 4, 2);
        addEdge(adj, 4, 3);
        addEdge(adj, 5, 4);
        addEdge(adj, 5, 6);

        ArrayList<ArrayList<Integer>> degrees = findInOutDegree(adj);

        System.out.println("Vertex\tIn\tOut");

        for (int i = 0; i < V; i++) {
            System.out.println(i + "\t" + degrees.get(i).get(0) + "\t" + degrees.get(i).get(1));
        }
    }
}