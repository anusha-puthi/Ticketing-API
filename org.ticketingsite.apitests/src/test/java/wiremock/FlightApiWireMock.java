package wiremock;

import com.github.tomakehurst.wiremock.WireMockServer;
import com.github.tomakehurst.wiremock.client.WireMock;
import com.github.tomakehurst.wiremock.core.WireMockConfiguration;

public class FlightApiWireMock
{
	 private static WireMockServer wireMockServer;
	 private static final int WIREMOCK_PORT = 8089;

	    public static void setup() {
	    	 wireMockServer = new WireMockServer(WIREMOCK_PORT);
	         wireMockServer.start();
	         WireMock.configureFor(WIREMOCK_PORT);
	       
	    }

		public static void tearDown()
	    {
	        wireMockServer.stop();
	    }
		 
		 public static int getPort()
		 {
		        return WIREMOCK_PORT;
		 }

}
