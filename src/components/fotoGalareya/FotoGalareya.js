import React,{useState, useEffect} from 'react'
import {rasmlar} from './Rasmlar';
import { FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';


import './fotoGalareya.css'


function FotoGalareya() {

    const [data, setData] = useState(rasmlar);
    const [index, setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = data.length -1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    },[data, index])

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index + 1)
        }, 3000);
        return ()=> clearInterval(slider)
    })
    return (

        <div className="galareya">
            <div className="container">
            <h1><b>Посмотрите на готовые дома</b> с комплексом
                отделки и прокладки коммуникаций. </h1>

            </div>
            <div className="galareya-parent">
                <div className="galareya-card">
                    {
                        data.map((item, itemIndex) => {
                            let position = 'nextSlide';
                            if(itemIndex === index) {
                                position = 'activeSlide';
                            }
                            if(itemIndex === index -1 || (index === 0 && itemIndex === data.length - 1)) {
                                position = 'lastSlide'
                            }

                            return  (     <div className={`galareya-box ${position}`}>
                                        <img src={item.src} alt=""/>
                                    </div>)
                                })
                    }
                </div>
            </div>
            <div className="house-btn">
                    <div  onClick={() => setIndex(index - 1)}>
                        <FaChevronCircleLeft className="prev"/>

                    </div>
                    <div  onClick={() => setIndex(index + 1)}>
                        <FaChevronCircleRight className="next" />

                    </div>
                </div>
        </div>

    )
}

export default FotoGalareya
