package com.beginina.games_book_backend.repos;

import com.beginina.games_book_backend.tables.Game;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface GameRepo extends JpaRepository<Game,Long> {
    List<Game> findAllByIdUser(Long id);
}
