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
	    
	    @Column(name = "QUANTITY")
	    private Integer quantity;

	    public Integer getQuantity() {
			return quantity;
		}

		public void setQuantity(Integer quantity) {
			this.quantity = quantity;
		}

		@Column(name = "ORDER_CREATED", nullable = false, updatable = false)
	    private String created;

	    @Column(name = "ORDER_UPDATED", nullable = false)
	    private String updated;

	    @Column(name = "STATUS", length = 50)
	    private String status;

	    @Column(name = "TOTAL_AMOUNT", precision = 10, scale = 2)
	    private BigDecimal totalAmount;

		public String getId() {
			return id;
		}

		public void setId(String id) {
			this.id = id;
		}

		public String getName() {
			return name;
		}

		public void setName(String name) {
			this.name = name;
		}

		public String getOrderBy() {
			return orderBy;
		}

		public void setOrderBy(String orderBy) {
			this.orderBy = orderBy;
		}

		public String getCreated() {
			return created;
		}

		public void setCreated(String created) {
			this.created = created;
		}

		public String getUpdated() {
			return updated;
		}

		public void setUpdated(String updated) {
			this.updated = updated;
		}

		public String getStatus() {
			return status;
		}

		public void setStatus(String status) {
			this.status = status;
		}

		public BigDecimal getTotalAmount() {
			return totalAmount;
		}

		public void setTotalAmount(BigDecimal totalAmount) {
			this.totalAmount = totalAmount;
		}

	   
	    
}
