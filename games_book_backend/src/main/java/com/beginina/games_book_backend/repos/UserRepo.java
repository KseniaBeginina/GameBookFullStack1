package com.beginina.games_book_backend.repos;


import com.beginina.games_book_backend.tables.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepo extends JpaRepository<User,Long> {
    @Query(nativeQuery = true, value = "SELECT * FROM users WHERE password = ?1 and login = ?2")
    Optional<User> logUser(String password, String login);

}
