package com.Backend.springBootApplication.repository;
import com.Backend.springBootApplication.model.contactMessage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface contactMesageRepository extends JpaRepository<contactMessage,Long>{
	

}
