package HomeWork2;

import java.util.Scanner;

public class utilityClass {
	
	
	public int creditScore;
    double interestRate;
    public double basePrice;
    public int loanTerms;
    public double totalPrice;
    public double totalInterest;
    public double getMonthlyPayment;

    Scanner sc= new Scanner (System.in);
    
    
	//function 1
	public double findInterestRate(){
		
		System.out.println("Please enter credit score: ");
	    creditScore = sc.nextInt();
		if(creditScore>=700){
			
			interestRate = 2;
			System.out.println("The interst rate is: " + interestRate);
		
			
		}
		return interestRate;
	}



      //function 2

   public double calculateTotalPrice() {
		
	   
	   System.out.println("Please enter Base Price");
	   basePrice = sc.nextInt();
	   
	   System.out.println("Please enter Loan Terms");
	   loanTerms= sc.nextInt();
	   
	   totalInterest=((interestRate/100)*basePrice*loanTerms);
	   
	   totalPrice= (basePrice+(totalInterest));
	   
	    return totalPrice;
	}


   
   
   
   
       //function 3
   
   


}
	
	


	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

