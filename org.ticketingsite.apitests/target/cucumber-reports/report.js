$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/featurefiles/flightavailability.feature");
formatter.feature({
  "name": "Fetch Available Flights",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have set up the WireMock for the Flight API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get available flights between two places",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the source \"London Heathrow\" and destination \"Dubai\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setSourceAndDestination(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I request available flights",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.requestAvailableFlights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should return a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API response should contain the flight with flight number \"AB123\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.checkFlightNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have set up the WireMock for the Flight API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get available flights - No Fligths",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the source \"London Heathrow\" and destination \"Spain\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setSourceAndDestination(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I check for available flights",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.CheckAvailableFlights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API returns response with no flights",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.theAPIResponseShouldContainNoFlights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should return a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have set up the WireMock for the Flight API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get Flights - Server Error",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I have the source \"London Heathrow\" and destination \"Italy\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setSourceAndDestination(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I send a GET request",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.iSendAGETRequestToFlights()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "API returns a server error and  response status code should be 500",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.theResponseStatusCodeShouldBe(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the response body should contain the message \"Internal Server Error\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.theResponseBodyShouldContainTheMessage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/featurefiles/flightfilters.feature");
formatter.feature({
  "name": "Filter Flights",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Filter flights by airline, departure time, and price range",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I filter flights with airline \"\u003cairline\u003e\" and price range between \"\u003cminPrice\u003e\" and \"\u003cmaxPrice\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "the API should return a status code of 200",
  "keyword": "Then "
});
formatter.step({
  "name": "the API response should contain the filtered flights",
  "keyword": "And "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "airline",
        "minPrice",
        "maxPrice"
      ]
    },
    {
      "cells": [
        "\"British Airways\"",
        "100",
        "500"
      ]
    },
    {
      "cells": [
        "\"Lufthansa\"",
        "200",
        "400"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have set up the WireMock for the Flight API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter flights by airline, departure time, and price range",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I filter flights with airline \"\"British Airways\"\" and price range between \"100\" and \"500\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_filter_flights_with_airline_British_Airways_and_price_range_between_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should return a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API response should contain the filtered flights",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.the_API_response_should_contain_the_filtered_flights()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have set up the WireMock for the Flight API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Filter flights by airline, departure time, and price range",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I filter flights with airline \"\"Lufthansa\"\" and price range between \"200\" and \"400\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_filter_flights_with_airline_Lufthansa_and_price_range_between_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should return a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API response should contain the filtered flights",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.the_API_response_should_contain_the_filtered_flights()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/featurefiles/flightseats.feature");
formatter.feature({
  "name": "Check the Seat type",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have set up the WireMock for the Flight API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for Window seat",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the flight number \"AB123\" and seat number \"A1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.the_flights_API_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass the GET request for window seat",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_pass_the_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should return a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the seat type as window",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_should_be_assigned_a_window_seat()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have set up the WireMock for the Flight API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Check for Aisle seat",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the flight number \"AB123\" and seat number \"A3\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.the_flights_API_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I call the GET request for aisle seat",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_call_the_GET_request_for_aisle_seat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should return a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the seat type as Aisle",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_should_get_the_seat_type_as_Aisle()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have set up the WireMock for the Flight API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Niether window nor aisle",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "the flight number \"AB123\" and seat number \"A2\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.the_flights_API_with_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I call the GET request",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_call_the_GET_request()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should return a status code of 200",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the seat type as Middle",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_should_get_the_seat_type_as_Middle()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "I have set up the WireMock for the Flight API",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.setup()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Invalid flight number",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "invalid flight number \"123\" and seat number \"A1\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.theFlightsAPIWithInvalidInput(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I call the GET request for window seat",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_call_the_GET_request_for_window_seat()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the API should return a status code of 400",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.checkStatusCode(int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get a valid error message \"Bad Request\"",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefs.StepDefinitions.i_should_get_a_valid_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});