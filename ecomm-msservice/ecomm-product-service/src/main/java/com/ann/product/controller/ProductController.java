package com.ann.product.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ann.product.exception.ProductNotFoundException;
import com.ann.product.model.Product;
import com.ann.product.repository.ProductRepository;
import com.ann.product.service.ProductService;


@CrossOrigin(origins = "http://localhost:4200")
@RestController()
@RequestMapping("/api/products/")
public class ProductController {
	
	@Autowired
	ProductService productService;

	@Autowired
	ProductRepository productRepository;
	
	@GetMapping("/hello")
	public String hello() {
		return "Hello from ProductService";
	}

	@GetMapping("/")
	public List<Product> getAllProducts() {
		return productService.getAllProducts();
	}

	@PostMapping("/")
	public Product saveProduct(@RequestBody Product product) {
		System.out.println("Inside POST product");
		return productService.saveProduct(product);
	}

	@GetMapping("/{id}")
	public Product getProductById(@PathVariable Long id) throws Exception {
		return productService.getProductById(id);
	}

	@GetMapping("/search/{name}")
	public List<Product> searchProducts(@PathVariable("name") String searchTerm) throws ProductNotFoundException {
		List<Product> products = productRepository.findAll();
		List<Product> filteredProducts = products.stream()
				.filter(product -> product.getTitle().contains(searchTerm) || product.getDescription().contains(searchTerm))
				.collect(Collectors.toList());

		if (filteredProducts.isEmpty()) {
			throw new ProductNotFoundException(searchTerm + "Item not found!");
		}

		return filteredProducts;
	}


}
