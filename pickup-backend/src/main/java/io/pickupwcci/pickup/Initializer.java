package io.pickupwcci.pickup;

import java.time.LocalDateTime;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import io.pickupwcci.pickup.models.PickupRequest;
import io.pickupwcci.pickup.repositories.DriverRepository;
import io.pickupwcci.pickup.repositories.PickupRequestRepository;

@Service
public class Initializer  implements CommandLineRunner{

	@Resource
	PickupRequestRepository orderRepo;
//	@Resource
//	DriverRepository driverRepo;
//	
	
	
	
	@Override
	public void run(String... args) throws Exception {
		
		PickupRequest requestPickup = orderRepo.save(new PickupRequest("Home Depot", "Renes moms", LocalDateTime.now(),"Couch"));
		requestPickup.updateStatus();
		orderRepo.save(requestPickup);
	}

	
	
	
	
	
	
	
	
	
}
