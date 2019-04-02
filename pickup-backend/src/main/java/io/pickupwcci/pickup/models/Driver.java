package io.pickupwcci.pickup.models;

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
	
	public Driver() {}

	public Driver(String driverName, Collection<PickupRequest> pickupRequests) {
		this.driverName = driverName;
		this.pickupRequests = pickupRequests;
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

	@Override
	public String toString() {
		return "Driver [id=" + id + ", driverName=" + driverName + ", pickupRequests=" + pickupRequests + "]";
	}
	
	
}
