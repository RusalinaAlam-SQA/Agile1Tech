/*package stepDef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Reporter;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import pom.newTours;
import pom.newToursLinkPage;

public class mercuryTours_stepDef {

	
	WebDriver driver;
	newTours nt;
	
	@Given("^user is in the home page$")
	public void user_is_in_the_home_page() throws InterruptedException {
		System.setProperty("webdriver.chrome.driver","C:\\Users/rusal/OneDrive/Desktop/ProgrammingLibraries/chromedriver.exe");
	    
	    driver = new ChromeDriver(); 
	    nt=new newTours(driver);
		
		driver.manage().deleteAllCookies();
		
		Thread.sleep(1000);
		
		driver.get("http://newtours.demoaut.com/mercuryregister.php");
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		
		driver.manage().window().maximize();
	   
	}
	@When("^user clicks on the home link$")
	public void user_clicks_on_the_home_link() {
	    nt.home().click();
	}

	@When("^^user will validate the title of the Home page$")
	public void user_will_validate_the_title_of_the_home_page() throws Throwable {
	    String actualTitle = driver.getTitle();
	    String expectedTitle = "Welcome: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will go back to home page$")
	public void user_will_go_back_to_home_page() throws Throwable {
	    driver.navigate().back();
	}
	
	@When("^user will click on Flights link$")
	public void user_will_click_on_Flights_link() {
	    nt.flights().click();
	}

	@When("^user will validate the title of the Flights page$")
	public void user_will_validate_the_title_of_the_Flights_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Welcome: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on the Hotels link$")
	public void user_will_click_on_the_Hotels_link() {
	    nt.hotels().click();
	}

	@When("^user will validate the title of the Hotels page$")
	public void user_will_validate_the_title_of_the_Hotels_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Under Construction: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on the Car Rentals link$")
	public void user_will_click_on_the_Car_Rentals_link() {
	    nt.carRentals().click();
	}

	@When("^user will validate the title of the Car Rentals page$")
	public void user_will_validate_the_title_of_the_Car_Rentals_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Under Construction: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on Cruises link$")
	public void user_will_click_on_Cruises_link() {
	    nt.cruises().click();
	}

	@When("^user will validate the title of the Cruises page$")
	public void user_will_validate_the_title_of_the_Cruises_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Cruises: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on the Destinations link$")
	public void user_will_click_on_the_Destinations_link() {
	    nt.destinations().click();
	}

	@When("^user will validate the title of the Destinations page$")
	public void user_will_validate_the_title_of_the_Destinations_page() {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Under Construction: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@When("^user will click on the Vacations link$")
	public void user_will_click_on_the_Vacations_link() {
	    nt.vacations().click();
	}

	@When("^user will validate the title of the Vacations page$")
	public void user_will_validate_the_title_of_the_Vacations_page() throws Throwable {
		String actualTitle = driver.getTitle();
	    String expectedTitle = "Under Construction: Mercury Tours";
	    
	    Assert.assertEquals(expectedTitle, actualTitle);
	}

	@Then("^user close the browser$")
	public void user_close_the_browser() {
	    driver.quit();
	}
	
	}*/
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	

