package com.miniproject.backend.repository;

import com.miniproject.backend.entity.NewUser;
import org.springframework.data.jpa.repository.JpaRepository;

public interface NewUserRepository extends JpaRepository<NewUser,Integer> {
    NewUser findByIdAndPassword(String id, String password);

    NewUser findById(String id);

    NewUser findByIdx(int idx);

}

