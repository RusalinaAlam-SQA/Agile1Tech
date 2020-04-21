package HomeWork;

import java.util.Scanner;

public class Practice {

	public static void main(String[] args) {
		 
					
					boolean t;
					t = true;
					
					boolean f;
					f = false;
					
					//System.out.println(t);
					
					//System.out.println(f);
					
					
					int carprice =0; 
					int adminfee; 
					double interest=0; 
					double tax=0; 
					double totalprice;
					
					interest=(carprice*0/100);
					tax=(carprice*6/100);
					
					
					Scanner sc = new Scanner(System.in);
					System.out.println("Enter car price");
					carprice =sc.nextInt(); 
					System.out.println("Enter admin  fee");
					adminfee = sc.nextInt(); 
					System.out.println("Enter interest");
					interest = sc.nextInt();  
					System.out.println("Enter tax");
					tax = sc.nextInt(); 
					
					
				 
					
					totalprice = carprice + adminfee + interest+ tax; 
					System.out.println("Total price of the car");
					System.out.println(totalprice);
					
					double monthlypayment; 
					
					monthlypayment = totalprice/72;
					
					System.out.println("Your monthly payment is ...");
					System.out.println(monthlypayment);

				}

			

	}


