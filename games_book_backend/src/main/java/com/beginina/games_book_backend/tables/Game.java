package com.beginina.games_book_backend.tables;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "games")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Game {
    @Column
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "id_user")
    private Long idUser;
    @Column
    private String name;
    @Column
    private int age;
    @Column
    private String players;
    @Column
    private boolean liked;
    @Column
    private String description;
    @Column
    private String img;
}
