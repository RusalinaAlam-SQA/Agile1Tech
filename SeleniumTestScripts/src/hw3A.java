
	
		import java.util.concurrent.TimeUnit;

		import org.openqa.selenium.By;
		import org.openqa.selenium.WebDriver;
		import org.openqa.selenium.WebElement;
		import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.Select;

		public class hw3A {

			public static void main(String[] args) throws InterruptedException {
				

				System.setProperty("webdriver.chrome.driver","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\chromedriver.exe");

				WebDriver driver= new ChromeDriver();
				
				driver. manage().deleteAllCookies();
				
				driver.get("http://newtours.demoaut.com/mercuryregister.php");
				
				driver.manage().window().maximize();
				
	 
		// Contact Informations:
				
     WebElement firstName =driver.findElement(By.name("firstName")); firstName.sendKeys("Celine");
				   
	 WebElement lastName =driver.findElement(By.name("lastName")); lastName.sendKeys("Dion");
				   
	 WebElement phone =driver.findElement(By.name("phone"));phone.sendKeys("703-207-5324");
				   
	 WebElement emailAddress =driver.findElement(By.id("userName")); emailAddress.sendKeys("celine.dion@gmail.com");
				  
	 
	 
	 //Mailing Informations:
	 
	 WebElement address =driver.findElement(By.name("address1"));address.sendKeys("3223 Madison Cir");
				
	 WebElement city =driver.findElement(By.name("city")); city.sendKeys("Lorton");
	   
	 WebElement state =driver.findElement(By.name("state")); state.sendKeys("Virgina");
				   
	 WebElement postalCode =driver.findElement(By.name("postalCode"));postalCode.sendKeys("22079");
				   
	 WebElement country =driver.findElement(By.name("country"));
	 
	 Select cSelect= new Select(country);
	  
	 //Thread.sleep(30000);
	 
	 cSelect.selectByVisibleText("UNITED KINGDOM");
		
	
		//User Informations:
		
	 WebElement userName =driver.findElement(By.id("email")); userName.sendKeys("celine.dion@gmail.com");
	   
	 WebElement password =driver.findElement(By.name("password")); password.sendKeys("abc123");
				   
	 WebElement confirmPassword =driver.findElement(By.name("confirmPassword"));confirmPassword.sendKeys("abc123");
				   
	 String title=driver.getTitle();
	 
	 String url= driver.getCurrentUrl();
		
		System.out.println(title);
		System.out.println(url);
		
		
		WebElement submit= driver.findElement(By.name("register"));	
		 
		boolean dis =submit.isDisplayed();
		boolean enb= submit.isEnabled();
		
		System.out.println(dis);
		System.out.println(enb);
		
		
		Thread.sleep(2000);
		 
		driver.quit();	
	}

}
