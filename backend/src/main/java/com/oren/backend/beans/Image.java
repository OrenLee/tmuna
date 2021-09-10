package com.oren.backend.beans;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table(name = "images")
@Data
@AllArgsConstructor
@Builder
public class Image {
    @Id
    @GeneratedValue
    private int id;
    private String name;

    @ManyToOne
    @ToString.Exclude
    private User user;

    @Lob
    private byte[] content;
}
