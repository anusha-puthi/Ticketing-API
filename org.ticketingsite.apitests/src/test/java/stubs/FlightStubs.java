package stubs;

import com.github.tomakehurst.wiremock.client.WireMock;
import com.github.tomakehurst.wiremock.http.Fault;

public class FlightStubs 
{
	public static void stubGetFlights() 
	{
		WireMock.stubFor(WireMock.get(WireMock.urlPathEqualTo("/flights"))
				.willReturn(WireMock.aResponse()
						.withStatus(200)
						.withHeader("Content-Type", "application/json")
						.withFixedDelay(5000) // Increase the delay to 5 seconds
						.withBody("[{\"flightNumber\":\"AB123\",\"departure\":\"2023-07-20T12:00:00\",\"arrival\":\"2023-07-20T14:00:00\",\"price\":100.0}]")));
	}


	public static void stubGetFlightsEmptyResponse() {
		WireMock.stubFor(WireMock.get(WireMock.urlPathEqualTo("/flights"))
				.willReturn(WireMock.aResponse()
						.withStatus(200)
						.withHeader("Content-Type", "application/json")
						.withBody("[]"))); // Empty JSON array as the response body
	}


	public static void stubGetFlightsServerError() {
		WireMock.stubFor(WireMock.get(WireMock.urlPathEqualTo("/flights"))
				.willReturn(WireMock.aResponse()
						.withStatus(500)
						.withHeader("Content-Type", "application/json")
						.withBody("Internal Server Error")));
	}

	public static void stubGetFlightsWithWindowSeats() {
		WireMock.stubFor(WireMock.get(WireMock.urlPathEqualTo("/flights/select/window"))
				.willReturn(WireMock.aResponse()
						.withStatus(200)
						.withHeader("Content-Type", "application/json")
						.withBody("[{\"seatType\":\"window\",\"seatNumber\":\"A1\"}]")));

	}	

	public static void stubGetFlightsWithAisleSeats() {
		WireMock.stubFor(WireMock.get(WireMock.urlPathEqualTo("/flights/select/window"))
				.willReturn(WireMock.aResponse()
						.withStatus(200)
						.withHeader("Content-Type", "application/json")
						.withBody("[{\"seatType\":\"aisle\",\"seatNumber\":\"A3\"}]")));}

	public static void stubGetFlightsWithMiddleSeats() {
		WireMock.stubFor(WireMock.get(WireMock.urlPathEqualTo("/flights/select/window"))
				.willReturn(WireMock.aResponse()
						.withStatus(200)
						.withHeader("Content-Type", "application/json")
						.withBody("[{\"seatType\":\"middle\",\"seatNumber\":\"A2\"}]")));}

public static void stubGetFlightsWithInvalidInput() {
	WireMock.stubFor(WireMock.get(WireMock.urlPathEqualTo("/flights/select/window"))
			.willReturn(WireMock.aResponse()
					.withStatus(400)
					.withHeader("Content-Type", "application/json")
					.withBody("Bad Request")));}

public static void stubGetFilteredFlightsBritish() {
    WireMock.stubFor(WireMock.get(WireMock.urlPathEqualTo("/flights/filter"))
            //.withQueryParam("airline", WireMock.matching("British Airways|Lufthansa"))
            .withQueryParam("minPrice", WireMock.matching("100"))
            .withQueryParam("maxPrice", WireMock.matching("500"))
            .willReturn(WireMock.aResponse()
                    .withStatus(200)
                    .withHeader("Content-Type", "application/json")
                    .withBody("[{\"flightNumber\":\"AB123\",\"airline\":\"British Airways\",\"departure\":\"2023-07-20T12:30:00\",\"arrival\":\"2023-07-20T14:30:00\",\"price\":300.0}]")));}
                            
public static void stubGetFilteredFlightsLufthansa() {
    WireMock.stubFor(WireMock.get(WireMock.urlPathEqualTo("/flights/filter"))
            //.withQueryParam("airline", WireMock.matching("British Airways|Lufthansa"))
            .withQueryParam("minPrice", WireMock.matching("200"))
            .withQueryParam("maxPrice", WireMock.matching("400"))
            .willReturn(WireMock.aResponse()
                    .withStatus(200)
                    .withHeader("Content-Type", "application/json")
                    .withBody("[{\"flightNumber\":\"LH456\",\"airline\":\"Lufthansa\",\"departure\":\"2023-07-20T13:00:00\",\"arrival\":\"2023-07-20T15:00:00\",\"price\":250.0}]")));}

}


