package com.miniproject.backend.repository;

import com.miniproject.backend.entity.Contents;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ContentsRepository extends JpaRepository<Contents,Integer> {

    Contents findByUserIdx(int userIdx);

    Contents findByIdx(int Idx);
}
