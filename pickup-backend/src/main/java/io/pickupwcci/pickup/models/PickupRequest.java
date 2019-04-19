package io.pickupwcci.pickup.models;


import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
public  class PickupRequest {

	@Id
	@GeneratedValue
	private Long id;
  	private String locationStart;
	private String locationEnd;
	private String date;
	private String time;
	private String img;
	private String description;
	private Status status;
	@ManyToOne
	@JsonIgnore
	private Driver driver;
	 
	public PickupRequest() {}

	public PickupRequest(String locationStart, String locationEnd,String date,String time,String description, String img) {
		this.locationStart = locationStart;
		this.locationEnd = locationEnd;
		this.date= date;
		this.time = time;
		this.description = description;
		this.img = img;
		this.status = status.DO;
		this.driver = driver;
	}
	public PickupRequest(String locationStart, String locationEnd, String date,String time,String description, String img, Driver driver ) {
		this.locationStart = locationStart;
		this.locationEnd = locationEnd;
		this.date = date;
		this.time = time;
		this.description = description;
		this.img = img;
		this.status = status.DO;
		this.driver = driver;
	}


	public Driver getDriver() {
		return driver;
	}

	public Long getId() {
		return id;
	}

	public String getLocationStart() {
		return locationStart;
	}

	public String getLocationEnd() {
		return locationEnd;
	}

	public String getDate() {
		return date;
	}
	
	

	public String getTime() {
		return time;
	}

	public String getDescription() {
		return description;
	}
	
	public Status getStatus() {
		return status;
	}
	
	public String getImg() {
		return img;
	}
	
	public void updateStatus() {
		if(this.status.equals(Status.DO)) {
			this.status = Status.DOING;
		}
		else if(this.status.equals(Status.DOING)) {
			this.status = Status.DONE;
		}
		
	}
	
	public void setDriver(Driver driver) {
		this.driver = driver;
	}

	@Override
	public String toString() {
		return "PickupRequest [id=" + id + ", locationStart=" + locationStart + ", locationEnd=" + locationEnd
				+ ", date=" + date + ", img=" + img + ", description=" + description + ", status=" + status
				+ ", driver=" + driver + "]";
	}

	
	
	
}
