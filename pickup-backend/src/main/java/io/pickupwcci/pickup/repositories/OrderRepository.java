package io.pickupwcci.pickup.repositories;

import org.springframework.data.repository.CrudRepository;

import io.pickupwcci.pickup.models.Order;

public interface OrderRepository extends CrudRepository<Order, Long> {

}
