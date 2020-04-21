import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

public class hw3D {

	public static void main(String[] args) throws InterruptedException {
		
		System.setProperty("webdriver.chrome.driver","C:\\Users\\rusal\\OneDrive\\Desktop\\ProgrammingLibraries\\chromedriver.exe");

		WebDriver driver= new ChromeDriver();
		driver. manage().deleteAllCookies();
		
		driver.get("http://automationpractice.com/index.php?controller=authentication&amp;back=my-account");
		
		driver.manage().timeouts().implicitlyWait(1, TimeUnit.SECONDS);
		
		driver.manage().window().maximize();
	
	
	    WebElement information=driver.findElement(By.id("block_various_links_footer"));
	
	    information.click();
	
	    WebElement specials=driver.findElement(By.xpath("//*[@id=\"block_various_links_footer\"]/ul/li[1]/a"));
	
	    specials.click();
	    String title=driver.getTitle();
		 String url= driver.getCurrentUrl();
	     System.out.println(title);
	     System.out.println(url);
	   
	  
	   
	    Thread.sleep(2000);
	    
	    driver.navigate().back();
	    
	    WebElement newProducts=driver.findElement(By.xpath("//*[@id=\"block_various_links_footer\"]/ul/li[2]/a"));
		
	    newProducts.click();
	    
	     String title1=driver.getTitle();
		 String url1= driver.getCurrentUrl();
	     System.out.println(title1);
	     System.out.println(url1);
	   
	   Thread.sleep(2000);
	   
	   driver.navigate().back();
	   
	   
	   WebElement bestSeller=driver.findElement(By.xpath("//*[@id=\"block_various_links_footer\"]/ul/li[3]/a"));
	   bestSeller.click();
	   
	   String title2=driver.getTitle();
		 String url2= driver.getCurrentUrl();
	     System.out.println(title2);
	     System.out.println(url2);
	     
	     Thread.sleep(2000);
	   
	     driver.navigate().back();

	   
	     WebElement ourStores=driver.findElement(By.xpath("//*[@id=\"block_various_links_footer\"]/ul/li[4]/a"));
		 ourStores.click();
	   
	     String title3=driver.getTitle();
		 String url3= driver.getCurrentUrl();
	     System.out.println(title3);
	     System.out.println(url3);
	    
	     Thread.sleep(2000);
	     driver.navigate().back();
	   
	   
	     WebElement contactUs=driver.findElement(By.xpath("//*[@id=\"block_various_links_footer\"]/ul/li[5]/a"));
		 contactUs.click();
	   
		 String title4=driver.getTitle();
		 String url4= driver.getCurrentUrl();
	     System.out.println(title4);
	     System.out.println(url4);
	    
	     Thread.sleep(2000);
	     driver.navigate().back();
	
	
	     WebElement termsNconditions=driver.findElement(By.xpath("//*[@id=\"block_various_links_footer\"]/ul/li[6]/a"));
	     termsNconditions.click();
	
	     String title5=driver.getTitle();
		 String url5= driver.getCurrentUrl();
	     System.out.println(title5);
	     System.out.println(url5);
	    
	     Thread.sleep(2000);
	     driver.navigate().back();
	
	     WebElement aboutUs=driver.findElement(By.xpath("//*[@id=\"block_various_links_footer\"]/ul/li[7]/a"));
	     aboutUs.click();
	
	     String title6=driver.getTitle();
		 String url6= driver.getCurrentUrl();
	     System.out.println(title6);
	     System.out.println(url6);
	    
	     Thread.sleep(2000);
	     driver.navigate().back();
	     
	     WebElement siteMap=driver.findElement(By.xpath("//*[@id=\"block_various_links_footer\"]/ul/li[8]/a"));
	     siteMap.click();
	     
	     String title7=driver.getTitle();
		 String url7= driver.getCurrentUrl();
	     System.out.println(title7);
	     System.out.println(url7);
	    
	     Thread.sleep(2000);
	     driver.navigate().back();  
	     
	     
	     
	     Thread.sleep(4000);
	     
	     driver.close();
	}

}
