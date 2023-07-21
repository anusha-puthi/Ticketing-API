package stepdefs;

import wiremock.FlightApiWireMock;
import wiremock.FlightApi;
import stubs.FlightStubs;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.path.json.JsonPath;
import org.junit.Assert;
import static org.junit.Assert.assertTrue;

import static org.junit.Assert.assertEquals;

public class StepDefinitions {

    private String source;
    private String destination;
    private Response response;
    private String flightnumber;
    private String seatnumber;
    private String airline;
    private String minPrice;
    private String maxPrice;
    
    private static final int WIREMOCK_PORT = 8089;
    FlightApi flightApi = new FlightApi();
    FlightStubs stub = new FlightStubs();
    
   
    //@Before
    @Given("I have set up the WireMock for the Flight API")
    public void setup() {
        FlightApiWireMock.setup();
        RestAssured.port = WIREMOCK_PORT;
    }

    @After
    public void tearDown() {
        FlightApiWireMock.tearDown();
    }

    @Given("I have the source {string} and destination {string}")
    public void setSourceAndDestination(String source, String destination) {
    	this.source = source;
        this.destination = destination;
    }

    @When("I request available flights")
    public void requestAvailableFlights() 
    {
    	stub.stubGetFlights();
        response = flightApi.getFlights(source, destination);
    }

    @Then("the API should return a status code of {int}")
    public void checkStatusCode(int expectedStatusCode) 
    {
    	// Assert the response status code is 200
        assertEquals(expectedStatusCode, response.getStatusCode());
    }

    @Then("the API response should contain the flight with flight number {string}")
    public void checkFlightNumber(String expectedFlightNumber) 
    {
    	// Assert the response contains the flight with flight number "AB123"
    	 String flightNumber = response.jsonPath().getString("flightNumber[0]");
    	 assertEquals(expectedFlightNumber, flightNumber);
    }
    
    @When("I check for available flights")
    public void CheckAvailableFlights() {
    	stub.stubGetFlightsEmptyResponse();
    	response = flightApi.getFlights(source, destination);
    }
    
    @Then("the API returns response with no flights")
    public void theAPIResponseShouldContainNoFlights() {
        // Assert the response contains no flights
        String responseBody = response.getBody().asString();
        assertEquals("[]", responseBody); // Empty JSON array as the response body
    }
    
    @When("I send a GET request")
    public void iSendAGETRequestToFlights() {
        // Perform the API call to get flights
        stub.stubGetFlightsServerError();
        response = flightApi.getFlights(source, destination);
    }
 
    @Then("API returns a server error and  response status code should be {int}")
    public void theResponseStatusCodeShouldBe(int expectedStatusCode) {
        // Assert the response status code
        assertEquals(expectedStatusCode, response.getStatusCode());
    }

    @Then("the response body should contain the message {string}")
    public void theResponseBodyShouldContainTheMessage(String expectedMessage) {
        // Assert the response body contains the expected error message
        String responseBody = response.getBody().asString();
        assertEquals(expectedMessage, responseBody);
    }
    
    @Given("the flight number {string} and seat number {string}")
    public void the_flights_API_with_and(String flightnumber, String seatnumber) {
    	this.flightnumber = flightnumber;
        this.seatnumber = seatnumber;      
    }

    @When("I pass the GET request for window seat")
    public void i_pass_the_GET_request()
    {
       stub.stubGetFlightsWithWindowSeats();
       response = flightApi.getFlightSeatTypeWindow(flightnumber, seatnumber);
    }

    @Then("I should get the seat type as window")
    public void i_should_be_assigned_a_window_seat() {
    	// Extract the JSON response body as a string
    	String responseBody = response.getBody().asString();
    	// Use JsonPath to parse the JSON response
        JsonPath jsonPath = new JsonPath(responseBody);
        //assertion to check window seat
        assertTrue("window seat assigned.", jsonPath.getList("seatType").contains("window"));
    }

    @When("I call the GET request for aisle seat")
    public void i_call_the_GET_request_for_aisle_seat() {
    	stub.stubGetFlightsWithAisleSeats();
        response = flightApi.getFlightSeatTypeWindow(flightnumber, seatnumber);
     }

    @Then("I should get the seat type as Aisle")
    public void i_should_get_the_seat_type_as_Aisle() {
    	// Extract the JSON response body as a string
    	String responseBody = response.getBody().asString();
    	// Use JsonPath to parse the JSON response
        JsonPath jsonPath = new JsonPath(responseBody);
        //assertion to check window seat
        assertTrue("aisle seat assigned.", jsonPath.getList("seatType").contains("aisle"));
    }
    
    @When("I call the GET request")
    public void i_call_the_GET_request() {
    	stub.stubGetFlightsWithMiddleSeats();
        response = flightApi.getFlightSeatTypeWindow(flightnumber, seatnumber);
        }

    @Then("I should get the seat type as Middle")
    public void i_should_get_the_seat_type_as_Middle() {
    	// Extract the JSON response body as a string
    	String responseBody = response.getBody().asString();
    	// Use JsonPath to parse the JSON response
        JsonPath jsonPath = new JsonPath(responseBody);
        //assertion to check window seat
        assertTrue("middle seat assigned.", jsonPath.getList("seatType").contains("middle"));
    }

    @Given("invalid flight number {string} and seat number {string}")
    public void theFlightsAPIWithInvalidInput(String flightnumber, String seatnumber) {
    	this.flightnumber = flightnumber;
        this.seatnumber = seatnumber; 
        }

    @When("I call the GET request for window seat")
    public void i_call_the_GET_request_for_window_seat() 
    {
    	stub.stubGetFlightsWithInvalidInput();
        response = flightApi.getFlightSeatTypeWindow(flightnumber, seatnumber);
    }

    @Then("I should get a valid error message {string}")
    public void i_should_get_a_valid_error_message(String expectedMessage) {
    	// Extract the JSON response body as a string
    	String responseBody = response.getBody().asString();
    	assertEquals(expectedMessage, responseBody);
    }

    @When("I filter flights with airline \"\"British Airways\"\" and price range between {string} and {string}")
    public void i_filter_flights_with_airline_British_Airways_and_price_range_between_and(String minPrice,String maxPrice) 
    {   
    	//this.airline = airline;
    	this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        stub.stubGetFilteredFlightsBritish();
        response = flightApi.getFilteredFlights(minPrice,maxPrice);
    }

    @When("I filter flights with airline \"\"Lufthansa\"\" and price range between {string} and {string}")
    public void i_filter_flights_with_airline_Lufthansa_and_price_range_between_and(String minPrice,String maxPrice) {
    	this.minPrice = minPrice;
        this.maxPrice = maxPrice;
        stub.stubGetFilteredFlightsLufthansa();
        response = flightApi.getFilteredFlights(minPrice,maxPrice);
    }

    @Then("the API response should contain the filtered flights")
    public void the_API_response_should_contain_the_filtered_flights() {
    	//assertions to validate the response body for filtered flights	
    	String responseBody = response.getBody().asString();
        assertTrue("Filtered flights found.", responseBody.contains("flightNumber"));
    }

    }

    



