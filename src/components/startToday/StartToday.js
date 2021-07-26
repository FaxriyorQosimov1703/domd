import React from 'react'
import { IconBase, IconContext } from 'react-icons/lib'
import Button from '../button/Button'


import './startToday.css'

function StartToday() {
    return (
        <IconContext.Provider value={{ color: '#fff'}} >
        <div className='start-today'>
            <h1>Приступим cегодня</h1>
            <p>Напишите нам, чтобы получить персональное предложение</p>
            <div className="start-today-card">
                <div className="start-today-box">
                    <div className="start-today-box-content">
                        <h2>Cтроительство дома, 
                        не покажешь картинкой</h2>
                        <p>За каждым домом стоит целая история, смотри полезные  презентации у нас на канале. </p>
                        <Button className="btn" buttonStyle="btn-orange" >Заказать расчет</Button>
                    </div>

                    <div className="start-today-box-img">
                        <img src="../../../img/karkas 8.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default StartToday
