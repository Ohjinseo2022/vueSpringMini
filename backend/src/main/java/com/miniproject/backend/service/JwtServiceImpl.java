package com.miniproject.backend.service;


import io.jsonwebtoken.*;
import lombok.Getter;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import javax.xml.bind.DatatypeConverter;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

@Getter
@Service("jwtService")
public class JwtServiceImpl implements JwtService{

    private String secretKey = "asetfsacrarw@!#aaenklfa@!#!%^*&%^cxcs!@56fasfasafasdasetfsacrarw@!#aaenklfa@!#!%^*&%^cxcs!@56fasfasafasdasetfsacrarw@!#aaenklfa@!#!%^*&%^cxcs!@56fasfasafasd";

    @Override
    public String getToken(String key, Object value) {

        Date expTime = new Date();
        expTime.setTime(expTime.getTime() + 1000*60*30);
        //시크릿키를 byte형태 데이터로 변경
        byte[] secretByteKey = DatatypeConverter.parseBase64Binary(secretKey);
        Key signKey = new SecretKeySpec(secretByteKey, SignatureAlgorithm.HS256.getJcaName());
        Map<String, Object> headerMap =new HashMap<>();
        headerMap.put("typ","JWT");
        headerMap.put("alg","HS256");

        Map<String,Object> map = new HashMap<>();
        map.put(key,value);

        JwtBuilder builder = Jwts.builder().setHeader(headerMap)
                .setClaims(map)
                .setExpiration(expTime)
                .signWith(signKey,SignatureAlgorithm.HS256);

        return builder.compact();
    }

    @Override
    public String getPassword(String key, String password) {
        Base64.Decoder decoder = Base64.getDecoder();

        byte[] decodedBytes = decoder.decode(secretKey);

        return null;
    }


    @Override
    public Claims getClaims(String token) {
        if(token != null && !"".equals(token)){
            try{
                byte[] secretByteKey = DatatypeConverter.parseBase64Binary(secretKey);
                Key signKey = new SecretKeySpec(secretByteKey, SignatureAlgorithm.HS256.getJcaName());
                return Jwts.parserBuilder().setSigningKey(signKey).build().parseClaimsJws(token).getBody();

            }catch (ExpiredJwtException e){
                // 만료됨
            }catch (JwtException e){
                //유효하지 않음
            }

        }
        return null;
    }



    @Override
    public boolean isValid(String token) {
        return this.getClaims(token) != null;
    }



    @Override
    public int getId(String token) {
        Claims claims = this.getClaims(token);

        if (claims != null){
            return Integer.parseInt(claims.get("id").toString());
        }
        return 0;
    }
}
