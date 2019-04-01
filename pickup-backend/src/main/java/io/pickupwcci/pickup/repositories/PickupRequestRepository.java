package io.pickupwcci.pickup.repositories;

import org.springframework.data.repository.CrudRepository;

import io.pickupwcci.pickup.models.PickupRequest;

public interface PickupRequestRepository extends CrudRepository<PickupRequest, Long> {

}
