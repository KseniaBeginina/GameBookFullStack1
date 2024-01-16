import '../style/menu.css';
import addC from '../imgs/add-circle.svg';
import user from '../imgs/profile-circle.svg';
import like from '../imgs/heart.svg'
import all from '../imgs/category.svg';
import {Link, NavLink} from 'react-router-dom';
import logOut from "../imgs/logout.svg";

function Menu() {
    
    return(
        <menu>
            <h2>Games Book</h2>
            <nav>
                {/* <NavLink to="/user"><img className="icon"src={user}/>User</NavLink> */}
                <NavLink to="/add"><img className="icon"src={addC}/>Добавить игру</NavLink> 
                <NavLink to="/home"><img className="iconCat"src={all}/>Все игры</NavLink>  
                <NavLink to="/favs"><img className="iconCat"src={like}/>Избранное</NavLink>
            </nav>
            <NavLink to="/" className="logOut" onClick={() => localStorage.removeItem("user")}><img className="logImg"src={logOut}/>Выйти</NavLink>
        </menu>
    );
  }
  
  export default Menu;