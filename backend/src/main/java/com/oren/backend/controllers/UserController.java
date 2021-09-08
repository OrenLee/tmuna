package com.oren.backend.controllers;

import com.oren.backend.beans.User;
import com.oren.backend.services.UserServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    private final UserServiceImpl userService;

    @GetMapping("/user")
    public User getUser(String username, String password){
        return User.builder().username("oren").password("99999").build();
    }

    @PostMapping("/user")
    public ResponseEntity<?> createUser(@RequestBody User user){
        System.out.println("Create user");
         return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
