import { useActions } from "@/hooks/useAction";
import { ITrack } from "@/types/track";
import { useRouter } from "next/router";
import style from "../styles/item.module.css";

interface TrackItemProps {
    track: ITrack;
    active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({track, active = false}) => {
    const router = useRouter()
    const {playTrack, pauseTrack, setActiveTrack} = useActions()

    const play = () => {
        setActiveTrack(track)
        playTrack()
    }

    return(
        <div className={style.item_wrapper}>
            <div onClick={() => router.push('/tracks/' + track._id)} className={style.item}>
                <img src={'http://localhost:5000/' + track.picture} alt="" />
                <div className={style.item__column}>
                    <h3>{track.name}</h3>
                    <p>{track.artist}</p>
                </div>
                {active && <div>82:42 / 83:22</div>}
                <div onClick={e => e.stopPropagation()} className={style.delete}>
                    <img src="data:image/png;base64,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" alt="" />
                </div>
            </div>
            <div className={style.buton_box} onClick={play}>
                {active === false ?
                <div className={style.play}><p></p></div> :
                <div className={style.stop}><p></p></div>
                }
            </div>
        </div>
    )
}

export default TrackItem;