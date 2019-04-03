package io.pickupwcci.pickup.controllers;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.pickupwcci.pickup.repositories.DriverRepository;
import io.pickupwcci.pickup.repositories.PickupRequestRepository;

@RestController
@RequestMapping("/driver")
public class DriverController {

	@Resource
	DriverRepository driverRepo;
	@Resource
	PickupRequestRepository pickupRequestRepo;
	
//	@PostMapping("/add")
//	public 
//	
	
	
	
	
}
