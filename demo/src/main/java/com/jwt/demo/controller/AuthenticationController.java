package com.jwt.demo.controller;

import com.jwt.demo.exception.UserException;
import com.jwt.demo.request.AuthenticationRequest;
import com.jwt.demo.request.RegisterRequest;
import com.jwt.demo.response.AuthenticationResponse;
import com.jwt.demo.service.AuthenticationService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/v1/auth")
@RequiredArgsConstructor
public class AuthenticationController {

    private final AuthenticationService authenticationService;

    @PostMapping("/register")
    public ResponseEntity register(
            @RequestBody RegisterRequest request
    ){
        try{
            return ResponseEntity.ok(authenticationService.register(request));
        }catch (UserException e){
            return ResponseEntity.badRequest().body(e.getErrors());
        }
    }

    @PostMapping("/authenticate")
    public ResponseEntity authenticate(
            @RequestBody AuthenticationRequest request
    ) {
        try{
            return ResponseEntity.ok(authenticationService.authenticate(request));
        }catch (UserException e){
            return ResponseEntity.badRequest().body(e.getErrors());
        }
    }


}
