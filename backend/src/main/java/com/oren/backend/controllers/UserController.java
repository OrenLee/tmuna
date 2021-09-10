package com.oren.backend.controllers;

import com.oren.backend.beans.User;
import com.oren.backend.exceptions.TmunaSystemException;
import com.oren.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserService userService;

    @PostMapping("/signup")
    public ResponseEntity<?> createUser(@RequestBody User user) throws TmunaSystemException {
        System.out.println("Create user");
        this.userService.createUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User user) throws TmunaSystemException {
        System.out.println("in login, user email: " + user.getEmail());
        User userInRepo = this.userService.login(user);
        return new ResponseEntity<>(userInRepo, HttpStatus.CREATED);
    }
}
