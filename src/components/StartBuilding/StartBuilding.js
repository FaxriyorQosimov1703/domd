import React,{useState, useEffect} from 'react'
import { FaArrowCircleRight} from 'react-icons/fa';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'
import {IconContext} from 'react-icons/lib'
import Button from '../button/Button';
import {build} from './Building'

import './startBuilding.css'
function StartBuilding() {

    const [data, setData] = useState(build);
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

        <div className="start-building">
            <div className="start-building-content">
                <div className="container">
            <Button buttonHover='btn-white' buttonStyle="btn-orange">Смотреть все <FaArrowCircleRight className="circleRight" /></Button>

                    <h1> Готовы <b> Готовы начать строить дом </b> с надежной компанией?  с надежной компанией? </h1>
                    <div className="start-building-body">
                        <div className="start-building-box">
                            <p>Здравствуйте, меня зовут Ярослав  Доля. Я руководитель компании DOM-D</p>
                            <img src="../../../img/people.png" alt=""/>
                        </div>
                        <div className="start-building-box">
                            <div className="start-building-parent">
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
                                            <div className={`start-building-box-item ${position}`}>
                                                <div className="icon"><img src={item.src} alt=""/></div>
                                                <div className="resume"><p>{item.body}</p></div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                        <div className="start-building-icon">
                            <FiChevronLeft onClick={()=>setIndex(index-1)} className="chevron chevronLeft" />
                            <FiChevronRight onClick={()=>setIndex(index+1)} className="chevron chevronRight"/>
                        </div>
                            
                </div>
            </div>
            <div className="start-building-footer">
                <div className="container">
                    <div className="footer-card">
                        <div className="footer-box">
                            <div className="footer-box-number">15</div>
                            <div className="footer-box-content">лет опыта в стоительстве</div>
                        </div>
                        <div className="footer-box">
                             <div className="footer-box-number">15</div>
                            <div className="footer-box-content">специалистов в штате</div>
                        </div>
                        <div className="footer-box">
                            <div className="footer-box-number">53</div>
                            <div className="footer-box-content">построенных домов</div>
                        </div>
                        <div className="footer-box">
                            <div className="footer-box-logo"><img src="../../../img/004-youtube.svg" alt=""/></div>
                            <div className="footer-box-content">Наши ВИДЕО об отделке и устройстве смотрите на канале DOM-D</div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>

    )
}

export default StartBuilding
