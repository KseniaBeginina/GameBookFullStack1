import "../style/page.css";
import "../style/logPage.css";
import { useState} from "react";
import axios from "axios";
import {NavLink} from 'react-router-dom';

function Log(){

    const [login, setLogin] = useState();
    const [password, setPassword] = useState();
    const [name, setName] = useState();

    const handleLogin = async()=>{
        let res = await axios.post("http://localhost:8080/api/users/log", {login, password})
        localStorage.setItem("user", JSON.stringify(res.data))
    }

    const handleReg = async()=>{
        let res = await axios.post("http://localhost:8080/api/users/reg", {login, password, name})
        localStorage.setItem("user", JSON.stringify(res.data))
    }

    const [isEnter, setIsEnter] = useState(true);
    

    const enter = (
        <section className="logIn">
            <header>
                <h2>Вход</h2>                    
            </header>
            <form className="data">
                <div className="inputSection">
                    <input type="text"  placeholder="Логин" onChange={(x)=>setLogin(x.target.value)} required/>
                </div>
                <div className="inputSection">
                    <input type="password" placeholder="Пароль" onChange={(x)=>setPassword(x.target.value)} required/>
                </div>
                <div className="buttons">
                    <NavLink className="addButton" to="/home" onClick={()=>handleLogin()}>Войти</NavLink>
                </div>
            </form>
            <div className="link">
                <p>Если у вас нет аккаунта, вы можете</p>
                <a className = "aLog" onClick={() => setIsEnter(false)}>зарегистрироваться</a>
            </div>
            
        </section>
    )

    return(
        isEnter
        ? enter
        : <>    
            <section className="reg">
                <header>
                    <h2>Регистрация</h2>                    
                </header>
                <form className="data">
                    <div className="inputSection">
                        <input type="text"  placeholder="Логин" onChange={(x)=>setLogin(x.target.value)} required/>
                    </div>
                    <div className="inputSection">
                        <input type="text"  placeholder="Имя" onChange={(x)=>setName(x.target.value)} required/>
                    </div>
                    <div className="inputSection">
                        <input type="password" placeholder="Пароль" onChange={(x)=>setPassword(x.target.value)} required/>
                    </div>
                    <div className="inputSection">
                        <input type="password" placeholder="Повторите пароль" required/>
                    </div>
                    <div className="buttons">
                        <NavLink className="addButton" to="/home" onClick={()=>handleReg()}>Зарегистрироваться</NavLink>
                    </div>
                </form>
                <div className="link">
                    <p>Если у вас нет аккаунта, вы можете</p>
                    <a className = "aLog" onClick={() => setIsEnter(true)}>войти</a>
                </div>
            </section>
        </>
    )
}

export default Log;