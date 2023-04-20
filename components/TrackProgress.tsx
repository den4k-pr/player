import React from "react";

interface TrrackProgressProps {
    left: number;
    right: number;
    onChange: () => void
}

const TrackProgress: React.FC<TrrackProgressProps> = ({left, right, onChange}) => {
    return(
        <div>
            <input type="range" min={left} max={right} value={left} onChange={onChange}/>
            <div>{left} / {right}</div>
        </div>
    )
}

export default TrackProgress;