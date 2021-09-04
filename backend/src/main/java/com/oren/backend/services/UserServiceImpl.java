package com.oren.backend.services;

import com.oren.backend.beans.User;
import com.oren.backend.repos.UserRepository;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@NoArgsConstructor
public class UserServiceImpl implements UserService {
    @Autowired
    private UserRepository userRepository;

    @Override
    public boolean createUser(User user) {
        this.userRepository.save(user);
        return true;
    }
}
