package com.ann.order.controller;

import java.util.List;

import com.ann.order.exception.OrderNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.ann.order.model.Order;
import com.ann.order.service.OrderService;
import org.springframework.web.server.ResponseStatusException;

@RestController()
@RequestMapping("/api/orders/")
public class OrderController {

	@Autowired
	OrderService orderService;

	@GetMapping("/hello")
	public String hello() {
		return "Hello from Order service! ";
	}

	@GetMapping("/")
	public List<Order> getAllOrders() {
		return orderService.getAllOrders();
	}

	@PostMapping("/")
	public Order saveProduct(@RequestBody Order product) {
		System.out.println("Inside POST product");
		return orderService.saveOrder(product);
	}

	@GetMapping("/{id}")
	public Order getProductById(@PathVariable Long id) throws Exception {
		try {
			return orderService.getOrderById(id);
		} catch (OrderNotFoundException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found", ex);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "An error occurred while fetching the order", ex);
		}
	}


}
