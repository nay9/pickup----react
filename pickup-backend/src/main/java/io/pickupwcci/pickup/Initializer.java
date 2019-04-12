package io.pickupwcci.pickup;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import io.pickupwcci.pickup.models.Driver;
import io.pickupwcci.pickup.models.PickupRequest;
import io.pickupwcci.pickup.repositories.DriverRepository;
import io.pickupwcci.pickup.repositories.PickupRequestRepository;

@Service
public class Initializer  implements CommandLineRunner{

	@Resource
	PickupRequestRepository orderRepo;
	@Resource
	DriverRepository driverRepo;
	
	
	
	
	@Override
	public void run(String... args) throws Exception {
		

		Driver driver = driverRepo.save(new Driver("Jimmy"));
		driverRepo.save(driver);
		
		PickupRequest requestPickup = orderRepo.save(new PickupRequest("Home Depot", "Renes moms", "5:00","Couch", "https://images-na.ssl-images-amazon.com/images/I/51nRhGW4%2BdL._AC_SY200_.jpg", driver));
		
		orderRepo.save(requestPickup);
		

		PickupRequest requestPickup2 = orderRepo.save(new PickupRequest("Lowe's", "School", "now","Lumber", "https://ak1.ostkcdn.com/images/products/14548038/P21099142.jpg?impolicy=medium&imwidth=200"));
		requestPickup2.updateStatus();
		orderRepo.save(requestPickup2);
		
		
	}

	
	
	
	
	
	
	
	
	
}
