Feature: Filter Flights

 Background:
    Given I have set up the WireMock for the Flight API

 Scenario Outline: Filter flights by airline, departure time, and price range
    When I filter flights with airline "<airline>" and price range between "<minPrice>" and "<maxPrice>"  
    Then the API should return a status code of 200
    And the API response should contain the filtered flights

Examples:
 | airline           | minPrice | maxPrice |
 | "British Airways" | 100      | 500      |
 | "Lufthansa"       | 200      | 400      |
  