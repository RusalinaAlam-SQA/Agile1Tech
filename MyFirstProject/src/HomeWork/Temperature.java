package HomeWork;

import java.util.Scanner;

public class Temperature {

	public static void main(String[] args) {
		
		
		Scanner sc= new Scanner(System.in);
		int farenhite_temperature;
		System.out.println("Enter Farenhite Temperature");
		farenhite_temperature= sc.nextInt();
		double Celsius_temperature = (farenhite_temperature-32)*5/9;
		System.out.println("Celsius Temperature is........."+Celsius_temperature);

	}

}