package HomeWork;
import java.util.Scanner;
import java.lang.Math; 

public class Rent {

	public static void main(String[] args) {
		
	
	int loanterms;
	double interestRate = 0/100;
    double totalinterest;
	double monthlyPayment;
	int baseprice;
	int downPayment;
	int creditscore;
	int pricipalLoan;
	
	
	Scanner sc = new Scanner(System.in);
	
	System.out.println("Please enter the Base price:");
	baseprice=sc.nextInt();
	
	System.out.println ("Please enter the Down Payment: ");
	downPayment= sc.nextInt();
	
	System.out.println("Please enter the Principal Loan:");
	pricipalLoan=sc.nextInt();
	
	System.out.println("Please enter the Loan terms:");
	loanterms= sc.nextInt();
	if (loanterms<20 ||loanterms>30)
	{System.out.println("No Loan Approval");

	}
	System.out.println("Please enter the Credit Score:");
	creditscore=sc.nextInt();
    if (creditscore>760 ||creditscore==760) {
    	interestRate=1.5;
    	System.out.println("The interest Rate is:"+ interestRate);
    }
    else if (creditscore>700||creditscore==700) {
    	interestRate=3;
    	System.out.println("The interest Rate is:"+ interestRate);}
    	
    	else if(creditscore>650||creditscore==650) {
    	
    		interestRate=4;
    		System.out.println("The interest Rate is:"+ interestRate);
    	}
    
    	else if(creditscore>600||creditscore==600) {
    		interestRate=5;
    		System.out.println("The interest Rate is:"+ interestRate);
    	}
    	else if(creditscore<600);{
    		System.out.println("No Loan Approval");
    	}
	
	System.out.println("your Monthly Payment is: ");
	monthlyPayment= sc.nextInt();
	monthlyPayment= pricipalLoan*(interestRate*Math.pow(1+interestRate, loanterms)/Math.pow(1+interestRate, loanterms)-1);
	
	totalinterest=(pricipalLoan*(interestRate/100*loanterms));
	
	
	}}
