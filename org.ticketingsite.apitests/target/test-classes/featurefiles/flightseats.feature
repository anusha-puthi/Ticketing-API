Feature: Check the Seat type

 Background:
    Given I have set up the WireMock for the Flight API

  Scenario: Check for Window seat
    Given the flight number "AB123" and seat number "A1"
    When I pass the GET request for window seat
    Then the API should return a status code of 200
    And I should get the seat type as window

  Scenario: Check for Aisle seat
    Given the flight number "AB123" and seat number "A3"
    When I call the GET request for aisle seat
    Then the API should return a status code of 200
    And I should get the seat type as Aisle
    
   Scenario: Niether window nor aisle
    Given the flight number "AB123" and seat number "A2"
    When I call the GET request 
    Then the API should return a status code of 200
    And I should get the seat type as Middle
    
   Scenario: Invalid flight number
    Given invalid flight number "123" and seat number "A1"
    When I call the GET request for window seat
    Then the API should return a status code of 400
    And I should get a valid error message "Bad Request"
    
 