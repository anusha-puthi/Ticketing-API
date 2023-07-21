
Feature: Fetch Available Flights

  Background:
    Given I have set up the WireMock for the Flight API

  Scenario: Get available flights between two places
   Given I have the source "London Heathrow" and destination "Dubai"
    When I request available flights
    Then the API should return a status code of 200
    And the API response should contain the flight with flight number "AB123"
   
  Scenario: Get available flights - No Fligths
    Given I have the source "London Heathrow" and destination "Spain"
    When I check for available flights
    Then the API returns response with no flights
    Then the API should return a status code of 200
    
   Scenario: Get Flights - Server Error
    Given I have the source "London Heathrow" and destination "Italy"
    When I send a GET request
    Then API returns a server error and  response status code should be 500
    And the response body should contain the message "Internal Server Error"
    
  