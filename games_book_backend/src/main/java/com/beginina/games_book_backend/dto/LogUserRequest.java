package com.beginina.games_book_backend.dto;

public record LogUserRequest(
        String login,
        String password
) {
}
