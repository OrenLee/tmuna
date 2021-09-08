package com.oren.backend.services;

import com.oren.backend.beans.Image;
import com.oren.backend.repos.ImageRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ImageServiceImpl implements ImageService {
    private final ImageRepository imageRepository;

    @Override
    public boolean saveImage(Image image) {
        this.imageRepository.save(image);
        return true;
    }
}
