package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Smoketestscripts {
	WebDriver driver=new ChromeDriver();
	
	
	@Given("^Open Chrome Driver and start the application$")
	public void open_Chrome_Driver_and_start_the_application() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\nazim\\workspace3\\CucumberProject\\chromedriver.exe");
		driver.get("https://www.facebook.com/");
	 
	}

	@When("^I enter valid user name and password$")
	public void i_enter_valid_user_name_and_password() throws Throwable {
		 WebElement user= driver.findElement(By.id("email"));
		 user.sendKeys("nazima.nasir@gmail.com");
				 WebElement pwd=driver.findElement(By.id("pass"));
				 pwd.sendKeys("amizan-786");
	}

	@Then("^User should be able to login successfully$")
	public void user_should_be_able_to_login_successfully() throws Throwable {
		 WebElement l=driver.findElement(By.xpath("//input[@value=\"Log In\"]"));
		 l.click();
	   
	}
	@Then("^Application is closed\\.$")
	public void application_is_closed() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	   driver.quit();
	}



}
