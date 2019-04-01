package io.pickupwcci.pickup.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.pickupwcci.pickup.models.PickupRequest;
import io.pickupwcci.pickup.repositories.PickupRequestRepository;

@RestController
@RequestMapping("/pickuprequest")
public class PickupRequestController {

	
	@Resource
	PickupRequestRepository pickupRepo;
	
	
	
	@GetMapping("")
	public Collection<PickupRequest> getAllRequests(){
		return (Collection<PickupRequest>) pickupRepo.findAll();
	
	
	
	
}
}