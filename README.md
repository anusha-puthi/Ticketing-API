# Ticketing-API

The code in this repository takes care of a mock REST API and then stubs are written to test various checks. To achieve this, I have used WireMock. 
Following are the scenarios that are tested:
1. Flight search (Flights between 2 locations, empty response and server error)
3. Flight Seat Type (Window/Middle/Aisle)
4. Filters (Airlines, minimun and maximum cost, used scenario outline to achieve DDT)

As agreed, I have used BDD, Cucumber Framework with REST Assured Java. I have designed Feature Files and Stubs (Total 9 are written). 
