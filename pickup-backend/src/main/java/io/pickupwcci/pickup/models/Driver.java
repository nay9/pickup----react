package io.pickupwcci.pickup.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Driver {

	@Id
	@GeneratedValue
	private Long id;
	private String driverName;
	@OneToMany(mappedBy = "driver")
	private Collection<PickupRequest> pickupRequests;
	
	@OneToMany(mappedBy="driver")
	private Collection<Rating> ratings;
	
	public Driver() {}

	public Driver(String driverName) {
		this.driverName = driverName;
		this.pickupRequests = new ArrayList<PickupRequest>();
		
	}

	public Long getId() {
		return id;
	}

	public String getDriverName() {
		return driverName;
	}

	public Collection<PickupRequest> getPickupRequests() {
		return pickupRequests;
	}
	
	
	@Override	public String toString() {
		return "Driver [id=" + id + ", driverName=" + driverName + ", pickupRequests=" + pickupRequests + "]";
	}

	public void addReview(Review reviewToAdd) {
		
		
	}
	
	
}
