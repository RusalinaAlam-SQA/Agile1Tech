package HomeWork;

import java.util.Scanner;

public class CarPriceCal {

	
	public static void main(String[] args) {
		int baseprice;
		int downpayment;
		int adminfee;
		double tax;
		double interest;
		double monthlypayment;
		double totalPrice;
		int durationofTime;
		 
		 
		/*baseprice= 30000;
		downpayment = 4000;
		adminfee= 1000;
		tax = (baseprice)*7/100;
		interest=(baseprice-downpayment)*3/100;
		monthlypayment=((baseprice-downpayment)*3/100/60);*/
		
		Scanner sc = new Scanner(System.in);
	
		System.out.println("Please enter the base price: ");
		baseprice = sc.nextInt();
		System.out.println("Please enter the down payment: ");
		downpayment = sc.nextInt();
		System.out.println("Please enter the duration of financing: ");
		durationofTime = sc.nextInt();
		System.out.println("Please enter the down admin fee: ");
		adminfee = sc.nextInt();
		System.out.println("Please enter the tax rate: ");
		tax = sc.nextInt();
		System.out.println("Please enter the down interest rate: ");
		interest = sc.nextInt();
		
		double subtotal = (baseprice+adminfee-downpayment);
		double totalSalestax = (baseprice*tax)/100;
		double outofthedoorprice = (subtotal+totalSalestax);
		
		System.out.println("The total out of the door price is: ");
		System.out.println(outofthedoorprice);
		
		double r = (interest/12/100);
		int n = durationofTime;
		
		monthlypayment = (r*outofthedoorprice)/(1-(1/Math.pow((1+(r)),n)));
		System.out.println("The monthly payment is:");
		System.out.println(monthlypayment);
		
		//totalPrice=baseprice+adminfee+interest+tax;
		//System.out.println(interest);
		
		
		
	}

}
