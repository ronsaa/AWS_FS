package com.ann.order.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.ann.order.model.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order, String> {
	
  Optional<Order> findByIdAndOrderBy(String id,String orderBy);
  List<Order> findByOrderBy(String orderBy);
  
  @Query( value = "Select MAX(o.order_id) from Orders o", nativeQuery = true)
  Optional<String> findMax();
  
}
