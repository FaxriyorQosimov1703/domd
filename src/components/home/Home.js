import React from 'react'
import Button from '../button/Button';
import {IconContext} from 'react-icons/lib'
import './home.css'


function Home() {
    return (
        <IconContext.Provider value={{color: '#fff'}}>
        <div className="container">
            <div className='home'>
                <div className="home-content-left">
                    <h1>Сделаем ваш Дом</h1>
                    <h2>готовым к комфортному проживанию</h2>
                    <p>Строительство деревянных домов «под ключ»: коттеджи, беседки, бани, дома из клееного бруса</p>
                    <div className="home-content-left-card">
                        <div className="home-content-left-box">Демонтаж</div>
                        <div className="home-content-left-box">Бетонные работы</div>
                        <div className="home-content-left-box">Возведение стен</div>
                        <div className="home-content-left-box">Кровельные работы</div>
                        <div className="home-content-left-box">Отделка фасадов</div>
                        <div className="home-content-left-box">Инженерные работы</div>
                    </div>
                </div>
                <div className="home-content-right">
                    <div className="home-content-right-card">
                        <h1>Заказать расчет</h1>
                        <p>Оказываем  услуги комплексно, совмещая отдельные виды работ</p>
                         <img src="../../../img/book.png" />
                        <p className="delete-p">Строительство деревянных домов «под ключ»: коттеджи, беседки, бани, дома из клееного бруса</p>
                        <Button buttonStyle="btn-orange">Заказать расчет</Button>
                    </div>
                </div>
            </div>
        </div>
        </IconContext.Provider>
    )
}

export default Home
