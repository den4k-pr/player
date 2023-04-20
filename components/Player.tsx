import { useTypedSelector } from "@/hooks/useTypedSelector";
import { useActions } from "@/hooks/useAction";
import { useEffect } from "react";
import style from "../styles/item.module.css";
import newStyle from "../styles/player.module.css";

let audio: any;

const Player = () => {
    const {pause, active, volume, duration, currentTime} = useTypedSelector(state => state.player)
    const {playTrack, pauseTrack, setVolume, setCurrentTime, setDuration} = useActions()

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
        } else {
            setAudio()
            playTrack()
        }
    }, [active])

    const setAudio = () => {
        if  (active) {
            audio.src = active.audio
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(Math.ceil(audio.duration))
            }
            audio.ontimeupdate = () => {
                setCurrentTime(Math.ceil(audio.currentTime))
            }
        }
    }

    const play = () => {
        if (pause) {
            playTrack()
            audio.play()
        } else {
            pauseTrack()
            audio.pause()
        }
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const changeCarrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.currentTime = Number(e.target.value)
        setCurrentTime(Number(e.target.value))
    }

    if (!active) {
        return null
    }

    return(
        <div className={newStyle.player}>
            <button onClick={play}>
                {pause
                    ? <div className={style.play}><p></p></div>
                    : <div className={style.stop}><p></p></div>
                }
            </button>
            <div className={style.item__column}>
                <h3>{active?.name}</h3>
                <p>{active?.artist}</p>
            </div>
            <div className={newStyle.range__box}>
                <div>
                    <input type="range" min={0} value={currentTime} max={duration} onChange={changeCarrentTime}/>
                    <div>{currentTime} / {duration}</div>
                </div>
                <img src="../images/mus.png" alt="" />
                <div>
                    <input type="range" min={0} max={100} value={volume} onChange={changeVolume}/>
                    <div>{volume} / {100}</div>
                </div>
            </div>
        </div>
    )
}

export default Player;