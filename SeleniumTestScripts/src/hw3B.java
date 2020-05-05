import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.Select;

public class hw3B {

	public static void main(String[] args) throws InterruptedException {
		

		//System.setProperty("webdriver.ie.driver","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\IEDriver32\\IEDriverServer.exe");
		
		
		//System.setProperty("webdriver.chrome.driver","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\chromedriver.exe");

		
		  WebDriver driver1= new ChromeDriver();
		  
		  driver1. manage().deleteAllCookies();
		  
		  driver1.get("https://www.phptravels.net/register");
		  driver1.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		  driver1.manage().window().maximize();
		  
		  
		  WebElement firstNAME =driver1.findElement(By.name("firstname"));
		  firstNAME.sendKeys("Mohammad");
		  
		  WebElement lastNAME =driver1.findElement(By.name("lastname"));
		  lastNAME.sendKeys("Arif");
		  
		  WebElement mobileNUM
		  =driver1.findElement(By.name("phone"));mobileNUM.sendKeys("703-207-3221");
		  
		  WebElement emailADDRESS=driver1.findElement(By.name("email"));
		  emailADDRESS.sendKeys("mohammad.arif@gmail.com");
		  
		  WebElement passWord =
		  driver1.findElement(By.name("password"));passWord.sendKeys("123abc");
		  
		  WebElement confirmPassWord =
		  driver1.findElement(By.name("confirmpassword"));confirmPassWord.sendKeys(
		  "123abc");
		  
		  WebElement signUp=
		  driver1.findElement(By.xpath("//*[@id=\"headersignupform\"]/div[8]/button"));
		  
		  String SP=signUp.getText(); System.out.println(SP);
		  
		  
		  String title=driver1.getTitle();
		  
		  String url= driver1.getCurrentUrl();
		  
		  System.out.println(title); System.out.println(url);
		  
		  Thread.sleep(2000);
		  
		  driver1.close();
		  
		
		
		
		/*
		 * WebElement coockies =
		 * driver.findElement(By.xpath("//*[@id=\"cookyGotItBtnBox\"]/div/button"));
		 * 
		 * coockies.click();
		 */
		WebDriver driver= new InternetExplorerDriver();
		driver. manage().deleteAllCookies();
		
		driver.get("https://www.phptravels.net/register");
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		

		 WebElement firstNAME1 =driver.findElement(By.name("firstname")); firstNAME1.sendKeys("Mohammad");
		   
		 WebElement lastNAME1 =driver.findElement(By.name("lastname")); lastNAME1.sendKeys("Arif");
					   
		 WebElement mobileNUM1 =driver.findElement(By.name("phone"));mobileNUM1.sendKeys("703-207-3221");
					   
		 WebElement emailADDRESS1=driver.findElement(By.name("email")); emailADDRESS1.sendKeys("mohammad.arif@gmail.com");
		
		 WebElement passWord1 = driver.findElement(By.name("password"));passWord1.sendKeys("123abc");
		
		 WebElement confirmPassWord1 = driver.findElement(By.name("confirmpassword"));confirmPassWord1.sendKeys("123abc");
		
		 WebElement signUp1= driver.findElement(By.xpath("//*[@id=\"headersignupform\"]/div[8]/button"));
		
		 String sP=signUp1.getText();
		 System.out.println(sP);
		
		 
		 String title1=driver.getTitle();
		 
		 String url1= driver.getCurrentUrl();
			
			System.out.println(title1);
			System.out.println(url1);
		 
		 Thread.sleep(2000);
		 
		 driver.close();
		 	 
	

	
	
	WebDriver driver2 = new FirefoxDriver();
	driver2. manage().deleteAllCookies();
	
	driver2.get("https://www.phptravels.net/register");
	driver2.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
	driver2.manage().window().maximize();
	

	 WebElement firstNAME2 =driver2.findElement(By.name("firstname")); firstNAME2.sendKeys("Mohammad");
	   
	 WebElement lastNAME2 =driver2.findElement(By.name("lastname")); lastNAME2.sendKeys("Arif");
				   
	 WebElement mobileNUM2 =driver2.findElement(By.name("phone"));mobileNUM2.sendKeys("703-207-3221");
				   
	 WebElement emailADDRESS2=driver2.findElement(By.name("email")); emailADDRESS2.sendKeys("mohammad.arif@gmail.com");
	
	 WebElement passWord2 = driver2.findElement(By.name("password"));passWord2.sendKeys("123abc");
	
	 WebElement confirmPassWord2 = driver2.findElement(By.name("confirmpassword"));confirmPassWord2.sendKeys("123abc");
	
	 WebElement signUp2= driver2.findElement(By.xpath("//*[@id=\"headersignupform\"]/div[8]/button"));
	
	 String sP2=signUp2.getText();
	 System.out.println(sP2);
	
	 
	 String title2=driver2.getTitle();
	 
	 String url2= driver2.getCurrentUrl();
		
		System.out.println(title2);
		System.out.println(url2);
	 
	 Thread.sleep(2000);
	 
	 driver.close();
	
	
	
	
	
	
	
	
	
	}
	
	
	
	
	
	
	
}
