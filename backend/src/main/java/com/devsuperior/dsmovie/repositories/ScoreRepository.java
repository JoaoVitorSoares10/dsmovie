package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.intities.Score;
import com.devsuperior.dsmovie.intities.ScorePK;

public interface ScoreRepository extends JpaRepository<Score, ScorePK>{
	
}
