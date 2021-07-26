import React, {useState, useEffect} from 'react'
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'
import './reklama.css'
function Reklama() {
    const [brands, setBrands] = useState([
        {id: 1, img: '../../../img/remmers.png'},
        {id: 2, img: '../../../img/sadolin.png'},
        {id: 3, img: '../../../img/pinotex.png'},
        {id: 4, img: '../../../img/adler.png'},
        {id: 5, img: '../../../img/remmers.png'},
        {id: 6, img: '../../../img/sadolin.png'},
        {id: 7, img: '../../../img/pinotex.png'},
        {id: 8, img: '../../../img/adler.png'},
    ]);
    const [doubleBrands, setDoubleBrands] = useState([
        {id: 1, img1: '../../../img/remmers.png', img2: '../../../img/sadolin.png'},
        {id: 2, img1: '../../../img/pinotex.png', img2: '../../../img/adler.png'},
        {id: 3, img1: '../../../img/sadolin.png', img2: '../../../img/remmers.png'},
        {id: 4, img1: '../../../img/adler.png', img2: '../../../img/pinotex.png'},
    ])
    const [index, setIndex] = useState(0);
    useEffect(()=>{
        const lastIndex = brands.length -1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    },[brands, index]);


    useEffect(()=>{
        const lastIndex = doubleBrands.length -1;
        if(index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    },[doubleBrands, index])

    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index + 1)
        }, 3000);
        return ()=> clearInterval(slider)
    })
    return (
        <div className="container">
            <div className="reklama">
                <h1>Используем только <b>экологически чистые и профессиональные материалы</b></h1>
                <div className="reklama-slider">
                    <div className="prev" onClick={() => setIndex(index -1)}><FaArrowCircleLeft className="icon" /> </div>
                    <div className="reklama-parent">
                        <div className="reklama-card reklama-card-1">
                            {
                                brands.map((item, itemIndex) =>{
                                let position = 'nextSlide';
                                if(itemIndex === index){
                                    position = 'activeSlide'
                                }
                                if(itemIndex === index - 1 || (index === 0 && itemIndex === brands.length - 1)){
                                    position = 'lastSlide'
                                }
                                return (
                                    <div className={`reklama-box ${position}`}>
                                        <img src={item.img} alt=""/>
                                    </div>
                                )}
                                )
                            }

                        </div>

                        <div className="reklama-card reklama-card-2">
                            {
                                doubleBrands.map((item, itemIndex) =>{
                                let position = 'nextSlide';
                                if(itemIndex === index){
                                    position = 'activeSlide'
                                }
                                if(itemIndex === index - 1 || (index === 0 && itemIndex === doubleBrands.length - 1)){
                                    position = 'lastSlide'
                                }
                                return (
                                    <div className={`reklama-box-parent ${position} `}>
                                        <div className={`reklama-box `}>
                                            <img src={item.img1} alt=""/>
                                        </div>
                                        <div className={`reklama-box `}>
                                            <img src={item.img2} alt=""/>
                                        </div>
                                    </div>
                                )}
                                )
                            }

                        </div>

                        <div className="reklama-card reklama-card-3">
                            {
                                doubleBrands.map((item, itemIndex) =>{

                                return (
                                    <div className={`reklama-box`}>
                                        <img src={item.img1} alt=""/>
                                    </div>
                                )}
                                )
                            }

                        </div>

                    </div>
                    <div className="next" onClick={() => setIndex(index + 1)}><FaArrowCircleRight className="icon" /></div>
                </div>
            </div>

        </div>
    )
}

export default Reklama
