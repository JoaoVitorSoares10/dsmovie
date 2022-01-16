package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.intities.User;

public interface UserRepository extends JpaRepository<User, Long>{
	User findByEmail(String email);
}
