package com.ann.product.service;

import java.util.List;
import java.util.Optional;

import com.ann.product.exception.ProductNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;

import com.ann.product.model.Product;
import com.ann.product.repository.ProductRepository;
import org.springframework.stereotype.Service;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository productRepository;

	public List<Product> getAllProducts() {
		return productRepository.findAll();
	}
	public Product getProductById(Long id) throws ProductNotFoundException {
		Optional<Product> product = productRepository.findAll()
				.stream()
				.filter(p -> p.getId().equals(id))
				.findFirst();
		if (product.isPresent()) {
			return product.get();
		} else {
			throw new ProductNotFoundException("Product "+id+ " not found!");
		}
	}

	public Product saveProduct(Product Product) {
		return productRepository.save(Product);
	}


}
