//package io.pickupwcci.pickup.models;
//
//import javax.persistence.Entity;
//import javax.persistence.GeneratedValue;
//import javax.persistence.Id;
//import javax.persistence.ManyToOne;
//
//import com.fasterxml.jackson.annotation.JsonIgnore;
//
//@Entity
//public class Rating {
//
//	@Id
//	@GeneratedValue
//	private Long id;
//	@ManyToOne
//	@JsonIgnore
//	private Driver driver;
//	private double driverRating;
//	
//	
//	public Rating() {}
//	
//	public Rating(Driver driver, double driverRating) {
//		
//		this.driver = driver;
//		this.driverRating = driverRating;
//		
//	}
//
//	public Long getId() {
//		return id;
//	}
//
//	public Driver getDriver() {
//		return driver;
//	}
//
//	public double getDriverRating() {
//		return driverRating;
//	}
//	
//	
//}
