package com.ann.order.controller;

import java.math.BigDecimal;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

import com.ann.order.exception.OrderNotFoundException;
import com.ann.order.model.Order;
import com.ann.order.model.Product;
import com.ann.order.service.OrderService;

@CrossOrigin(origins = "http://localhost:4200")
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
	public Order saveProduct(@RequestBody Product product) {
		
		

		LocalDateTime lt = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");

		String formattedDateTime = lt.format(formatter);
		Order order =null;

		
		
		try {
			
			Optional<Order> orderEntity = orderService.findById(String.valueOf(product.getId()));
			

			if (orderEntity.isPresent()) {

				order = orderEntity.get();
				order.setQuantity(order.getQuantity() + 1);
				order.setTotalAmount(BigDecimal.valueOf(order.getTotalAmount().doubleValue() + product.getPrice()));
				order.setUpdated(formattedDateTime);
				
				System.out.println(order);

			} else {

				order = new Order();

				order.setId(String.valueOf(product.getId()));
				order.setName(product.getTitle());
				order.setOrderBy("ADMIN");
				order.setStatus("Added");
				order.setTotalAmount(BigDecimal.valueOf(product.getPrice()));
				order.setCreated(formattedDateTime);
				order.setUpdated(formattedDateTime);
				order.setQuantity(1);
				
				System.out.println(order);

			}

			System.out.println("Inside POST product");
			return orderService.saveOrder(order);
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e);
			return null;
		}
		
		
	}

	@GetMapping("/{id}")
	public Order getProductById(@PathVariable Long id) throws Exception {
		try {
			return orderService.getOrderById(id);
		} catch (OrderNotFoundException ex) {
			throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Order not found", ex);
		} catch (Exception ex) {
			throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR,
					"An error occurred while fetching the order", ex);
		}
	}

}
