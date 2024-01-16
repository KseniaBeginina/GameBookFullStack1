package com.beginina.games_book_backend.controllers;

import com.beginina.games_book_backend.dto.AddGameRequest;
import com.beginina.games_book_backend.services.GameServ;
import com.beginina.games_book_backend.tables.Game;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/games")
@RequiredArgsConstructor
public class GameController {

    private final GameServ gameServ;

    @PostMapping("/add")
    public ResponseEntity<?> addGame(@RequestBody AddGameRequest request){
            Game game = gameServ.addGame(request);
            return ResponseEntity.ok(game);
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<?> getGames(@PathVariable Long id){
        return ResponseEntity.ok(gameServ.getGames(id));
    }
}
