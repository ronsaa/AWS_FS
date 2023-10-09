package com.ann.order.service;

import java.util.List;
import java.util.Optional;

import com.ann.order.exception.OrderNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ann.order.model.Order;
import com.ann.order.repository.OrderRepository;

@Service
public class OrderService {

	@Autowired
	private OrderRepository orderRepository;

	public List<Order> getAllOrders() {
		return orderRepository.findAll();
				
	}
	
	
	public Optional<String> getMax() {
		return orderRepository.findMax();
				
	}
	public Optional<Order> findByIdAndOrderBy(String id,String user) {
        return orderRepository.findByIdAndOrderBy(id, user);
                
    }
	
	public Optional<Order> findById(String id) {
		return orderRepository.findById(id);
				
	}
	public List<Order> findByOrderBy(String user) {
        return orderRepository.findByOrderBy(user);
                
    }

	public Order getOrderById(Long id) throws OrderNotFoundException {
		Optional<Order> product = orderRepository.findAll()
				.stream()
				.filter(p -> p.getId().equals(id))
				.findFirst();
		if (product.isPresent()) {
			return product.get();
		} else {
			
			throw new OrderNotFoundException("Product "+id+ " not found!");
		}
	}

	public Order saveOrder(Order order) {
		return orderRepository.save(order);
	}

}
