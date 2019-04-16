package io.pickupwcci.pickup.controllers;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import io.pickupwcci.pickup.models.Driver;
import io.pickupwcci.pickup.models.Review;
import io.pickupwcci.pickup.repositories.DriverRepository;

@RestController
public class ReviewController {
	
	@Resource
	DriverRepository driverRepo;
	
	@PostMapping("/reviews/add/{id}")
	public Driver addReview(@PathVariable Long id, @RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
	    String reviewContent = json.getString("reviewContent");
	    double driverRating= json.getInt("driverRating");
	    Review reviewToAdd = new Review();
	    Driver driver = driverRepo.findById(id).get();
	    driver.addReview(reviewToAdd); 
	    
	    return driverRepo.save(driver);
	    
	}

}
