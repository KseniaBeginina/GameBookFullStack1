import "../style/page.css";
import "../style/gamePage.css";
import Game from "../components/Game";
import { useState, useEffect } from "react";
import Menu from '../components/Menu';
import axios from "axios";

function Liked() {
    
    let user = JSON.parse(localStorage.getItem("user"));
    const [game, setGames] = useState([]);

    useEffect(() => {
        
        const fun = async()=>{
            try{
                return await axios.get("http://localhost:8080/api/games/get/"+user.id)
                .then(res => res.data)
                .then(data => setGames(data))
            } catch (e){
                console.error(e);
            }
        }
        fun()
    
    }, [user])

    

    return (
        <>
        <Menu />
            <section className="page">
                <header>
                    <h2>Избранное</h2>
                </header>
                <section className="games">
                   {game.map((g) => (
                      g.liked && <Game key={g.id} {...g} />
                  ))}
                </section>
            </section>
        </>
    );
  }
  
  export default Liked;