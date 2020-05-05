import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.support.ui.Select;

public class hw3C {

	public static void main(String[] args) throws InterruptedException {
		
		
		//System.setProperty("webdriver.chrome.driver","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\chromedriver.exe");

		//WebDriver driver= new ChromeDriver();
		
		//driver. manage().deleteAllCookies();
		
        //System.setProperty("webdriver.ie.driver","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\IEDriverServer.exe");
		
		//WebDriver driver= new InternetExplorerDriver();
		 
		//System.setProperty("webdriver.firefox.marionette","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\CommonDrivers\\geckodriver.exe");
		WebDriver driver= new FirefoxDriver();
	
		driver.get("https://login.yahoo.com/account/create?specId=yidReg");
		
		driver.manage().window().maximize();
		
		
		WebElement FirstName= driver.findElement(By.id("usernamereg-firstName"));FirstName.sendKeys("Jason");
		WebElement LastName=driver.findElement(By.id("usernamereg-lastName")); LastName.sendKeys("Aldean");
		
		WebElement Email=driver.findElement(By.name("yid")); Email.sendKeys("jasona65100");
		
		WebElement PassWord=driver.findElement(By.id("usernamereg-password")); PassWord.sendKeys("jinglebells2020");
		
		WebElement pNumber=driver.findElement(By.id("usernamereg-phone")); pNumber.sendKeys("9784088228");
		
		WebElement birthMonth=driver.findElement(By.id("usernamereg-month"));
		
		Select bM= new Select(birthMonth);
		
		bM.selectByValue("2");
		
		WebElement birthDay=driver.findElement(By.id("usernamereg-day")); birthDay.sendKeys("15");
		
		WebElement birthYear=driver.findElement(By.id("usernamereg-year")); birthYear.sendKeys("1965");
		
		WebElement gender=driver.findElement(By.id("usernamereg-freeformGender")); gender.sendKeys("male");
		
		WebElement Continue=driver.findElement(By.id("reg-submit-button"));
		
		Continue.click();
		 
		Thread.sleep(2000);
		
		driver.close();
		

	}

}
