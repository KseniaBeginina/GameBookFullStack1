import "../style/page.css";
import "../style/addPage.css";
import { useState} from "react";
import Menu from '../components/Menu';
import axios from "axios";

function Add(){

    let user = JSON.parse(localStorage.getItem("user"));

    let idUser = user.id
    const [name, setName] = useState();
    const [img, setImg] = useState();
    const [players, setPlayers] = useState();
    const [age, setAge] = useState();
    const [description, setDescription] = useState();
    const [liked, setLiked] = useState(false);

    const handleCheckboxChange = (e) => {
        if (e.target.checked) {
          setLiked(true);
        } else {
          setLiked(false);
        }
      };

    const handleAdd = async()=>{
        await axios.post("http://localhost:8080/api/games/add", {idUser, name, age, players, liked, description, img})
    }


    return(
        <>
        <Menu />
            <section className="page">
                <header>
                    <h2>Добавить игру</h2>                    
                </header>
                <form className="data">
                    <div className="inputSection">
                        <h4>Название игры</h4>
                        <input type="text" onChange={(x)=>setName(x.target.value)} required/>
                    </div>
                    <div className="inputSection">
                        <h4>Изображение</h4>
                        <input type="text" onChange={(x)=>setImg(x.target.value)} placeholder="https://image.jpg"/>
                    </div>
                    <div className="inputSection">
                        <h4>Количество игроков</h4>
                        <input type="text" onChange={(x)=>setPlayers(x.target.value)} placeholder="1-4" required/>
                    </div>
                    <div className="inputSection">
                        <h4>Возраст игроков</h4>
                        <input type="number" onChange={(x)=>setAge(x.target.value)} placeholder="12" required/>
                    </div>
                    <div className="inputSection">
                        <h4>Комментарий</h4>
                        <input type="text" onChange={(x)=>setDescription(x.target.value)}/>
                    </div>
                    <div className="checkSection">
                        <input type="checkbox" className="check" onChange={handleCheckboxChange}/>
                        <span>Добавить в избранное</span>
                    </div>
                    <div className="buttons">
                        <input type="submit" className="addButton" value="Добавить" onClick={()=>handleAdd()}/>
                        <input type="reset" className="resetButton" value="Отменить"/>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Add;