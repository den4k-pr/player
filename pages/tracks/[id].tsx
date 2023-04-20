import { ITrack } from "@/types/track";
import React from "react";
import style from "../../styles/itemPage.module.css";

const TrackPage = () => {
    const track: ITrack = {_id: '1', name: "name", artist: "artist", text: "text", listems: 0, picture: "data:image/jpeg;base64,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"}


    return (
        <div className={style.itemPage}>
            <div className={style.itemPage__top}>
                <img src={track.picture} className={style.itemPage__top_img}/>
                <div className={style.itemPage__top_box}>
                    <h3 className={style.itemPage__top_box_artist}>Виконавечь - {track.artist}</h3>
                    <h3 className={style.itemPage__top_box_name}>Назва трека - {track.name}</h3>
                    <h3 className={style.itemPage__top_box_listems}>Прослухованнь - {track.listems}</h3>
                </div>
            </div>
            <div className={style.itemPage__bottom}>
                <h2 className={style.itemPage__bottom_title}>Текст пісні</h2>
                <p className={style.itemPage__bottom_text}>{track.text}</p>
            </div>
            <form className={style.itemPage__Coments}>
                <h3 className={style.itemPage__Coments_title}>Коментарії</h3>
                <input placeholder="Ваше імя" type="text" required/>
                <textarea placeholder="Коментар" name="" required></textarea>
                <button>Відправити</button>
            </form>
            <div>
                {/* {track.comments.map(coment => 
                    <div key={coment._id}>
                        <div>Автор - {coment.username}</div>
                        <div>Комент - {coment.text}</div>
                    </div>    
                )} */}
            </div>
        </div>
    )
}

export default TrackPage;