package com.miniproject.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDto {
    private String id;
    private String name;
    private String password;
    private String email;
    private String phone;

}
