import "../style/page.css";
import "../style/userPage.css";
import logOut from "../imgs/logout.svg";
import { NavLink } from "react-router-dom";
import { useState} from "react";
import Menu from '../components/Menu';
import axios from "axios";

function User() {
    let user = JSON.parse(localStorage.getItem("user"));

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();
    let id = user.id

    const handleEdit = async()=>{
        let res = await axios.post("http://localhost:8080/api/users/reg", {login, password, name, id})
        localStorage.setItem("user", JSON.stringify(res.data))
        setLogin(res.data.login)
        setPassword(res.data.password)
        setName(res.data.name)
    }


    return (
        <>
        <Menu />
            <section className="page">
                <header>
                    <h2>Личный кабинет</h2>                    
                </header>
                <form className="info">
                    <div className="inputSection">
                        <h4>Имя</h4>
                        <input type="text" onChange={(x)=>{
                            const newName = x.target.value ? x.target.value : user.name;
                            setName(newName);
                        }} placeholder={user.name}/>
                    </div>
                    <div className="inputSection">
                        <h4>Логин</h4>
                        <input type="text" onChange={(x)=>{
                            const newLog = x.target.value ? x.target.value : user.login;
                            setLogin(newLog);
                        }} placeholder={user.login}/>
                    </div>
                    <div className="inputSection">
                        <h4>Пароль</h4>
                        <input type="password" onChange={(x)=>{
                            const newPas = x.target.value ? x.target.value : user.password;
                            setPassword(newPas);
                        }}  placeholder={user.password}/>
                    </div>
                    <div className="buttons">
                        <button className="editButton" onClick={()=>handleEdit()}>Изменить</button>
                        <input type="reset" className="resetButton" value="Отменить"/>
                    </div>
                </form>
                <NavLink to="/" className="logOut" onClick={() => localStorage.removeItem("user")}><img className="logImg"src={logOut}/>Выйти</NavLink>
            </section>
        </>
    );
  }
  
  export default User;