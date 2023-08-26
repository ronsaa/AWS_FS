package com.ann.product.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ann.product.model.Product;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long>{

}
