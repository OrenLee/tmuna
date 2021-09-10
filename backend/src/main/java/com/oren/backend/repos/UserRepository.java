package com.oren.backend.repos;

import com.oren.backend.beans.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {
    boolean existsByEmailAndPassword(String email, String password);
    boolean existsByEmail(String email);
    User findByEmailAndPassword(String email, String password);
}
