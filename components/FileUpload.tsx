import React, { useRef } from 'react';

interface FileUploadProps {
    setFile: Function;
    accept: string;
}

const FileUpload: React.FC<FileUploadProps> = ({setFile, accept}) => {

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFile(e.target.files)
    }

    return(
        <div>
            <input className='file' type="file" accept={accept} onChange={onChange}/>
        </div>
        
    )
}

export default FileUpload;