import AudioUpload from "@/components/AudioUpload";
import FileUpload from "@/components/FileUpload";
import { useInput } from "@/hooks/useInput";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import style from "../../styles/create.module.css"

interface StepsProps {
    mainStep: number;
}

const steps = ['Інформація про пісню', 'Завантажити обложку', 'Загрузити сам трек']

const StepWrapper: React.FC<StepsProps> = ({mainStep}) => {
    const [activStep, setActiveStep] = useState(mainStep = 0)
    const [picture, setPicture] = useState(null);
    const [audio, setAudio] = useState(null);
    const name = useInput('')
    const artist = useInput('')
    const text = useInput('')
    const router = useRouter()

    const back = () => {
        setActiveStep( prev => prev - 1 )
    }

    const next = () => {
        setActiveStep( prev => prev + 1 )
    }

    const btn = () => {
        const formData = new FormData()
        formData.append('name', name.value)
        formData.append('text', text.value)
        formData.append('artist', artist.value)
        formData.append('picture', picture.value)
        formData.append('audio', audio.value)
        axios.post('http://localhost:5000/tracks', formData)
            .then(resp => router.push('/tracks'))
            .catch(e => console.log(e))
    }

    return(
        <>
            <div className={style.steps}>
                {steps.map((step, index) =>
                    <div className={style.step}>
                        <div className={style.step_round}>{activStep >= 1+index ? <img width="20px" src="../images/check.png" alt="" /> : <p>{1+index}</p>}</div>
                        <p key={index} className={style.step_text}>{step}</p>
                    </div>
                )}
            </div>
            
            <div className={style.cart}>
                {
                activStep === 0 && 
                <div className={style.cart__inputs}>
                    <input placeholder="Назва пісні" type="text" />
                    <input placeholder="Імя виконавця" type="text" />
                    <input placeholder="Слова до пісні" type="text" />
                    <FileUpload setFile={setPicture} accept="image/*"/>
                    <AudioUpload setAudio={setAudio} accept="audio/*"/>
                    <button onClick={btn}>button</button>
                </div>
                }
                {
                activStep === 1 && 
                <FileUpload setFile={setPicture} accept="image/*"/>
                }
                {
                activStep === 2 && 
                <AudioUpload setAudio={setAudio} accept="audio/*"/>
                }
            </div>
            
            <div className={style.cart__buttons}>
                <button disabled={activStep === 0} onClick={back}>
                    Назад
                </button>
                <button disabled={activStep === 3} onClick={next}>
                    Дальше
                </button>
            </div>
        </>
    )
}

export default StepWrapper;