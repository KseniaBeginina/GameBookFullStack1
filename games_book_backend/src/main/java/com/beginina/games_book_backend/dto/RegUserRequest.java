package com.beginina.games_book_backend.dto;

import jakarta.annotation.Nullable;

public record RegUserRequest(
        String name,
        String login,
        String password,
        @Nullable
        Long id
) {
}
