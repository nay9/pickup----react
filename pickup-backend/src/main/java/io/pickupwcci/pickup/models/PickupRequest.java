package io.pickupwcci.pickup.models;

import java.util.Date;
import java.time.LocalDateTime;

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
	private String time;

	
	private String description;
	private Status status;
	@ManyToOne
	@JsonIgnore
	private Driver driver;
	

	public PickupRequest() {}

	public PickupRequest(String locationStart, String locationEnd, String time, String description) {
		this.locationStart = locationStart;
		this.locationEnd = locationEnd;
		this.time = time;
		this.description = description;
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

	public String getTime() {
		return time;
	}

	public String getDescription() {
		return description;
	}
//	public String getDate() {
//		return DateTime.from(instant)
//	}
	
	public Status getStatus() {
		return status;
	}
	public void updateStatus() {
		if(this.status.equals(Status.DO)) {
			this.status = Status.DOING;
		}
		else if(this.status.equals(Status.DOING)) {
			this.status = Status.DONE;
		}
		
	}

	@Override
	public String toString() {
		return "PickupRequest [id=" + id + ", locationStart=" + locationStart + ", locationEnd=" + locationEnd
				+ ", time=" + time + ", description=" + description + ", status=" + status + "]";
	}
}
