package com.beginina.games_book_backend.services;

import com.beginina.games_book_backend.dto.AddGameRequest;
import com.beginina.games_book_backend.repos.GameRepo;
import com.beginina.games_book_backend.tables.Game;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
@RequiredArgsConstructor
public class GameServ {
    private final GameRepo gameRepo;

    public Game addGame(AddGameRequest request) {

        return gameRepo.save(
                Game.builder()
                        .id(request.id())
                        .idUser(request.idUser())
                        .name(request.name())
                        .age(request.age())
                        .players(request.players())
                        .description(request.description())
                        .liked(request.liked())
                        .img(request.img())
                        .build()
        );
    }

    public List<Game> getGames(Long id){
        return gameRepo.findAllByIdUser(id);
    }
}
