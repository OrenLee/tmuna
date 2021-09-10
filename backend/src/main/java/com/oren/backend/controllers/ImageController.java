package com.oren.backend.controllers;

import com.oren.backend.beans.Image;
import com.oren.backend.services.ImageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@RestController
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:4200")
public class ImageController {
    private final ImageService imageService;

    @PostMapping("/image")
    public ResponseEntity<?> saveImage(@RequestParam("imageFile") MultipartFile file, @RequestParam("user_id") int user_id) throws IOException {
        System.out.println("Save Image");
        System.out.println("Original Image Byte Size - " + file.getBytes().length);
        Image image = Image.builder()
                .name(file.getOriginalFilename())
                .content(file.getBytes())
                //ADD USER ID??????
                .build();
        this.imageService.saveImage(image);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
}
