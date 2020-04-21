import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.Select;

public class hw3B {

	public static void main(String[] args) throws InterruptedException {
		

		System.setProperty("webdriver.ie.driver","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\IEDriverServer.exe");
		
		WebDriver driver= new InternetExplorerDriver();
		
		//System.setProperty("webdriver.chrome.driver","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\chromedriver.exe");

		//WebDriver driver= new ChromeDriver();
		
		driver. manage().deleteAllCookies();
		
		driver.get("https://www.phptravels.net/register");
		driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
		driver.manage().window().maximize();
		
	     //WebElement coockies = driver.findElement(By.xpath("//*[@id=\"cookyGotItBtnBox\"]/div/button"));
				
		 //coockies.click();
		 
		 WebElement firstNAME =driver.findElement(By.name("firstname")); firstNAME.sendKeys("Mohammad");
		   
		 WebElement lastNAME =driver.findElement(By.name("lastname")); lastNAME.sendKeys("Arif");
					   
		 WebElement mobileNUM =driver.findElement(By.name("phone"));mobileNUM.sendKeys("703-207-3221");
					   
		 WebElement emailADDRESS=driver.findElement(By.name("email")); emailADDRESS.sendKeys("mohammad.arif@gmail.com");
		
		 WebElement passWord = driver.findElement(By.name("password"));passWord.sendKeys("123abc");
		
		 WebElement confirmPassWord = driver.findElement(By.name("confirmpassword"));confirmPassWord.sendKeys("123abc");
		
		 WebElement signUp= driver.findElement(By.xpath("//*[@id=\"headersignupform\"]/div[8]/button"));
		
		 String SP=signUp.getText();
		 System.out.println(SP);
		
		 
		 String title=driver.getTitle();
		 
		 String url= driver.getCurrentUrl();
			
			System.out.println(title);
			System.out.println(url);
		 
		 Thread.sleep(2000);
		 
		 driver.close();
		 
		 
		 
		 
		 
		 
	}

}
