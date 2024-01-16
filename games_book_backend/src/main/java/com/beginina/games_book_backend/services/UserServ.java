package com.beginina.games_book_backend.services;

import com.beginina.games_book_backend.dto.LogUserRequest;
import com.beginina.games_book_backend.dto.RegUserRequest;
import com.beginina.games_book_backend.repos.UserRepo;
import com.beginina.games_book_backend.tables.User;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServ {
    private final UserRepo userRepo;

    public User regUser(RegUserRequest request){
        return userRepo.save(
                User.builder()
                        .id(request.id())
                        .name(request.name())
                        .login(request.login())
                        .password(request.password())
                        .build()
        );
    }

    public User logUser (LogUserRequest request){
        return userRepo.logUser(request.password(), request.login())
                .orElseThrow(() -> new RuntimeException("Something incorrect"));
    }
}
