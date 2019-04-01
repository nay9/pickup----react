package io.pickupwcci.pickup.models;

import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public abstract class Order {

	@Id
	@GeneratedValue
	private Long id;
	private String locationStart;
	private String locationEnd;
	private LocalDateTime time;
	private String description;

	public Order() {}

	public Order(String locationStart, String locationEnd, LocalDateTime time, String description) {
		this.locationStart = locationStart;
		this.locationEnd = locationEnd;
		this.time = time;
		this.description = description;
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

	public LocalDateTime getTime() {
		return time;
	}

	public String getDescription() {
		return description;
	}

	@Override
	public String toString() {
		return "Order [id=" + id + ", locationStart=" + locationStart + ", locationEnd=" + locationEnd + ", time="
				+ time + ", description=" + description + "]";
	}
}
