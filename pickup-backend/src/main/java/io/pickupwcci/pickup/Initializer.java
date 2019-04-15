package io.pickupwcci.pickup;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;

import io.pickupwcci.pickup.models.Driver;
import io.pickupwcci.pickup.models.PickupRequest;
import io.pickupwcci.pickup.models.Rating;
import io.pickupwcci.pickup.models.Review;
import io.pickupwcci.pickup.repositories.DriverRepository;
import io.pickupwcci.pickup.repositories.PickupRequestRepository;
import io.pickupwcci.pickup.repositories.RatingRepository;
import io.pickupwcci.pickup.repositories.ReviewRepository;

@Service
public class Initializer  implements CommandLineRunner{

	@Resource
	PickupRequestRepository orderRepo;
	@Resource
	DriverRepository driverRepo;
	@Resource
	RatingRepository ratingRepo;
	@Resource
	ReviewRepository reviewRepo;
	
	
	@Override
	public void run(String... args) throws Exception {
		

		Driver driver = driverRepo.save(new Driver("Jimmy"));
		driverRepo.save(driver);
		
		PickupRequest requestPickup = orderRepo.save(new PickupRequest("Home Depot", "Renes moms", "5:00","Couch", "https://images-na.ssl-images-amazon.com/images/I/51nRhGW4%2BdL._AC_SY200_.jpg", driver));
		
		orderRepo.save(requestPickup);
		

		PickupRequest requestPickup2 = orderRepo.save(new PickupRequest("Lowe's", "School", "now","Lumber", "https://ak1.ostkcdn.com/images/products/14548038/P21099142.jpg?impolicy=medium&imwidth=200"));
		requestPickup2.updateStatus();
		orderRepo.save(requestPickup2);
		
		Review review1 = new Review(driver, "Good driver");
		driver.addReview(review1);
		reviewRepo.save(review1);
		
		Rating rating1 = new Rating(driver,5);
		ratingRepo.save(rating1);
		
		
	}		
	
}
