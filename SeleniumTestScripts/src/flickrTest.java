import java.util.concurrent.TimeUnit;
import org.openqa.jetty.html.Select;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class flickrTest {

	public static void main(String[] args) {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\chromedriver.exe");

		WebDriver driver= new ChromeDriver();
		driver. manage().deleteAllCookies();
		
		driver.get("https://identity.flickr.com/sign-up");
		
		driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
		
	    
	WebElement signup= driver.findElement(By.xpath("//*[@id=\"sign-up-first-name\"]"));
		
	   boolean d =signup.isDisplayed();
		
	   boolean e =signup.isEnabled();
	   
	   //System.out.println(d);
	   
	   
	    
	   WebElement firstName =driver.findElement(By.xpath("//*[@id=\"sign-up-first-name\"]"));
	   
	   WebElement lastName =driver.findElement(By.xpath("//*[@id=\"sign-up-last-name\"]")); 
	   
	   WebElement yourAge =driver.findElement(By.xpath("//*[@id=\"sign-up-age\"]"));
	   
	   WebElement emailAddress =driver.findElement(By.xpath("//*[@id=\"sign-up-email\"]"));
	  
	   WebElement password =driver.findElement(By.id("sign-up-password"));
	   
	   firstName.sendKeys("Rusalina");
	   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	   lastName.sendKeys("Alam");
	   yourAge .sendKeys("00");
	   emailAddress.sendKeys("rusalina.alam@gmail.com");
	   password.sendKeys("abcd");
	    
	   String sp=signup.getText();
	   System.out.println(sp);
	   
	   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	   
	
	  // driver.close();
	
	
	}
	
	
	
	
	
	

	
		
	}


