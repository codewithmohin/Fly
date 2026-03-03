import java.net.*;
import java.io.*;

public class FTPClient {

    public static void main(String[] a) throws Exception {

        Socket s = new Socket("localhost", 6000);

        PrintWriter pw = new PrintWriter(
                s.getOutputStream(), true
        );

        pw.println("File data sent...");

        s.close();
    }
}