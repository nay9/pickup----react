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
		
		PickupRequest requestPickup = orderRepo.save(new PickupRequest("Home Depot", "Renes moms", "5:00","Couch"));
		requestPickup.updateStatus();
		orderRepo.save(requestPickup);
		

		PickupRequest requestPickup2 = orderRepo.save(new PickupRequest("Lowe's", "School", "now","Lumber"));
		requestPickup2.updateStatus();
		orderRepo.save(requestPickup2);
		
		Driver driver = driverRepo.save(new Driver("Jimmy", null));
		driverRepo.save(driver);
	}

	
	
	
	
	
	
	
	
	
}
