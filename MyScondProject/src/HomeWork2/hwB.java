package HomeWork2;

import java.util.Scanner;

public class hwB {

	public static void main(String[] args) {
		
		Scanner sc= new Scanner(System.in);
		
		
		System.out.println("Enter Temperature:");
		
		int temperature= sc.nextInt();
		
		boolean tmp1= (temperature>100);
		boolean tmp2=(temperature==100);
		boolean tmp3= (temperature<100 ||temperature>60);
		
		if (tmp1) {
			
			System.out.println("It's crazy hot!");
		}
		
      if(tmp2) {
    	  System.out.println("It's Still hot!"); 
      }
	if (tmp3) {
		System.out.println("It's Comfortable");
	}
	
	
	
	
	}

}
