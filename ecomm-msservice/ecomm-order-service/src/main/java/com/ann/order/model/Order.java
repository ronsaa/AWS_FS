package com.ann.order.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.time.LocalDateTime;


@Entity
@Table(name = "ORDERS")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Order {
	

	    @Id
	    @Column(name = "ORDER_ID", length = 255)
	    private String id;

	    @Column(name = "ORDER_NAME", length = 255)
	    private String name;

	    @Column(name = "ORDER_BY", length = 255)
	    private String orderBy;

	    @Column(name = "ORDER_CREATED", nullable = false, updatable = false)
	    private LocalDateTime created;

	    @Column(name = "ORDER_UPDATED", nullable = false)
	    private LocalDateTime updated;

	    @Column(name = "STATUS", length = 50)
	    private String status;

	    @Column(name = "TOTAL_AMOUNT", precision = 10, scale = 2)
	    private BigDecimal totalAmount;

	   
	    
}
