package com.jwt.demo.exception;

import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Data
public class UserException extends RuntimeException{
    private List<String> errors;
    public UserException(String message, List<String> errors) {
        super(message);
        this.errors = errors;
    }

    public List<String> getErrors() {
        return errors;
    }
}
