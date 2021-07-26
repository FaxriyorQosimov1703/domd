import React from 'react';
import { IconContext } from 'react-icons/lib'
import Button from '../button/Button';
import './contact.css'

function Contact() {
    return (
        <IconContext.Provider value={{color: '#fff'}}>

        <div className="contact">
            <div className="container">
                <h1>Наши контакты</h1>
                <div className="contact-card">
                    <div className="contact-box">
                        <h2>Задать вопрос</h2>
                        <p>Остались вопросы? Наши эксперты ответят вам в ближайшее рабочее время!</p>
                        <textarea placeholder="Ваш вопросы"></textarea>
                        <input type="text" placeholder='Телефон' className="form-control"/>
                        <Button buttonHover='btn-white' buttonStyle="btn-orange">Отправить вопрос </Button>
                        
                    </div>
                    <div className="contact-box">
                        <h2>Мы на связи</h2>
                        <div className="contact-box-item">
                            <img src="../../../img/map.png" alt=""/>
                            <p>Украина, г. Одесса ул. Комитетская, 24Б </p>
                        </div>

                        <div className="contact-box-item">
                            <img src="../../../img/message.png" alt=""/>
                            <p>Эл.почта: odessadomd@gmail.com </p>
                        </div>

                        <div className="navbar-sms-btn">
                            <div className="sms-btn viber-btn">
                                <img src="../../../img/phone.png" alt=""/>
                                Viber
                            </div>
                            <div className="sms-btn telegram-btn">
                                <img src="../../../img/telegram.png" alt=""/>
                                Telegram
                            </div>
                        </div>

                        <div className="contact-box-item">
                            <img src="../../../img/telephone.png" alt=""/>
                            <p>+38 (098) 271-50-35</p>
                        </div>

                        <Button buttonHover='btn-white' buttonStyle="btn-orange">ПЕРЕЗВОНИТЬ МНЕ </Button>

                    </div>
                </div>
            </div>

        </div>
        </IconContext.Provider>

    )
}

export default Contact
