package pom;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class newTours {
	
	
WebDriver driver;
	
	public newTours(WebDriver dr) {
		
		driver = dr;}
	
	
	
 public WebElement home () {
		
		WebElement home = driver.findElement(By.linkText("Home"));
		
		return home;
	}
	
	public WebElement flights() {
		
		WebElement flights = driver.findElement(By.linkText("Flights"));
		
		return flights;
	}
	
	public WebElement hotels() {
		
		WebElement hotels = driver.findElement(By.linkText("Hotels"));
		
		return hotels;
	}
	
	public WebElement carRentals() {
		
		WebElement carRentals = driver.findElement(By.linkText("Car Rentals"));
		
		return carRentals;
	}
	
	public WebElement cruises() {
		
		WebElement cruises = driver.findElement(By.linkText("Cruises"));
		
		return cruises;
	}
	
	public WebElement destinations() {
		
		WebElement destinations = driver.findElement(By.linkText("Destinations"));
		
		return destinations;
	}
	
	public WebElement vacations() {
		
		WebElement vacations = driver.findElement(By.linkText("Vacations"));
		
		return vacations;
	}
}
