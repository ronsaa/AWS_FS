package com.ann.order.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ann.order.model.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order, String> {

}
