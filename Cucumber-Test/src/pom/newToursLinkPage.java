package pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class newToursLinkPage {
	
	
WebDriver driver;
	
	public newToursLinkPage(WebDriver dr){
		
		driver = dr;
	}
	
	
  public WebElement Home() {
		
		WebElement LinkHome = driver.findElement(By.linkText("Home"));
		
		
		return LinkHome;
	}
	
	
	
  public WebElement Flights() {
		
		WebElement linkFlights = driver.findElement(By.linkText("Flights"));
		
		
		return linkFlights;
	}
	
	
  public WebElement Hotels() {
		
		WebElement linkHotels = driver.findElement(By.linkText("Hotels"));
		
		
		return linkHotels;
	}
	
  
  public WebElement CarRentals() {
		
		WebElement linkCarRentals = driver.findElement(By.linkText("Car Rentals"));
		
		
		return linkCarRentals;
	}
		
	
  public WebElement Cruises() {
		
		WebElement linkCruises = driver.findElement(By.linkText("Cruises"));
		
		
		return linkCruises;
	}

  
  public WebElement Destinations() {
		
		WebElement linkDestinations = driver.findElement(By.linkText("Destinations"));
		
		
		return linkDestinations;
	}

  
  
  public WebElement Vacations() {
		
		WebElement linkVacations = driver.findElement(By.linkText("Vacations"));
		
		
		return linkVacations;
  }  
}
