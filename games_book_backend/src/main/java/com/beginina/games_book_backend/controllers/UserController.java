package com.beginina.games_book_backend.controllers;

import com.beginina.games_book_backend.dto.LogUserRequest;
import com.beginina.games_book_backend.dto.RegUserRequest;
import com.beginina.games_book_backend.services.UserServ;
import com.beginina.games_book_backend.tables.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
public class UserController {
    private final UserServ userServ;

    @PostMapping("/reg")
    public ResponseEntity<?> regUser(@RequestBody RegUserRequest request){
        try{
            User user = userServ.regUser(request);
            return ResponseEntity.ok(user);
        }
        catch (Exception e) {
            return ResponseEntity.badRequest().body("Такой пук уже есть");
        }
    }

    @PostMapping("/log")
    public ResponseEntity<?> logUser(@RequestBody LogUserRequest request){
        try{
            User user = userServ.logUser(request);
            return ResponseEntity.ok(user);
        }
        catch(RuntimeException r){
            return ResponseEntity.badRequest().body("Сам пукнул сам понюхал");
        }
    }
}
