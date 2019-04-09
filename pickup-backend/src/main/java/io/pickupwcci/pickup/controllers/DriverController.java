package io.pickupwcci.pickup.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.pickupwcci.pickup.models.Driver;
import io.pickupwcci.pickup.models.PickupRequest;
import io.pickupwcci.pickup.repositories.DriverRepository;
import io.pickupwcci.pickup.repositories.PickupRequestRepository;

@RestController
@RequestMapping("/driver")
public class DriverController {

	@Resource
	DriverRepository driverRepo;
	@Resource
	PickupRequestRepository pickupRequestRepo;

	@GetMapping("/{id}")
	public Driver viewSingleDriver(@PathVariable Long id) {
		return driverRepo.findById(id).get();
	}

	@PostMapping("/accept/")
	public Collection<PickupRequest> addToDriver(@RequestBody String body) throws JSONException {
		JSONObject json = new JSONObject(body);
		Long pickupRequestID = (long) json.getInt("id");
		PickupRequest pickupRequest = pickupRequestRepo.findById(pickupRequestID).get();
		Driver driver = driverRepo.findByDriverName("Jimmy");
		pickupRequest.setDriver(driver);
		pickupRequest.updateStatus();
		pickupRequestRepo.save(pickupRequest);
		// fix return later -- figure out what want to actually render
		return (Collection<PickupRequest>) pickupRequestRepo.findAll();
	}

	
	
}
