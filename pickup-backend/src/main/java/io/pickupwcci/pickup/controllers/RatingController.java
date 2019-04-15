//package io.pickupwcci.pickup.controllers;
//
//import javax.annotation.Resource;
//
//import org.json.JSONException;
//import org.json.JSONObject;
//import org.springframework.web.bind.annotation.PathVariable;
//import org.springframework.web.bind.annotation.PostMapping;
//import org.springframework.web.bind.annotation.RequestBody;
//import org.springframework.web.bind.annotation.RestController;
//import io.pickupwcci.pickup.models.Driver;
//import io.pickupwcci.pickup.models.Rating;
//import io.pickupwcci.pickup.repositories.DriverRepository;
//import io.pickupwcci.pickup.repositories.RatingRepository;
//
//@RestController
//public class RatingController {
//	
//	@Resource
//	RatingRepository ratings;
//	@Resource
//	DriverRepository drivers;
//	
//	@PostMapping("/ratings/add/{id}")
//    public Driver addRatingToDriver(@PathVariable Long id, @RequestBody String body) throws JSONException {
//        JSONObject json = new JSONObject(body);
//        System.out.println(json);
//        double rating = json.getDouble("rating"); 
//        Driver driver = drivers.findById(id).get();
//        ratings.save(new Rating(driver, rating));
//        driver = drivers.findById(id).get();
//        return driver;
//    }
//	
//}
