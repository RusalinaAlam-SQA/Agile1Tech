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
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters First Name \"\u003cfirstName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters Last Name \"\u003clastName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters Phone Number \"\u003cphoneNumber\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter Email address \"\u003cemail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters Address \"\u003caddress\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters City \"\u003ccity\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter State \"\u003cstate\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters Zip Code \"\u003czipCode\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user will select country \"\u003ccountry\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters User Name \"\u003cuserName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters Password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Confirm Password \"\u003cconfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.examples({
  "line": 23,
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
        "confirmPassword"
      ],
      "line": 25,
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
        "Sjobs@123"
      ],
      "line": 26,
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
        "Sjobs@154"
      ],
      "line": 27,
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
        "Sjobs@150"
      ],
      "line": 28,
      "id": "newtours-registration;register-in-the-the-newtours-registration-page;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 26,
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
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters First Name \"Debra\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters Last Name \"Burks\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters Phone Number \"1234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter Email address \"D@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters Address \"9273 Lee St.\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user will select country \"UNITED STATES\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters User Name \"Deb1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters Password \"Sjobs@123\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Confirm Password \"Sjobs@123\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 9037239000,
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
  "duration": 146623700,
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
  "duration": 112997100,
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
  "duration": 169620400,
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
  "duration": 221515700,
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
  "duration": 214652100,
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
  "duration": 174649700,
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
  "duration": 118493100,
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
  "duration": 144981500,
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
  "duration": 114492300,
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
  "duration": 163978000,
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
  "duration": 188874100,
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
  "duration": 188905100,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 83716200,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "duration": 6256084800,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
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
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters First Name \"jacquilin\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters Last Name \"Duncan\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters Phone Number \"7234567890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter Email address \"j@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters Address \"1321 Thomas Dr\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user will select country \"CANADA\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters User Name \"Jac1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters Password \"Sjobs@154\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Confirm Password \"Sjobs@154\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 7917098300,
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
  "duration": 118780200,
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
  "duration": 130258000,
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
  "duration": 112546500,
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
  "duration": 111452800,
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
  "duration": 198989800,
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
  "duration": 180645500,
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
  "duration": 120287500,
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
  "duration": 134239300,
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
  "duration": 178124500,
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
  "duration": 174669300,
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
  "duration": 149549400,
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
  "duration": 105904600,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 55744300,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "duration": 6131705600,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
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
  "name": "user is in the home page",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "user enters First Name \"Pamella\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "user enters Last Name \"Newman\"",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "user enters Phone Number \"1237667890\"",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "user enter Email address \"p@yahoo.com\"",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user enters Address \"12335 Main Rd\"",
  "matchedColumns": [
    4
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user enters City \"Fairpoint\"",
  "matchedColumns": [
    5
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user enter State \"MA\"",
  "matchedColumns": [
    6
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user enters Zip Code \"48085\"",
  "matchedColumns": [
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user will select country \"BANGLADESH\"",
  "matchedColumns": [
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters User Name \"Pam1234\"",
  "matchedColumns": [
    9
  ],
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user enters Password \"Sjobs@150\"",
  "matchedColumns": [
    10
  ],
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "user enters Confirm Password \"Sjobs@150\"",
  "matchedColumns": [
    11
  ],
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user validates the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "newToursLinkSteps.user_is_in_the_home_page()"
});
formatter.result({
  "duration": 7743105100,
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
  "duration": 156427000,
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
  "duration": 180174600,
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
  "duration": 193218300,
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
  "duration": 144911500,
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
  "duration": 178483400,
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
  "duration": 161247000,
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
  "duration": 65396100,
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
  "duration": 113718900,
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
  "duration": 154355800,
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
  "duration": 128215500,
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
  "duration": 123745800,
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
  "duration": 91924900,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_validates_the_submit_button()"
});
formatter.result({
  "duration": 53351200,
  "status": "passed"
});
formatter.match({
  "location": "newToursLinkSteps.user_close_the_browser()"
});
formatter.result({
  "duration": 6000006800,
  "status": "passed"
});
});