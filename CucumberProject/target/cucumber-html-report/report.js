$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Facebookmultiplescenario.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    },
    {
      "line": 2,
      "value": "#Keywords Summary :"
    },
    {
      "line": 3,
      "value": "#Feature: List of scenarios."
    },
    {
      "line": 4,
      "value": "#Scenario: Business rule through list of steps with arguments."
    },
    {
      "line": 5,
      "value": "#Given: Some precondition step"
    },
    {
      "line": 6,
      "value": "#When: Some key actions"
    },
    {
      "line": 7,
      "value": "#Then: To observe outcomes or validation"
    },
    {
      "line": 8,
      "value": "#And,But: To enumerate more Given,When,Then steps"
    },
    {
      "line": 9,
      "value": "#Scenario Outline: List of steps for data-driven as an Examples and \u003cplaceholder\u003e"
    },
    {
      "line": 10,
      "value": "#Examples: Container for s table"
    },
    {
      "line": 11,
      "value": "#Background: List of steps run before each of the scenarios"
    },
    {
      "line": 12,
      "value": "#\"\"\" (Doc Strings)"
    },
    {
      "line": 13,
      "value": "#| (Data Tables)"
    },
    {
      "line": 14,
      "value": "#@ (Tags/Labels):To group Scenarios"
    },
    {
      "line": 15,
      "value": "#\u003c\u003e (placeholder)"
    },
    {
      "line": 16,
      "value": "#\"\""
    },
    {
      "line": 17,
      "value": "## (Comments)"
    },
    {
      "line": 18,
      "value": "#Sample Feature Definition Template"
    },
    {
      "line": 19,
      "value": "#@tag"
    }
  ],
  "line": 20,
  "name": "Test facebook smoke scenario",
  "description": "",
  "id": "test-facebook-smoke-scenario",
  "keyword": "Feature"
});
formatter.scenario({
  "comments": [
    {
      "line": 23,
      "value": "#@tag1"
    }
  ],
  "line": 24,
  "name": "Test login with valid credentials",
  "description": "",
  "id": "test-facebook-smoke-scenario;test-login-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "Open Chrome Driver and start the application",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I enter valid user name and password",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User should be able to login successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "Application is closed.",
  "keyword": "Then "
});
formatter.match({
  "location": "Smoketestscripts.open_Chrome_Driver_and_start_the_application()"
});
formatter.result({
  "duration": 8663425401,
  "status": "passed"
});
formatter.match({
  "location": "Smoketestscripts.i_enter_valid_user_name_and_password()"
});
formatter.result({
  "duration": 645827900,
  "status": "passed"
});
formatter.match({
  "location": "Smoketestscripts.user_should_be_able_to_login_successfully()"
});
formatter.result({
  "duration": 136802700,
  "status": "passed"
});
formatter.match({
  "location": "Smoketestscripts.application_is_closed()"
});
formatter.result({
  "duration": 1216371100,
  "status": "passed"
});
});