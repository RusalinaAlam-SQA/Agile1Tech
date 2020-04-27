package PracticeJava;

public class Concate {


		// Concatenate Function
		
	
			
			static int concat(int x, int y) {
				
				String x1 = Integer.toString(x);
				String y1 = Integer.toString(y);
				
				String z = x1+y1;
				
				int a = Integer.parseInt(z);
				
				return a;
			}

			public static void main(String[] args) {
				
				String s1 = "Me";
				String s2 = "you";
				
				int x = 1;
				int y = 2;
				
				String concat = (s1+s2+x+y);
				
				
				System.out.println(concat);
				
				System.out.println(concat(x,y));

			}

			
		
	}


