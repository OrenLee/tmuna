package com.oren.backend.services;


import com.oren.backend.beans.User;
import com.oren.backend.exceptions.TmunaSystemException;

public interface UserService {
    void createUser(User user) throws TmunaSystemException;
    User login(User user) throws TmunaSystemException;
}
