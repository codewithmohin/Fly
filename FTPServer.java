import java.net.*;
import java.io.*;

public class FTPServer {

    public static void main(String[] a) throws Exception {

        ServerSocket ss = new ServerSocket(6000);
        System.out.println("Server started... Waiting for client");

        Socket s = ss.accept();

        BufferedReader br = new BufferedReader(
                new InputStreamReader(s.getInputStream())
        );

        System.out.println("Received: " + br.readLine());

        s.close();
        ss.close();
    }
}