package runner;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import	cucumber.api.junit.Cucumber;

//<!-- https://mvnrepository.com/artifact/org.seleniumhq.selenium/selenium-server-standalone.Download selenium server standalone 2.53.jar file in Build path-->
	//Remove scope & type in maven dependency for cucumber-junit, the issue of red color under Cucumber.class is resolved
@RunWith(Cucumber.class)
@CucumberOptions(features="features",
					glue= {"stepDefinition"},
					plugin= {"html:target/cucumber-html-report",
					"json:target/cucumber.json",
					"pretty:target/cucumber-pretty.txt",
					"usage:target/cucumber-usage.json",
					"junit:target/cucumber-results.xml"
})


public class TestRunner {

}



