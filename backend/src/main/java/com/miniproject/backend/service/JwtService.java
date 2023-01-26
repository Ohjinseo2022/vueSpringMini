package com.miniproject.backend.service;

import io.jsonwebtoken.Claims;

public interface JwtService {
    String getToken(String key, Object values);

    String getPassword(String key,String password);
    Claims getClaims(String token);


    boolean isValid(String token);


    int getId(String token);
}
