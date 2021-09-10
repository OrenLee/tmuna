package com.oren.backend.services;

import com.oren.backend.beans.User;
import com.oren.backend.exceptions.ErrMsg;
import com.oren.backend.exceptions.TmunaSystemException;
import com.oren.backend.repos.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public void createUser(User user) throws TmunaSystemException {
        if(this.userRepository.existsByEmail(user.getEmail())){
            throw new TmunaSystemException(ErrMsg.EMAIL_ALREADY_EXISTS);
        }
        this.userRepository.save(user);
    }

    @Override
    public User login(User user) throws TmunaSystemException {
        User userInRepo = this.userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());
        if(userInRepo == null){
            throw new TmunaSystemException(ErrMsg.EMAIL_AND_PASSWORD_INCORRECT);
        }
        System.out.println(userInRepo);
        return userInRepo;
    }
}
