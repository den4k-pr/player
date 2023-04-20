import Link from "next/link";
import TrackList from "../../components/trackList"
import Player from "@/components/Player";
import { useRouter } from "next/router";
import { ITrack } from "@/types/track";
import { useEffect, useState } from "react";
import { useTypedSelector } from "@/hooks/useTypedSelector";
import { NextThunkDispatch, wrapper } from "@/store";
import { fetchTracks } from "@/store/actions-creators/track";

const Tracks: React.FC = ({data}:any) => {
    const router = useRouter()
    const {tracks, error} = useTypedSelector(state => state.track)

    if (error) {
        return <h3>{error}</h3>
    }

    console.log(data)
    return(
        <>
            <Link href={"/tracks/create"} className="create-track">
                    <h3>Створити новий трек</h3>
            </Link>
            <div className="tracks-wraper">
                <TrackList tracks={data}/>
            </div>
            <Player />
        </>

    )
}

export default Tracks

// export const getServerSideProps = wrapper.getServerSideProps( async ({store}) => {
//     const dispatch = store.dispatch as NextThunkDispatch
//     await dispatch(await fetchTracks())
// })

// export async function getStaticProps(context: any) {
//     const res = await fetch('http://localhost:5000/tracks/')
//         const data = await res.json()
        
//         return {
//             props: {data},
//         }
// }