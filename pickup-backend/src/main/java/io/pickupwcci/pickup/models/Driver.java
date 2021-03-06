package io.pickupwcci.pickup.models;

import java.util.ArrayList;
import java.util.Collection;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Driver<Rating> {

	@Id
	@GeneratedValue
	private Long id;
	private String driverName;
	@OneToMany(mappedBy = "driver")
	private Collection<PickupRequest> pickupRequests;
	
	
	private int ratings;
	
	@OneToMany(mappedBy="driver")
	private Collection<Review> reviews;
	
	public Driver() {}

	public Driver(String driverName, int ratings) {
		this.driverName = driverName;
		this.pickupRequests = new ArrayList<PickupRequest>();
		this.ratings = ratings;
		this.reviews = new ArrayList<Review>();
		
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
	
	public Collection<Review> getReviews(){
		return reviews;
	}
	
	
	public void addReview(Review reviewToAdd) {
		reviews.add(reviewToAdd);
		
	}
	
	@Override
	public String toString() {
		return "Driver [id=" + id + ", driverName=" + driverName + ", pickupRequests=" + pickupRequests + ", ratings="
				+ ratings + ", reviews=" + reviews + "]";
	}



	
}
