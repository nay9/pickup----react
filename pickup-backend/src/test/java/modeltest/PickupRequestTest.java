package modeltest;

import static org.junit.Assert.assertEquals;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.Month;
import java.util.Date;

import org.junit.Before;
import org.junit.Test;

import io.pickupwcci.pickup.models.PickupRequest;
import io.pickupwcci.pickup.models.Status;


public class PickupRequestTest {
	PickupRequest orderTest;
	@Before
	public void setup() {
		orderTest = new PickupRequest("locationStart", "locationEnd", "time", "description");
	}

	@Test
	public void testStatusUpdate() {
		assertEquals(Status.DO, orderTest.getStatus());
		
		orderTest.updateStatus();
		assertEquals(Status.DOING, orderTest.getStatus());
		
		orderTest.updateStatus();
		assertEquals(Status.DONE, orderTest.getStatus());
		
	}
	
	

}
