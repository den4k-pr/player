import React, { useRef } from 'react';

interface FileUploadProps {
    setAudio: Function;
    accept: string;
}

const AudioUpload: React.FC<FileUploadProps> = ({setAudio, accept}) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAudio(e.target.files)
    }

    return(
        <div>
            <input className='audio' type="file" accept={accept} onChange={onChange}/>
        </div>
        
    )
}

export default AudioUpload;