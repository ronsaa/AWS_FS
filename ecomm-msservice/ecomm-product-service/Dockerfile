# Use a smaller base image
FROM adoptopenjdk/openjdk11:alpine-jre

# Set the working directory to /app
WORKDIR /app

# Copy the JAR file into the container
COPY target/ecomm-product-service-0.0.1-SNAPSHOT.jar ecomm-product-service.jar

# Expose port 8082 (assuming that's the port your app is running on)
EXPOSE 8082
# Start the application when the container launches
CMD ["java", "-jar", "ecomm-product-service.jar"]
