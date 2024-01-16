import heart from '../imgs/heart-on.svg';
import "../style/game.css";


function Game({name,img,age,players,description, liked}){
    return(
        <article>
            <img src={img} alt= ""/>
            <div className="rightInfo">
                <div className="rightAge">{age}+</div>
                <div className="rightNum">{players}</div>
            </div>
            <div className="text">
                <p className = "gameName">{name}</p>
                <p className = "gameDesc">{description} </p>
            </div>
            <div className="like">
                {liked && <img className="iconCat"src={heart}/>}
            </div>
        </article>
    )
}

export default Game;