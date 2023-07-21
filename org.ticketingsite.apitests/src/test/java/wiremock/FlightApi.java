package wiremock;

import io.restassured.http.ContentType;
import io.restassured.response.Response;

import static io.restassured.RestAssured.given;


public class FlightApi
{
	private static final String BASE_URL = "http://localhost:" + FlightApiWireMock.getPort(); // Get WireMock server's port

    public Response getFlights(String source, String destination) {
        String endpoint = "/flights";

        return given()
                .baseUri(BASE_URL)
                .queryParam("source", source)
                .queryParam("destination", destination)
                .when()
                .get(endpoint);
    }
    
    public Response getFlightSeatTypeWindow(String flightnumber,String seatnumber) {
        String endpoint = "/flights/select/window";

        return given()
                .baseUri(BASE_URL)
                .queryParam("flightId", flightnumber)
                .queryParam("seatnum", seatnumber)
                .when()
                .get(endpoint);
    }
    public Response getFilteredFlights(String minPrice, String maxPrice) {
        String endpoint = "/flights/filter";
        
        return given()
        	   .baseUri(BASE_URL)
               .queryParam("minPrice", minPrice)
               .queryParam("maxPrice", maxPrice)
        	   .when()
        	   .get(endpoint);
        	   }
    

}
