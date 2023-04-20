import { ITrack } from "@/types/track";
import TrackItem from "./TrackItem";

interface TrackListProps {
    tracks: ITrack[]
}

const TrackList: React.FC<TrackListProps> = ({tracks}) => {
    return(
        <div className="column">
            {tracks && tracks.map(track =>
                <TrackItem
                    key={track._id}
                    track={track}
                />    
            )}
        </div>
    )
}

export default TrackList;