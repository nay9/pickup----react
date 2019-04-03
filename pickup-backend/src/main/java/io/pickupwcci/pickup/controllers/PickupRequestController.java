package io.pickupwcci.pickup.controllers;

import java.time.LocalDateTime;
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

import io.pickupwcci.pickup.models.PickupRequest;
import io.pickupwcci.pickup.repositories.PickupRequestRepository;

@RestController
@RequestMapping("/pickuprequests")
public class PickupRequestController {

	@Resource
	PickupRequestRepository pickupRepo;

	@GetMapping("")
	public Collection<PickupRequest> getAllRequests() {
		return (Collection<PickupRequest>) pickupRepo.findAll();

	}
	
	@GetMapping("/{id}")
	public PickupRequest viewSinglePickupRequest(@PathVariable Long id) {
		return pickupRepo.findById(id).get();
	}
	
	@PostMapping("/add")
	public Collection<PickupRequest> addPickupRequest(@RequestBody String body) throws JSONException {
		JSONObject newPickupRequest = new JSONObject(body);
		String locationStart = newPickupRequest.getString("locationStart");
		String locationEnd = newPickupRequest.getString("locationEnd");
		String time = newPickupRequest.getString("time");
		String description = newPickupRequest.getString("description");
		pickupRepo.save(new PickupRequest(locationStart, locationEnd, time, description));
		return (Collection<PickupRequest>) pickupRepo.findAll();
	}
}