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
    
    public Review() {}
    
	public Review(Driver driver, String reviewContent) {
		this.driver = driver;
		this.reviewContent = reviewContent;
	}
	
	public Driver getDriver() {
		return driver;
	}
	public String getReviewContent() {
		return reviewContent;
	}

	@Override
	public String toString() {
		return "Review [id=" + id + ", driver=" + driver + ", reviewContent=" + reviewContent + "]";
	}
	
	
}
