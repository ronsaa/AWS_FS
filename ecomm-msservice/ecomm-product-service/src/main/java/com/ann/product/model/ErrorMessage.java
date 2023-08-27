package com.ann.product.model;

import org.springframework.http.HttpStatus;

import lombok.Data;

@Data
public class ErrorMessage {

    private HttpStatus status;
    private String message;
	public ErrorMessage(HttpStatus notFound, String message2) {
		// TODO Auto-generated constructor stub
	}
	public HttpStatus getStatus() {
		return status;
	}
	public void setStatus(HttpStatus status) {
		this.status = status;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
    
    
}
