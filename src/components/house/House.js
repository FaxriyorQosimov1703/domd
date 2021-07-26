import React,{useState, useEffect} from 'react'
import { IconContext } from 'react-icons/lib'
import Button from '../button/Button';
import { FaArrowCircleRight, FaChevronCircleLeft, FaChevronCircleRight} from 'react-icons/fa';


import '../button/button.css'
import './house.css'
import { houses } from '../../Houses';


function House({setHouseId}) {

    const [data, setData] = useState(houses);
    const [index, setIndex] = useState(0)

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
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="house">
            <h1>Оказываем услуги комплексно,</h1>
            <h1>совмещая отдельные виды работ</h1>
            <div className="house-parent">
                <div className="house-card">
                    {
                        data.map((item, itemIndex) => {
                            let position = 'nextSlide';
                            if(itemIndex === index) {
                                position = 'activeSlide';
                            }
                            if(itemIndex === index -1 || (index === 0 && itemIndex === data.length - 1)) {
                                position = 'lastSlide'
                            }
                            return (
                                <div className={`house-box ${position}`}>
                                    <div className="house-box-element">
                                        <div className="circle"></div>
                                        <h3>{item.title}</h3>
                                        <Button  buttonHover='btn-white' buttonStyle="btn-orange"><h2 style={{display: 'inline'}} onClick={()=>setHouseId(item.id)}>Подробнее</h2> <FaArrowCircleRight className="circleRight" /></Button>

                                    </div>
                                    <img src={item.src} alt={item.alt}/>
                                </div>
                            )}
                        )
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
        </IconContext.Provider>
    )
}

export default House






