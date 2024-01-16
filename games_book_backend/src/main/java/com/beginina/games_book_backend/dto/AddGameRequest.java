package com.beginina.games_book_backend.dto;

import jakarta.annotation.Nullable;

public record AddGameRequest(
        @Nullable
        Long id,
        Long idUser,
        String name,
        int age,
        String players,
        boolean liked,
        String description,

        String img
) {

}
