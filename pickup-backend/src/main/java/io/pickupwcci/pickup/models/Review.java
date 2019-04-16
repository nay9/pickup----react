package io.pickupwcci.pickup.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public class Review {
	
	@Id
	@GeneratedValue
	private Long id;
	@ManyToOne
	@JsonIgnore
	private Driver driver;
    private String reviewContent;
    private int driverRating;
	
    
    public Review() {}


	public Review(Driver driver, String reviewContent, int driverRating) {
		this.driver = driver;
		this.reviewContent = reviewContent;
		this.driverRating = driverRating;
	}


	public Long getId() {
		return id;
	}


	public Driver getDriver() {
		return driver;
	}


	public String getReviewContent() {
		return reviewContent;
	}


	public int getDriverRating() {
		return driverRating;
	}


	@Override
	public String toString() {
		return "Review [id=" + id + ", driver=" + driver + ", reviewContent=" + reviewContent + ", driverRating="
				+ driverRating + "]";
	}


	


	
}
