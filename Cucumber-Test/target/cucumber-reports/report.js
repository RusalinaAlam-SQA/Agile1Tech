$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("newToursRegistration.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: your.email@your.domain.com"
    }
  ],
  "line": 3,
  "name": "NewTours Registration",
  "description": "",
  "id": "newtours-registration",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 5,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"\u003cbrowserName\u003e\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"\u003cfirstName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"\u003czipCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"\u003cuserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 24,
  "name": "",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "phoneNumber",
        "email",
        "address",
        "city",
        "state",
        "zipCode",
        "country",
        "userName",
        "password",
        "confirmPassword",
        "browserName"
      ],
      "line": 26,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;1"
    },
    {
      "cells": [
        "Debra",
        "Burks",
        "1234567890",
        "D@yahoo.com",
        "9273 Lee St.",
        "Fairpoint",
        "MA",
        "48085",
        "UNITED STATES",
        "Deb1234",
        "Sjobs@123",
        "Sjobs@123",
        "InternetExplorer"
      ],
      "line": 27,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;2"
    },
    {
      "cells": [
        "jacquilin",
        "Duncan",
        "7234567890",
        "j@yahoo.com",
        "1321 Thomas Dr",
        "Fairpoint",
        "MA",
        "48085",
        "CANADA",
        "Jac1234",
        "Sjobs@154",
        "Sjobs@154",
        "InternetExplorer"
      ],
      "line": 28,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;3"
    },
    {
      "cells": [
        "Pamella",
        "Newman",
        "1237667890",
        "p@yahoo.com",
        "12335 Main Rd",
        "Fairpoint",
        "MA",
        "48085",
        "BANGLADESH",
        "Pam1234",
        "Sjobs@150",
        "Sjobs@150",
        "InternetExplorer"
      ],
      "line": 29,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 27,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"InternetExplorer\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"Debra\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"Burks\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"1234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"D@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"9273 Lee St.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"UNITED STATES\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"Deb1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"Sjobs@123\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"Sjobs@123\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "InternetExplorer",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 1746230100,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027RUSALINA-ALAM\u0027, ip: \u0027192.168.1.185\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: InternetExplorerDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.run(InternetExplorerDriver.java:221)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:150)\r\n\tat stepDef.newToursLinkSteps.user_enters_the_browser_name(newToursLinkSteps.java:51)\r\n\tat ✽.Given user enters the browser name \"InternetExplorer\"(newToursRegistration.feature:7)\r\nCaused by: java.lang.IllegalArgumentException: No enum constant org.openqa.selenium.Proxy.ProxyType.\r\n\tat java.lang.Enum.valueOf(Unknown Source)\r\n\tat org.openqa.selenium.Proxy$ProxyType.valueOf(Proxy.java:35)\r\n\tat org.openqa.selenium.Proxy.\u003cinit\u003e(Proxy.java:69)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake$Result.lambda$static$0(ProtocolHandshake.java:151)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake$Result.\u003cinit\u003e(ProtocolHandshake.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$successHandler$1(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.run(InternetExplorerDriver.java:221)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:150)\r\n\tat stepDef.newToursLinkSteps.user_enters_the_browser_name(newToursLinkSteps.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Debra",
      "offset": 24
    }
  ],
  "location": "newToursLinkSteps.user_enters_First_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Burks",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_Last_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enters_Phone_Number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "D@yahoo.com",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enter_Email_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "9273 Lee St.",
      "offset": 21
    }
  ],
  "location": "newToursLinkSteps.user_enters_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairpoint",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enters_City(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enter_State(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "UNITED STATES",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_will_select_country(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Deb1234",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_User_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@123",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@123",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_Confirm_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 28,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"InternetExplorer\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"jacquilin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"Duncan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"7234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"j@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"1321 Thomas Dr\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"CANADA\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"Jac1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"Sjobs@154\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"Sjobs@154\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "InternetExplorer",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 1013518800,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027RUSALINA-ALAM\u0027, ip: \u0027192.168.1.185\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: InternetExplorerDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.run(InternetExplorerDriver.java:221)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:150)\r\n\tat stepDef.newToursLinkSteps.user_enters_the_browser_name(newToursLinkSteps.java:51)\r\n\tat ✽.Given user enters the browser name \"InternetExplorer\"(newToursRegistration.feature:7)\r\nCaused by: java.lang.IllegalArgumentException: No enum constant org.openqa.selenium.Proxy.ProxyType.\r\n\tat java.lang.Enum.valueOf(Unknown Source)\r\n\tat org.openqa.selenium.Proxy$ProxyType.valueOf(Proxy.java:35)\r\n\tat org.openqa.selenium.Proxy.\u003cinit\u003e(Proxy.java:69)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake$Result.lambda$static$0(ProtocolHandshake.java:151)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake$Result.\u003cinit\u003e(ProtocolHandshake.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$successHandler$1(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.run(InternetExplorerDriver.java:221)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:150)\r\n\tat stepDef.newToursLinkSteps.user_enters_the_browser_name(newToursLinkSteps.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "jacquilin",
      "offset": 24
    }
  ],
  "location": "newToursLinkSteps.user_enters_First_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Duncan",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_Last_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "7234567890",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enters_Phone_Number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "j@yahoo.com",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enter_Email_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1321 Thomas Dr",
      "offset": 21
    }
  ],
  "location": "newToursLinkSteps.user_enters_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairpoint",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enters_City(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enter_State(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "CANADA",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_will_select_country(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Jac1234",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_User_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@154",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@154",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_Confirm_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 29,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"InternetExplorer\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"Pamella\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"Newman\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"1237667890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"p@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"12335 Main Rd\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"BANGLADESH\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"Pam1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"Sjobs@150\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"Sjobs@150\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "InternetExplorer",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 1008197700,
  "error_message": "org.openqa.selenium.remote.UnreachableBrowserException: Could not start a new session. Possible causes are invalid address of the remote server or browser start-up failure.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:53\u0027\nSystem info: host: \u0027RUSALINA-ALAM\u0027, ip: \u0027192.168.1.185\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: driver.version: InternetExplorerDriver\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:573)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.run(InternetExplorerDriver.java:221)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:150)\r\n\tat stepDef.newToursLinkSteps.user_enters_the_browser_name(newToursLinkSteps.java:51)\r\n\tat ✽.Given user enters the browser name \"InternetExplorer\"(newToursRegistration.feature:7)\r\nCaused by: java.lang.IllegalArgumentException: No enum constant org.openqa.selenium.Proxy.ProxyType.\r\n\tat java.lang.Enum.valueOf(Unknown Source)\r\n\tat org.openqa.selenium.Proxy$ProxyType.valueOf(Proxy.java:35)\r\n\tat org.openqa.selenium.Proxy.\u003cinit\u003e(Proxy.java:69)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake$Result.lambda$static$0(ProtocolHandshake.java:151)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake$Result.\u003cinit\u003e(ProtocolHandshake.java:166)\r\n\tat org.openqa.selenium.remote.JsonWireProtocolResponse.lambda$successHandler$1(JsonWireProtocolResponse.java:91)\r\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\r\n\tat java.util.stream.ReferencePipeline$3$1.accept(Unknown Source)\r\n\tat java.util.Spliterators$ArraySpliterator.tryAdvance(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.forEachWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyIntoWithCancel(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.copyInto(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.wrapAndCopyInto(Unknown Source)\r\n\tat java.util.stream.FindOps$FindOp.evaluateSequential(Unknown Source)\r\n\tat java.util.stream.AbstractPipeline.evaluate(Unknown Source)\r\n\tat java.util.stream.ReferencePipeline.findFirst(Unknown Source)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\r\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.run(InternetExplorerDriver.java:221)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:213)\r\n\tat org.openqa.selenium.ie.InternetExplorerDriver.\u003cinit\u003e(InternetExplorerDriver.java:150)\r\n\tat stepDef.newToursLinkSteps.user_enters_the_browser_name(newToursLinkSteps.java:51)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:37)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:13)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:31)\r\n\tat cucumber.runtime.java.JavaStepDefinition.execute(JavaStepDefinition.java:38)\r\n\tat cucumber.runtime.StepDefinitionMatch.runStep(StepDefinitionMatch.java:37)\r\n\tat cucumber.runtime.Runtime.runStep(Runtime.java:299)\r\n\tat cucumber.runtime.model.StepContainer.runStep(StepContainer.java:44)\r\n\tat cucumber.runtime.model.StepContainer.runSteps(StepContainer.java:39)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:44)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:91)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ExamplesRunner.run(ExamplesRunner.java:59)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:128)\r\n\tat org.junit.runners.Suite.runChild(Suite.java:27)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.ScenarioOutlineRunner.run(ScenarioOutlineRunner.java:53)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:93)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:37)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:290)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:71)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:288)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:58)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:268)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:363)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:98)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pamella",
      "offset": 24
    }
  ],
  "location": "newToursLinkSteps.user_enters_First_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Newman",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_Last_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "1237667890",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enters_Phone_Number(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "p@yahoo.com",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enter_Email_address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "12335 Main Rd",
      "offset": 21
    }
  ],
  "location": "newToursLinkSteps.user_enters_Address(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairpoint",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enters_City(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enter_State(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "BANGLADESH",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_will_select_country(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Pam1234",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_User_Name(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@150",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@150",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_Confirm_Password(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.examples({
  "line": 31,
  "name": "",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "phoneNumber",
        "email",
        "address",
        "city",
        "state",
        "zipCode",
        "country",
        "userName",
        "password",
        "confirmPassword",
        "browserName"
      ],
      "line": 32,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;1"
    },
    {
      "cells": [
        "Debra",
        "Burks",
        "1234567890",
        "D@yahoo.com",
        "9273 Lee St.",
        "Fairpoint",
        "MA",
        "48085",
        "UNITED STATES",
        "Deb1234",
        "Sjobs@123",
        "Sjobs@123",
        "chrome"
      ],
      "line": 33,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;2"
    },
    {
      "cells": [
        "jacquilin",
        "Duncan",
        "7234567890",
        "j@yahoo.com",
        "1321 Thomas Dr",
        "Fairpoint",
        "MA",
        "48085",
        "CANADA",
        "Jac1234",
        "Sjobs@154",
        "Sjobs@154",
        "chrome"
      ],
      "line": 34,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;3"
    },
    {
      "cells": [
        "Pamella",
        "Newman",
        "1237667890",
        "p@yahoo.com",
        "12335 Main Rd",
        "Fairpoint",
        "MA",
        "48085",
        "BANGLADESH",
        "Pam1234",
        "Sjobs@150",
        "Sjobs@150",
        "chrome"
      ],
      "line": 35,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 33,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"chrome\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"Debra\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"Burks\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"1234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"D@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"9273 Lee St.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"UNITED STATES\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"Deb1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"Sjobs@123\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"Sjobs@123\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 5026144700,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 6608975200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Debra",
      "offset": 24
    }
  ],
  "location": "newToursLinkSteps.user_enters_First_Name(String)"
});
formatter.result({
  "duration": 66076400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Burks",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_Last_Name(String)"
});
formatter.result({
  "duration": 49565000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enters_Phone_Number(String)"
});
formatter.result({
  "duration": 60583900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D@yahoo.com",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enter_Email_address(String)"
});
formatter.result({
  "duration": 59085700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9273 Lee St.",
      "offset": 21
    }
  ],
  "location": "newToursLinkSteps.user_enters_Address(String)"
});
formatter.result({
  "duration": 60990900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairpoint",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enters_City(String)"
});
formatter.result({
  "duration": 53979300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enter_State(String)"
});
formatter.result({
  "duration": 38852200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 43537400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNITED STATES",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_will_select_country(String)"
});
formatter.result({
  "duration": 47890400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deb1234",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_User_Name(String)"
});
formatter.result({
  "duration": 53806600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@123",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Password(String)"
});
formatter.result({
  "duration": 53056600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@123",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_Confirm_Password(String)"
});
formatter.result({
  "duration": 54116700,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 32048700,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "duration": 2622685100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"chrome\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"jacquilin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"Duncan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"7234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"j@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"1321 Thomas Dr\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"CANADA\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"Jac1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"Sjobs@154\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"Sjobs@154\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 5012867200,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 6610977000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jacquilin",
      "offset": 24
    }
  ],
  "location": "newToursLinkSteps.user_enters_First_Name(String)"
});
formatter.result({
  "duration": 66037300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Duncan",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_Last_Name(String)"
});
formatter.result({
  "duration": 53155100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7234567890",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enters_Phone_Number(String)"
});
formatter.result({
  "duration": 62798700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j@yahoo.com",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enter_Email_address(String)"
});
formatter.result({
  "duration": 55855500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1321 Thomas Dr",
      "offset": 21
    }
  ],
  "location": "newToursLinkSteps.user_enters_Address(String)"
});
formatter.result({
  "duration": 63411900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairpoint",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enters_City(String)"
});
formatter.result({
  "duration": 50179500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enter_State(String)"
});
formatter.result({
  "duration": 35979300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 44106300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CANADA",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_will_select_country(String)"
});
formatter.result({
  "duration": 55751800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jac1234",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_User_Name(String)"
});
formatter.result({
  "duration": 48720600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@154",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Password(String)"
});
formatter.result({
  "duration": 49067200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@154",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_Confirm_Password(String)"
});
formatter.result({
  "duration": 48834100,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 27657900,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "duration": 2628381700,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"chrome\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"Pamella\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"Newman\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"1237667890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"p@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"12335 Main Rd\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"BANGLADESH\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"Pam1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"Sjobs@150\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"Sjobs@150\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "chrome",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 5020955000,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 6629975400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pamella",
      "offset": 24
    }
  ],
  "location": "newToursLinkSteps.user_enters_First_Name(String)"
});
formatter.result({
  "duration": 86719700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Newman",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_Last_Name(String)"
});
formatter.result({
  "duration": 46724900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1237667890",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enters_Phone_Number(String)"
});
formatter.result({
  "duration": 54348600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p@yahoo.com",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enter_Email_address(String)"
});
formatter.result({
  "duration": 54871200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12335 Main Rd",
      "offset": 21
    }
  ],
  "location": "newToursLinkSteps.user_enters_Address(String)"
});
formatter.result({
  "duration": 59707000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairpoint",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enters_City(String)"
});
formatter.result({
  "duration": 50595400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enter_State(String)"
});
formatter.result({
  "duration": 37918300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 40668000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BANGLADESH",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_will_select_country(String)"
});
formatter.result({
  "duration": 53365600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pam1234",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_User_Name(String)"
});
formatter.result({
  "duration": 47266100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@150",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Password(String)"
});
formatter.result({
  "duration": 48712000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@150",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_Confirm_Password(String)"
});
formatter.result({
  "duration": 47812800,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 29513700,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "duration": 2615670700,
  "status": "passed"
});
formatter.examples({
  "line": 37,
  "name": "",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "phoneNumber",
        "email",
        "address",
        "city",
        "state",
        "zipCode",
        "country",
        "userName",
        "password",
        "confirmPassword",
        "browserName"
      ],
      "line": 38,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;1"
    },
    {
      "cells": [
        "Debra",
        "Burks",
        "1234567890",
        "D@yahoo.com",
        "9273 Lee St.",
        "Fairpoint",
        "MA",
        "48085",
        "UNITED STATES",
        "Deb1234",
        "Sjobs@123",
        "Sjobs@123",
        "firefox"
      ],
      "line": 39,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;2"
    },
    {
      "cells": [
        "jacquilin",
        "Duncan",
        "7234567890",
        "j@yahoo.com",
        "1321 Thomas Dr",
        "Fairpoint",
        "MA",
        "48085",
        "CANADA",
        "Jac1234",
        "Sjobs@154",
        "Sjobs@154",
        "firefox"
      ],
      "line": 40,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;3"
    },
    {
      "cells": [
        "Pamella",
        "Newman",
        "1237667890",
        "p@yahoo.com",
        "12335 Main Rd",
        "Fairpoint",
        "MA",
        "48085",
        "BANGLADESH",
        "Pam1234",
        "Sjobs@150",
        "Sjobs@150",
        "firefox"
      ],
      "line": 41,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 39,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"firefox\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"Debra\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"Burks\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"1234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"D@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"9273 Lee St.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"UNITED STATES\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"Deb1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"Sjobs@123\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"Sjobs@123\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 2681791100,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 2562117700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Debra",
      "offset": 24
    }
  ],
  "location": "newToursLinkSteps.user_enters_First_Name(String)"
});
formatter.result({
  "duration": 21972200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Burks",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_Last_Name(String)"
});
formatter.result({
  "duration": 19400700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1234567890",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enters_Phone_Number(String)"
});
formatter.result({
  "duration": 19890000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "D@yahoo.com",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enter_Email_address(String)"
});
formatter.result({
  "duration": 17987200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9273 Lee St.",
      "offset": 21
    }
  ],
  "location": "newToursLinkSteps.user_enters_Address(String)"
});
formatter.result({
  "duration": 18080400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairpoint",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enters_City(String)"
});
formatter.result({
  "duration": 18785700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enter_State(String)"
});
formatter.result({
  "duration": 16097900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 16470700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "UNITED STATES",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_will_select_country(String)"
});
formatter.result({
  "duration": 27497500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deb1234",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_User_Name(String)"
});
formatter.result({
  "duration": 14901500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@123",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Password(String)"
});
formatter.result({
  "duration": 15866300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@123",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_Confirm_Password(String)"
});
formatter.result({
  "duration": 16408400,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 42634700,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "duration": 2805547800,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"firefox\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"jacquilin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"Duncan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"7234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"j@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"1321 Thomas Dr\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"CANADA\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"Jac1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"Sjobs@154\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"Sjobs@154\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 2678494500,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 2540961300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "jacquilin",
      "offset": 24
    }
  ],
  "location": "newToursLinkSteps.user_enters_First_Name(String)"
});
formatter.result({
  "duration": 20298400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Duncan",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_Last_Name(String)"
});
formatter.result({
  "duration": 20770100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "7234567890",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enters_Phone_Number(String)"
});
formatter.result({
  "duration": 17195200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "j@yahoo.com",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enter_Email_address(String)"
});
formatter.result({
  "duration": 19430900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1321 Thomas Dr",
      "offset": 21
    }
  ],
  "location": "newToursLinkSteps.user_enters_Address(String)"
});
formatter.result({
  "duration": 20838200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairpoint",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enters_City(String)"
});
formatter.result({
  "duration": 15384100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enter_State(String)"
});
formatter.result({
  "duration": 13603100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 15311500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CANADA",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_will_select_country(String)"
});
formatter.result({
  "duration": 244523000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Jac1234",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_User_Name(String)"
});
formatter.result({
  "duration": 33721100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@154",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Password(String)"
});
formatter.result({
  "duration": 15358900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@154",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_Confirm_Password(String)"
});
formatter.result({
  "duration": 17161000,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 33603500,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "duration": 2876604300,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Register in the the newTours Registration page",
  "description": "",
  "id": "newtours-registration;register-in-the-the-newtours-registration-page;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 4,
      "name": "@smoke"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "user enters the browser name \"firefox\"",
  "matchedColumns": [
    12
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user is in the home page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters First Name \"Pamella\"",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "user enters Last Name \"Newman\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enters Phone Number \"1237667890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enter Email address \"p@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters Address \"12335 Main Rd\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user will select country \"BANGLADESH\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters User Name \"Pam1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Password \"Sjobs@150\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user enters Confirm Password \"Sjobs@150\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "firefox",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_the_browser_name(String)"
});
formatter.result({
  "duration": 2578154500,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 2565352600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pamella",
      "offset": 24
    }
  ],
  "location": "newToursLinkSteps.user_enters_First_Name(String)"
});
formatter.result({
  "duration": 20678600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Newman",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_Last_Name(String)"
});
formatter.result({
  "duration": 20553600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1237667890",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enters_Phone_Number(String)"
});
formatter.result({
  "duration": 21605900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "p@yahoo.com",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_enter_Email_address(String)"
});
formatter.result({
  "duration": 16897600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12335 Main Rd",
      "offset": 21
    }
  ],
  "location": "newToursLinkSteps.user_enters_Address(String)"
});
formatter.result({
  "duration": 18786200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Fairpoint",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enters_City(String)"
});
formatter.result({
  "duration": 15973900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MA",
      "offset": 18
    }
  ],
  "location": "newToursLinkSteps.user_enter_State(String)"
});
formatter.result({
  "duration": 15005900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "48085",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Zip_Code(String)"
});
formatter.result({
  "duration": 17020700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "BANGLADESH",
      "offset": 26
    }
  ],
  "location": "newToursLinkSteps.user_will_select_country(String)"
});
formatter.result({
  "duration": 248881700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Pam1234",
      "offset": 23
    }
  ],
  "location": "newToursLinkSteps.user_enters_User_Name(String)"
});
formatter.result({
  "duration": 34753300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@150",
      "offset": 22
    }
  ],
  "location": "newToursLinkSteps.user_enters_Password(String)"
});
formatter.result({
  "duration": 13855100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sjobs@150",
      "offset": 30
    }
  ],
  "location": "newToursLinkSteps.user_enters_Confirm_Password(String)"
});
formatter.result({
  "duration": 15322300,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 33277200,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "duration": 2875683600,
  "status": "passed"
});
});