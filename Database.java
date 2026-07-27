import java.sql.Connection;
import java.sql.DriverManager;

public class Database {

    public static void main(String[] args) {

        try {

            Connection con = DriverManager.getConnection(
                "jdbc:mysql://localhost:3306/restaurant_db",
                "root",
                "YOUR_PASSWORD"
            );

            System.out.println("Database Connected Successfully");

            con.close();

        } catch(Exception e) {

            System.out.println("Connection Failed");
            System.out.println(e);

        }

    }

}