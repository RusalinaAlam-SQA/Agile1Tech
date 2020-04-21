package HomeWork2;

import java.util.Scanner;

public class function {
	
	
	public boolean findcreditscore (int goodcreditscore,int poorcreditscore) {
		
	    goodcreditscore= 0;
		poorcreditscore= 0;
		
		if (goodcreditscore>poorcreditscore||goodcreditscore==poorcreditscore);
		
		boolean findcreditscore;
		Scanner sc = new Scanner(System.in);
		
		if (goodcreditscore>poorcreditscore)
		{System.out.println("goodcreditscore");
		goodcreditscore= sc.nextInt();
		
		findcreditscore=true;
		}
		
		 if (goodcreditscore<poorcreditscore);
		
		{System.out.println("poorcreditscore");
		
		poorcreditscore= sc.nextInt();
		
		findcreditscore= false;
		}
		
		return findcreditscore;
	}}
		
		
		
	
	
	
