package com.oren.backend.services;

import com.oren.backend.beans.User;
import com.oren.backend.repos.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public boolean createUser(User user) {
        this.userRepository.save(user);
        return true;
    }
}
